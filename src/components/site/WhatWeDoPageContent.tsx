import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  WHAT_WE_DO_HERO,
  WHAT_WE_DO_SERVICES,
  WHAT_WE_DO_ECOSYSTEM,
  type WhatWeDoService,
} from "@/lib/what-we-do-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export function WhatWeDoPageContent() {
  return (
    <>
      <WhatWeDoHero />
      <WhatWeDoServicesSection />
      <WhatWeDoClosingBanner />
    </>
  );
}

function WhatWeDoHero() {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 20% 30%, rgba(168,240,212,0.3), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 70%, rgba(26,107,74,0.45), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-x relative z-10 pt-40 md:pt-48 pb-0">
        <ScrollReveal variant="fade-up" className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/90">
            {WHAT_WE_DO_HERO.subtitle}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.75rem,6.5vw,4.5rem)] leading-[1.02]">
            {WHAT_WE_DO_HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-n200/95 leading-relaxed">
            {WHAT_WE_DO_HERO.intro}
          </p>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-mint-soft">
            <span className="h-2 w-2 rounded-full bg-mint" />
            Six core service areas
          </p>
        </ScrollReveal>
      </div>

      <div
        aria-hidden
        className="relative z-10 h-20 md:h-28 mt-12 md:mt-16 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function WhatWeDoServicesSection() {
  return (
    <section className="relative z-20 -mt-4 pb-16 md:pb-24 bg-[var(--n50)]">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-14 md:mb-18">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            Our services
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] text-forest leading-tight">
            From advisory to execution
          </h2>
          <p className="mt-4 text-n600 leading-relaxed max-w-2xl mx-auto">
            End-to-end support across sustainability strategy, carbon markets, climate
            finance, clean energy, emerging tech, and leadership.
          </p>
          <p className="mt-5 text-sm text-n600/90 leading-relaxed max-w-2xl mx-auto">
            {WHAT_WE_DO_ECOSYSTEM.context}
          </p>
          <p
            className="mt-6 text-[11px] text-n400 leading-relaxed max-w-xl mx-auto"
            aria-label="How Planetive work is organized"
          >
            {WHAT_WE_DO_ECOSYSTEM.lenses.map((lens, i) => (
              <span key={lens}>
                {i > 0 && <span className="mx-1.5 text-n300" aria-hidden>·</span>}
                {lens}
              </span>
            ))}
          </p>
        </ScrollReveal>

        <div className="space-y-6 md:space-y-8">
          {WHAT_WE_DO_SERVICES.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: WhatWeDoService;
  index: number;
}) {
  const imageRight = index % 2 === 1;
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal variant="fade-up" delay={index % 3 === 0 ? 0 : 50}>
      <article
        className={cn(
          "group grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[28px] md:rounded-[32px]",
          "border border-n200/80 bg-white shadow-[var(--shadow-soft)]",
          "hover:shadow-[var(--shadow-elevated)] transition-shadow duration-500",
          imageRight && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="relative lg:col-span-5 min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/5 to-transparent" />
          <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white/90 uppercase">
            {num}
          </span>
          <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-forest shadow-md">
            <Icon size={20} aria-hidden />
          </div>
        </div>

        <div
          className={cn(
            "lg:col-span-7 flex flex-col justify-center p-7 md:p-10 lg:p-12",
            "border-t lg:border-t-0 border-n200/50",
            imageRight ? "lg:border-r lg:border-l-0" : "lg:border-l",
          )}
        >
          <div className="flex items-start gap-4">
            <span
              aria-hidden
              className="mt-1.5 h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-mint to-canopy"
            />
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-[clamp(1.35rem,2.5vw,2rem)] text-forest leading-tight">
                {service.title}
              </h3>

              {service.highlight && (
                <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-mint-soft/80 px-4 py-2 border border-mint/30">
                  <span className="text-xs font-mono uppercase tracking-wider text-canopy">
                    Annual gap
                  </span>
                  <span className="font-display text-2xl md:text-3xl text-forest leading-none">
                    {service.highlight}
                  </span>
                </div>
              )}

              <div className="mt-5 space-y-3.5">
                {service.paragraphs.map((p, i) => (
                  <p
                    key={p.slice(0, 32)}
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
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function WhatWeDoClosingBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <ScrollReveal variant="scale-up">
          <div
            className="rounded-[32px] md:rounded-[40px] px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-n200 bg-white shadow-[var(--shadow-soft)]"
          >
            <div className="max-w-xl">
              <h2 className="font-display text-2xl md:text-3xl text-forest leading-tight">
                Ready to integrate sustainability into your next project?
              </h2>
              <p className="mt-3 text-n600 leading-relaxed">
                From net-zero planning to climate finance — Planetive partners with you
                across the full journey.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-mint"
            >
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
