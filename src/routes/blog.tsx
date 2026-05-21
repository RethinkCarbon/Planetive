import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Planetive" },
      {
        name: "description",
        content:
          "Planetive blog — insights on climate, energy, and sustainable finance. Coming soon.",
      },
      { property: "og:title", content: "Blog — Planetive" },
      {
        property: "og:description",
        content: "Empowering a sustainable future. Blog coming soon.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />

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
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/90">
              Empowering Sustainable Future
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.75rem,6.5vw,4.5rem)] leading-[1.02]">
              Blog
            </h1>
          </ScrollReveal>
        </div>
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-[var(--n50)]"
        />
      </section>

      <section className="relative z-20 -mt-6 pb-24 md:pb-32">
        <div className="container-x">
          <ScrollReveal variant="scale-up">
            <div className="mx-auto max-w-lg rounded-[32px] border border-n200/80 bg-white px-8 py-14 md:px-12 md:py-16 text-center shadow-[var(--shadow-elevated)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-soft text-forest">
                <FileText size={28} aria-hidden />
              </div>
              <p className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                Coming soon
              </p>
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-forest">
                Insights are on the way
              </h2>
              <p className="mt-4 text-n600 leading-relaxed text-sm md:text-base">
                We&apos;re preparing articles on climate finance, energy transition, and
                sustainability leadership. Check back soon.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold btn-mint"
              >
                Get in touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
