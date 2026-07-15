import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const src = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-Fahad-Desktop-planetive-resources-planetive",
  "assets",
  "c__Users_Fahad_AppData_Roaming_Cursor_User_workspaceStorage_d514e0a1d455b9131848d5f54606e600_images_icon-58c512d0-93d7-498c-9ca4-cf53182773b5.png",
);

if (!fs.existsSync(src)) {
  console.error("Source icon not found:", src);
  process.exit(1);
}

const meta = await sharp(src).metadata();
console.log("source", meta.width, meta.height, meta.format);

await sharp(src).ensureAlpha().png().toFile(path.join(publicDir, "favicon-source.png"));

async function makePng(size, name, { bg = null, padRatio = 0.08 } = {}) {
  const pad = Math.round(size * padRatio);
  const inner = Math.max(size - pad * 2, 1);
  const resized = await sharp(src)
    .ensureAlpha()
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const background = bg ?? { r: 0, g: 0, b: 0, alpha: 0 };
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toFile(path.join(publicDir, name));

  console.log("wrote", name);
}

await makePng(16, "favicon-16x16.png");
await makePng(32, "favicon-32x32.png");
await makePng(32, "favicon.png");
await makePng(180, "apple-touch-icon.png", { bg: "#0A3D2E", padRatio: 0.18 });
await makePng(192, "icon-192.png", { bg: "#0A3D2E", padRatio: 0.18 });
await makePng(512, "icon-512.png", { bg: "#0A3D2E", padRatio: 0.18 });

// Use a larger crisp PNG inside SVG for the browser tab (/favicon.svg)
const png64 = await sharp(src)
  .ensureAlpha()
  .resize(64, 64, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const b64 = png64.toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <image href="data:image/png;base64,${b64}" width="64" height="64"/>
</svg>
`;

fs.writeFileSync(path.join(publicDir, "favicon.svg"), svg);
console.log("wrote favicon.svg");
