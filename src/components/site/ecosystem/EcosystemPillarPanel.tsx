import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatWeDoServicePath, type EcosystemPillar } from "@/lib/what-we-do-content";

type EcosystemPillarPanelProps = {
  pillar: EcosystemPillar;
  className?: string;
  /** Dark panel for use on green hero backgrounds */
  variant?: "light" | "dark";
};

export function EcosystemPillarPanel({
  pillar,
  className,
  variant = "light",
}: EcosystemPillarPanelProps) {
  const isDark = variant === "dark";

  return (
    <div
      role="tabpanel"
      aria-live="polite"
      key={pillar.id}
      className={cn(
        "border p-6 md:p-8 ecosystem-panel-enter overflow-hidden",
        isDark
          ? "border-white/15 bg-white/[0.06] backdrop-blur-sm text-white"
          : "border-n200/80 bg-white",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
        <div className="relative shrink-0 w-full sm:w-36 md:w-44 aspect-[4/3] sm:aspect-square overflow-hidden">
          <img
            src={pillar.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={pillar.imagePosition ? { objectPosition: pillar.imagePosition } : undefined}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.2em]",
              isDark ? "text-mint-soft/90" : "text-canopy",
            )}
          >
            {pillar.shortLabel}
          </p>
          <h3
            className={cn(
              "mt-2 font-ui font-semibold text-2xl md:text-[1.65rem] leading-tight",
              isDark ? "text-white" : "text-forest",
            )}
          >
            {pillar.title}
          </h3>
          <p
            className={cn(
              "mt-3 text-[15px] leading-relaxed",
              isDark ? "text-n200/95" : "text-n600",
            )}
          >
            {pillar.description}
          </p>
        </div>
      </div>

      <ul
        className={cn(
          "mt-6 grid grid-cols-3 gap-px text-center",
          isDark ? "bg-white/10" : "bg-n200/80",
        )}
      >
        {pillar.outcomes.map((o) => (
          <li
            key={o.label}
            className={cn("px-3 py-3", isDark ? "bg-white/[0.04]" : "bg-[var(--n50)]")}
          >
            <p
              className={cn(
                "font-ui font-semibold text-lg leading-none",
                isDark ? "text-white" : "text-forest",
              )}
            >
              {o.value}
            </p>
            <p
              className={cn(
                "mt-1 text-[9px] font-mono uppercase tracking-wider",
                isDark ? "text-n300" : "text-n500",
              )}
            >
              {o.label}
            </p>
          </li>
        ))}
      </ul>

      <ul
        className={cn(
          "mt-6 space-y-2.5 border-l pl-4",
          isDark ? "border-white/20" : "border-n300",
        )}
      >
        {pillar.capabilities.slice(0, 3).map((item) => (
          <li
            key={item}
            className={cn(
              "text-sm leading-relaxed",
              isDark ? "text-n200/90" : "text-n700",
            )}
          >
            {item}
          </li>
        ))}
      </ul>

      <Link
        to={whatWeDoServicePath(pillar.id)}
        className={cn(
          "mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors",
          isDark
            ? "text-mint-soft hover:text-white underline underline-offset-4"
            : "text-canopy hover:text-forest underline underline-offset-4",
        )}
      >
        Explore {pillar.shortLabel}
        <ArrowRight size={14} aria-hidden />
      </Link>
    </div>
  );
}
