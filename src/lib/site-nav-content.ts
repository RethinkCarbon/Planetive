/** Site-wide navigation structure — ecosystem routes are canonical. */

export type NavLink = {
  to: string;
  label: string;
  color?: string;
};

export type NavLinkGroup = {
  title: string;
  items: readonly NavLink[];
};

export const NAV_SOLUTION_GROUPS: readonly NavLinkGroup[] = [
  {
    title: "Platforms",
    items: [
      { to: "/ecosystem/rethink-carbon", label: "Rethink Carbon", color: "#1a4d3a" },
      { to: "/ecosystem/digital-mrv-platforms", label: "Digital MRV Platforms", color: "#1e5340" },
      { to: "/ecosystem/agri-tech-solutions", label: "Agri Tech Solutions", color: "#244c42" },
      {
        to: "/ecosystem/energy-sector-intelligence",
        label: "Energy Sector Intelligence",
        color: "#2a6250",
      },
    ],
  },
  {
    title: "Advisory & Delivery",
    items: [
      { to: "/ecosystem/advisory-house", label: "Advisory House", color: "#1f4f3c" },
      { to: "/ecosystem/project-development", label: "Project Development", color: "#183b2f" },
    ],
  },
  {
    title: "People & Systems",
    items: [
      {
        to: "/ecosystem/energy-transition-workforce",
        label: "Energy Transition Workforce",
        color: "#2f6e50",
      },
      {
        to: "/ecosystem/in-house-agents",
        label: "Planetive Intelligence Systems",
        color: "#2a6650",
      },
    ],
  },
] as const;

export const NAV_ECOSYSTEM_OVERVIEW = {
  to: "/what-we-do",
  label: "Ecosystem Overview",
} as const;

/** Top-level Consulting menu — advisory services + booking entry. */
export const NAV_CONSULTING_LINKS: readonly NavLink[] = [
  { to: "/consulting", label: "Consulting Overview" },
  { to: "/ecosystem/advisory-house", label: "Advisory House" },
  { to: "/ecosystem/project-development", label: "Project Development" },
] as const;

export const NAV_CONSULTING_BOOK = {
  to: "/consulting",
  hash: "book",
  label: "Book a consultation",
} as const;

/** Top-level Ecosystem menu — holistic view + company entry points. */
export const NAV_ECOSYSTEM_LINKS: readonly NavLink[] = [
  { to: "/what-we-do", label: "Ecosystem Overview" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

/** Sidebar in Solutions mega — kept minimal to avoid Insights / Ecosystem overlap. */
export const NAV_EXPLORE_LINKS: readonly NavLink[] = [
  { to: "/contact", label: "Contact" },
] as const;

export const NAV_PUBLICATIONS_LINKS: readonly NavLink[] = [
  { to: "/blog", label: "Blog" },
  { to: "/global-engagements", label: "Global Engagements" },
] as const;

/** @deprecated Use NAV_PUBLICATIONS_LINKS */
export const NAV_INSIGHTS_LINKS = NAV_PUBLICATIONS_LINKS;

export type NavMenuId = "solutions" | "publications";

export function isConsultingNavPath(pathname: string) {
  return pathname === "/consulting";
}

export function isSolutionsPath(pathname: string) {
  return pathname.startsWith("/ecosystem/") || pathname.startsWith("/industries/");
}

export function isEcosystemNavPath(pathname: string) {
  return NAV_ECOSYSTEM_LINKS.some(
    (l) => pathname === l.to || pathname.startsWith(`${l.to}/`),
  );
}

export function isEcosystemPath(pathname: string) {
  return pathname.startsWith("/ecosystem/") || pathname.startsWith("/what-we-do");
}

export function isIndustriesPath(pathname: string) {
  return pathname.startsWith("/industries/");
}

export function isPublicationsPath(pathname: string) {
  return NAV_PUBLICATIONS_LINKS.some(
    (l) => pathname === l.to || pathname.startsWith(`${l.to}/`),
  );
}

/** @deprecated Use isPublicationsPath */
export function isInsightsPath(pathname: string) {
  return isPublicationsPath(pathname);
}
