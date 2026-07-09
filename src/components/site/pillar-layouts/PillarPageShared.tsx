import type { CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import {
  ECOSYSTEM_PILLARS,
  getRelatedServices,
  whatWeDoServicePath,
  type EcosystemPillar,
} from "@/lib/what-we-do-content";

export function PillarBackLink({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/what-we-do"
      className={`inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-forest transition-colors ${className}`}
    >
      <ArrowLeft size={16} aria-hidden />
      What we do
    </Link>
  );
}

export function PillarFooter({ pillar }: { pillar: EcosystemPillar }) {
  const otherPillars = ECOSYSTEM_PILLARS.filter((p) => p.id !== pillar.id);
  const relatedServices = getRelatedServices(pillar);

  return (
    <footer className="mt-14 pt-10 border-t border-n200/80">
      {relatedServices.length > 0 && (
        <div className="mb-8">
          <h2 className="font-display text-lg text-forest">Related work</h2>
          <ul className="mt-3 space-y-1.5">
            {relatedServices.map((svc) => (
              <li key={svc.id}>
                <Link
                  to={whatWeDoServicePath(svc.id)}
                  className="text-canopy font-medium hover:text-forest hover:underline underline-offset-4"
                >
                  {svc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="text-sm text-n500">
        Also in what we do:{" "}
        {otherPillars.map((p, i) => (
          <span key={p.id}>
            {i > 0 && " Â· "}
            <Link
              to={whatWeDoServicePath(p.id)}
              className="text-canopy hover:text-forest hover:underline underline-offset-4"
            >
              {p.shortLabel}
            </Link>
          </span>
        ))}
      </p>
      <p className="mt-8 text-n600">
        <Link
          to="/contact"
          className="font-semibold text-forest hover:text-canopy underline underline-offset-4"
        >
          Get in touch
        </Link>{" "}
        if you want to talk through a project in this area.
      </p>
    </footer>
  );
}

export function PillarCapabilities({
  pillar,
  variant = "border",
}: {
  pillar: EcosystemPillar;
  variant?: "border" | "plain" | "numbered";
}) {
  if (variant === "numbered") {
    return (
      <div>
        <h2 className="font-display text-xl text-forest">What we cover</h2>
        <ol className="mt-6 space-y-4">
          {pillar.capabilities.map((cap, i) => (
            <li key={cap} className="flex gap-4 text-sm md:text-base text-n700 leading-relaxed">
              <span className="font-mono text-sm text-canopy shrink-0">{i + 1}.</span>
              {cap}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (variant === "plain") {
    return (
      <div>
        <h2 className="font-display text-xl text-forest">What we cover</h2>
        <ul className="mt-5 space-y-3 text-n700 leading-relaxed">
          {pillar.capabilities.map((cap) => (
            <li key={cap} className="text-sm md:text-base">
              {cap}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="border-l-2 border-canopy/40 pl-6 md:pl-8">
      <h2 className="font-display text-xl text-forest">What we cover</h2>
      <ul className="mt-5 space-y-3 text-n700 leading-relaxed">
        {pillar.capabilities.map((cap) => (
          <li key={cap} className="text-sm md:text-base">
            {cap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function pillarImgStyle(pillar: EcosystemPillar): CSSProperties | undefined {
  return pillar.imagePosition ? { objectPosition: pillar.imagePosition } : undefined;
}
