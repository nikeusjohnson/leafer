import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { build, transform } from "esbuild";
import postcss from "postcss";
import modules from "postcss-modules";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import sharp from "sharp";

const output = "_site";
const moduleFiles = [
  "src/app/clinics/clinics.module.css",
  "src/app/clinics/compare/compare.module.css",
  "src/app/guides/guides.module.css",
];
const hash = (data) =>
  createHash("sha256").update(data).digest("hex").slice(0, 12);

async function images() {
  const files = (await fs.readdir("public/images", { recursive: true })).filter(
    (f) => f.endsWith(".webp"),
  );
  // Keep encoding concurrency low enough for small CI runners.
  for (const file of files) {
    const input = path.join("public/images", file);
    const { width } = await sharp(input).metadata();
    const sourceTime = (await fs.stat(input)).mtimeMs;
    await Promise.all(
      [240, 480, 768]
        .filter((n) => n < width)
        .map(async (size) => {
          const dest = path.join(
            output,
            "images",
            file.replace(".webp", "-" + size + ".webp"),
          );
          if ((await fs.stat(dest).catch(() => null))?.mtimeMs >= sourceTime)
            return;
          await fs.mkdir(path.dirname(dest), { recursive: true });
          await sharp(input)
            .resize(size)
            .webp({ quality: 77, alphaQuality: 100, effort: 4 })
            .toFile(dest);
        }),
    );
  }
}

export async function prepare() {
  const assets = {};
  const classes = new Map();
  await fs.mkdir(output + "/assets", { recursive: true });
  async function save(name, extension, bytes) {
    const url = "/assets/" + name + "-" + hash(bytes) + "." + extension;
    await fs.writeFile(output + url, bytes);
    assets[name] = url;
  }
  async function css(name, content) {
    await save(
      name,
      "css",
      (await transform(content, { loader: "css", minify: true })).code,
    );
  }
  await Promise.all(
    moduleFiles.map(async (file) => {
      const name = path.basename(file, ".module.css");
      const result = await postcss([
        modules({
          generateScopedName: name + "_[local]",
          getJSON: (_, json) => classes.set(path.resolve(file), json),
        }),
        autoprefixer(),
      ]).process(await fs.readFile(file, "utf8"), { from: file });
      await css(name, result.css);
    }),
  );
  const cssImports = {
    name: "css-modules",
    setup(builder) {
      builder.onLoad({ filter: /\.module\.css$/ }, (args) => ({
        contents: "export default " + JSON.stringify(classes.get(args.path)),
        loader: "js",
      }));
    },
  };
  const global = await postcss([tailwind(), autoprefixer()]).process(
    await fs.readFile("src/app/globals.css", "utf8"),
    { from: "src/app/globals.css" },
  );
  await Promise.all([
    css(
      "site",
      '@font-face{font-family:DM Sans;src:url(/fonts/dm-sans-latin.woff2) format("woff2");font-weight:400 900;font-display:swap}:root{--font-dm-sans:"DM Sans"}' +
        global.css +
        (await fs.readFile("src/app/navigation.css", "utf8")),
    ),
    images(),
    build({
      entryPoints: ["src/render.tsx"],
      bundle: true,
      platform: "node",
      format: "cjs",
      outfile: ".cache/render.cjs",
      plugins: [cssImports],
      logLevel: "silent",
    }),
    ...["navigation", "picker", "directory", "eligibility", "share"].map(
      async (name) => {
        const ext = ["directory", "eligibility"].includes(name) ? "tsx" : "ts";
        const result = await build({
          entryPoints: ["src/client/" + name + "." + ext],
          bundle: true,
          minify: true,
          format: "iife",
          target: "es2020",
          write: false,
          plugins: [cssImports],
        });
        await save(name, "js", result.outputFiles[0].contents);
      },
    ),
  ]);
  return assets;
}
