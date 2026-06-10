import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BlogPostContent } from "@/components/site/BlogPostContent";
import { getBlogPostBySlug } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => getBlogPostBySlug(params.slug) ?? null,
  head: ({ loaderData }) => {
    const post = loaderData;
    if (!post) return {};
    return {
      meta: [
        { title: `${post.title} — Planetive Blog` },
        { name: "description", content: post.summary },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.summary },
        ...(post.imageUrl ? [{ property: "og:image", content: post.imageUrl }] : []),
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  if (!post) {
    throw notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <BlogPostContent key={post.slug} post={post} />
      <Footer />
    </main>
  );
}
