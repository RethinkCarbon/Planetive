import { useCallback, useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Bot,
  Compass,
  Hammer,
  LineChart,
  ShieldCheck,
  Truck,
  Users,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PlanetiveLogo } from "@/components/site/PlanetiveLogo";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  ECOSYSTEM_WHEEL_SEGMENTS,
  WHEEL_COLORS,
  type EcosystemWheelIcon,
  type EcosystemWheelSegment,
} from "@/lib/ecosystem-wheel-content";

const CX = 200;
const CY = 200;
const OUTER_R = 196;
const CENTER_R = 86;
const INNER_R = 92;
const OUTER_RADIUS_FRAC = OUTER_R / CX;
const INNER_RADIUS_FRAC = INNER_R / CX;
const LABEL_RADIUS_PCT = ((INNER_R + OUTER_R) / 2 / CX) * 50;
const ICON_RADIUS_PCT = ((INNER_R + (OUTER_R - INNER_R) * 0.82) / CX) * 50;
const CENTER_SIZE_PCT = (CENTER_R / CX) * 100;
const SEGMENT_COUNT = ECOSYSTEM_WHEEL_SEGMENTS.length;
const SEGMENT_ANGLE = 360 / SEGMENT_COUNT;
const ROTATION_OFFSET = -90 - SEGMENT_ANGLE / 2;
const ROTATION_MS = 80_000;
const POP_PX = 10;
const POP_PCT = (POP_PX / 400) * 100;
const RESUME_DELAY_MS = 500;
const ARC_STEPS = 32;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function segmentMidAngle(index: number) {
  return ROTATION_OFFSET + index * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
}

function pointToPercent(angleDeg: number, radiusFrac: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const x = 50 + radiusFrac * 50 * Math.cos(rad);
  const y = 50 + radiusFrac * 50 * Math.sin(rad);
  return `${x}% ${y}%`;
}

function annularWedgeClipPath(index: number) {
  const start = ROTATION_OFFSET + index * SEGMENT_ANGLE;
  const end = start + SEGMENT_ANGLE;
  const points: string[] = [];

  for (let i = 0; i <= ARC_STEPS; i++) {
    const angle = end - (i / ARC_STEPS) * SEGMENT_ANGLE;
    points.push(pointToPercent(angle, OUTER_RADIUS_FRAC));
  }
  for (let i = 0; i <= ARC_STEPS; i++) {
    const angle = start + (i / ARC_STEPS) * SEGMENT_ANGLE;
    points.push(pointToPercent(angle, INNER_RADIUS_FRAC));
  }

  return `polygon(${points.join(", ")})`;
}

function popTranslatePercent(midDeg: number) {
  const rad = ((midDeg - 90) * Math.PI) / 180;
  return {
    x: Math.cos(rad) * POP_PCT,
    y: Math.sin(rad) * POP_PCT,
  };
}

const WHEEL_ICONS: Record<EcosystemWheelIcon, LucideIcon> = {
  "bar-chart": BarChart3,
  "shield-check": ShieldCheck,
  wheat: Wheat,
  "line-chart": LineChart,
  truck: Truck,
  users: Users,
  bot: Bot,
  compass: Compass,
  hammer: Hammer,
};

function SegmentIcon({ icon }: { icon: EcosystemWheelIcon }) {
  const Icon = WHEEL_ICONS[icon];
  return (
    <Icon
      className="shrink-0 text-white"
      size={18}
      strokeWidth={2}
      aria-hidden
    />
  );
}

