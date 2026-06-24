import { cn } from "@/lib/utils";
import { PLANETIVE_LOGO_SRC } from "@/lib/site-brand";

type ZoomSize = "nav" | "footer" | "wheel";

const ZOOM_SLOTS: Record<
  ZoomSize,
  { container: string; image: string; scale: string }
> = {
  nav: {
    container: "h-9 w-[8.75rem] md:h-10 md:w-[9.25rem]",
    image: "h-14 md:h-16",
    scale: "scale-[2.05] md:scale-[2.15]",
  },
  footer: {
    container: "h-12 w-[11rem] md:h-14 md:w-[12rem]",
    image: "h-16 md:h-[4.5rem]",
    scale: "scale-[2.15] md:scale-[2.3]",
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

  if (zoom) {
    const size: ZoomSize = zoom === true ? "nav" : zoom;
    const slot = ZOOM_SLOTS[size];

    return (
      <span
        className={cn(
          "relative inline-flex shrink-0 overflow-hidden",
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
        />
      </span>
    );
  }

  return (
    <img
      src={PLANETIVE_LOGO_SRC}
      alt="Planetive"
      className={cn("block h-11 w-auto object-contain object-left md:h-12", tone, className)}
      width={300}
      height={72}
    />
  );
}
