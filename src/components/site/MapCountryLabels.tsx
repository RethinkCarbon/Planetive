import { useLayoutEffect, useState } from "react";
import { regions } from "react-svg-worldmap";
import {
  getHighlightedCountryLabels,
  getPartnersForCountry,
} from "@/lib/global-partners-map-content";

const CODE_TO_NAME = Object.fromEntries(regions.map((r) => [r.code.toLowerCase(), r.name]));

type LabelPoint = {
  code: string;
  name: string;
  cx: number;
  cy: number;
  lx: number;
  ly: number;
};

type MapCountryLabelsProps = {
  mapRootRef: React.RefObject<HTMLDivElement | null>;
  focusId: string | null;
};

function centroidOfPath(path: SVGPathElement) {
  const bbox = path.getBBox();
  return { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
}

function computeLabels(svg: SVGSVGElement): LabelPoint[] {
  const w = svg.width.baseVal.value;
  const h = svg.height.baseVal.value;
  const mx = w / 2;
  const my = h / 2;
  const offset = Math.min(w, h) * 0.085;

  const points: LabelPoint[] = [];

  for (const { code, name } of getHighlightedCountryLabels()) {
    const countryName = CODE_TO_NAME[code];
    if (!countryName) continue;

    const path = svg.querySelector<SVGPathElement>(`path[aria-label="${countryName}"]`);
    if (!path) continue;

    const { x: cx, y: cy } = centroidOfPath(path);
    const dx = cx - mx;
    const dy = cy - my;
    const len = Math.hypot(dx, dy) || 1;

    points.push({
      code,
      name,
      cx,
      cy,
      lx: cx + (dx / len) * offset,
      ly: cy + (dy / len) * offset,
    });
  }

  return points;
}

export function MapCountryLabels({ mapRootRef, focusId }: MapCountryLabelsProps) {
  const [viewBox, setViewBox] = useState("0 0 960 720");
  const [labels, setLabels] = useState<LabelPoint[]>([]);
  const [fontSize, setFontSize] = useState(12);

  useLayoutEffect(() => {
    const root = mapRootRef.current;
    if (!root) return;

    const measure = () => {
      const svg = root.querySelector("svg");
      if (!svg) return;
      const w = svg.width.baseVal.value;
      const h = svg.height.baseVal.value;
      setViewBox(`0 0 ${w} ${h}`);
      setFontSize(Math.max(10, Math.min(13, w / 72)));
      setLabels(computeLabels(svg));
    };

    measure();
    const observer = new MutationObserver(measure);
    observer.observe(root, { childList: true, subtree: true });
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [mapRootRef]);

  if (labels.length === 0) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full hidden sm:block"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {labels.map((label) => {
        const isActiveCountry =
          !focusId || getPartnersForCountry(label.code).some((p) => p.id === focusId);

        return (
          <text
            key={label.code}
            x={label.lx}
            y={label.ly}
            textAnchor={label.lx > label.cx ? "start" : "end"}
            dominantBaseline="middle"
            fill="#0A3D2E"
            fontSize={fontSize}
            fontWeight={600}
            fontFamily="var(--font-body)"
            opacity={isActiveCountry ? 1 : 0.22}
          >
            {label.name}
          </text>
        );
      })}
    </svg>
  );
}
