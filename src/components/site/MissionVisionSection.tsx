import type { ReactNode } from "react";

const MISSION =
  "Global leader in climate tech — empowering decarbonization, energy transition, and resilience.";

const VISION = "Intelligent systems that deliver lasting business upside.";

const CLOSING =
  "Validated technology, deployable capital, and deep expertise — we co-create and co-own.";

function MissionVisionColumn({
  label,
  children,
  className,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {label && (
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-mint-soft">{label}</p>
      )}
      <div className={label ? "mt-2 sm:mt-2.5" : undefined}>{children}</div>
    </div>
  );
}

export function HeroMissionVision() {
  return (
    <div
      className="hero-enter w-full border-t border-white/20 pt-6 sm:pt-8 md:pt-10"
      style={{ animationDelay: "0.52s" }}
    >
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-0">
        <MissionVisionColumn
          label="Mission"
          className="md:pr-8 lg:pr-12 xl:pr-16 md:border-r md:border-white/20"
        >
          <p className="font-ui text-sm md:text-[1.05rem] lg:text-[1.1rem] font-medium leading-snug text-n50/95 md:text-n50">
            {MISSION}
          </p>
        </MissionVisionColumn>

        <MissionVisionColumn
          label="Vision"
          className="md:px-8 lg:px-12 xl:px-16 md:border-r md:border-white/20 border-t border-white/20 pt-6 sm:pt-8 md:border-t-0 md:pt-0"
        >
          <p className="font-ui text-sm md:text-[1.05rem] lg:text-[1.1rem] font-medium leading-snug text-n50/95 md:text-n50">
            {VISION}
          </p>
        </MissionVisionColumn>

        <MissionVisionColumn
          label="Approach"
          className="md:pl-8 lg:pl-12 xl:pl-16 border-t border-white/20 pt-6 sm:pt-8 md:border-t-0 md:pt-0"
        >
          <p className="font-ui text-sm md:text-[1.05rem] lg:text-[1.1rem] font-medium leading-snug text-n50/95 md:text-n50">
            {CLOSING}
          </p>
        </MissionVisionColumn>
      </div>
    </div>
  );
}
