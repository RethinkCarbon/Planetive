/**
 * Download partner logos from planetive.org (GoDaddy CDN) into public/images/about/partners/
 * Run: node scripts/download-partner-logos.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE = "https://img1.wsimg.com/isteam/ip/51b0b378-19bd-4fd6-835c-58f6b3bbd48a";

/** Remote path → local filename */
const PARTNERS = [
  { remote: "the-do-logo.png", local: "the-do-logo.png", hiRes: "/:/rs=w:800" },
  { remote: "LUMS%20logo-100a276.png", local: "lums-logo.png", hiRes: "/:/rs=w:800" },
  { remote: "PREF.jpg", local: "PREF.jpg", hiRes: "/:/rs=w:800" },
  { remote: "mezzan_logo-c7cca42.jpeg", local: "mezzan-logo.jpeg", hiRes: "/:/rs=w:800" },
  { remote: "hawkamah-logo.png", local: "hawkamah-logo.png", hiRes: "/:/rs=w:800" },
  { remote: "relp%20logo.png", local: "relp-logo.png", hiRes: "/:/rs=w:800" },
  { remote: "IEF%20logo-8ec59e7.png", local: "ief-logo.png", hiRes: "/:/rs=w:800" },
];

const outDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "images",
  "about",
  "partners",
);

async function downloadOne({ remote, local, hiRes }) {
  const url = `${BASE}/${remote}${hiRes}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${local}: HTTP ${res.status} for ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(outDir, local);
  await writeFile(dest, buf);
  console.log(`OK ${local} (${buf.length} bytes)`);
}

await mkdir(outDir, { recursive: true });
for (const p of PARTNERS) {
  await downloadOne(p);
}
console.log(`\nSaved to ${outDir}`);
