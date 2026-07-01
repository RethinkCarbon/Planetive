import { Quote, Sun, ExternalLink, ArrowRight } from "lucide-react";
import { formatDisplayText } from "@/lib/format-display-text";
import { cn } from "@/lib/utils";
import {
  ENERGY_TRANSITION,
  IMPACT_HERO_QUOTE,
  IMPACT_MARKET_STAT,
  IMPACT_TOPICS,
  type ImpactTopic,
} from "@/lib/impact-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export function ImpactPageContent() {
  return (
    <>
      <ImpactHero />
      <EnergyTransitionFeature />
      <ImpactAreasSection />
      <ImpactMarketBanner />
    </>
  );
}

function ImpactHero() {
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
            "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(168,240,212,0.35), transparent 50%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(26,107,74,0.5), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-x relative z-10 pt-40 md:pt-48 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <ScrollReveal variant="fade-up" className="lg:col-span-7">
            <h1 className="font-display text-[clamp(2.75rem,6.5vw,4.75rem)] leading-[1.02]">
              Empowering
              <br />
              <em className="not-italic text-mint-soft">Sustainable</em> Future
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-n200/95 leading-relaxed">
              From energy transition and sustainable finance to circular economy and impact
              investing — building measurable change across Pakistan and global markets.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={140} className="lg:col-span-5">
            <blockquote className="relative rounded-[28px] border border-white/20 bg-white/[0.08] backdrop-blur-md p-7 md:p-9 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.45)]">
              <div
                aria-hidden
                className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-mint-soft/60 to-transparent"
              />
              <Quote size={28} className="text-mint-soft/80 mb-4" aria-hidden />
              <p className="font-display text-lg md:text-xl leading-snug text-white/95">
                &ldquo;{IMPACT_HERO_QUOTE.text}&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <span className="h-px flex-1 max-w-[3rem] bg-mint-soft/50" aria-hidden />
                <cite className="not-italic text-xs font-mono tracking-[0.15em] uppercase text-mint-soft">
                  {IMPACT_HERO_QUOTE.attribution}
                </cite>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-24 z-10 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function EnergyTransitionFeature() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-12 pb-16 md:pb-20">
      <div className="container-x">
        <ScrollReveal variant="scale-up" duration={900}>
          <article className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden rounded-[32px] md:rounded-[40px] border border-n200/80 bg-white shadow-[var(--shadow-elevated)]">
            <div className="relative lg:col-span-3 min-h-[300px] lg:min-h-[440px]">
              <img
                src={ENERGY_TRANSITION.image}
                alt="Energy transition and renewable infrastructure"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent lg:bg-gradient-to-r lg:from-forest/60 lg:via-transparent lg:to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-forest shadow-lg">
                  <Sun size={18} className="text-canopy" />
                  Energy Transition
                </span>
                <span className="rounded-full bg-mint/90 px-3 py-1.5 text-xs font-bold text-forest">
                  Net zero 2050
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center p-8 md:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-n200/60">
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-forest leading-tight">
                {formatDisplayText(ENERGY_TRANSITION.title)}
              </h2>
              {ENERGY_TRANSITION.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-4 text-sm md:text-base text-n600 leading-relaxed"
                >
                  {p}
                </p>
              ))}
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-canopy">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint-soft">
                  <ArrowRight size={14} />
                </span>
                Policy, platforms &amp; affordable clean energy
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ImpactAreasSection() {
  return (
    <section className="py-12 md:py-20 bg-[var(--n50)]">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            Where we focus
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] text-forest leading-tight">
            Impact across every layer of sustainability
          </h2>
          <p className="mt-4 text-n600 leading-relaxed">
            Eleven interconnected areas where Planetive advocates, advises, and partners to close
            the gap between intent and measurable outcomes.
          </p>
        </ScrollReveal>

        <div className="space-y-6 md:space-y-8">
          {IMPACT_TOPICS.map((topic, index) => (
            <ImpactTopicBlock key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactTopicBlock({ topic, index }: { topic: ImpactTopic; index: number }) {
  const imageRight = index % 2 === 1;
  const Icon = topic.icon;
  const num = String(index + 2).padStart(2, "0");

  return (
    <ScrollReveal variant="fade-up" delay={index % 3 === 0 ? 0 : 60}>
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
            src={topic.image}
            alt={topic.title}
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
                {formatDisplayText(topic.title)}
              </h3>

              {topic.highlight && (
                <div className="mt-4 inline-flex items-baseline gap-2 rounded-2xl bg-mint-soft/80 px-4 py-2 border border-mint/30">
                  <span className="font-display text-2xl md:text-3xl text-forest leading-none">
                    {topic.highlight}
                  </span>
                </div>
              )}

              <div className="mt-5 space-y-3.5">
                {topic.paragraphs.map((p, i) => (
                  <p
                    key={p.slice(0, 32)}
                    className={cn(
                      "text-n600 leading-relaxed",
                      i === 0 ? "text-[15px] md:text-base text-n800" : "text-sm md:text-[15px]",
                    )}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {topic.links && topic.links.length > 0 && (
                <ul className="mt-6 flex flex-col sm:flex-row flex-wrap gap-2">
                  {topic.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-n200 bg-n50 px-4 py-2 text-xs font-semibold text-canopy hover:border-mint hover:bg-mint-soft/50 transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={12} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function ImpactMarketBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-x">
        <ScrollReveal variant="scale-up">
          <div
            className="relative overflow-hidden rounded-[32px] md:rounded-[40px] px-8 py-14 md:px-16 md:py-20 text-center"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-25"
              style={{
                background:
                  "radial-gradient(circle at 30% 50%, rgba(168,240,212,0.6), transparent 50%)",
              }}
            />
            <div className="relative">
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-mint-soft/90">
                {IMPACT_MARKET_STAT.label} · {IMPACT_MARKET_STAT.year}
              </p>
              <p className="mt-5 font-display text-[clamp(2.75rem,7vw,5rem)] text-white leading-none">
                {IMPACT_MARKET_STAT.value}
              </p>
              <p className="mt-2 text-lg text-mint-soft font-medium">USD</p>
              <p className="mt-8 text-sm text-n200 max-w-md mx-auto">
                Global capital moving toward investments that deliver financial returns alongside
                social and environmental impact.
              </p>
              <a
                href="https://thegiin.org/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-white/15 text-white border border-white/25 hover:bg-white/25 transition-colors"
              >
                Source: {IMPACT_MARKET_STAT.source}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-in" delay={120} className="mt-10">
          <p className="text-center text-sm text-n400 max-w-2xl mx-auto leading-relaxed">
            Planetive works with stakeholders across Pakistan and global markets to advance
            SDG-aligned policy, transparent impact measurement, and sustainable value creation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
