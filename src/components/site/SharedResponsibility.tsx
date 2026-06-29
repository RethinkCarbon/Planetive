import { useEffect, useState } from "react";
import {
  Droplets,
  Zap,
  Building2,
  Banknote,
  Quote,
} from "lucide-react";
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
            className="col-span-6 md:col-span-2 row-span-3 md:row-span-3 bg-white"
          >
            <div className="text-[11px] font-mono tracking-wider text-n400 uppercase">
              Global target &amp; current position
            </div>
            <div className="mt-4 rounded-2xl border border-n200/70 bg-n50 p-3.5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl leading-none text-forest">54–57</p>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-wide text-n500">
                    GtCO2e emissions
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl leading-none text-canopy">29–32</p>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-wide text-n500">
                    GtCO2e gap to 1.5C
                  </p>
                </div>
              </div>
              <div className="mt-3 h-2 rounded-full bg-n200/90 overflow-hidden">
                <div className="h-full w-[62%] rounded-full bg-canopy" />
              </div>
              <p className="mt-1.5 text-[10px] text-n500">
                Approximate emissions gap relative to 1.5C pathway.
              </p>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-n200/70 bg-white px-3 py-2.5">
                <p className="font-display text-xl leading-none text-forest">$33.9T</p>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-wide text-n500">
                  ESG assets projected
                </p>
              </div>
              <div className="rounded-xl border border-n200/70 bg-white px-3 py-2.5">
                <p className="font-display text-xl leading-none text-canopy">17%</p>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-wide text-n500">
                  SDG targets on track
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-n200/70 bg-white px-3 py-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wide text-n500">
                <span>Market cap without validated SBTs</span>
                <span className="text-forest font-semibold">~60%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-n200/90 overflow-hidden">
                <div className="h-full w-[60%] rounded-full bg-forest" />
              </div>
            </div>

            <p className="mt-3 text-[0.76rem] leading-relaxed text-n600">
              2026 snapshot: high emissions, a material 1.5C gap, and uneven transition readiness
              despite rapid ESG capital growth.
            </p>

            <p className="mt-auto pt-3 text-[10px] text-n500 leading-relaxed">
              Sources: Climate Action Tracker, UN SDG Report, Bloomberg Intelligence ESG Outlook,
              and SBTi tracking data.
            </p>
          </Tile>

          <Tile in={gridIn} delay={180} className="col-span-3 md:col-span-2 row-span-2 bg-white">
            <div className="text-[11px] font-mono tracking-wider text-n400 uppercase">
              Where we put our energy
            </div>
            <ul className="mt-4 space-y-2.5">
              {[
                { icon: Zap, label: "Affordable & clean energy" },
                { icon: Banknote, label: "Financial inclusion" },
                { icon: Droplets, label: "Clean water & conservation" },
                { icon: Building2, label: "Physical & digital infrastructure" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-2.5 text-sm text-n800">
                  <Icon size={15} className="text-canopy mt-0.5 shrink-0" />
                  <span>{label}</span>
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
              <GapRow label="Information" weight={92} animate={gridIn} />
              <GapRow label="Capital" weight={78} animate={gridIn} delay={120} />
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

function GapRow({
  label,
  weight,
  animate,
  delay = 0,
}: {
  label: string;
  weight: number;
  animate: boolean;
  delay?: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-forest">{label}</span>
        <span className="font-mono text-n800/70">{weight}%</span>
      </div>
      <div className="mt-1.5 h-1.5 rounded-full bg-white/60 overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full bg-forest origin-left",
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
