import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import {
  ADVISORY_HOUSE_AREAS,
  ADVISORY_HOUSE_BANKABILITY_STUDY,
  ADVISORY_HOUSE_CTA,
  ADVISORY_HOUSE_ECOSYSTEM,
  ADVISORY_HOUSE_ENGAGEMENT,
  ADVISORY_HOUSE_ONGOING_PROGRAM,
  ADVISORY_HOUSE_PAGE,
  ADVISORY_HOUSE_PROCESS,
  ADVISORY_HOUSE_WHAT_WE_DO,
  ADVISORY_HOUSE_WHY,
  ADVISORY_HOUSE_WORKSHOPS,
} from "@/lib/advisory-house-content";
import { ECOSYSTEM_SURFACE } from "@/lib/ecosystem-page-surfaces";
import { cn } from "@/lib/utils";

const PAGE = "container-x max-w-[90rem]";
const SECTION = "py-14 md:py-20 lg:py-28";
const ease = [0.22, 1, 0.36, 1] as const;

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
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.section>
  );
}

export function AdvisoryHousePageContent() {
  return (
    <div className="bg-background ecosystem-segment-page">
      <HeroSection />
      <WhatWeDoSection />
      <SelectedEngagementSection />
      <ExecutiveWorkshopsSection />
      <BankabilityStudySection />
      <OngoingProgramSection />
      <HowWeEngageSection />
      <EngagementAreasSection />
      <WhySection />
      <CtaSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, titleLines, supportingTitle, description, accentSoft } = ADVISORY_HOUSE_PAGE;

  return (
    <section
      className="relative isolate min-h-[100dvh] flex flex-col overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 78% 42%, ${accentSoft}38, transparent 58%)`,
        }}
      />

      <div
        className={cn(
          PAGE,
          "relative z-10 flex flex-1 flex-col justify-center pt-32 md:pt-36 pb-16 md:pb-24",
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <h1 className="font-ui font-semibold text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 font-ui font-semibold text-[clamp(1.15rem,2.4vw,1.85rem)] text-mint-soft/95 leading-snug max-w-xl">
              {supportingTitle}
            </p>
            <p className="mt-6 text-base md:text-lg text-n200/90 leading-relaxed max-w-xl">
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

          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={reduced ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
          >
            <HeroAdvisoryScene reduced={!!reduced} />
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function HeroAdvisoryScene({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative aspect-square max-w-md ml-auto" aria-hidden>
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="ah-flow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#A8F0D4" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#2ECC8A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#A8F0D4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M${80 + i * 30} 320 Q210 ${240 - i * 20} ${340 - i * 30} 320`}
            stroke="url(#ah-flow)"
            strokeWidth="1.5"
            animate={reduced ? undefined : { opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}

        <motion.path
          d="M60 200 L160 160 L260 200 L360 160"
          stroke="#A8F0D4"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeLinecap="round"
          animate={reduced ? undefined : { pathLength: [0.4, 1, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {[
          { x: 160, y: 160 },
          { x: 260, y: 200 },
          { x: 210, y: 120 },
          { x: 120, y: 240 },
          { x: 300, y: 260 },
        ].map((node, i) => (
          <motion.g
            key={i}
            animate={reduced ? undefined : { opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 4.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          >
            <line
              x1="210"
              y1="210"
              x2={node.x}
              y2={node.y}
              stroke="#A8F0D4"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
            <rect
              x={node.x - 4}
              y={node.y - 4}
              width="8"
              height="8"
              rx="1"
              fill="#A8F0D4"
              fillOpacity="0.4"
            />
          </motion.g>
        ))}

        <motion.circle
          cx="210"
          cy="210"
          r="6"
          fill="#2ECC8A"
          fillOpacity="0.45"
          animate={reduced ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function WhatWeDoSection() {
  const reduced = useReducedMotion();
  const { title, body, capabilities } = ADVISORY_HOUSE_WHAT_WE_DO;

  return (
    <MotionSection
      id="capabilities"
      className={cn(ECOSYSTEM_SURFACE.first, "scroll-mt-24")}
    >
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-ui font-semibold text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{body}</p>
          </motion.div>

          <div className="lg:col-span-7">
            <ul className="space-y-4 md:space-y-5">
              {capabilities.map((item, index) => (
                <motion.li
                  key={item}
                  className="font-ui font-semibold text-[clamp(1.2rem,2.2vw,1.65rem)] text-forest leading-snug border-b border-n200/60 pb-4 md:pb-5 last:border-0"
                  initial={reduced ? false : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function SelectedEngagementSection() {
  const reduced = useReducedMotion();
  const { title, label, body, detail, highlight, timeline } = ADVISORY_HOUSE_ENGAGEMENT;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16">
          <div className="xl:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy">
              Selected Engagement
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-n500">
              {label}
            </p>
            <h2 className="mt-4 font-ui font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{body}</p>
            <p className="mt-4 text-base md:text-lg text-n600 leading-relaxed">{detail}</p>
            <p className="mt-10 pt-8 border-t border-n200/70 font-ui font-semibold text-[clamp(1.1rem,2vw,1.45rem)] text-forest leading-snug max-w-md">
              {highlight}
            </p>
          </div>

          <div className="xl:col-span-7">
            <ol className="relative border-l border-n200/80 ml-3 space-y-0">
              {timeline.map((item, index) => (
                <motion.li
                  key={item.title}
                  className="relative pl-8 pb-10 last:pb-0"
                  initial={reduced ? false : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-canopy"
                    aria-hidden
                  />
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                    {item.title}
                  </p>
                  <p className="mt-2 text-base md:text-lg text-n700 leading-relaxed">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function ExecutiveWorkshopsSection() {
  const reduced = useReducedMotion();
  const {
    sectionLabel,
    label,
    title,
    supportingTitle,
    description,
    programTheme,
    location,
    date,
    focusAreas,
    outcomes,
    closing,
  } = ADVISORY_HOUSE_WORKSHOPS;

  const meta = [programTheme, location, date];

  return (
    <MotionSection id="executive-workshops" className={cn(ECOSYSTEM_SURFACE.mint, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy mb-12 md:mb-16">
          {sectionLabel}
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <motion.div
            className="xl:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy">{label}</p>
            <h2 className="mt-4 font-ui font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-4 font-ui font-semibold text-xl md:text-2xl text-n800 leading-snug">
              {supportingTitle}
            </p>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{description}</p>

            <dl className="mt-10 space-y-5 border-t border-n200/60 pt-8">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-ui font-semibold text-base md:text-lg text-forest leading-snug">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <div className="xl:col-span-7 space-y-10 md:space-y-12">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
            >
              <WorkshopAbstractVisual reduced={!!reduced} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05, ease }}
              >
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                  {focusAreas.title}
                </p>
                <ul className="mt-5 space-y-3 md:space-y-4">
                  {focusAreas.items.map((item, index) => (
                    <motion.li
                      key={item}
                      className="font-ui font-semibold text-[clamp(1.05rem,1.8vw,1.35rem)] text-forest leading-snug border-b border-n200/60 pb-3 md:pb-4 last:border-0"
                      initial={reduced ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.08 + index * 0.05, ease }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease }}
              >
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                  {outcomes.title}
                </p>
                <ul className="mt-5 space-y-3 md:space-y-4">
                  {outcomes.items.map((item, index) => (
                    <motion.li
                      key={item}
                      className="font-ui font-semibold text-[clamp(1.05rem,1.8vw,1.35rem)] text-forest leading-snug border-b border-n200/60 pb-3 md:pb-4 last:border-0"
                      initial={reduced ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.12 + index * 0.05, ease }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.p
          className="mt-14 md:mt-20 pt-10 border-t border-n200/60 max-w-2xl font-ui font-semibold text-[clamp(1.15rem,2vw,1.5rem)] text-forest leading-snug"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          {closing}
        </motion.p>
      </div>
    </MotionSection>
  );
}

function WorkshopAbstractVisual({ reduced }: { reduced: boolean }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-n200/60 bg-[var(--n50)]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-forest/8 via-transparent to-mint-soft/25" />

      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-forest/10 to-transparent" />

      <motion.div
        className="absolute left-[8%] top-[12%] right-[8%] h-[28%] rounded-sm border border-white/40 bg-white/20 backdrop-blur-[1px]"
        animate={reduced ? undefined : { opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-px bg-canopy/30" />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-px bg-canopy/20" />
      </motion.div>

      <div className="absolute inset-x-[10%] bottom-[14%] flex justify-center gap-3 md:gap-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            className="block w-6 md:w-8 h-10 md:h-12 rounded-t-full bg-forest/12 border border-forest/10"
            animate={reduced ? undefined : { opacity: [0.35, 0.65, 0.35], y: [0, -2, 0] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}
      </div>

      <motion.div
        className="absolute right-[12%] bottom-[22%] w-16 md:w-20 h-1 rounded-full bg-canopy/25"
        animate={reduced ? undefined : { scaleX: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "left center" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
    </div>
  );
}

function BankabilityStudySection() {
  const reduced = useReducedMotion();
  const {
    sectionLabel,
    label,
    title,
    supportingTitle,
    description,
    scopeNote,
    studyObjective,
    assessmentScope,
    frameworkHighlights,
    decisionConfidence,
    whoInsightsSupport,
  } = ADVISORY_HOUSE_BANKABILITY_STUDY;

  return (
    <>
      <MotionSection id="bankability-study" className={cn(ECOSYSTEM_SURFACE.sheet, "scroll-mt-24")}>
        <div className={cn(PAGE, SECTION)}>
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy mb-12 md:mb-16">
            {sectionLabel}
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
            <motion.div
              className="xl:col-span-5"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy">{label}</p>
              <h2 className="mt-4 font-ui font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] text-forest leading-tight">
                {title}
              </h2>
              <p className="mt-4 font-ui font-semibold text-xl md:text-2xl text-n800 leading-snug">
                {supportingTitle}
              </p>
              <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{description}</p>
              <p className="mt-4 text-base md:text-lg text-n600 leading-relaxed">{scopeNote}</p>
            </motion.div>

            <div className="xl:col-span-7">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease }}
              >
                <div className="border-t border-n200/70 pt-8">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                    {studyObjective.title}
                  </p>
                  <p className="mt-4 text-base md:text-lg text-n600 leading-relaxed">
                    {studyObjective.body}
                  </p>
                </div>
                <div className="border-t border-n200/70 pt-8">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                    {assessmentScope.title}
                  </p>
                  <p className="mt-4 text-base md:text-lg text-n600 leading-relaxed">
                    {assessmentScope.body}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-14 md:mt-20 pt-12 border-t border-n200/60"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
          >
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
              {frameworkHighlights.title}
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {frameworkHighlights.items.map((item, index) => (
                <motion.li
                  key={item}
                  className="border-t border-n200/70 pt-6 font-ui font-semibold text-[clamp(1.05rem,1.8vw,1.35rem)] text-forest leading-snug"
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className={ECOSYSTEM_SURFACE.white}>
        <div className={cn(PAGE, SECTION)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              className="lg:col-span-5"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="font-ui font-semibold text-[clamp(1.85rem,3.2vw,2.5rem)] text-forest leading-tight">
                {decisionConfidence.title}
              </h2>
              <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed max-w-md">
                {decisionConfidence.supportingCopy}
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
            >
              <BankabilityFrameworkVisual
                steps={decisionConfidence.steps}
                reduced={!!reduced}
              />
            </motion.div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className={ECOSYSTEM_SURFACE.mint}>
        <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
          <SectionHeader
            title={whoInsightsSupport.title}
            align="center"
            className="mb-12 md:mb-14"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 max-w-5xl mx-auto">
            {whoInsightsSupport.audiences.map((audience, index) => (
              <motion.li
                key={audience}
                className="border-t border-n200/70 pt-6 text-center"
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease }}
              >
                <span className="font-ui font-semibold text-[clamp(1.1rem,2vw,1.4rem)] text-forest leading-snug">
                  {audience}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </MotionSection>
    </>
  );
}

function BankabilityFrameworkVisual({
  steps,
  reduced,
}: {
  steps: readonly string[];
  reduced: boolean;
}) {
  return (
    <div
      className="relative max-w-md lg:max-w-none lg:ml-auto"
      aria-label="Assessment flow from variables to decision"
    >
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step} className="relative">
            <motion.div
              className="flex items-center gap-4 py-3 md:py-3.5"
              initial={reduced ? false : { opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease }}
            >
              <span
                className="shrink-0 h-2 w-2 rounded-full bg-canopy"
                aria-hidden
              />
              <span className="font-ui font-semibold text-[clamp(1.15rem,2.2vw,1.55rem)] text-forest leading-snug">
                {step}
              </span>
            </motion.div>
            {index < steps.length - 1 ? (
              <div className="ml-[3px] flex flex-col items-start pl-[5px]" aria-hidden>
                <span className="h-5 w-px bg-canopy/35" />
                <span className="text-canopy/50 text-xs leading-none -mt-0.5">↓</span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function OngoingProgramSection() {
  const reduced = useReducedMotion();
  const {
    label,
    title,
    supportingTitle,
    description,
    capabilityAreas,
    programDuration,
  } = ADVISORY_HOUSE_ONGOING_PROGRAM;

  return (
    <MotionSection id="ongoing-program" className={cn(ECOSYSTEM_SURFACE.white, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <motion.div
            className="xl:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy">{label}</p>
            <h2 className="mt-4 font-ui font-semibold text-[clamp(1.85rem,3.2vw,2.75rem)] text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-4 font-ui font-semibold text-xl md:text-2xl text-n800 leading-snug">
              {supportingTitle}
            </p>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{description}</p>

            <dl className="mt-10 space-y-5 border-t border-n200/60 pt-8">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500">
                  {programDuration.label}
                </dt>
                <dd className="mt-2 font-ui font-semibold text-base md:text-lg text-forest leading-snug">
                  {programDuration.value}
                </dd>
                <dd className="mt-1 text-sm text-n600">{programDuration.note}</dd>
              </div>
            </dl>
          </motion.div>

          <div className="xl:col-span-7 space-y-10 md:space-y-12">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
            >
              <OngoingProgramSystemsVisual reduced={!!reduced} />
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05, ease }}
            >
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                {capabilityAreas.title}
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {capabilityAreas.items.map((item, index) => (
                  <motion.li
                    key={item}
                    className="border-t border-n200/70 pt-4 font-ui font-semibold text-[clamp(1.05rem,1.8vw,1.3rem)] text-forest leading-snug"
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.08 + index * 0.05, ease }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function OngoingProgramSystemsVisual({ reduced }: { reduced: boolean }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-n200/60 bg-[var(--n50)] p-6 md:p-8"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-forest/6 via-transparent to-mint-soft/20" />
      <svg viewBox="0 0 320 200" className="relative h-full w-full" fill="none">
        {[0, 1, 2, 3].map((layer) => (
          <motion.rect
            key={layer}
            x={32}
            y={24 + layer * 22}
            width={256}
            height={14}
            rx="2"
            stroke="#1A6B4A"
            strokeOpacity="0.12"
            fill="#1A6B4A"
            fillOpacity="0.05"
            animate={reduced ? undefined : { opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 5 + layer, repeat: Infinity, ease: "easeInOut", delay: layer * 0.3 }}
          />
        ))}

        <motion.path
          d="M32 72 L160 72 L160 118 M160 72 L288 72"
          stroke="#1A6B4A"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeLinecap="round"
          animate={reduced ? undefined : { pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {[
          { x: 72, y: 158 },
          { x: 160, y: 158 },
          { x: 248, y: 158 },
        ].map((node, i) => (
          <motion.g
            key={i}
            animate={reduced ? undefined : { opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
          >
            <line
              x1={node.x}
              y1={node.y}
              x2={node.x}
              y2={node.y - 26}
              stroke="#2ECC8A"
              strokeOpacity="0.28"
              strokeWidth="1"
            />
            <rect
              x={node.x - 12}
              y={node.y - 6}
              width="24"
              height="14"
              rx="2"
              fill="#1A6B4A"
              fillOpacity="0.1"
              stroke="#1A6B4A"
              strokeOpacity="0.18"
            />
          </motion.g>
        ))}

        <motion.line
          x1="72"
          y1="178"
          x2="248"
          y2="178"
          stroke="#A8F0D4"
          strokeOpacity="0.35"
          strokeWidth="1"
          animate={reduced ? undefined : { opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {[
          { x: 72, y: 178 },
          { x: 160, y: 178 },
          { x: 248, y: 178 },
        ].map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="#2ECC8A"
            fillOpacity="0.45"
            animate={reduced ? undefined : { scale: [1, 1.2, 1] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
    </div>
  );
}

function HowWeEngageSection() {
  const reduced = useReducedMotion();
  const { title, steps } = ADVISORY_HOUSE_PROCESS;
  const [active, setActive] = useState(0);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.white}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} align="center" className="mb-12 md:mb-16" />

        <div className="hidden lg:block relative max-w-5xl mx-auto">
          <div className="absolute top-5 left-0 right-0 h-px bg-n200/80" aria-hidden />
          <div className="flex justify-between gap-2">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                className={cn(
                  "relative flex-1 text-center pt-8 transition-all duration-300",
                  active === index ? "opacity-100 scale-105" : "opacity-50 hover:opacity-75",
                )}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span
                  className={cn(
                    "absolute top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 bg-[var(--n100)] transition-colors",
                    active === index ? "border-canopy bg-canopy" : "border-n300",
                  )}
                  aria-hidden
                />
                <span className="font-ui font-semibold text-sm md:text-base text-forest">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex flex-wrap gap-2 justify-center mb-8">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold border transition-colors",
                active === index
                  ? "border-canopy bg-mint-soft/30 text-forest"
                  : "border-n200 text-n600",
              )}
              onClick={() => setActive(index)}
            >
              {step.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          className="max-w-xl mx-auto text-center mt-10"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="font-ui font-semibold text-xl text-forest">{steps[active].title}</p>
          <p className="mt-3 text-base text-n600 leading-relaxed">{steps[active].description}</p>
        </motion.div>
      </div>
    </MotionSection>
  );
}

function EngagementAreasSection() {
  const reduced = useReducedMotion();
  const { title, items } = ADVISORY_HOUSE_AREAS;
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.white}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} className="mb-10 md:mb-14 max-w-3xl" />

        <div className="max-w-3xl mx-auto divide-y divide-n200/70 border-y border-n200/70">
          {items.map((item, index) => {
            const isOpen = expanded === index;
            return (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 py-6 md:py-8 text-left group"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <span className="font-ui font-semibold text-[clamp(1.25rem,2.2vw,1.75rem)] text-forest leading-snug group-hover:text-canopy transition-colors">
                    {item.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 mt-1.5 text-canopy transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 md:pb-8 text-sm md:text-base text-n600 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

function WhySection() {
  const reduced = useReducedMotion();
  const { headline, body, statements } = ADVISORY_HOUSE_WHY;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.mint}>
      <div className={cn(PAGE, SECTION)}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-ui font-semibold text-[clamp(2rem,4vw,3rem)] text-forest leading-tight">
            {headline}
          </h2>
          <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{body}</p>
        </div>
        <ul className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-3xl mx-auto">
          {statements.map((item, index) => (
            <motion.li
              key={item}
              className="border-t border-n200/70 pt-6 font-ui font-semibold text-[clamp(1.5rem,2.8vw,2.25rem)] text-forest leading-snug text-center sm:text-left"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}

function CtaSection() {
  const reduced = useReducedMotion();
  const { headline, body, primary } = ADVISORY_HOUSE_CTA;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.white}>
      <div className={cn(PAGE, "py-16 md:py-24 lg:py-32")}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-ui font-semibold text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight">
            {headline}
          </h2>
          <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-primary"
            >
              {primary}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  );
}

function EcosystemSection() {
  const { title, description } = ADVISORY_HOUSE_ECOSYSTEM;

  return (
    <MotionSection id="ecosystem" className={cn(ECOSYSTEM_SURFACE.sheet, "border-t border-n200/40 scroll-mt-24")}>
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <EcosystemExplorer highlightSegmentId="advisory-house" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
