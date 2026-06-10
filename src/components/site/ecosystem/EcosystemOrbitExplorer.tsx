import { cn } from "@/lib/utils";
import { ECOSYSTEM_PILLARS } from "@/lib/what-we-do-content";
import { EcosystemPillarPanel } from "@/components/site/ecosystem/EcosystemPillarPanel";
import { PillarQuickSelect } from "@/components/site/ecosystem/PillarQuickSelect";
import { useEcosystemSelection } from "@/components/site/ecosystem/use-ecosystem-selection";

const NODE_OFFSET = 148;
const START_ANGLE = -110;

function orbitPosition(index: number, total: number) {
  const step = 360 / total;
  const deg = START_ANGLE + index * step;
  const rad = (deg * Math.PI) / 180;
  return {
    x: 50 + (NODE_OFFSET / 200) * 50 * Math.cos(rad),
    y: 50 + (NODE_OFFSET / 200) * 50 * Math.sin(rad),
    deg,
  };
}

type EcosystemOrbitExplorerProps = {
  panelVariant?: "light" | "dark";
};

export function EcosystemOrbitExplorer({ panelVariant = "dark" }: EcosystemOrbitExplorerProps) {
  const { activeId, setActiveId, active } = useEcosystemSelection();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] gap-10 lg:gap-12 xl:gap-16 items-center">
      <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-square max-h-[28rem]">
        <div
          className="absolute inset-[12%] rounded-full border border-white/15"
          aria-hidden
        />
        <div
          className="absolute inset-[22%] rounded-full border border-dashed border-white/10"
          aria-hidden
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative flex h-28 w-28 md:h-32 md:w-32 items-center justify-center rounded-full bg-white text-center shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
            aria-hidden
          >
            <div>
              <p className="font-display text-lg md:text-xl font-bold text-forest">Planetive</p>
              <p className="mt-0.5 text-[8px] font-mono uppercase tracking-[0.2em] text-n400">
                Orbit
              </p>
            </div>
            <div
              className="absolute inset-0 rounded-full animate-pulse opacity-30"
              style={{
                background:
                  "radial-gradient(circle, var(--mint-soft) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>

        {ECOSYSTEM_PILLARS.map((pillar, index) => {
          const { x, y } = orbitPosition(index, ECOSYSTEM_PILLARS.length);
          const isActive = pillar.id === activeId;
          const Icon = pillar.icon;

          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveId(pillar.id)}
              aria-pressed={isActive}
              aria-label={pillar.title}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-mint-soft rounded-2xl",
                isActive ? "z-10 scale-110" : "scale-100 opacity-85 hover:opacity-100 hover:scale-105",
              )}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={cn(
                  "flex h-[4.25rem] w-[4.25rem] md:h-[4.75rem] md:w-[4.75rem] items-center justify-center rounded-full border-2 text-white shadow-lg",
                  isActive ? "border-white" : "border-white/30",
                )}
                style={{
                  background: `linear-gradient(160deg, ${pillar.color}, ${pillar.colorActive})`,
                  boxShadow: isActive
                    ? `0 0 0 4px ${pillar.colorActive}44, 0 16px 40px rgba(0,0,0,0.3)`
                    : undefined,
                }}
              >
                <Icon size={22} aria-hidden />
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[10px] font-semibold whitespace-nowrap",
                  isActive ? "bg-white text-forest" : "bg-white/15 text-white",
                )}
              >
                {pillar.shortLabel}
              </span>
            </button>
          );
        })}

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
