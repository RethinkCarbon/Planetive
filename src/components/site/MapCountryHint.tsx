import { useEffect, useRef, useState } from "react";
import { regions } from "react-svg-worldmap";
import { getLogoPartnersForCountry } from "@/lib/global-partners-map-content";

const NAME_TO_CODE = new Map(regions.map((r) => [r.name, r.code.toLowerCase()]));

type MapCountryHintProps = {
  mapRootRef: React.RefObject<HTMLDivElement | null>;
};

export function MapCountryHint({ mapRootRef }: MapCountryHintProps) {
  const [hint, setHint] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const root = mapRootRef.current;
    if (!root) return;

    const onEnter = (event: Event) => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      const path = event.currentTarget as SVGPathElement;
      const countryName = path.getAttribute("aria-label");
      if (!countryName) return;

      const code = NAME_TO_CODE.get(countryName);
      if (!code) {
        setHint(countryName);
        return;
      }

      const partners = getLogoPartnersForCountry(code);
      if (partners.length === 0) {
        setHint(countryName);
        return;
      }
      if (partners.length === 1) {
        setHint(`${countryName} — ${partners[0].name}`);
        return;
      }
      setHint(`${countryName} — ${partners.map((p) => p.name).join(" · ")}`);
    };

    const onLeave = () => {
      leaveTimer.current = setTimeout(() => setHint(null), 120);
    };

    const bound = new Set<SVGPathElement>();

    const bindPaths = () => {
      const paths = root.querySelectorAll<SVGPathElement>("path[aria-label]");
      paths.forEach((path) => {
        if (bound.has(path)) return;
        bound.add(path);
        path.addEventListener("mouseenter", onEnter);
        path.addEventListener("mouseleave", onLeave);
        path.addEventListener("focus", onEnter);
        path.addEventListener("blur", onLeave);
      });
    };

    bindPaths();
    const observer = new MutationObserver(bindPaths);
    observer.observe(root, { childList: true, subtree: true });

    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      observer.disconnect();
      bound.forEach((path) => {
        path.removeEventListener("mouseenter", onEnter);
        path.removeEventListener("mouseleave", onLeave);
        path.removeEventListener("focus", onEnter);
        path.removeEventListener("blur", onLeave);
      });
      bound.clear();
    };
  }, [mapRootRef]);

  return (
    <div
      className="pointer-events-none absolute bottom-4 left-1/2 z-20 max-w-[min(92%,28rem)] -translate-x-1/2"
      aria-live="polite"
    >
      <p
        className={`rounded-full border border-n200/90 bg-white/95 px-4 py-2 text-center text-xs md:text-sm font-medium text-forest shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all duration-200 ${
          hint ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        {hint ?? "Hover a highlighted country"}
      </p>
    </div>
  );
}
