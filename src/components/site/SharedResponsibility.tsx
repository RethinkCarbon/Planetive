import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const HOW_WE_WORK_QUOTES = [
  {
    text: (
      <>
        Embed <span className="text-mint-soft">sustainability</span> in strategy, and{" "}
        <span className="text-mint-soft/90">value</span> follows.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="text-mint-soft">Decarbonization</span> done right protects{" "}
        <span className="text-mint-soft/90">margins</span> and unlocks growth.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="text-mint-soft">Climate intelligence</span> turns uncertainty into{" "}
        <span className="text-mint-soft/90">boardroom confidence</span>.
      </>
    ),
  },
  {
    text: (
      <>
        <span className="text-mint-soft">Sustainable operations</span> today build{" "}
        <span className="text-mint-soft/90">resilient profitability</span> tomorrow.
      </>
    ),
  },
] as const;

const ENERGY_FOCUS = [
  "Affordable & clean energy",
  "Financial inclusion",
  "Clean water & conservation",
  "Physical & digital infrastructure",
] as const;

/** 1.5°C pathway vs current global emissions (GtCO₂e). */
const PATHWAY_TARGET_GT = 25;
const CURRENT_EMISSIONS = { min: 54, max: 57, label: "54–57 GtCO₂e" } as const;
const EMISSIONS_GAP = "29–32 GtCO₂e";
const PATHWAY_TARGET_PCT =
  (PATHWAY_TARGET_GT / CURRENT_EMISSIONS.max) * 100;

function useCountUp(target: number, durationMs: number, start: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / durationMs);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return v;
}

export function SharedResponsibilitySection() {
  const { ref: gridRef, inView: gridIn } = useInView<HTMLDivElement>({ threshold: 0.08 });
  const years = useCountUp(2030, 1400, gridIn);
  const reducedMotion = usePrefersReducedMotion();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setQuoteVisible(false);
      window.setTimeout(() => {
        setQuoteIndex((current) => (current + 1) % HOW_WE_WORK_QUOTES.length);
        setQuoteVisible(true);
      }, 260);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section className="relative py-24 md:py-36 bg-[var(--n50)] overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, var(--mint-soft), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--canopy), transparent 60%)" }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <ScrollReveal as="div" variant="fade-right" className="lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
              — A note from Planetive
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] text-forest leading-[1.02]">
              Our planet's well-being is a{" "}
              <em className="not-italic text-canopy">shared</em> responsibility.
            </h2>
          </ScrollReveal>
          <ScrollReveal
            as="div"
            variant="fade-left"
            delay={120}
            className="lg:col-span-7 lg:pt-3"
          >
            <p className="text-n800 text-lg md:text-xl leading-relaxed font-display">
              The last decades have cost us biodiversity, raised our seas, and thickened
              our air. We don't think sustainability is a department — it's the
              conversation underneath every other one.
            </p>
            <p className="mt-5 text-n600 leading-relaxed">
              So we sit at every table that will have us: governance, finance, operators,
              builders. Planetive helps close two stubborn gaps — the{" "}
              <span className="text-forest font-semibold">information gap</span> and the{" "}
              <span className="text-forest font-semibold">capital gap</span> — and then
              gets out of the way so partnerships in clean energy, financial inclusion,
              water, and infrastructure can actually ship.
            </p>
          </ScrollReveal>
        </div>

        <div
          ref={gridRef}
          className="mt-20 grid grid-cols-6 auto-rows-[minmax(120px,auto)] md:auto-rows-[minmax(150px,auto)] gap-3 md:gap-4"
        >
          <Tile
            in={gridIn}
            delay={0}
            className="col-span-6 md:col-span-4 row-span-2 text-white"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Quote size={28} className="text-mint-soft/70" />
            <p
              className={cn(
                "mt-4 font-display text-[clamp(1.4rem,2.4vw,2.1rem)] leading-snug text-white/95 transition-opacity duration-300",
                quoteVisible ? "opacity-100" : "opacity-0",
              )}
            >
              &ldquo;{HOW_WE_WORK_QUOTES[quoteIndex].text}&rdquo;
            </p>
            <div className="mt-auto pt-6 text-xs text-mint-soft/75 font-mono tracking-wider">
              — How we work
            </div>
          </Tile>

          <Tile
            in={gridIn}
            delay={100}
            className="col-span-6 md:col-span-2 row-span-2 bg-white"
          >
            <PathwayGapCard animate={gridIn} />
          </Tile>

          <Tile in={gridIn} delay={180} className="col-span-3 md:col-span-2 row-span-2 bg-white">
            <div className="text-[11px] font-mono tracking-wider text-n400 uppercase">
              Where we put our energy
            </div>
            <ul className="mt-5 md:mt-6">
              {ENERGY_FOCUS.map((label) => (
                <li
                  key={label}
                  className="font-ui text-[15px] md:text-[1.05rem] font-medium text-forest leading-snug border-b border-n200/60 py-3.5 md:py-4 last:border-b-0"
                >
                  {label}
                </li>
              ))}
            </ul>
          </Tile>

          <Tile
            in={gridIn}
            delay={260}
            className="col-span-3 md:col-span-2 row-span-2 text-forest"
            style={{ background: "var(--gradient-mint)" }}
          >
            <div className="text-[11px] font-mono tracking-wider text-canopy uppercase">
              Two gaps. One bridge.
            </div>
            <div className="mt-5 space-y-4">
              <GapRow
                label="Information"
                weight={92}
                animate={gridIn}
                trackClassName="bg-white/60"
              />
              <GapRow
                label="Capital"
                weight={78}
                animate={gridIn}
                delay={120}
                trackClassName="bg-white/60"
              />
            </div>
            <div className="mt-auto pt-4 text-xs text-n800/80 leading-snug">
              We bridge with knowledge sharing, project evaluation, and structured
              finance.
            </div>
          </Tile>

          <Tile in={gridIn} delay={340} className="col-span-3 md:col-span-2 row-span-2 bg-forest text-white">
            <div className="text-[11px] font-mono tracking-wider text-mint-soft/80 uppercase">
              Our horizon
            </div>
            <div className="mt-auto">
              <div className="font-display text-[clamp(2.6rem,5vw,4rem)] leading-none text-mint-soft">
                {Math.round(years)}
              </div>
              <div className="mt-3 text-sm text-n200 max-w-[14rem]">
                The decade we're building toward — measured, not promised.
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}

