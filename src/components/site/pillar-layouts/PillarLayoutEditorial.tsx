import type { EcosystemPillar } from "@/lib/what-we-do-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import {
  PillarBackLink,
  PillarCapabilities,
  PillarFooter,
  pillarImgStyle,
} from "@/components/site/pillar-layouts/PillarPageShared";

/** Layout A — narrow article column, image then prose (Advisory) */
export function PillarLayoutEditorial({ pillar }: { pillar: EcosystemPillar }) {
  return (
    <>
      <header className="pt-32 md:pt-40 pb-10 md:pb-12 bg-[var(--n50)] border-b border-n200/70">
        <div className="container-x max-w-3xl">
          <ScrollReveal variant="fade-up">
            <PillarBackLink />
            <p className="mt-6 text-sm font-medium text-canopy">{pillar.shortLabel}</p>
            <h1 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-forest">
              {pillar.title}
            </h1>
            <p className="mt-4 text-lg text-n600 leading-relaxed">{pillar.tagline}</p>
          </ScrollReveal>
        </div>
      </header>

      <article className="pb-20 md:pb-28 bg-[var(--n50)]">
        <div className="container-x max-w-3xl mx-auto">
          <ScrollReveal variant="fade-up">
            <figure className="mt-10 md:mt-12">
              <img
                src={pillar.image}
                alt=""
                className="w-full aspect-[3/2] object-cover rounded-sm"
                style={pillarImgStyle(pillar)}
                loading="eager"
              />
            </figure>

            <div className="mt-10 md:mt-12 space-y-6 text-[15px] md:text-base text-n700 leading-[1.75]">
              <p className="text-n800 text-lg leading-relaxed">{pillar.description}</p>
              {pillar.body.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>

            <div className="mt-12 md:mt-16">
              <PillarCapabilities pillar={pillar} variant="border" />
            </div>

            <PillarFooter pillar={pillar} />
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
