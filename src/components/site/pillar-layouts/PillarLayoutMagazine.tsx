import type { EcosystemPillar } from "@/lib/what-we-do-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import {
  PillarBackLink,
  PillarCapabilities,
  PillarFooter,
  pillarImgStyle,
} from "@/components/site/pillar-layouts/PillarPageShared";

/** Layout D — color band intro + alternating blocks (Programs) */
export function PillarLayoutMagazine({ pillar }: { pillar: EcosystemPillar }) {
  return (
    <>
      <header
        className="pt-32 md:pt-40 pb-14 md:pb-20 text-white"
        style={{ background: pillar.color }}
      >
        <div className="container-x max-w-4xl">
          <ScrollReveal variant="fade-up">
            <PillarBackLink className="!text-mint-soft hover:!text-white" />
            <h1 className="mt-8 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08]">
              {pillar.title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-mint-soft/95 leading-relaxed max-w-2xl">
              {pillar.tagline}
            </p>
          </ScrollReveal>
        </div>
      </header>

      <article className="pb-20 md:pb-28 bg-[var(--n50)]">
        <div className="container-x">
          <ScrollReveal variant="fade-up">
            <figure className="-mt-8 md:-mt-12 max-w-4xl">
              <img
                src={pillar.image}
                alt=""
                className="w-full aspect-[16/10] object-cover shadow-[var(--shadow-elevated)]"
                style={pillarImgStyle(pillar)}
                loading="eager"
              />
            </figure>

            <p className="mt-12 md:mt-16 max-w-3xl text-xl md:text-2xl text-forest leading-relaxed font-display">
              {pillar.description}
            </p>

            {pillar.body.map((paragraph, i) => (
              <div
                key={paragraph.slice(0, 48)}
                className={`mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`md:col-span-7 ${i % 2 === 1 ? "md:col-start-6" : ""}`}
                >
                  <p className="text-[15px] md:text-base text-n700 leading-[1.8]">{paragraph}</p>
                </div>
                <div
                  className={`md:col-span-4 ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : "md:col-start-9"}`}
                >
                  <div
                    className="h-full min-h-[4rem] border-l-2 pl-5"
                    style={{ borderColor: pillar.colorActive }}
                  >
                    <p className="text-xs font-mono uppercase tracking-wider text-n500">
                      {pillar.shortLabel}
                    </p>
                    <p className="mt-2 text-sm text-n600 leading-relaxed">
                      {pillar.capabilities[i] ?? pillar.capabilities[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
              <PillarCapabilities pillar={pillar} variant="numbered" />
            </div>

            <div className="max-w-3xl mx-auto">
              <PillarFooter pillar={pillar} />
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
