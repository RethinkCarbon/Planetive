import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatBlogPostDate, type BlogPostSummary } from "@/lib/blog";
import { ScrollReveal } from "@/components/site/ScrollReveal";

type BlogPageContentProps = {
  posts: BlogPostSummary[];
};

export function BlogPageContent({ posts }: BlogPageContentProps) {
  return (
    <div className="blog-page">
      <section
        className="relative isolate overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,240,212,0.4), transparent 55%)",
          }}
        />
        <div className="container-x relative z-10 pt-40 md:pt-48 pb-20 md:pb-28">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <h1 className="font-ui font-semibold text-[clamp(2.75rem,6.5vw,4.5rem)] leading-[1.02]">
              Blog
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
              Insights on climate finance, energy transition, and sustainability leadership from
              the Planetive team.
            </p>
          </ScrollReveal>
        </div>
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-[var(--n50)]"
        />
      </section>

      <section className="relative z-20 -mt-6 pb-24 md:pb-32">
        <div className="container-x">
          {posts.length === 0 ? (
            <ScrollReveal variant="scale-up">
              <p className="rounded-[28px] border border-n200 bg-white px-8 py-12 text-center text-n600">
                No articles are available right now. Please try again later.
              </p>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, index) => (
                <ScrollReveal key={post.slug} variant="fade-up" delay={index * 60}>
                  <BlogPostCard post={post} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] overflow-hidden bg-white border border-n200 hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="flex flex-col h-full">
        <div className="relative h-44 overflow-hidden bg-mint-soft">
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt=""
              className="h-full w-full object-cover [filter:none] transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full" style={{ background: "var(--gradient-mint)" }} />
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs text-n500 leading-relaxed">
            <time dateTime={post.publishedAt}>{formatBlogPostDate(post.publishedAt)}</time>
            {post.categories.length > 0 && (
              <>
                <span className="mx-1.5 text-n300" aria-hidden>
                  |
                </span>
                <span className="line-clamp-1">{post.categories.join(", ")}</span>
              </>
            )}
          </p>
          <h2 className="mt-3 font-ui font-semibold text-xl text-forest leading-tight group-hover:text-canopy transition-colors">
            {post.title}
          </h2>
          <p className="mt-2 text-sm text-n600 leading-relaxed line-clamp-3">{post.summary}</p>
          <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-canopy group-hover:text-mint transition-colors">
            Read article <ArrowUpRight size={14} aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  );
}