function PathwayGapCard({ animate }: { animate: boolean }) {
  return (
    <>
      <div className="text-[11px] font-mono tracking-wider text-n400 uppercase">
        Global target & current position
      </div>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-none text-[#9A4E32]">
            {EMISSIONS_GAP}
          </p>
          <p className="mt-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-n500">
            Gap to 1.5°C pathway
          </p>
        </div>
        <p className="text-right font-mono text-[10px] uppercase tracking-[0.12em] text-[#9A4E32]/90 leading-snug max-w-[7rem]">
          Off track
        </p>
      </div>

      <div className="mt-5">
        <div className="relative h-3.5 rounded-full bg-n200/80 overflow-hidden">
          <div
            className={cn(
              "absolute inset-y-0 left-0 rounded-l-full bg-mint-soft/90",
              animate && "animate-[barGrow_1s_ease-out_forwards]",
            )}
            style={{ width: animate ? `${PATHWAY_TARGET_PCT}%` : "0%" }}
            aria-hidden
          />
          <div
            className={cn(
              "absolute inset-y-0 rounded-r-full bg-[#9A4E32]/75",
              animate && "animate-[barGrow_1.1s_ease-out_forwards]",
            )}
            style={{
              left: animate ? `${PATHWAY_TARGET_PCT}%` : `${PATHWAY_TARGET_PCT}%`,
              width: animate ? `${100 - PATHWAY_TARGET_PCT}%` : "0%",
              animationDelay: animate ? "180ms" : undefined,
            }}
            aria-hidden
          />
          <div
            className="absolute top-0 bottom-0 w-0.5 -translate-x-1/2 bg-forest shadow-[0_0_0_1px_white]"
            style={{ left: `${PATHWAY_TARGET_PCT}%` }}
            aria-hidden
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3 text-[10px] font-mono uppercase tracking-wide">
          <div>
            <span className="inline-block h-2 w-2 rounded-full bg-mint-soft mr-1.5 align-middle" aria-hidden />
            <span className="text-n600">Pathway ceiling</span>
            <p className="mt-0.5 text-forest font-semibold normal-case tracking-normal text-xs">
              ~{PATHWAY_TARGET_GT} GtCO₂e
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block h-2 w-2 rounded-full bg-[#9A4E32]/75 mr-1.5 align-middle" aria-hidden />
            <span className="text-n600">Current emissions</span>
            <p className="mt-0.5 text-[#9A4E32] font-semibold normal-case tracking-normal text-xs">
              {CURRENT_EMISSIONS.label}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-auto pt-3 text-[11px] text-n600 leading-snug">
        Global emissions sit more than double the 1.5°C pathway — the gap is widening, not closing.
      </p>
    </>
  );
}

function GapRow({
  label,
  weight,
  animate,
  delay = 0,
  barClassName = "bg-forest",
  trackClassName = "bg-n200/90",
  valueLabel,
}: {
  label: string;
  weight: number;
  animate: boolean;
  delay?: number;
  barClassName?: string;
  trackClassName?: string;
  /** When set, shown instead of a percentage (e.g. GtCO₂e). */
  valueLabel?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-semibold text-forest">{label}</span>
        <span className="font-mono text-n800/70 shrink-0">
          {valueLabel ?? `${weight}%`}
        </span>
      </div>
      <div className={cn("mt-1.5 h-1.5 rounded-full overflow-hidden", trackClassName)}>
        <div
          className={cn(
            "h-full rounded-full origin-left",
            barClassName,
            animate && "animate-[barGrow_1.2s_ease-out_forwards]",
          )}
          style={{
            width: animate ? `${weight}%` : "0%",
            animationDelay: animate ? `${delay}ms` : undefined,
          }}
        />
      </div>
    </div>
  );
}

function Tile({
  children,
  className = "",
  style,
  delay = 0,
  in: inView,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  in: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative rounded-[26px] md:rounded-[30px] border border-n200/70 p-5 md:p-7 flex flex-col will-change-transform",
        "reveal reveal-scale-up hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] transition-[transform,box-shadow] duration-300",
        inView && "reveal-visible",
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms", ...style }}
    >
      {children}
    </article>
  );
}
