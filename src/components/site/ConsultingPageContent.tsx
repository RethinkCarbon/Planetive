import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { BookMeetingSection } from "@/components/site/BookMeetingSection";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { BOOKING_AREAS } from "@/lib/site-booking";
import {
  CONSULTING_PAGE,
  CONSULTING_PROCESS,
  CONSULTING_SERVICES,
} from "@/lib/consulting-content";

export function ConsultingPageContent() {
  useEffect(() => {
    if (window.location.hash !== "#book") return;
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <ConsultingHero />
      <ConsultingServicesSection />
      <ConsultingProcessSection />
      <div id="book" className="scroll-mt-28">
        <BookMeetingSection
          eyebrow={CONSULTING_PAGE.bookEyebrow}
          title={CONSULTING_PAGE.bookTitle}
          description={CONSULTING_PAGE.bookDescription}
          areas={BOOKING_AREAS}
        />
      </div>
    </>
  );
}

function ConsultingHero() {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,240,212,0.4), transparent 55%)",
        }}
      />
      <div className="container-x relative z-10 pt-40 md:pt-48 pb-24 md:pb-32">
        <ScrollReveal variant="fade-up" className="max-w-3xl">
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05]">
            {CONSULTING_PAGE.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-n200/95 leading-relaxed max-w-2xl">
            {CONSULTING_PAGE.description}
          </p>
          <a
            href="#book"
            className="mt-8 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold font-heading btn-mint"
          >
            Book a consultation
          </a>
        </ScrollReveal>
      </div>
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function ConsultingServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--n50)] border-b border-n200/60">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mb-10 md:mb-14">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            What we deliver
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] text-forest leading-tight">
            Consulting across strategy, capital, and delivery
          </h2>
        </ScrollReveal>

        <ScrollRevealGroup
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          stagger={80}
          variant="fade-up"
        >
          {CONSULTING_SERVICES.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="group flex flex-col rounded-[24px] border border-n200/80 bg-white p-6 md:p-8 shadow-[var(--shadow-soft)] hover:border-canopy/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <h3 className="font-display text-xl text-forest group-hover:text-canopy transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-n600 leading-relaxed">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-canopy">
                Learn more
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

function ConsultingProcessSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-n200/60">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mb-10 md:mb-12">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            How we work
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] text-forest">
            From mandate to measurable outcomes
          </h2>
        </ScrollReveal>

        <ScrollRevealGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-n200/80 rounded-[24px] overflow-hidden border border-n200/80"
          stagger={70}
          variant="fade-up"
        >
          {CONSULTING_PROCESS.map((step) => (
            <article key={step.step} className="bg-white p-6 md:p-7">
              <span className="font-mono text-[11px] tracking-[0.18em] text-canopy">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg text-forest">{step.title}</h3>
              <p className="mt-2 text-sm text-n600 leading-relaxed">{step.description}</p>
            </article>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
