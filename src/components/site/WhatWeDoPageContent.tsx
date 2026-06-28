import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  ECOSYSTEM_PILLARS,
  WHAT_WE_DO_HERO,
  WHAT_WE_DO_SERVICES,
  WHAT_WE_DO_ECOSYSTEM,
  whatWeDoServicePath,
  type WhatWeDoService,
  type EcosystemPillar,
} from "@/lib/what-we-do-content";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { cn } from "@/lib/utils";

export function WhatWeDoPageContent() {
  return (
    <>
      <WhatWeDoHero />
      <WhatWeDoEcosystemSection />
      <WhatWeDoPillarsStrip />
      <WhatWeDoServicesSection />
      <WhatWeDoClosingBanner />
    </>
  );
}

function WhatWeDoHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-n200/50">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-mint)" }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-8 h-[420px] w-[420px] text-canopy/12"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="container-x relative z-10 pt-40 md:pt-48 pb-12 md:pb-16">
        <ScrollReveal variant="fade-up" className="max-w-3xl">
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] text-forest leading-[1.02]">
            {WHAT_WE_DO_HERO.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-n600 leading-relaxed">
            {WHAT_WE_DO_HERO.intro}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" className="mt-8 md:mt-10">
          <p className="text-xs font-mono uppercase tracking-wider text-n500 mb-3">
            Four ways we deliver
          </p>
          <div className="flex flex-wrap gap-2">
            {ECOSYSTEM_PILLARS.map((pillar) => (
              <Link
                key={pillar.id}
                to={whatWeDoServicePath(pillar.id)}
                className="inline-flex items-center gap-2 rounded-full border border-n200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-forest shadow-[var(--shadow-soft)] hover:border-canopy hover:text-canopy transition-colors"
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ background: pillar.colorActive }}
                  aria-hidden
                />
                {pillar.shortLabel}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhatWeDoEcosystemSection() {
  return (
    <section id="ecosystem" className="relative z-10 py-14 md:py-20 bg-[var(--n50)] scroll-mt-24">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mb-8 md:mb-10">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-forest leading-tight">
            {WHAT_WE_DO_ECOSYSTEM.title}
          </h2>
          <p className="mt-3 text-n600 leading-relaxed">{WHAT_WE_DO_ECOSYSTEM.intro}</p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <div className="flex justify-center py-2 md:py-4">
            <EcosystemExplorer />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function WhatWeDoPillarsStrip() {
  return (
    <section className="pb-14 md:pb-20 bg-[var(--n50)] border-t border-n200/40">
      <div className="container-x">
        <ScrollReveal className="mb-8 md:mb-10">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-forest leading-tight">
            Explore each lens
          </h2>
          <p className="mt-3 text-n600 max-w-xl leading-relaxed">
            Dive deeper into advisory, platforms, agents, and programs — each with its own mandate
            and delivery model.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5" stagger={80}>
          {ECOSYSTEM_PILLARS.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

function PillarCard({ pillar }: { pillar: EcosystemPillar }) {
  return (
    <Link
      to={whatWeDoServicePath(pillar.id)}
      className="group flex flex-col overflow-hidden border border-n200/80 bg-white transition-colors hover:border-canopy/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={pillar.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          style={pillar.imagePosition ? { objectPosition: pillar.imagePosition } : undefined}
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-n200/80 p-5">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-n500">{pillar.shortLabel}</p>
        <h3 className="mt-2 font-display text-lg text-forest group-hover:text-canopy transition-colors leading-snug">
          {pillar.title}
        </h3>
        <p className="mt-2 text-sm text-n600 leading-relaxed line-clamp-2 flex-1">{pillar.tagline}</p>
        <span className="mt-4 text-xs font-semibold text-canopy group-hover:underline underline-offset-4">
          Read more
        </span>
      </div>
    </Link>
  );
}

function WhatWeDoServicesSection() {
  return (
    <section className="pb-16 md:pb-24 bg-[var(--n100)]">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mb-10 md:mb-12">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            Hands-on work
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-forest leading-tight">
            Service areas
          </h2>
          <p className="mt-4 text-n600 leading-relaxed max-w-xl">
            Where mandates land in practice — carbon, capital, energy, technology, and leadership.
            Often combined across a single engagement.
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" stagger={70}>
          {WHAT_WE_DO_SERVICES.filter((s) => !ECOSYSTEM_PILLARS.some((p) => p.id === s.id)).map(
            (service) => (
              <ServiceCard key={service.id} service={service} />
            ),
          )}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: WhatWeDoService }) {
  return (
    <Link
      to={whatWeDoServicePath(service.id)}
      className={cn(
        "group block border border-n200/80 bg-white p-6 md:p-7",
        "transition-colors hover:border-canopy/40 hover:bg-white",
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-n500">Service</p>
        {service.highlight && (
          <span className="text-xs font-mono text-canopy">{service.highlight}</span>
        )}
      </div>
      <h3 className="mt-3 font-display text-xl text-forest group-hover:text-canopy transition-colors">
        {service.title}
      </h3>
      <p className="mt-2 text-sm text-n600 leading-relaxed">{service.summary}</p>
      <span className="mt-5 text-xs font-semibold text-canopy group-hover:underline underline-offset-4">
        Learn more
      </span>
    </Link>
  );
}

function WhatWeDoClosingBanner() {
  return (
    <section className="py-14 md:py-20 bg-[var(--n50)] border-t border-n200/60">
      <div className="container-x">
        <ScrollReveal>
          <div
            className="rounded-[28px] px-8 py-10 md:px-12 md:py-12 text-white"
            style={{ background: "var(--gradient-hero)" }}
          >
            <h2 className="font-display text-2xl md:text-3xl leading-tight max-w-lg">
              Ready to structure a mandate?
            </h2>
            <p className="mt-4 text-n200/90 max-w-xl leading-relaxed">
              Tell us where you are in the transition — we will map advisory, platforms, agents, and
              programs to your timeline.
            </p>
            <Link
              to="/work-with-us"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-forest px-6 py-3 text-sm font-semibold hover:bg-mint-soft transition-colors"
            >
              Work with us
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
