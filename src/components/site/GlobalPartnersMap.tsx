import { useCallback, useMemo, useRef, useState, type CSSProperties } from "react";
import WorldMap, { type CountryContext } from "react-svg-worldmap";
import {
  ALL_MAP_LOCATIONS,
  GLOBAL_MAP_PARTNERS,
  GLOBAL_PARTNERS_MAP_COPY,
  buildMapCountryData,
  getLogoPartnersForCountry,
  getPartnersForCountry,
  type GlobalMapPartner,
} from "@/lib/global-partners-map-content";
import { MapCountryHint } from "@/components/site/MapCountryHint";
import { MapCountryLabels } from "@/components/site/MapCountryLabels";
import { PartnerLogoMarquee } from "@/components/site/PartnerLogoMarquee";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const MAP_DATA = buildMapCountryData();

export function GlobalPartnersMapSection() {
  const mapRootRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activePartner = useMemo(
    () => ALL_MAP_LOCATIONS.find((p) => p.id === activeId) ?? null,
    [activeId],
  );

  const styleFunction = useMemo(
    () => (ctx: CountryContext<number>) => styleCountry(ctx, activeId),
    [activeId],
  );

  const togglePartner = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const handleCountryClick = useCallback(
    (countryCode: string) => {
      const partners = getLogoPartnersForCountry(countryCode);
      if (partners.length === 0) return;

      if (partners.length === 1) {
        togglePartner(partners[0].id);
        return;
      }

      const currentIdx = partners.findIndex((p) => p.id === activeId);
      const next = partners[(currentIdx + 1) % partners.length];
      setActiveId(next.id);
    },
    [activeId, togglePartner],
  );

  return (
    <section className="py-14 md:py-20 bg-white border-b border-n200/60 overflow-x-hidden">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            {GLOBAL_PARTNERS_MAP_COPY.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-forest">
            {GLOBAL_PARTNERS_MAP_COPY.title}
          </h2>
          <p className="mt-4 text-n600 text-sm md:text-base leading-relaxed">
            {GLOBAL_PARTNERS_MAP_COPY.summary}
          </p>
          <p className="mt-3 text-xs text-n400">{GLOBAL_PARTNERS_MAP_COPY.mapHint}</p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={60}>
          <div className="mx-auto max-w-5xl">
            <div className="relative rounded-[28px] border border-n200/80 overflow-hidden shadow-[var(--shadow-elevated)] partner-map-frame bg-[var(--n100)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 85% 75% at 50% 50%, #e8f4ef 0%, #d4e8de 45%, #c0dcd4 100%)",
                }}
              />

              <div className="partner-map-shell relative z-10 flex w-full flex-col items-center justify-center px-2 py-4 sm:px-6 sm:py-6 md:py-8">
                <div className="partner-map-zoom w-full">
                  <div ref={mapRootRef} className="partner-map-world relative">
                    <WorldMap
                    data={MAP_DATA}
                    size="responsive"
                    frame={false}
                    backgroundColor="transparent"
                    borderColor="#8fa89c"
                    color="#A8F0D4"
                    strokeOpacity={0.45}
                    richInteraction={false}
                    tooltipBgColor="transparent"
                    tooltipTextColor="transparent"
                    containerClassName="partner-map-world__map"
                    styleFunction={styleFunction}
                    onClickFunction={({ countryCode }) => handleCountryClick(countryCode)}
                    tooltipTextFunction={({ countryName }) => countryName}
                    />
                    <MapCountryLabels mapRootRef={mapRootRef} focusId={activeId} />
                  </div>
                </div>
                <MapCountryHint mapRootRef={mapRootRef} />
              </div>
            </div>

            {activePartner && (
              <ActivePartnerBanner partner={activePartner} onClear={() => setActiveId(null)} />
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={120} className="mt-14 md:mt-16">
          <PartnerLogoMarquee title={GLOBAL_PARTNERS_MAP_COPY.marqueeTitle} fullWidth />
        </ScrollReveal>
      </div>
    </section>
  );
}

function styleCountry(ctx: CountryContext<number>, focusId: string | null) {
  const code = ctx.countryCode.toLowerCase();
  const partners = getPartnersForCountry(code);
  const base: CSSProperties = {
    stroke: "#8fa89c",
    strokeWidth: 0.35,
    transition: "fill 0.28s ease, fill-opacity 0.28s ease, stroke 0.28s ease",
    cursor: partners.length > 0 ? "pointer" : "default",
  };

  if (partners.length === 0) {
    return {
      ...base,
      fill: "#f2f7f4",
      fillOpacity: focusId ? 0.45 : 1,
      stroke: "#d0ddd6",
    };
  }

  const focusPartner = focusId
    ? ALL_MAP_LOCATIONS.find((p) => p.id === focusId)
    : null;

  const isInFocus =
    focusPartner?.countries.some((c) => c.toLowerCase() === code) ?? false;

  const logoPartners = partners.filter((p) =>
    GLOBAL_MAP_PARTNERS.some((lp) => lp.id === p.id),
  );
  const displayPartner = focusPartner && isInFocus
    ? focusPartner
    : logoPartners[0] ?? partners[0];

  if (focusId) {
    if (isInFocus) {
      return {
        ...base,
        fill: displayPartner.color,
        fillOpacity: 0.9,
        stroke: "#0A3D2E",
        strokeWidth: 1,
      };
    }
    return {
      ...base,
      fill: "#eef4f1",
      fillOpacity: 0.55,
      stroke: "#d5e3dc",
    };
  }

  const multiPartner = logoPartners.length > 1;
  return {
    ...base,
    fill: displayPartner.color,
    fillOpacity: multiPartner ? 0.65 : 0.52,
    stroke: multiPartner ? "#0A3D2E" : displayPartner.color,
    strokeWidth: multiPartner ? 0.65 : 0.4,
  };
}

function ActivePartnerBanner({
  partner,
  onClear,
}: {
  partner: GlobalMapPartner;
  onClear: () => void;
}) {
  const countries = partner.countries.map((c) => c.toUpperCase()).join(", ");

  return (
    <div
      className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-n200/80 bg-white px-5 py-4 shadow-[var(--shadow-soft)]"
      role="status"
    >
      <div className="flex items-center gap-4 min-w-0">
        {partner.logoSrc && (
          <div className="h-12 w-20 shrink-0 flex items-center justify-center rounded-xl bg-[var(--n50)] border border-n200/60 px-2">
            <img src={partner.logoSrc} alt="" className="max-h-9 max-w-full object-contain" />
          </div>
        )}
        <div>
          <p className="text-sm text-n500">Showing footprint for</p>
          <p className="font-display text-lg text-forest">{partner.name}</p>
          <p className="text-xs text-n400 mt-0.5">
            {partner.region}
            {partner.countries.length > 1 && ` · ${countries}`}
          </p>
          {partner.description && (
            <p className="mt-2 text-xs text-n600 leading-relaxed max-w-xl">
              {partner.description}
            </p>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="shrink-0 rounded-full px-4 py-2 text-xs font-semibold border border-n200 text-n600 hover:border-canopy hover:text-forest transition-colors"
      >
        Clear selection
      </button>
    </div>
  );
}
