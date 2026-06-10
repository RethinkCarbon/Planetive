import { useState } from "react";
import { cn } from "@/lib/utils";
import { EcosystemCompassExplorer } from "@/components/site/ecosystem/EcosystemCompassExplorer";
import { EcosystemDonutExplorer } from "@/components/site/ecosystem/EcosystemDonutExplorer";
import { EcosystemOrbitExplorer } from "@/components/site/ecosystem/EcosystemOrbitExplorer";

export type EcosystemExplorerVariant = "donut" | "compass" | "orbit";

const VARIANTS: { id: EcosystemExplorerVariant; label: string; description: string }[] = [
  { id: "donut", label: "Donut chart", description: "Brand deck style — four integrated segments" },
  { id: "compass", label: "Compass hub", description: "Four directions from a central hub" },
  { id: "orbit", label: "Orbital map", description: "Pillars orbit the Planetive core" },
];

type EcosystemExplorerProps = {
  /** Show variant switcher for design comparison */
  showVariantSwitcher?: boolean;
  defaultVariant?: EcosystemExplorerVariant;
};

export function EcosystemExplorer({
  showVariantSwitcher = true,
  defaultVariant = "donut",
}: EcosystemExplorerProps) {
  const [variant, setVariant] = useState<EcosystemExplorerVariant>(defaultVariant);

  return (
    <div>
      {showVariantSwitcher && (
        <div
          className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          role="tablist"
          aria-label="Ecosystem visualization style"
        >
          <div className="flex flex-wrap gap-2">
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={variant === v.id}
                onClick={() => setVariant(v.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold border transition-colors",
                  variant === v.id
                    ? "bg-white text-forest border-white"
                    : "bg-white/10 text-white/90 border-white/25 hover:bg-white/15 hover:border-white/40",
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-mint-soft/80 max-w-xs sm:text-right">
            {VARIANTS.find((v) => v.id === variant)?.description}
          </p>
        </div>
      )}

      {variant === "donut" && <EcosystemDonutExplorer panelVariant="dark" />}
      {variant === "compass" && <EcosystemCompassExplorer panelVariant="dark" />}
      {variant === "orbit" && <EcosystemOrbitExplorer panelVariant="dark" />}
    </div>
  );
}
