/**
 * Re-download blog images from GoDaddy CDN without fx-gs grayscale transforms.
 * Run: node scripts/redownload-blog-images.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMG_DIR = path.join(ROOT, "public", "images", "blog");
const BASE_IP = "https://img1.wsimg.com/isteam/ip/51b0b378-19bd-4fd6-835c-58f6b3bbd48a";
const BASE_ISTEAM = "https://isteam.wsimg.com/ip/51b0b378-19bd-4fd6-835c-58f6b3bbd48a";

/** Local filename → GoDaddy asset name (spaces in originals become hyphens locally) */
const REMOTE_OVERRIDES = {
  "Blog-WEF-1527d05-98116131.png": "Blog WEF-1527d05.png",
  "ET-table-c35cab98.png": "ET table.png",
};

/** Strip localize-blog-assets hash suffix: foo-bar-1a2b3c4d.png → foo-bar.png */
function remoteFilename(localName) {
  if (REMOTE_OVERRIDES[localName]) return REMOTE_OVERRIDES[localName];
  const ext = path.extname(localName);
  const stem = localName.slice(0, -ext.length);
  const stripped = stem.replace(/-[a-f0-9]{8}$/i, "");
  return `${stripped}${ext}`;
}

function cleanDownloadUrl(remoteName) {
  const encoded = remoteName.split("/").map(encodeURIComponent).join("/");
  const resize = "/:/rs=w:1400,cg:true,m";
  if (remoteName.startsWith("large_") && remoteName.includes("_pFXG")) {
    return `${BASE_ISTEAM}/${encoded}${resize}`;
  }
  return `${BASE_IP}/${encoded}${resize}`;
}

async function downloadOne(localName) {
  const remoteName = remoteFilename(localName);
  const url = cleanDownloadUrl(remoteName);
  const res = await fetch(url);
  if (!res.ok) {
    // Fallback: bare asset URL (no resize params)
    const bare = url.split("/:/")[0];
    const res2 = await fetch(bare);
    if (!res2.ok) throw new Error(`${localName}: HTTP ${res.status} / ${res2.status}`);
    return Buffer.from(await res2.arrayBuffer());
  }
  return Buffer.from(await res.arrayBuffer());
}

const files = readdirSync(IMG_DIR).filter((f) => !f.startsWith("."));
let updated = 0;
let identical = 0;
let failed = 0;

for (const file of files) {
  try {
    const dest = path.join(IMG_DIR, file);
    const existing = readFileSync(dest);
    const fresh = await downloadOne(file);
    if (fresh.equals(existing)) {
      identical++;
      continue;
    }
    writeFileSync(dest, fresh);
    updated++;
    console.log(`updated ${file} (${existing.length} → ${fresh.length} bytes)`);
  } catch (err) {
    failed++;
    console.error(`FAIL ${file}:`, err.message);
  }
}

console.log(`\nDone: ${updated} updated, ${identical} unchanged, ${failed} failed`);
