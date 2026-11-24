import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";
import opentype from "opentype.js";

const palettes = {
  mint: ["#e9f5ed", "#bfe7ce"],
  peach: ["#fff5e9", "#f5dcbc"],
  lilac: ["#f5f0fa", "#e0d4ed"],
};
const digest = (bytes) =>
  createHash("sha256").update(bytes).digest("hex").slice(0, 16);
const out = "_site/share";
const svg = (w, h, content) =>
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="' +
      w +
      '" height="' +
      h +
      '" viewBox="0 0 ' +
      w +
      " " +
      h +
      '">' +
      content +
      "</svg>",
  );
const exists = (file) =>
  fs.access(file).then(
    () => true,
    () => false,
  );

function wrap(font, text, size, width) {
  const lines = [];
  for (const word of text.split(/\s+/)) {
    const line = lines.at(-1);
    if (line && font.getAdvanceWidth(line + " " + word, size) <= width)
      lines[lines.length - 1] += " " + word;
    else lines.push(word);
  }
  return lines;
}

async function cards(entries) {
  const bytes = await fs.readFile("scripts/fonts/dm-sans-display.woff");
  const font = opentype.parse(
    bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength),
  );
  const logo = await fs.readFile("public/brand/leafer-green.svg");
  const templateKey = digest(
    Buffer.concat([await fs.readFile(new URL(import.meta.url)), bytes, logo]),
  );
  const logoPng = await sharp(logo).resize(174).png().toBuffer();
  const scenes = new Map(),
    results = new Map();
  await fs.mkdir(out, { recursive: true });
  function drawText(text, x, y, size, color) {
    return (
      '<path fill="' +
      color +
      '" d="' +
      font.getPath(text, x, y, size).toPathData(1) +
      '"/>'
    );
  }
  async function renderCard(card) {
    let scene = scenes.get(card.image);
    if (!scene) {
      scene = fs
        .readFile(path.join("public/images", card.image + ".webp"))
        .then(async (input) => ({
          key: digest(input),
          overlay: await sharp(input)
            .trim({ threshold: 10 })
            .resize(435, 425, {
              fit: "contain",
              background: "#00000000",
              position: "south",
            })
            .png()
            .toBuffer(),
        }));
      scenes.set(card.image, scene);
    }
    const art = await scene;
    const key = digest(templateKey + art.key + JSON.stringify(card));
    const url = "/share/" + key + ".jpg",
      file = "_site" + url;
    if (!(await exists(file))) {
      const [paper, field] = palettes[card.tone];
      const headline = (size) =>
        card.names
          ? [
              ...wrap(font, card.names[0], size, 633),
              ...wrap(font, "& " + card.names[1], size, 633),
            ]
          : wrap(font, card.title, size, 633);
      let size = 69,
        lines = headline(size);
      while (
        (lines.length > 3 ||
          lines.some((s) => font.getAdvanceWidth(s, size) > 633)) &&
        size > 37
      )
        lines = headline(--size);
      const labelY = 205,
        firstY = labelY + size + 33;
      const titleLines = lines
        .map((s, i) =>
          drawText(s, 64, firstY + i * size * 1.06, size, "#103c30"),
        )
        .join("");
      const note = wrap(font, card.note, 23, 655);
      const noteLines = note.length > 2 ? [] : note;
      const detail = noteLines
        .map((s, i) => drawText(s, 64, 548 + i * 29, 23, "#36594b"))
        .join("");
      const backdrop =
        '<rect width="1200" height="630" fill="' +
        paper +
        '"/><path d="M760 480c0-238 175-382 440-402v552H760z" fill="' +
        field +
        '"/><path d="M64 125h1072" stroke="#a9c9b6" stroke-width="2"/><rect x="64" y="193" width="30" height="5" rx="2.5" fill="#156234"/>';
      const design = svg(
        1200,
        630,
        backdrop +
          drawText(card.label.toUpperCase(), 108, labelY, 23, "#156234") +
          titleLines +
          detail,
      );
      await sharp(design)
        .composite([
          { input: logoPng, top: 46, left: 64 },
          { input: art.overlay, top: 205, left: 748 },
        ])
        .jpeg({ quality: 86, mozjpeg: true })
        .toFile(file);
    }
    return url;
  }
  // Reuse the same card for either ordering of a pair and for incomplete selections.
  const pending = new Map();
  for (const [route, card] of entries) {
    const key = JSON.stringify(card);
    if (!pending.has(key)) pending.set(key, await renderCard(card));
    results.set(route, pending.get(key));
  }
  return results;
}

export async function createShareArt(entries) {
  return cards(entries);
}

export async function createIcons() {
  const original = await fs.readFile("src/app/icon.svg", "utf8");
  const leaf = original
    .match(/<path\b[^>]+\/>/)[0]
    .replace("<path ", '<path fill="#fff" ');
  const art = (size, fraction) =>
    svg(
      size,
      size,
      '<rect width="' +
        size +
        '" height="' +
        size +
        '" fill="#156234"/><g transform="translate(' +
        (size * (1 - fraction)) / 2 +
        " " +
        (size * (1 - fraction)) / 2 +
        ") scale(" +
        (size * fraction) / 337 +
        ')">' +
        leaf +
        "</g>",
    );
  await fs.mkdir("_site/icons", { recursive: true });
  await fs.writeFile(
    "_site/icons/pinned-tab.svg",
    original.replace(/<style>[\s\S]*?<\/style>/, ""),
  );
  for (const [name, size, fraction] of [
    ["apple-touch-icon", 180, 0.78],
    ["icon-192", 192, 0.78],
    ["icon-512", 512, 0.78],
    ["maskable", 512, 0.69],
  ]) {
    await sharp(art(size, fraction))
      .png()
      .toFile("_site/icons/" + name + ".png");
  }
  const sizes = [16, 32, 48],
    planes = await Promise.all(
      sizes.map((s) => sharp(art(s, 0.91)).png().toBuffer()),
    );
  const dir = Buffer.alloc(6 + 16 * sizes.length);
  dir.writeUInt16LE(1, 2);
  dir.writeUInt16LE(sizes.length, 4);
  let offset = dir.length;
  sizes.forEach((size, i) => {
    const at = 6 + 16 * i;
    dir[at] = size;
    dir[at + 1] = size;
    dir.writeUInt16LE(1, at + 4);
    dir.writeUInt16LE(32, at + 6);
    dir.writeUInt32LE(planes[i].length, at + 8);
    dir.writeUInt32LE(offset, at + 12);
    offset += planes[i].length;
  });
  await fs.writeFile("_site/favicon.ico", Buffer.concat([dir, ...planes]));
}
