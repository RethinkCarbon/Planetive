import { cn } from "@/lib/utils";
import { PLANETIVE_LOGO_SRC, PLANETIVE_WORDMARK_SRC } from "@/lib/site-brand";

type ZoomSize = "nav" | "footer" | "wheel";

/**
 * Footer/wheel still crop the padded square mark. Nav uses a tight wordmark asset.
 */
const ZOOM_SLOTS: Record<
  Exclude<ZoomSize, "nav">,
  { container: string; image: string; scale: string }
> = {
  footer: {
    container: "h-12 w-[11rem] md:h-14 md:w-[12rem]",
    image: "h-16 md:h-[4.5rem]",
    scale: "scale-[2.05] md:scale-[2.15]",
  },
  wheel: {
    container: "h-12 w-[8.5rem] sm:h-14 sm:w-[9.5rem]",
    image: "h-16 sm:h-[4.5rem]",
    scale: "scale-[2.05] sm:scale-[2.2]",
  },
};

type PlanetiveLogoProps = {
  className?: string;
  /** White wordmark on dark backgrounds (hero nav, footer) */
  onDark?: boolean;
  /** Enlarge inside a fixed slot without growing the layout */
  zoom?: boolean | ZoomSize;
};

export function PlanetiveLogo({ className, onDark = false, zoom = false }: PlanetiveLogoProps) {
  const tone = onDark ? "brightness-0 invert" : "";

  if (zoom === true || zoom === "nav") {
    return (
      <span
        className={cn(
          "site-header-logo relative inline-flex h-7 w-[7.25rem] shrink-0 items-center justify-start overflow-hidden sm:h-8 sm:w-[8.25rem] md:h-8 md:w-[8.75rem] xl:h-9 xl:w-[9.5rem]",
          className,
        )}
      >
        <img
          src={PLANETIVE_WORDMARK_SRC}
          alt="Planetive"
          className={cn("block h-[85%] w-auto max-w-none object-contain object-left", tone)}
          width={418}
          height={73}
          decoding="async"
        />
      </span>
    );
  }

  if (zoom) {
    const slot = ZOOM_SLOTS[zoom];

    return (
      <span
        className={cn(
          "relative inline-flex shrink-0 overflow-hidden rounded-sm",
          slot.container,
          className,
        )}
      >
        <img
          src={PLANETIVE_LOGO_SRC}
          alt="Planetive"
          className={cn(
            "absolute left-0 top-1/2 w-auto max-w-none -translate-y-1/2 origin-left",
            slot.image,
            slot.scale,
            tone,
          )}
          width={380}
          height={96}
          decoding="async"
        />
      </span>
    );
  }

  return (
    <img
      src={PLANETIVE_WORDMARK_SRC}
      alt="Planetive"
      className={cn(
        "block h-8 w-auto max-w-[9.5rem] object-contain object-left md:h-9",
        tone,
        className,
      )}
      width={418}
      height={73}
      decoding="async"
    />
  );
}