function SegmentWedge({
  segment,
  index,
  wheelDeg,
  isHovered,
  onActivate,
  onDeactivate,
}: {
  segment: EcosystemWheelSegment;
  index: number;
  wheelDeg: number;
  isHovered: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  const mid = segmentMidAngle(index);
  const pop = isHovered ? popTranslatePercent(mid) : { x: 0, y: 0 };
  const labelOffset = segmentMidAngle(index);
  const labelRad = ((labelOffset - 90) * Math.PI) / 180;
  const iconRad = ((labelOffset - 90) * Math.PI) / 180;
  const labelX = 50 + Math.cos(labelRad) * LABEL_RADIUS_PCT;
  const labelY = 50 + Math.sin(labelRad) * LABEL_RADIUS_PCT;
  const iconX = 50 + Math.cos(iconRad) * ICON_RADIUS_PCT;
  const iconY = 50 + Math.sin(iconRad) * ICON_RADIUS_PCT;

  return (
    <div
      className={cn("ecosystem-segment-scene absolute inset-0 cursor-pointer outline-none", isHovered && "z-[15]")}
      style={{
        clipPath: annularWedgeClipPath(index),
        transform: `translate(${pop.x}%, ${pop.y}%)`,
      }}
      role={segment.url ? "link" : "button"}
      tabIndex={0}
      aria-label={segment.url ? `${segment.name} (opens in new tab)` : segment.name}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={() => {
        if (segment.url) {
          window.open(segment.url, "_blank", "noopener,noreferrer");
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (segment.url) {
            window.open(segment.url, "_blank", "noopener,noreferrer");
          } else {
            onActivate();
          }
        }
      }}
    >
      <div
        className="ecosystem-segment-body absolute inset-0"
        style={{ backgroundColor: isHovered ? WHEEL_COLORS.hover : segment.color }}
      >
        <div className={cn("ecosystem-segment-front-content", isHovered && "is-hidden")}>
          <div
            className="absolute"
            style={{
              left: `${iconX}%`,
              top: `${iconY}%`,
              transform: `translate(-50%, -50%) rotate(${-wheelDeg}deg)`,
            }}
          >
            <SegmentIcon icon={segment.icon} />
          </div>
          <div
            className="absolute flex flex-col items-center gap-0.5 px-2"
            style={{
              left: `${labelX}%`,
              top: `${labelY}%`,
              transform: `translate(-50%, -50%) rotate(${-wheelDeg}deg)`,
            }}
          >
            {segment.lines.map((line) => (
              <span
                key={line}
                className="block text-[0.8rem] font-semibold leading-tight text-white sm:text-[0.9rem]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {line}
              </span>
            ))}
          </div>
        </div>

        <div className={cn("ecosystem-segment-back-content", isHovered && "is-visible")}>
          <div
            className="absolute"
            style={{
              left: `${labelX}%`,
              top: `${labelY}%`,
              transform: `translate(-50%, -50%) rotate(${-wheelDeg}deg)`,
            }}
          >
            <p
              className="w-[9rem] text-center text-[0.72rem] leading-snug text-white sm:w-[10rem] sm:text-[0.8rem]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {segment.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WheelDividers() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      {Array.from({ length: SEGMENT_COUNT }, (_, index) => {
        const angle = ROTATION_OFFSET + index * SEGMENT_ANGLE;
        const inner = polarToCartesian(CX, CY, INNER_R, angle);
        const outer = polarToCartesian(CX, CY, OUTER_R, angle);
        return (
          <line
            key={index}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke={WHEEL_COLORS.divider}
            strokeWidth={2}
          />
        );
      })}
    </svg>
  );
}

function StaticCenter() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white shadow-[0_8px_24px_rgba(10,61,46,0.12)]"
        style={{ width: `${CENTER_SIZE_PCT}%`, height: `${CENTER_SIZE_PCT}%` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-3 text-center"
        style={{ width: `${CENTER_SIZE_PCT}%`, height: `${CENTER_SIZE_PCT}%` }}
      >
        <PlanetiveLogo zoom="wheel" />
        <p
          className="mt-1 text-[0.62rem] tracking-[0.24em] uppercase sm:text-[0.68rem]"
          style={{ color: WHEEL_COLORS.centerText, fontFamily: "var(--font-body)", opacity: 0.72 }}
        >
          Ecosystem
        </p>
      </div>
    </>
  );
}

export function PlanetiveEcosystemWheel() {
  const reducedMotion = usePrefersReducedMotion();
  const [wheelDeg, setWheelDeg] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pausedRef = useRef(reducedMotion);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = reducedMotion;
      resumeTimerRef.current = null;
    }, RESUME_DELAY_MS);
  }, [reducedMotion]);

  useEffect(() => {
    pausedRef.current = reducedMotion;
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    let raf = 0;
    let prev = performance.now();

    const tick = (now: number) => {
      const dt = now - prev;
      prev = now;
      if (!pausedRef.current) {
        setWheelDeg((deg) => (deg + (dt / ROTATION_MS) * 360) % 360);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  useEffect(
    () => () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    },
    [],
  );

  const activateSegment = (index: number) => {
    pause();
    setHoveredIndex(index);
  };

  const handleWheelLeave = () => {
    setHoveredIndex(null);
    scheduleResume();
  };

  const handleSegmentBlur = () => {
    window.setTimeout(() => {
      const active = document.activeElement;
      if (containerRef.current?.contains(active)) return;
      setHoveredIndex(null);
      scheduleResume();
    }, 0);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[min(100%,30rem)] sm:max-w-[34rem] lg:max-w-[40rem] xl:max-w-[44rem]"
      onMouseLeave={handleWheelLeave}
      role="group"
      aria-label="Planetive ecosystem — nine ventures in a rotating wheel"
    >
      <div className="relative aspect-square">
        <StaticCenter />

        <div
          className="absolute inset-0"
          style={{ transform: `rotate(${wheelDeg}deg)` }}
        >
          <div className="absolute inset-0">
            {ECOSYSTEM_WHEEL_SEGMENTS.map((segment, index) => (
              <SegmentWedge
                key={segment.id}
                segment={segment}
                index={index}
                wheelDeg={wheelDeg}
                isHovered={hoveredIndex === index}
                onActivate={() => activateSegment(index)}
                onDeactivate={handleSegmentBlur}
              />
            ))}
          </div>
          <WheelDividers />
        </div>
      </div>
    </div>
  );
}
