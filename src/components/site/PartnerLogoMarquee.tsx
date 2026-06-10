import { PARTNER_LOGOS } from "@/lib/about-content";
import { cn } from "@/lib/utils";

type PartnerLogoMarqueeProps = {
  className?: string;
  title?: string;
  /** Span edge-to-edge (breaks out of container padding) */
  fullWidth?: boolean;
};

export function PartnerLogoMarquee({
  className,
  title = "Our partners",
  fullWidth = false,
}: PartnerLogoMarqueeProps) {
  return (
    <div className={cn("relative", fullWidth && "partner-marquee-bleed", className)}>
      <p className="text-center font-mono text-[11px] tracking-[0.2em] uppercase text-canopy mb-6 px-5 md:px-8">
        {title}
      </p>

      <div
        className={cn(
          "w-full border-y border-n200/80 bg-gradient-to-b from-white to-[var(--n50)]",
          fullWidth ? "rounded-none" : "rounded-[20px] border border-n200/80",
        )}
        aria-label="Partner logos"
      >
        <ul
          className={cn(
            "grid gap-5 sm:gap-6 py-8 md:py-10 px-5 sm:px-8 md:px-12",
            "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7",
            "max-w-[1400px] mx-auto",
          )}
        >
          {PARTNER_LOGOS.map((partner) => (
            <li key={partner.name} className="flex min-w-0">
              <PartnerLogoCard name={partner.name} src={partner.src} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PartnerLogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div
      className="flex w-full min-h-[5.5rem] md:min-h-[6rem] items-center justify-center rounded-2xl border border-n200/70 bg-white px-4 py-4 md:px-5 md:py-5 shadow-[var(--shadow-soft)]"
      title={name}
    >
      <img
        src={src}
        alt={name}
        className="block max-h-12 md:max-h-14 w-auto max-w-full object-contain object-center"
        width={160}
        height={56}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
