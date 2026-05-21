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
  const gap = useCountUp(2.5, 1800, gridIn);
  const years = useCountUp(2030, 1400, gridIn);

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
          className="mt-20 grid grid-cols-6 auto-rows-[120px] md:auto-rows-[150px] gap-3 md:gap-4"
        >
          <Tile
            in={gridIn}
            delay={0}
            className="col-span-6 md:col-span-4 row-span-2 text-white"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Quote size={28} className="text-mint-soft/70" />
            <p className="mt-4 font-display text-[clamp(1.4rem,2.4vw,2.1rem)] leading-snug">
              "Bring sustainability into{" "}
              <span className="text-mint-soft italic">every</span> conversation —
              and the world starts answering back."
            </p>
            <div className="mt-auto pt-6 text-xs text-n200 font-mono tracking-wider">
              — How we work
            </div>
          </Tile>

          <Tile in={gridIn} delay={100} className="col-span-3 md:col-span-2 row-span-2 bg-white">
            <div className="text-[11px] font-mono tracking-wider text-n400 uppercase">
              Annual SDG capital gap
            </div>
            <div className="mt-auto">
              <div className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-forest">
                ${gap.toFixed(1)}
                <span className="text-canopy">T</span>
              </div>
              <div className="mt-3 text-sm text-n600 max-w-[14rem]">
                The shortfall between intent and the projects actually getting funded.
              </div>
            </div>
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
