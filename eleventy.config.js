import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { prepare } from "./scripts/assets.mjs";
import { createShareArt, createIcons } from "./scripts/share-art.mjs";
import { htmlFile } from "./scripts/page-file.mjs";
const require = createRequire(import.meta.url);

export default function (config) {
  let site, assets, images;
  config.on("eleventy.before", async () => {
    assets = await prepare();
    const file = require.resolve("./.cache/render.cjs");
    delete require.cache[file];
    site = require(file);
    [images] = await Promise.all([createShareArt(site.cards), createIcons()]);
  });
  config.addWatchTarget("src/");
  config.addWatchTarget("tailwind.config.ts");
  config.addWatchTarget("public/images/");
  config.addPassthroughCopy({
    public: "/",
    "src/app/fonts": "fonts",
    "src/app/icon.svg": "icon.svg",
  });
  config.addGlobalData("routePaths", () => site.paths);
  config.addJavaScriptFunction("renderRoute", (route) =>
    site.render(route, assets, images),
  );
  config.addJavaScriptFunction("siteMapXml", () => site.sitemap);
  config.addJavaScriptFunction("robotsText", () => site.robots);
  config.setServerOptions({
    onRequest: {
      "/*": async ({ url }) => {
        const request = new URL(url, "http://localhost");
        const route = request.pathname.replace(/\/$/, "") || "/";
        if (Object.hasOwn(site.aliases, route))
          return {
            status: 308,
            headers: { Location: site.aliases[route] + request.search },
            body: "",
          };
        if (site.paths.includes(route)) {
          const target =
            route === "/clinics/compare"
              ? site.comparePath(request.searchParams)
              : route;
          return {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8" },
            body: await readFile("_site/" + htmlFile(target), "utf8"),
          };
        }
        if (!route.includes("."))
          return {
            status: 404,
            headers: { "Content-Type": "text/html; charset=utf-8" },
            body: await readFile("_site/404.html", "utf8"),
          };
      },
    },
  });
  return {
    dir: { input: "site", output: "_site" },
    templateFormats: ["11ty.js"],
  };
}
