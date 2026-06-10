import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import {
  WHAT_WE_DO_SERVICES,
  whatWeDoServicePath,
  type WhatWeDoService,
} from "@/lib/what-we-do-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";

type WhatWeDoServicePageContentProps = {
  service: WhatWeDoService;
};

export function WhatWeDoServicePageContent({ service }: WhatWeDoServicePageContentProps) {
  const otherServices = WHAT_WE_DO_SERVICES.filter((s) => s.id !== service.id);

  return (
    <>
      <header className="pt-32 md:pt-40 pb-10 md:pb-12 bg-[var(--n50)] border-b border-n200/70">
        <div className="container-x">
          <div className="max-w-3xl">
            <ScrollReveal variant="fade-up">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-forest transition-colors"
              >
                <ArrowLeft size={16} aria-hidden />
                What we do
              </Link>
              <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-forest">
                {service.title}
              </h1>
              {service.highlight && (
                <p className="mt-3 font-display text-2xl text-canopy">{service.highlight}</p>
              )}
            </ScrollReveal>
          </div>
        </div>
      </header>

      <article className="pb-20 md:pb-28 bg-[var(--n50)]">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="fade-up">
              <figure className="mt-10 md:mt-12">
                <img
                  src={service.image}
                  alt=""
                  className="w-full aspect-[3/2] object-cover rounded-sm"
                  loading="eager"
                />
              </figure>

              <div className="mt-10 md:mt-12 space-y-6 text-[15px] md:text-base text-n700 leading-[1.75]">
                {service.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-n200/80">
                <p className="text-sm text-n500">
                  Other services:{" "}
                  {otherServices.slice(0, 4).map((s, i) => (
                    <span key={s.id}>
                      {i > 0 && " · "}
                      <Link
                        to={whatWeDoServicePath(s.id)}
                        className="text-canopy hover:text-forest hover:underline underline-offset-4"
                      >
                        {s.title}
                      </Link>
                    </span>
                  ))}
                </p>
                <p className="mt-8 text-n600">
                  <Link
                    to="/work-with-us"
                    className="font-semibold text-forest hover:text-canopy underline underline-offset-4"
                  >
                    Contact us
                  </Link>{" "}
                  about {service.title.toLowerCase()}.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>
    </>
  );
}
