import { cn } from "@/lib/utils";

export function EcosystemSectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "max-w-xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-ui font-semibold text-type-h2 text-forest leading-tight",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-type-body-lg text-n600 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
