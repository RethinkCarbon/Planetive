import type { EcosystemPillar } from "@/lib/what-we-do-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import {
  PillarBackLink,
  PillarCapabilities,
  PillarFooter,
  pillarImgStyle,
} from "@/components/site/pillar-layouts/PillarPageShared";

/** Layout C — sticky image column, scrolling copy (AI agents) */
export function PillarLayoutSplit({ pillar }: { pillar: EcosystemPillar }) {
  return (
    <article className="bg-[var(--n100)] min-h-screen">
      <div className="container-x pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ScrollReveal variant="fade-up">
                <PillarBackLink />
                <figure className="mt-8 overflow-hidden rounded-sm border border-n200/80 bg-white shadow-[var(--shadow-soft)]">
                  <img
                    src={pillar.image}
                    alt=""
                    className="w-full aspect-[4/5] object-cover"
                    style={pillarImgStyle(pillar)}
                    loading="eager"
                  />
                </figure>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal variant="fade-up" delay={60}>
              <p className="text-sm font-mono uppercase tracking-wider text-canopy">
                {pillar.shortLabel}
              </p>
              <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-forest">
                {pillar.title}
              </h1>
              <p className="mt-4 text-lg text-n600 leading-relaxed">{pillar.tagline}</p>

              <div className="mt-10 space-y-6 text-[15px] md:text-base text-n700 leading-[1.8]">
                <p className="text-n800 text-lg">{pillar.description}</p>
                {pillar.body.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>

              <div className="mt-12 p-6 md:p-8 bg-white border border-n200/80 rounded-sm">
                <PillarCapabilities pillar={pillar} variant="plain" />
              </div>

              <PillarFooter pillar={pillar} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </article>
  );
}
