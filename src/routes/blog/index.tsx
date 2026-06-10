import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BlogPageContent } from "@/components/site/BlogPageContent";
import { getAllBlogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  loader: () => getAllBlogPosts(),
  head: () => ({
    meta: [
      { title: "Blog — Planetive" },
      {
        name: "description",
        content:
          "Planetive blog — insights on climate, energy, and sustainable finance from across our global work.",
      },
      { property: "og:title", content: "Blog — Planetive" },
      {
        property: "og:description",
        content: "Empowering a sustainable future through research and commentary.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <BlogPageContent posts={posts} />
      <Footer />
    </main>
  );
}
