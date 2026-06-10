import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { formatBlogPostDate, type BlogPostSummary } from "@/lib/blog";

type BlogPostSidebarProps = {
  recentPosts: BlogPostSummary[];
};

export function BlogPostSidebar({ recentPosts }: BlogPostSidebarProps) {
  return (
    <div className="space-y-8 lg:space-y-10" aria-label="Blog sidebar">
      <BlogSubscribeCard />
      {recentPosts.length > 0 && <BlogRecentPosts posts={recentPosts} />}
    </div>
  );
}

function BlogSubscribeCard() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-[20px] border border-n200/80 bg-white p-6 shadow-[var(--shadow-soft)]">
      <h2 className="font-display text-xl text-forest leading-snug">
        Sign up for blog updates!
      </h2>
      <p className="mt-2 text-sm text-n600 leading-relaxed">
        Join our email list to receive updates and information.
      </p>

      {submitted ? (
        <p className="mt-5 text-sm font-medium text-canopy" role="status">
          Thanks — you&apos;re on the list.
        </p>
      ) : (
        <form
          className="mt-5 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label htmlFor="blog-sidebar-email" className="sr-only">
            Email address
          </label>
          <input
            id="blog-sidebar-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-n200 bg-[var(--n50)] px-4 py-3 text-sm text-forest placeholder:text-n400 focus:outline-none focus:border-canopy focus:ring-2 focus:ring-canopy/15"
          />
          <button
            type="submit"
            className="w-full rounded-lg px-4 py-3 text-xs font-bold tracking-[0.12em] uppercase bg-n200/80 text-forest hover:bg-n200 transition-colors"
          >
            Sign up
          </button>
        </form>
      )}
    </div>
  );
}

function BlogRecentPosts({ posts }: { posts: BlogPostSummary[] }) {
  return (
    <div>
      <h2 className="font-display text-xl text-forest leading-snug">Recent posts</h2>
      <ul className="mt-5 space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex gap-3.5 items-start"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-n200 bg-mint-soft">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="h-full w-full object-cover [filter:none] transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full" style={{ background: "var(--gradient-mint)" }} />
                )}
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="font-display text-[15px] leading-snug text-forest group-hover:text-canopy transition-colors line-clamp-2">
                  {post.title}
                </p>
                <time className="mt-1 block text-xs text-n500" dateTime={post.publishedAt}>
                  {formatBlogPostDate(post.publishedAt)}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
