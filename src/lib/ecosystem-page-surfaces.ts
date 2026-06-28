import { cn } from "@/lib/utils";

/**
 * Post-hero section backgrounds for ecosystem capability pages.
 *
 * Page body is already --n50 (#F5FAF7), so repeating n50 does not read as alternation.
 * Contrast comes from white sheets, n100 bands, mint wash, and occasional forest.
 */
export const ECOSYSTEM_SURFACE = {
  /** Curved transition directly under the dark hero */
  first:
    "relative z-10 -mt-6 md:-mt-8 bg-white rounded-t-[32px] md:rounded-t-[40px] border-t border-n200/50 shadow-[0_-8px_32px_-12px_rgba(10,61,46,0.08)]",
  /** Crisp editorial band — reads clearly against n50 page background */
  white: "bg-white border-y border-n200/50",
  whiteDivider: "bg-white border-y border-n200/60",
  /** Step darker than page bg — used on About, What We Do, Global Engagements */
  sheet: "bg-[var(--n100)] border-y border-n200/60",
  /** Visible mint wash — matches accent blocks elsewhere */
  mint: "bg-mint-soft/35 border-y border-canopy/20",
  /** Institutional forest band — use sparingly for featured sections */
  forest: "bg-forest text-white border-y border-forest",
  /** Soft forest tint when a full band is too heavy */
  forestTint: "bg-forest/[0.06] border-y border-forest/15",
  /** @deprecated Prefer `sheet` — n50 matches page background */
  canvas: "bg-[var(--n50)]",
  /** @deprecated Use `sheet` */
  muted: "bg-[var(--n100)] border-y border-n200/60",
} as const;

export function ecosystemSurface(...classes: (string | undefined)[]): string {
  return cn(...classes);
}
