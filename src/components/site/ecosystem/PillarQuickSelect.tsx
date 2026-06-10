import { cn } from "@/lib/utils";
import type { EcosystemPillar } from "@/lib/what-we-do-content";

type PillarQuickSelectProps = {
  pillars: EcosystemPillar[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
  variant?: "light" | "dark";
};

export function PillarQuickSelect({
  pillars,
  activeId,
  onSelect,
  className,
  variant = "light",
}: PillarQuickSelectProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-2", className)}
      role="tablist"
      aria-label="Ecosystem pillars"
    >
      {pillars.map((pillar) => (
        <button
          key={pillar.id}
          type="button"
          role="tab"
          aria-selected={pillar.id === activeId}
          onClick={() => onSelect(pillar.id)}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors border",
            pillar.id === activeId
              ? isDark
                ? "bg-white text-forest border-white"
                : "bg-forest text-white border-forest"
              : isDark
                ? "bg-white/10 text-white border-white/25 hover:border-white/50"
                : "bg-white text-forest border-n200 hover:border-canopy",
          )}
        >
          {pillar.shortLabel}
        </button>
      ))}
    </div>
  );
}
