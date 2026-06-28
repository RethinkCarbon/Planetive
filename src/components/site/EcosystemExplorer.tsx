import { PlanetiveEcosystemWheel } from "@/components/site/ecosystem/PlanetiveEcosystemWheel";

type EcosystemExplorerProps = {
  /** Keeps a segment visually emphasized (e.g. current venture page). */
  highlightSegmentId?: string;
};

export function EcosystemExplorer({ highlightSegmentId }: EcosystemExplorerProps = {}) {
  return <PlanetiveEcosystemWheel highlightSegmentId={highlightSegmentId} />;
}
