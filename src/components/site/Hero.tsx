import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    void video.play().catch(() => {
      /* autoplay blocked — gradient fallback remains visible */
    });
  }, [reducedMotion]);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {!reducedMotion && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,61,46,0.45) 0%, rgba(10,61,46,0.25) 40%, rgba(13,18,16,0.6) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 30%, rgba(46,204,138,0.3), transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(168,240,212,0.2), transparent 60%)",
          }}
        />
      </div>

      <div className="container-x relative z-10 pt-40 md:pt-44 pb-24 md:pb-32 min-h-[100svh] flex items-center">
        <div className="max-w-3xl">
          <h1 className="hero-enter font-heading text-white text-[clamp(2.4rem,6vw,4.75rem)]">
            Building <em className="not-italic text-mint-soft">Climate Intelligence</em>
            <br className="hidden md:block" /> for a Sustainable Future
          </h1>

          <p className="hero-enter hero-enter-d1 mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-n200">
            Planetive connects strategy, technology, capital, and implementation to help
            enterprises and financial institutions move from diagnosis to sustainable
            impact.
          </p>

          <div className="hero-enter hero-enter-d2 mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-mint"
            >
              Explore What We Do
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-ghost-light"
            >
              Work With Planetive
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-xl gap-6 text-white">
            {[
              ["$2.5T", "Annual SDG financing gap we help bridge"],
              ["9", "Ecosystem ventures & platforms"],
              ["3", "Continents engaged"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className="border-l border-white/20 pl-4 hero-enter"
                style={{ animationDelay: `${0.52 + i * 0.1}s` }}
              >
                <dt className="font-display text-3xl md:text-4xl text-mint-soft">{k}</dt>
                <dd className="mt-1 text-xs md:text-sm text-n200 leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[var(--n50)]/0" />
    </section>
  );
}
