import { format } from "date-fns";
import blogPostsData from "@/data/blog-posts.json";

export type BlogPostSummary = {
  slug: string;
  title: string;
  summary: string;
  imageUrl: string | null;
  publishedAt: string;
  categories: string[];
};

export type BlogPostDetail = BlogPostSummary & {
  categories: string[];
  bodyHtml: string;
};

type StoredBlogPost = BlogPostDetail;

const BLOG_POSTS: StoredBlogPost[] = [...(blogPostsData as StoredBlogPost[])].sort(
  (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
);

export function getAllBlogPosts(): BlogPostSummary[] {
  return BLOG_POSTS.map(({ slug, title, summary, imageUrl, publishedAt, categories }) => ({
    slug,
    title,
    summary,
    imageUrl,
    publishedAt,
    categories,
  }));
}

function imageSrcKey(src: string): string {
  const decoded = decodeURIComponent(src.replace(/&amp;/g, "&"));
  const file = decoded.split("/").pop()?.split("?")[0] ?? decoded;
  return file.toLowerCase();
}

/** Remove hero image from body when it duplicates the featured image above the article. */
export function stripDuplicateFeaturedImageFromBody(
  bodyHtml: string,
  featuredImageUrl: string | null,
): string {
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

function stripOneLeadingDuplicateImage(html: string, featuredKey: string): string {
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

function normalizeSlugParam(slug: string): string {
  try {
    return decodeURIComponent(slug).normalize("NFKD");
  } catch {
    return slug;
  }
}

export function getBlogPostBySlug(slug: string): BlogPostDetail | undefined {
  const decoded = normalizeSlugParam(slug);
  const post = BLOG_POSTS.find(
    (post) =>
      post.slug === decoded || post.slug === slug || post.slug.normalize("NFKD") === decoded,
  );
  if (!post) return undefined;

  return {
    ...post,
    bodyHtml: stripDuplicateFeaturedImageFromBody(post.bodyHtml, post.imageUrl),
  };
}

export function formatBlogDate(isoDate: string): string {
  const parsed = Date.parse(isoDate);
  if (Number.isNaN(parsed)) return "";
  return format(new Date(parsed), "MMMM d, yyyy");
}

/** e.g. "24 July 2025" — matches legacy Planetive blog metadata style */
export function formatBlogPostDate(isoDate: string): string {
  const parsed = Date.parse(isoDate);
  if (Number.isNaN(parsed)) return "";
  return format(new Date(parsed), "d MMMM yyyy");
}

export function getFeaturedBlogPosts(limit = 3): BlogPostSummary[] {
  return getAllBlogPosts().slice(0, limit);
}

export function getRecentBlogPosts(excludeSlug?: string, limit = 3): BlogPostSummary[] {
  const exclude = excludeSlug ? normalizeSlugParam(excludeSlug) : undefined;
  return getAllBlogPosts()
    .filter((post) => post.slug !== exclude)
    .slice(0, limit);
}
