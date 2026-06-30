import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { formatBlogPostDate, getRecentBlogPosts, type BlogPostDetail } from "@/lib/blog";
import { BlogPostSidebar } from "@/components/site/BlogPostSidebar";

type BlogPostContentProps = {
  post: BlogPostDetail;
};

export function BlogPostContent({ post }: BlogPostContentProps) {
  const recentPosts = getRecentBlogPosts(post.slug, 3);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Recover cleanly when returning via browser back (bfcache).
  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        document.querySelectorAll(".reveal:not(.reveal-visible)").forEach((node) => {
          node.classList.add("reveal-visible");
        });
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [pathname]);

  return (
    <div className="blog-page">
      <header className="pt-32 md:pt-40 pb-8 md:pb-10 bg-[var(--n50)] border-b border-n200/70">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-forest transition-colors"
            >
              <ArrowLeft size={16} aria-hidden />
              All posts
            </Link>

            <h1 className="mt-6 font-ui font-semibold text-[clamp(1.875rem,4.5vw,2.75rem)] leading-[1.12] text-forest">
              {post.title}
            </h1>

            <BlogPostMeta publishedAt={post.publishedAt} categories={post.categories} />
          </div>
        </div>
      </header>

      <article className="pb-24 md:pb-32 bg-[var(--n50)]">
        <div className="container-x">
          <div className="mx-auto max-w-6xl w-full">
            <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,300px)] gap-10 xl:gap-14 items-start">
              <div className="min-w-0 space-y-8 md:space-y-10">
                {post.imageUrl && (
                  <div className="overflow-hidden rounded-[28px] border border-n200 shadow-[var(--shadow-elevated)]">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="w-full max-h-[420px] object-cover [filter:none]"
                    />
                  </div>
                )}

                <div
                  className="blog-prose text-n700 leading-relaxed rounded-[28px] border border-n200/80 bg-white px-6 py-10 md:px-12 md:py-12 shadow-[var(--shadow-elevated)] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none"
                  dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
                />
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start w-full min-w-0">
                <BlogPostSidebar recentPosts={recentPosts} />
              </aside>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function BlogPostMeta({
  publishedAt,
  categories,
}: {
  publishedAt: string;
  categories: string[];
}) {
  const hasCategories = categories.length > 0;

  return (
    <p className="mt-4 text-sm md:text-base text-n500 leading-relaxed">
      <time dateTime={publishedAt}>{formatBlogPostDate(publishedAt)}</time>
      {hasCategories && (
        <>
          <span className="mx-2.5 text-n300 select-none" aria-hidden>
            |
          </span>
          <span>{categories.join(", ")}</span>
        </>
      )}
    </p>
  );
}
