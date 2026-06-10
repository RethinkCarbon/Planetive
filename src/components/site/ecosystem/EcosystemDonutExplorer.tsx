import { useId } from "react";
import { cn } from "@/lib/utils";
import { ECOSYSTEM_PILLARS } from "@/lib/what-we-do-content";
import { EcosystemPillarPanel } from "@/components/site/ecosystem/EcosystemPillarPanel";
import { PillarQuickSelect } from "@/components/site/ecosystem/PillarQuickSelect";
import { useEcosystemSelection } from "@/components/site/ecosystem/use-ecosystem-selection";

const CX = 200;
const CY = 200;
const OUTER_R = 168;
const INNER_R = 92;
const SEGMENT_COUNT = ECOSYSTEM_PILLARS.length;
const DEGREE_STEP = 360 / SEGMENT_COUNT;
const ROTATION_OFFSET = -90 - DEGREE_STEP / 2;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeSegment(index: number) {
  const start = ROTATION_OFFSET + index * DEGREE_STEP;
  const end = start + DEGREE_STEP;
  const outerStart = polarToCartesian(CX, CY, OUTER_R, end);
  const outerEnd = polarToCartesian(CX, CY, OUTER_R, start);
  const innerStart = polarToCartesian(CX, CY, INNER_R, start);
  const innerEnd = polarToCartesian(CX, CY, INNER_R, end);
  const largeArc = DEGREE_STEP > 180 ? 1 : 0;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${INNER_R} ${INNER_R} 0 ${largeArc} 1 ${innerEnd.x} ${innerEnd.y}`,
    "Z",
  ].join(" ");
}

function labelPosition(index: number) {
  const mid = ROTATION_OFFSET + index * DEGREE_STEP + DEGREE_STEP / 2;
  const { x, y } = polarToCartesian(CX, CY, (OUTER_R + INNER_R) / 2, mid);
  return { x, y, mid };
}

type EcosystemDonutExplorerProps = {
  panelVariant?: "light" | "dark";
};

export function EcosystemDonutExplorer({ panelVariant = "dark" }: EcosystemDonutExplorerProps) {
  const { activeId, setActiveId, active } = useEcosystemSelection();
  const groupId = useId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] gap-10 lg:gap-12 xl:gap-16 items-center">
      <div className="relative mx-auto w-full max-w-[min(100%,24rem)] lg:max-w-none">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-auto drop-shadow-[0_28px_56px_rgba(0,0,0,0.25)]"
          role="img"
          aria-label="Four areas of work — select a segment"
        >
          <defs>
            {ECOSYSTEM_PILLARS.map((pillar) => (
              <linearGradient
                key={pillar.id}
                id={`${groupId}-grad-${pillar.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={pillar.color} />
                <stop offset="100%" stopColor={pillar.colorActive} />
              </linearGradient>
            ))}
          </defs>

          {ECOSYSTEM_PILLARS.map((pillar, index) => {
            const isActive = pillar.id === activeId;
            const { x, y, mid } = labelPosition(index);
            const flip = mid > 90 && mid < 270;

            return (
              <g key={pillar.id}>
                <path
                  d={describeSegment(index)}
                  fill={`url(#${groupId}-grad-${pillar.id})`}
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth={isActive ? 3 : 1.5}
                  className={cn(
                    "cursor-pointer transition-[opacity,filter] duration-300 outline-none",
                    isActive ? "opacity-100" : "opacity-[0.82] hover:opacity-100",
                  )}
                  style={{ filter: isActive ? "brightness(1.1)" : undefined }}
                  onClick={() => setActiveId(pillar.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(pillar.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={pillar.title}
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none fill-white font-semibold"
                  style={{
                    fontSize: flip ? 11 : 12,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {pillar.shortLabel.split(" ").map((word, wi, arr) => (
                    <tspan key={word} x={x} dy={wi === 0 ? (arr.length > 1 ? -6 : 0) : 13}>
                      {word}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}

          <circle cx={CX} cy={CY} r={INNER_R - 4} fill="white" />
          <text
            x={CX}
            y={CY - 10}
            textAnchor="middle"
            className="fill-forest font-display font-bold"
            style={{ fontSize: 22 }}
          >
            Planetive
          </text>
          <text
            x={CX}
            y={CY + 14}
            textAnchor="middle"
            className="fill-n400 uppercase tracking-[0.2em]"
            style={{ fontSize: 9, fontFamily: "var(--font-h2)" }}
          >
            Ecosystem
          </text>
        </svg>

        <PillarQuickSelect
          pillars={ECOSYSTEM_PILLARS}
          activeId={activeId}
          onSelect={setActiveId}
          variant="dark"
          className="mt-6 lg:hidden"
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
