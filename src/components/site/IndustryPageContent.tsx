import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { formatDisplayText } from "@/lib/format-display-text";
import { cn } from "@/lib/utils";
import { INDUSTRIES, RETHINK_CARBON, type IndustryPage } from "@/lib/industries-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";

type IndustryPageContentProps = {
  industry: IndustryPage;
};

/** Centered connector between methodology cards on large screens */
function MethodologyFlowArrow({ accent }: { accent: string }) {
  return (
    <span
      className="pointer-events-none absolute top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
      style={{ left: "calc(100% + 0.75rem)" }}
      aria-hidden
    >
      <span className="relative flex items-center">
        <span
          className="absolute right-full mr-2 h-px w-4"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}55)`,
          }}
        />
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white shadow-[0_4px_16px_-4px_rgba(10,61,46,0.18)] ring-1 ring-n200/60">
          <span
            className="absolute inset-0 rounded-full opacity-30 blur-[3px]"
            style={{ background: accent }}
          />
          <ArrowRight size={15} className="relative text-canopy" strokeWidth={2.25} />
        </span>
        <span
          className="absolute left-full ml-2 h-px w-4"
          style={{
            background: `linear-gradient(90deg, ${accent}55, transparent)`,
          }}
        />
      </span>
    </span>
  );
}

export function IndustryPageContent({ industry }: IndustryPageContentProps) {
  const otherIndustries = INDUSTRIES.filter((i) => i.id !== industry.id);

  return (
    <>
      <section
        className="relative isolate overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-45"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${industry.accentSoft}66, transparent 55%)`,
          }}
        />
        <div className="container-x relative z-10 pt-40 md:pt-48 pb-20 md:pb-28">
          <ScrollReveal variant="fade-up" className="max-w-3xl flex flex-col items-start">
            <h1 className="font-display text-type-h1 leading-[1.05]">
              {formatDisplayText(industry.title)}
            </h1>
            <p className="mt-3 text-type-lead text-mint-soft/95">{industry.tagline}</p>
            <p className="mt-4 text-type-body-lg text-n200/90 leading-relaxed max-w-2xl">
              {industry.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-20 -mt-10 md:-mt-12">
        <div className="container-x">
          <ScrollReveal variant="scale-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {industry.outcomes.map((o) => (
                <div
                  key={o.label}
                  className="rounded-[24px] border border-n200/70 bg-white px-6 py-5 md:py-6 shadow-[var(--shadow-soft)]"
                >
                  <p
                    className="font-display text-2xl md:text-3xl leading-none"
                    style={{ color: industry.accent }}
                  >
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
        <div className="container-x space-y-14 md:space-y-20">
          <ScrollReveal variant="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                  Sector context
                </span>
                <div className="mt-5 space-y-5 border-l border-n300 pl-6">
                  {industry.body.map((p, i) => (
                    <p
                      key={p.slice(0, 48)}
                      className={cn(
                        "leading-relaxed text-n600",
                        i === 0 ? "text-sm md:text-base text-n800" : "text-sm md:text-sm",
                      )}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                  Use cases
                </span>
                <ul className="mt-5 divide-y divide-n200 border-y border-n200">
                  {industry.useCases.map((uc) => (
                    <li key={uc.title} className="py-5 first:pt-0 last:pb-0">
                      <h3 className="font-display text-lg text-forest">
                        {formatDisplayText(uc.title)}
                      </h3>
                      <p className="mt-2 text-sm text-n600 leading-relaxed">{uc.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <div className="border border-forest/20 overflow-hidden text-white bg-forest">
              <div className="p-8 md:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="max-w-2xl">
                    <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/90">
                      Powered by
                    </p>
                    <h2 className="mt-2 font-display text-3xl md:text-[2.25rem] leading-tight">
                      {RETHINK_CARBON.name}
                    </h2>
                    <p className="mt-2 text-mint-soft/95 font-medium">{RETHINK_CARBON.tagline}</p>
                    <p className="mt-4 text-sm md:text-base text-n200/90 leading-relaxed">
                      {RETHINK_CARBON.summary}
                    </p>
                    <p className="mt-4 text-sm text-n200/80 leading-relaxed">
                      {RETHINK_CARBON.aiStrategist}
                    </p>
                  </div>
                  <a
                    href={RETHINK_CARBON.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-mint-soft hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Visit {RETHINK_CARBON.name}
                    <ExternalLink size={14} aria-hidden />
                  </a>
                </div>

                <div className="mt-10 pt-8 border-t border-white/15">
                  <h3 className="font-display text-xl text-mint-soft">
                    Built for {industry.title.toLowerCase()}
                  </h3>
                  <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {industry.rethinkFocus.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-n200/90 leading-relaxed pl-4 border-l border-white/20"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={60}>
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                Methodology
              </p>
              <h2 className="mt-2 font-display text-2xl md:text-3xl text-forest leading-tight max-w-2xl">
                Four steps to carbon excellence
              </h2>
              <p className="mt-3 text-sm md:text-base text-n600 max-w-xl leading-relaxed">
                The proven {RETHINK_CARBON.name} approach on{" "}
                <a
                  href={RETHINK_CARBON.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-canopy font-medium hover:underline underline-offset-4"
                >
                  rethinkcarbon.io
                </a>
              </p>
              <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {RETHINK_CARBON.methodology.map((step, i) => (
                  <li
                    key={step.title}
                    className="group relative flex flex-col rounded-[24px] border border-n200/70 bg-white p-6 md:p-7 shadow-[var(--shadow-soft)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]"
                  >
                    <div
                      aria-hidden
                      className="absolute -top-px right-8 h-px w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, transparent, var(--mint), transparent)",
                      }}
                    />
                    <span
                      className="font-mono text-[11px] tracking-wider"
                      style={{ color: industry.accent }}
                    >
                      {step.step}
                    </span>
                    {i < RETHINK_CARBON.methodology.length - 1 && (
                      <MethodologyFlowArrow accent={industry.accent} />
                    )}
                    <h3 className="mt-5 font-display text-xl text-forest leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-n600 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={80}>
            <div
              className="relative overflow-hidden rounded-[32px] border border-n200/60 p-6 md:p-9 lg:p-10 shadow-[var(--shadow-soft)]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(168,240,212,0.14) 100%)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-40"
                style={{
                  background: `radial-gradient(circle, ${industry.accentSoft}55, transparent 70%)`,
                }}
              />
              <div className="relative max-w-2xl">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                  {RETHINK_CARBON.name}
                </p>
                <h2 className="mt-2 font-display text-2xl md:text-3xl text-forest leading-tight">
                  Platform benefits
                </h2>
              </div>
              <ul className="relative mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {RETHINK_CARBON.benefits.map((b, i) => (
                  <li
                    key={b.title}
                    className={cn(
                      "rounded-[22px] border border-white/80 bg-white/90 p-5 md:p-6 backdrop-blur-sm",
                      "shadow-[0_4px_20px_-6px_rgba(10,61,46,0.1)]",
                      "transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]",
                    )}
                  >
                    <span className="font-mono text-[11px] tracking-wider text-n400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-lg text-forest leading-snug">
                      {formatDisplayText(b.title)}
                    </h3>
                    <p className="mt-2 text-sm text-n600 leading-relaxed">{b.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <ScrollReveal className="lg:col-span-8">
              <div
                className="border border-forest/15 px-8 py-10 text-white"
                style={{ background: "var(--gradient-hero)" }}
              >
                <h2 className="font-display text-2xl md:text-[1.75rem] leading-tight">
                  Partner with Planetive on {industry.title.toLowerCase()}
                </h2>
                <p className="mt-3 text-sm md:text-base text-n200/90 leading-relaxed max-w-lg">
                  Combine sector advisory with {RETHINK_CARBON.name} intelligence for execution that
                  is faster, compliant, and investor-ready.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-mint-soft hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Work with us
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                  <a
                    href={RETHINK_CARBON.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Explore {RETHINK_CARBON.name}
                    <ExternalLink size={14} aria-hidden />
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={80} className="lg:col-span-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
                  Sectors
                </span>
                <h3 className="mt-2 font-display text-lg text-forest">Other industries</h3>
                <ul className="mt-5 divide-y divide-n200 border-y border-n200">
                  {otherIndustries.map((other) => (
                    <li key={other.id}>
                      <Link
                        to="/industries/$slug"
                        params={{ slug: other.id }}
                        className="group flex items-center justify-between gap-3 py-4 hover:bg-white/60 -mx-2 px-2 transition-colors"
                      >
                        <span className="text-sm font-medium text-n800 group-hover:text-forest transition-colors">
                          {other.navLabel}
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-n400 group-hover:text-canopy transition-colors"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>
    </>
  );
}
