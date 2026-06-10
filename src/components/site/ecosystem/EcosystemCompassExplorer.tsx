import { cn } from "@/lib/utils";
import { ECOSYSTEM_PILLARS } from "@/lib/what-we-do-content";
import { EcosystemPillarPanel } from "@/components/site/ecosystem/EcosystemPillarPanel";
import { PillarQuickSelect } from "@/components/site/ecosystem/PillarQuickSelect";
import { useEcosystemSelection } from "@/components/site/ecosystem/use-ecosystem-selection";

const CX = 200;
const CY = 200;
const SPOKE_R = 155;
const NODE_R = 38;
/** Advisory top, Platforms right, Programs bottom, Agents left */
const ANGLES = [-90, 0, 90, 180];

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

type EcosystemCompassExplorerProps = {
  panelVariant?: "light" | "dark";
};

export function EcosystemCompassExplorer({ panelVariant = "dark" }: EcosystemCompassExplorerProps) {
  const { activeId, setActiveId, active } = useEcosystemSelection();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] gap-10 lg:gap-12 xl:gap-16 items-center">
      <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-square max-h-[28rem]">
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
          <circle
            cx={CX}
            cy={CY}
            r={SPOKE_R}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <circle
            cx={CX}
            cy={CY}
            r={SPOKE_R * 0.55}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full bg-white px-8 py-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <p className="font-display text-xl font-bold text-forest">Planetive</p>
            <p className="mt-1 text-[9px] font-mono uppercase tracking-[0.22em] text-n400">
              Compass
            </p>
          </div>
        </div>

        {ECOSYSTEM_PILLARS.map((pillar, index) => {
          const { x, y } = polar(CX, CY, SPOKE_R, ANGLES[index]);
          const isActive = pillar.id === activeId;
          const leftPct = (x / 400) * 100;
          const topPct = (y / 400) * 100;

          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveId(pillar.id)}
              aria-pressed={isActive}
              aria-label={pillar.title}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 text-white text-center transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-mint-soft",
                isActive
                  ? "scale-110 shadow-[0_16px_40px_rgba(0,0,0,0.35)] z-10"
                  : "scale-100 opacity-90 hover:opacity-100 hover:scale-105",
              )}
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                width: NODE_R * 2,
                height: NODE_R * 2,
                background: `linear-gradient(145deg, ${pillar.color}, ${pillar.colorActive})`,
                borderColor: isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)",
              }}
            >
              <span className="block text-[10px] font-bold leading-tight px-1">
                {pillar.shortLabel.split(" ").map((w, i) => (
                  <span key={w} className="block">
                    {w}
                  </span>
                ))}
              </span>
            </button>
          );
        })}

        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden
        >
          {ECOSYSTEM_PILLARS.map((pillar, index) => {
            const end = polar(CX, CY, SPOKE_R - NODE_R - 4, ANGLES[index]);
            return (
              <line
                key={pillar.id}
                x1={CX}
                y1={CY}
                x2={end.x}
                y2={end.y}
                stroke={pillar.id === activeId ? pillar.colorActive : "rgba(255,255,255,0.2)"}
                strokeWidth={pillar.id === activeId ? 2.5 : 1.5}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        <PillarQuickSelect
          pillars={ECOSYSTEM_PILLARS}
          activeId={activeId}
          onSelect={setActiveId}
          variant="dark"
          className="absolute -bottom-2 left-0 right-0 lg:hidden"
        />
      </div>

      <EcosystemPillarPanel
        pillar={active}
        variant={panelVariant}
        className="min-h-[300px] lg:min-h-[380px]"
      />
    </div>
  );
}
