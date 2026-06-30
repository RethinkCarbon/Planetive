import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import {
  RETHINK_CARBON_AUDIENCES,
  RETHINK_CARBON_CTA,
  RETHINK_CARBON_ECOSYSTEM,
  RETHINK_CARBON_JOURNEY,
  RETHINK_CARBON_PAGE,
  RETHINK_CARBON_PLATFORM,
  RETHINK_CARBON_WHY,
} from "@/lib/rethink-carbon-content";
import { ECOSYSTEM_SURFACE } from "@/lib/ecosystem-page-surfaces";
import { cn } from "@/lib/utils";

const PAGE = "container-x max-w-[90rem]";
/** Tighter editorial rhythm — premium without floating sections */
const SECTION = "py-14 md:py-20 lg:py-28";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function MotionSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.section>
  );
}

export function RethinkCarbonPageContent() {
  return (
    <div className="bg-background ecosystem-segment-page">
      <HeroSection />
      <PlatformSection />
      <JourneyWhyBand />
      <DesignedForSection />
      <EcosystemSection />
      <FinalCtaSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, title, supportingTitle, description, accentSoft } = RETHINK_CARBON_PAGE;

  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 50% 45% at 75% 15%, ${accentSoft}44, transparent 55%)`,
        }}
      />

      <div className={cn(PAGE, "relative z-10 pt-36 md:pt-44 pb-20 md:pb-28")}>
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <h1 className="font-ui font-semibold text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02]">
            {title}
          </h1>
          <p className="mt-5 font-ui font-semibold text-[clamp(1.2rem,2.5vw,2rem)] text-mint-soft/95 leading-snug">
            {supportingTitle}
          </p>
          <p className="mt-6 text-base md:text-lg text-n200/90 leading-relaxed">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-mint"
            >
              Book a Consultation
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function PlatformSection() {
  const reduced = useReducedMotion();
  const { title, description, capabilities } = RETHINK_CARBON_PLATFORM;

  return (
    <MotionSection
      id="platform"
      className={ECOSYSTEM_SURFACE.first}
    >
      <div className={cn(PAGE, SECTION, "pb-10 md:pb-14")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-28">
            <SectionHeader eyebrow="The Platform" title={title} description={description} />
            <p className="mt-6 hidden lg:block text-xs font-mono uppercase tracking-wider text-n400">
              Scroll capabilities →
            </p>
          </div>

          <div className="lg:col-span-8 xl:col-span-8">
            <div className="lg:hidden mb-8">
              <SectionHeader eyebrow="The Platform" title={title} description={description} />
            </div>

            <div className="-mx-5 md:-mx-8 lg:mx-0">
              <div className="flex gap-4 md:gap-5 overflow-x-auto pb-2 px-5 md:px-8 lg:px-0 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] lg:grid lg:grid-cols-2 lg:overflow-visible lg:snap-none xl:grid-cols-3 lg:gap-5">
                {capabilities.map((cap, index) => (
                  <motion.article
                    key={cap.title}
                    className="snap-center shrink-0 w-[min(82vw,300px)] lg:w-auto lg:shrink rounded-[20px] border border-n200/70 bg-white px-6 py-8 md:px-7 md:py-9 shadow-[var(--shadow-soft)]"
                    initial={reduced ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: index * 0.06, ease }}
                    whileHover={reduced ? undefined : { y: -3 }}
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-n400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-4 block h-px w-10 bg-canopy/35" aria-hidden />
                    <h3 className="mt-4 font-ui font-semibold text-lg md:text-xl text-forest leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm text-n600 leading-relaxed">{cap.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

/** Journey + Why merged into one visual band — less dead space between related ideas */
function JourneyWhyBand() {
  const reduced = useReducedMotion();
  const journey = RETHINK_CARBON_JOURNEY;
  const why = RETHINK_CARBON_WHY;

  return (
    <MotionSection id="journey" className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 xl:gap-16">
          {/* Journey */}
          <div className="xl:col-span-6">
            <SectionHeader eyebrow="The Journey" title={journey.title} className="mb-10 md:mb-12" />

            <ol className="relative space-y-0">
              <span
                className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-canopy/40 via-canopy/20 to-transparent"
                aria-hidden
              />
              {journey.stages.map((stage, index) => (
                <motion.li
                  key={stage.title}
                  className="relative pl-10 pb-8 md:pb-10 last:pb-0"
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <span
                    className="absolute left-0 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-canopy/30 bg-white text-[9px] font-mono text-canopy"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy">
                    {stage.title}
                  </p>
                  <p className="mt-2 font-ui font-semibold text-xl md:text-2xl text-forest leading-snug">
                    {stage.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Why */}
          <div className="xl:col-span-6 xl:border-l xl:border-n200/60 xl:pl-14">
            <SectionHeader eyebrow="Why It Matters" title={why.title} className="mb-10 md:mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-10">
              {why.statements.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="border-t border-n200/70 pt-6"
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <h3 className="font-ui font-semibold text-xl md:text-[1.35rem] text-forest leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-n600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

/** Designed For — clean split editorial layout */
function DesignedForSection() {
  const reduced = useReducedMotion();
  const { title, items } = RETHINK_CARBON_AUDIENCES;
  const description = RETHINK_CARBON_PLATFORM.description;

  return (
    <MotionSection className={cn(ECOSYSTEM_SURFACE.white, "border-y border-n200/60")}>
      <div className={cn(PAGE, "py-14 md:py-20")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            className="lg:col-span-4"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-ui font-semibold text-[clamp(1.85rem,3vw,2.5rem)] text-forest leading-tight">
              {title}
            </h2>
          </motion.div>

          <div className="lg:col-span-8 space-y-8">
            <ul className="flex flex-col gap-5 sm:gap-6 md:flex-row md:flex-wrap md:items-baseline md:gap-y-4">
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  className={cn(
                    "font-ui font-semibold text-[clamp(1.25rem,2vw,1.65rem)] text-forest leading-snug",
                    index > 0 &&
                      "md:pl-6 lg:pl-8 md:border-l md:border-n200/80 pt-5 md:pt-0 border-t md:border-t-0 border-n200/60",
                  )}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.p
              className="text-base md:text-lg text-n600 leading-relaxed max-w-2xl border-t border-n200/70 pt-8"
              initial={reduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function EcosystemSection() {
  const { title, description } = RETHINK_CARBON_ECOSYSTEM;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <EcosystemExplorer highlightSegmentId="rethink-carbon" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function FinalCtaSection() {
  const reduced = useReducedMotion();
  const { headline, primary } = RETHINK_CARBON_CTA;

  return (
    <section className="pb-16 md:pb-20">
      <div className={PAGE}>
        <motion.div
          className="relative overflow-hidden rounded-[32px] px-8 py-14 md:px-14 md:py-16 text-center"
          style={{ background: "var(--gradient-hero)" }}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 50% 80% at 50% 120%, rgba(168,240,212,0.35), transparent)",
            }}
          />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-ui font-semibold text-[clamp(1.85rem,4vw,3rem)] text-white leading-tight">
              {headline}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-mint"
              >
                {primary}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
