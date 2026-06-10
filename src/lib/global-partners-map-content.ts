import type { ISOCode } from "react-svg-worldmap";
import { regions } from "react-svg-worldmap";
import { PARTNER_LOGOS } from "@/lib/about-content";

export type GlobalMapPartner = {
  id: string;
  name: string;
  logoSrc: string;
  region: string;
  /** Optional detail shown when partner is selected */
  description?: string;
  countries: ISOCode[];
  color: string;
};

export const GLOBAL_MAP_PARTNERS: GlobalMapPartner[] = [
  {
    id: "lums",
    name: "LUMS",
    logoSrc: PARTNER_LOGOS.find((p) => p.name === "LUMS")?.src ?? "",
    region: "Pakistan",
    countries: ["pk"],
    color: "#1A6B4A",
  },
  {
    id: "mezzan",
    name: "Mezzan",
    logoSrc: PARTNER_LOGOS.find((p) => p.name === "Mezzan")?.src ?? "",
    region: "Kuwait & the Gulf",
    description:
      "Mezzan Holding Co. is a publicly listed manufacturing and distribution conglomerate based in Kuwait. It operates throughout the Gulf region (UAE, Saudi Arabia, Qatar, and beyond) in food, beverages, and FMCG — not Meezan Bank.",
    countries: ["kw", "ae", "sa", "qa"],
    color: "#2ECC8A",
  },
  {
    id: "hawkamah",
    name: "Hawkamah",
    logoSrc: PARTNER_LOGOS.find((p) => p.name === "Hawkamah")?.src ?? "",
    region: "United Arab Emirates",
    countries: ["ae"],
    color: "#0A3D2E",
  },
  {
    id: "relp",
    name: "RELP",
    logoSrc: PARTNER_LOGOS.find((p) => p.name === "RELP")?.src ?? "",
    region: "Saudi Arabia",
    countries: ["sa"],
    color: "#3D7A65",
  },
  {
    id: "ief",
    name: "IEF",
    logoSrc: PARTNER_LOGOS.find((p) => p.name === "IEF")?.src ?? "",
    region: "France & Saudi Arabia",
    countries: ["sa", "fr"],
    color: "#4A9E78",
  },
  {
    id: "the-do",
    name: "The DO",
    logoSrc: PARTNER_LOGOS.find((p) => p.name === "The DO")?.src ?? "",
    region: "Netherlands & Germany",
    countries: ["nl", "de"],
    color: "#6BB896",
  },
  {
    id: "spurt",
    name: "Spurt",
    logoSrc: PARTNER_LOGOS.find((p) => p.name === "Spurt")?.src ?? "",
    region: "United States",
    countries: ["us"],
    color: "#A8F0D4",
  },
];

export const GLOBAL_MAP_HUBS: GlobalMapPartner[] = [
  {
    id: "wef",
    name: "World Economic Forum",
    logoSrc: "",
    region: "Switzerland",
    countries: ["ch"],
    color: "#7A9488",
  },
  {
    id: "acoa",
    name: "ACOA / ACCA Africa",
    logoSrc: "",
    region: "South Africa",
    countries: ["za"],
    color: "#5C8F7A",
  },
  {
    id: "morocco",
    name: "Morocco",
    logoSrc: "",
    region: "Morocco",
    countries: ["ma"],
    color: "#6A9B85",
  },
  {
    id: "singapore",
    name: "Singapore",
    logoSrc: "",
    region: "Singapore",
    countries: ["sg"],
    color: "#8FB5A3",
  },
];

export const ALL_MAP_LOCATIONS = [...GLOBAL_MAP_PARTNERS, ...GLOBAL_MAP_HUBS];

const REGION_NAME_BY_CODE = Object.fromEntries(
  regions.map((r) => [r.code.toLowerCase(), r.name]),
) as Record<string, string>;

/** Highlighted countries on the map → display name */
export function getHighlightedCountryLabels(): { code: string; name: string }[] {
  const seen = new Set<string>();
  const labels: { code: string; name: string }[] = [];

  for (const partner of ALL_MAP_LOCATIONS) {
    for (const country of partner.countries) {
      const code = country.toLowerCase();
      if (seen.has(code)) continue;
      seen.add(code);
      labels.push({
        code,
        name: REGION_NAME_BY_CODE[code] ?? code.toUpperCase(),
      });
    }
  }

  return labels;
}

export function getPartnersForCountry(countryCode: string): GlobalMapPartner[] {
  const code = countryCode.toLowerCase();
  return ALL_MAP_LOCATIONS.filter((p) =>
    p.countries.some((c) => c.toLowerCase() === code),
  );
}

export function getLogoPartnersForCountry(countryCode: string): GlobalMapPartner[] {
  return getPartnersForCountry(countryCode).filter((p) =>
    GLOBAL_MAP_PARTNERS.some((lp) => lp.id === p.id),
  );
}

export function getPartnerForCountry(
  countryCode: string,
  focusId?: string | null,
): GlobalMapPartner | undefined {
  const code = countryCode.toLowerCase();

  if (focusId) {
    const focus = ALL_MAP_LOCATIONS.find((p) => p.id === focusId);
    if (focus?.countries.some((c) => c.toLowerCase() === code)) return focus;
    return undefined;
  }

  const logoPartners = getLogoPartnersForCountry(countryCode);
  if (logoPartners.length > 0) return logoPartners[0];

  return GLOBAL_MAP_HUBS.find((p) =>
    p.countries.some((c) => c.toLowerCase() === code),
  );
}

export function buildMapCountryData() {
  const seen = new Set<string>();
  const rows: { country: ISOCode; value: number }[] = [];

  for (const partner of ALL_MAP_LOCATIONS) {
    for (const country of partner.countries) {
      const key = country.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      rows.push({ country, value: 1 });
    }
  }

  return rows;
}

export const GLOBAL_PARTNERS_MAP_COPY = {
  eyebrow: "Global footprint",
  title: "Partners across the world",
  summary:
    "Our clients and partners span Pakistan, the Middle East, Europe, the Americas, and Africa — united by climate, energy, and sustainable finance goals.",
  mapHint: "Click a highlighted country to see which partners we work with in that region.",
  marqueeTitle: "Our partners",
};
