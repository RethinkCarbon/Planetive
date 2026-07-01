import { PlanetiveEcosystemWheel } from "@/components/site/ecosystem/PlanetiveEcosystemWheel";

type EcosystemExplorerProps = {
  /** Keeps a segment visually emphasized (e.g. current venture page). */
  highlightSegmentId?: string;
  className?: string;
};

export function EcosystemExplorer({ highlightSegmentId, className }: EcosystemExplorerProps = {}) {
  return <PlanetiveEcosystemWheel highlightSegmentId={highlightSegmentId} className={className} />;
}
