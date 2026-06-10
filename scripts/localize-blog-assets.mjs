import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { createHash } from "crypto";
import path from "path";

const posts = JSON.parse(readFileSync("src/data/blog-posts.json", "utf8"));
const imgDir = "public/images/blog";
mkdirSync(imgDir, { recursive: true });

const urlToLocal = new Map();

/** GoDaddy CDN grayscale transform — strip so we store full-color assets */
function stripGrayscaleTransform(url) {
  return url
    .replace(/\/:\/fx-gs[^/]*\//i, "/:/")
    .replace(/\/fx-gs(?=\/|,|$)/i, "");
}

function colorDownloadUrl(url) {
  const stripped = stripGrayscaleTransform(url);
  const absolute = stripped.startsWith("//") ? `https:${stripped}` : stripped;
  try {
    const u = new URL(absolute);
    if (!u.pathname.includes("/:/")) {
      return `${absolute}/:/rs=w:1400,cg:true,m`;
    }
    if (!u.pathname.includes("fx-gs")) return absolute;
    return stripGrayscaleTransform(absolute);
  } catch {
    return absolute;
  }
}

async function localizeUrl(url) {
  if (!url || !url.includes("wsimg.com")) return url;
  const normalized = url.replace(/&amp;/g, "&");
  if (urlToLocal.has(normalized)) return urlToLocal.get(normalized);

  let filename;
  try {
    const absolute = normalized.startsWith("//") ? `https:${normalized}` : normalized;
    const u = new URL(absolute);
    const base = path.basename(u.pathname).split("/")[0] || "image";
    const hash = createHash("md5").update(normalized).digest("hex").slice(0, 8);
    const ext = path.extname(decodeURIComponent(base)) || ".jpg";
    const safe =
      decodeURIComponent(base).replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 60) || "image";
    filename = `${safe.replace(ext, "")}-${hash}${ext}`;
  } catch {
    filename = `${createHash("md5").update(normalized).digest("hex").slice(0, 12)}.jpg`;
  }

  const dest = path.join(imgDir, filename);
  const local = `/images/blog/${filename}`;
  if (!existsSync(dest)) {
    const downloadUrl = colorDownloadUrl(normalized);
    const res = await fetch(downloadUrl);
    if (!res.ok) throw new Error(`Failed ${downloadUrl} (${res.status})`);
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log("saved", filename);
  }

  urlToLocal.set(normalized, local);
  return local;
}

const WSIMG_RE = /(?:https?:)?\/\/img1\.wsimg\.com\/[^\s"'<>]+/g;

function replaceUrls(html) {
  return html.replace(WSIMG_RE, (match) => {
    const normalized = match.startsWith("//") ? `https:${match}` : match;
    const fixed = normalized.replace(/&amp;/g, "&");
    return urlToLocal.get(fixed) ?? fixed;
  });
}

for (const post of posts) {
  post.slug = decodeURIComponent(post.slug);
  if (post.imageUrl) post.imageUrl = await localizeUrl(post.imageUrl);

  const matches = [...post.bodyHtml.matchAll(WSIMG_RE)];
  for (const match of matches) {
    const url = match[0].startsWith("//") ? `https:${match[0]}` : match[0];
    await localizeUrl(url);
  }

  post.bodyHtml = replaceUrls(post.bodyHtml);
}

writeFileSync("src/data/blog-posts.json", JSON.stringify(posts, null, 2), "utf8");
console.log(`Updated ${posts.length} posts, ${urlToLocal.size} images`);
