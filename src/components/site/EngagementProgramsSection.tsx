import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ENGAGEMENT_PROGRAM_SECTION,
  ENGAGEMENT_PROGRAMS,
} from "@/lib/engagement-programs-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";

type EngagementProgramsSectionProps = {
  /** On About Us, cards link to Work With Us with ?interest= */
  variant?: "preview" | "full";
  onSelectProgram?: (id: (typeof ENGAGEMENT_PROGRAMS)[number]["id"]) => void;
};

export function EngagementProgramsSection({
  variant = "preview",
  onSelectProgram,
}: EngagementProgramsSectionProps) {
  const isPreview = variant === "preview";

  return (
    <section
      className={cn(
        "py-16 md:py-24",
        isPreview ? "bg-white border-t border-n200/60" : "bg-[var(--n50)]",
      )}
    >
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mb-12 md:mb-14">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            {ENGAGEMENT_PROGRAM_SECTION.eyebrow}
          </span>
          <h2 className="mt-3 font-ui font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] text-forest leading-tight">
            {ENGAGEMENT_PROGRAM_SECTION.title}
          </h2>
          <p className="mt-4 text-n600 text-sm md:text-base leading-relaxed">
            {ENGAGEMENT_PROGRAM_SECTION.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {ENGAGEMENT_PROGRAMS.map((program, i) => {
            const Icon = program.icon;
            return (
              <ScrollReveal key={program.id} variant="fade-up" delay={i * 60}>
                <article className="flex h-full flex-col rounded-[28px] border border-n200/80 bg-white p-7 md:p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-elevated)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-canopy">
                    <Icon size={22} strokeWidth={2.25} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-ui font-semibold text-xl md:text-2xl text-forest">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-n600 leading-relaxed">
                    {program.description}
                  </p>
                  {isPreview ? (
                    <Link
                      to="/work-with-us"
                      search={{ interest: program.id }}
                      hash="apply"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-forest"
                    >
                      {program.cta}
                      <ArrowRight size={16} aria-hidden />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectProgram?.(program.id)}
                      className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold btn-mint w-fit"
                    >
                      {program.cta}
                    </button>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {isPreview && (
          <ScrollReveal className="mt-10 text-center">
            <Link
              to="/work-with-us"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold btn-primary"
            >
              Work with Planetive
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
