import type { EcosystemPillar } from "@/lib/what-we-do-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import {
  PillarBackLink,
  PillarFooter,
  pillarImgStyle,
} from "@/components/site/pillar-layouts/PillarPageShared";

/** Layout B — full-width image hero with overlaid title (Platforms) */
export function PillarLayoutCinematic({ pillar }: { pillar: EcosystemPillar }) {
  return (
    <>
      <section className="relative isolate min-h-[70vh] md:min-h-[78vh] flex flex-col justify-end text-white overflow-hidden">
        <img
          src={pillar.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={pillarImgStyle(pillar)}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${pillar.color}f2 0%, ${pillar.color}99 35%, rgba(10,61,46,0.55) 100%)`,
          }}
        />
        <div className="container-x relative z-10 pt-32 pb-12 md:pb-16">
          <ScrollReveal variant="fade-up" className="max-w-2xl">
            <PillarBackLink className="!text-mint-soft hover:!text-white" />
            <p className="mt-8 text-xs font-mono uppercase tracking-[0.2em] text-mint-soft/90">
              {pillar.shortLabel}
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05]">
              {pillar.title}
            </h1>
            <p className="mt-4 text-lg text-n200/95 leading-relaxed">{pillar.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      <article className="pb-20 md:pb-28 bg-white">
        <div className="container-x max-w-4xl mx-auto py-14 md:py-20">
          <ScrollReveal variant="fade-up">
            <p className="text-xl md:text-2xl text-forest leading-relaxed font-display">
              {pillar.description}
            </p>
            <div className="mt-10 space-y-6 text-[15px] md:text-base text-n600 leading-[1.75]">
              {pillar.body.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-t border-n200 pt-12">
              {pillar.capabilities.map((cap) => (
                <p key={cap} className="text-sm md:text-[15px] text-n700 leading-relaxed">
                  {cap}
                </p>
              ))}
            </div>

            <PillarFooter pillar={pillar} />
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
