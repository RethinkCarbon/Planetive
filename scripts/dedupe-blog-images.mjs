import { readFileSync, writeFileSync } from "fs";

function imageSrcKey(src) {
  const decoded = decodeURIComponent(src.replace(/&amp;/g, "&"));
  const file = decoded.split("/").pop()?.split("?")[0] ?? decoded;
  return file.toLowerCase();
}

function stripOneLeadingDuplicateImage(html, featuredKey) {
  const figureMatch = html.match(
    /^<figure\b[^>]*>[\s\S]*?<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>[\s\S]*?<\/figure>\s*/i,
  );
  if (figureMatch && imageSrcKey(figureMatch[1]) === featuredKey) {
    return html.slice(figureMatch[0].length);
  }

  const imgMatch = html.match(/^<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*\/?>\s*/i);
  if (imgMatch && imageSrcKey(imgMatch[1]) === featuredKey) {
    return html.slice(imgMatch[0].length);
  }

  return html;
}

function stripDuplicateFeaturedImageFromBody(bodyHtml, featuredImageUrl) {
  if (!featuredImageUrl?.trim()) return bodyHtml;

  const featuredKey = imageSrcKey(featuredImageUrl);
  let html = bodyHtml.trimStart();

  for (let pass = 0; pass < 3; pass++) {
    const next = stripOneLeadingDuplicateImage(html, featuredKey);
    if (next === html) break;
    html = next;
  }

  return html;
}

const posts = JSON.parse(readFileSync("src/data/blog-posts.json", "utf8"));
let count = 0;

for (const post of posts) {
  const cleaned = stripDuplicateFeaturedImageFromBody(post.bodyHtml, post.imageUrl);
  if (cleaned !== post.bodyHtml) {
    count++;
    post.bodyHtml = cleaned;
  }
}

writeFileSync("src/data/blog-posts.json", JSON.stringify(posts, null, 2));
console.log(`Removed duplicate hero images from ${count} posts`);
