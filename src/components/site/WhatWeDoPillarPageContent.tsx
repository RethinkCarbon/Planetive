import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ECOSYSTEM_PILLARS,
  getRelatedServices,
  whatWeDoServicePath,
  type EcosystemPillar,
} from "@/lib/what-we-do-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";

type WhatWeDoPillarPageContentProps = {
  pillar: EcosystemPillar;
};

export function WhatWeDoPillarPageContent({ pillar }: WhatWeDoPillarPageContentProps) {
  const otherPillars = ECOSYSTEM_PILLARS.filter((p) => p.id !== pillar.id);
  const relatedServices = getRelatedServices(pillar);

  return (
    <>
      <section
        className="relative isolate overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 55% 50% at 85% 15%, ${pillar.colorActive}55, transparent 55%)`,
          }}
        />
        <div className="container-x relative z-10 pt-40 md:pt-48 pb-20 md:pb-28">
          <ScrollReveal variant="fade-up" className="max-w-3xl flex flex-col items-start">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 text-sm font-semibold text-mint-soft hover:text-white transition-colors"
            >
              <ArrowLeft size={16} aria-hidden />
              What we do
            </Link>
            <h1 className="mt-8 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05]">
              {pillar.title}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-mint-soft/95">{pillar.tagline}</p>
            <p className="mt-4 text-base md:text-lg text-n200/90 leading-relaxed max-w-2xl">
              {pillar.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-20 -mt-10 md:-mt-12">
        <div className="container-x">
          <ScrollReveal variant="scale-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-n200/80 rounded-sm overflow-hidden border border-n200/80">
              {pillar.outcomes.map((o) => (
                <div key={o.label} className="bg-white px-6 py-5 md:py-6">
                  <p className="font-display text-2xl md:text-3xl leading-none text-forest">
                    {o.value}
                  </p>
                  <p className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-n500">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-[var(--n50)]">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <ScrollReveal variant="fade-up" className="lg:col-span-5">
              <div className="relative overflow-hidden aspect-[4/5] max-h-[32rem]">
                <img
                  src={pillar.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  style={
                    pillar.imagePosition ? { objectPosition: pillar.imagePosition } : undefined
                  }
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                  How we deliver
                </span>
                <div className="mt-5 space-y-5">
                  {pillar.body.map((p, i) => (
                    <p
                      key={p.slice(0, 48)}
                      className={cn(
                        "leading-relaxed text-n600",
                        i === 0 ? "text-[15px] md:text-base text-n800" : "text-sm md:text-[15px]",
                      )}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-xl md:text-2xl text-forest">What we cover</h2>
                <ul className="mt-6 space-y-3 border-l border-n300 pl-5">
                  {pillar.capabilities.map((cap) => (
                    <li key={cap} className="text-sm md:text-[15px] text-n700 leading-relaxed">
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>

      {relatedServices.length > 0 && (
        <section className="py-14 md:py-16 bg-white border-t border-n200/60">
          <div className="container-x max-w-4xl">
            <ScrollReveal>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                Related work
              </span>
              <h2 className="mt-2 font-display text-2xl text-forest">Service areas</h2>
              <ul className="mt-8 divide-y divide-n200 border-y border-n200">
                {relatedServices.map((svc) => (
                  <li key={svc.id}>
                    <Link
                      to={whatWeDoServicePath(svc.id)}
                      className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 py-5 md:py-6 hover:bg-[var(--n50)] -mx-3 px-3 transition-colors"
                    >
                      <h3 className="font-display text-lg text-forest group-hover:text-canopy transition-colors">
                        {svc.title}
                      </h3>
                      <span className="flex items-center gap-3 sm:max-w-md sm:text-right">
                        <span className="text-sm text-n600 leading-relaxed">{svc.summary}</span>
                        <ArrowUpRight
                          size={15}
                          className="hidden sm:block shrink-0 text-n400 group-hover:text-canopy transition-colors"
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="py-14 md:py-20 bg-[var(--n100)]">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <ScrollReveal className="lg:col-span-7">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                Ecosystem
              </span>
              <h2 className="mt-2 font-display text-2xl text-forest">Other lenses</h2>
              <nav className="mt-8" aria-label="Other ecosystem lenses">
                <ul className="divide-y divide-n200 border-y border-n200">
                  {otherPillars.map((p, i) => (
                    <li key={p.id}>
                      <Link
                        to={whatWeDoServicePath(p.id)}
                        className="group flex items-start gap-4 py-5 md:py-6 hover:bg-white/70 -mx-3 px-3 transition-colors"
                      >
                        <span className="font-mono text-xs text-n400 pt-0.5 w-5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="w-px self-stretch min-h-[2.75rem] shrink-0"
                          style={{ background: p.colorActive }}
                          aria-hidden
                        />
                        <span className="min-w-0 flex-1">
                          <span className="font-display text-lg text-forest group-hover:text-canopy transition-colors">
                            {p.shortLabel}
                          </span>
                          <span className="mt-1 block text-sm text-n600 leading-relaxed">
                            {p.tagline}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 mt-1 text-n400 group-hover:text-canopy transition-colors"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-5 lg:pt-8">
              <div
                className="rounded-sm border border-forest/10 px-7 py-9 md:px-8 md:py-10 text-white"
                style={{ background: "var(--gradient-hero)" }}
              >
                <h2 className="font-display text-xl md:text-2xl leading-tight">
                  Start a conversation
                </h2>
                <p className="mt-3 text-sm md:text-base text-n200/90 leading-relaxed">
                  Share where you are in the transition — we will map the right mix of advisory,
                  platforms, agents, and programs.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint-soft hover:text-white transition-colors underline underline-offset-4"
                >
                  Work with us
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
