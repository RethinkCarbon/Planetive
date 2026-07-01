import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import {
  ENERGY_WORKFORCE_AUDIENCES,
  ENERGY_WORKFORCE_ECOSYSTEM,
  ENERGY_WORKFORCE_ENGAGEMENT,
  ENERGY_WORKFORCE_JOURNEY,
  ENERGY_WORKFORCE_OVERVIEW,
  ENERGY_WORKFORCE_PAGE,
  ENERGY_WORKFORCE_PROGRAM,
  ENERGY_WORKFORCE_READINESS,
  ENERGY_WORKFORCE_TALENT,
} from "@/lib/energy-transition-workforce-content";
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

export function EnergyTransitionWorkforcePageContent() {
  return (
    <div className="bg-background ecosystem-segment-page">
      <HeroSection />
      <OverviewSection />
      <ProgramDesignSection />
      <TalentConnectionSection />
      <JourneySection />
      <WhoItServesSection />
      <FutureReadinessSection />
      <EngagementSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, titleLines, supportingTitle, description, accentSoft } = ENERGY_WORKFORCE_PAGE;

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
            <h1 className="font-ui font-semibold text-type-h1 leading-[1.05]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 font-ui font-semibold text-type-lead text-mint-soft/95 leading-snug max-w-xl">
              {supportingTitle}
            </p>
            <p className="mt-6 text-type-body-lg text-n200/90 leading-relaxed max-w-xl">
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
            <HeroWorkforceScene reduced={!!reduced} />
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

function HeroWorkforceScene({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative aspect-square max-w-md ml-auto" aria-hidden>
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="etw-path" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8F0D4" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2ECC8A" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3].map((layer) => (
          <motion.path
            key={layer}
            d={`M${60 + layer * 20} ${320 - layer * 24} Q210 ${260 - layer * 18} ${360 - layer * 20} ${320 - layer * 24}`}
            stroke="#A8F0D4"
            strokeOpacity={0.1 + layer * 0.06}
            strokeWidth="1"
            animate={reduced ? undefined : { opacity: [0.25, 0.55, 0.25] }}
            transition={{
              duration: 5 + layer,
              repeat: Infinity,
              ease: "easeInOut",
              delay: layer * 0.35,
            }}
          />
        ))}

        <motion.ellipse
          cx="210"
          cy="210"
          rx="140"
          ry="90"
          stroke="url(#etw-path)"
          strokeWidth="1.5"
          animate={reduced ? undefined : { rotate: [0, 2, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "210px 210px" }}
        />

        {[
          { x: 80, y: 180 },
          { x: 210, y: 120 },
          { x: 340, y: 180 },
          { x: 120, y: 280 },
          { x: 300, y: 280 },
          { x: 210, y: 210 },
        ].map((node, i) => (
          <motion.g
            key={i}
            animate={reduced ? undefined : { opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 4.5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            {i < 5 ? (
              <line
                x1="210"
                y1="210"
                x2={node.x}
                y2={node.y}
                stroke="#A8F0D4"
                strokeOpacity="0.12"
                strokeWidth="1"
              />
            ) : null}
            <circle
              cx={node.x}
              cy={node.y}
              r={i === 5 ? 5 : 4}
              fill="#A8F0D4"
              fillOpacity={i === 5 ? 0.6 : 0.4}
            />
          </motion.g>
        ))}

        <motion.path
          d="M100 340 C160 300 260 320 320 290"
          stroke="#2ECC8A"
          strokeOpacity="0.28"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          animate={reduced ? undefined : { strokeDashoffset: [0, -26] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function OverviewSection() {
  const reduced = useReducedMotion();
  const { title, intro, frameworkLabel, pillars } = ENERGY_WORKFORCE_OVERVIEW;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.first}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-ui font-semibold text-type-h2 text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-type-body-lg text-n600 leading-relaxed">{intro}</p>
          </motion.div>

          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-n500 mb-6">
              {frameworkLabel}
            </p>
            <ul className="space-y-4 md:space-y-5">
              {pillars.map((item, index) => (
                <motion.li
                  key={item}
                  className="font-ui font-semibold text-type-h3 text-forest leading-snug border-b border-n200/60 pb-4 md:pb-5 last:border-0"
                  initial={reduced ? false : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
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

function ProgramDesignSection() {
  const reduced = useReducedMotion();
  const { title, body, dimensions } = ENERGY_WORKFORCE_PROGRAM;
  const [selected, setSelected] = useState(() => dimensions.map(() => 0));

  const selectOption = (dimIndex: number, optionIndex: number) => {
    setSelected((prev) => {
      const next = [...prev];
      next[dimIndex] = optionIndex;
      return next;
    });
  };

  return (
    <MotionSection id="program-design" className={cn(ECOSYSTEM_SURFACE.mint, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <motion.div
            className="xl:col-span-5 xl:sticky xl:top-28"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <h2 className="font-ui font-semibold text-type-h2 text-forest leading-tight">
              {title}
            </h2>
            {body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-6 text-type-body-lg text-n600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="xl:col-span-7 space-y-0">
            {dimensions.map((dim, dimIndex) => (
              <div key={dim.id}>
                <motion.div
                  className="rounded-[20px] border border-n200/70 bg-white/80 px-6 py-7 md:px-8 md:py-8"
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: dimIndex * 0.08, ease }}
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-n400">
                    {dim.label}
                  </p>
                  <h3 className="mt-2 font-ui font-semibold text-type-h3 text-forest leading-snug">
                    {dim.title}
                  </h3>

                  <div
                    className={cn(
                      "mt-5 grid gap-2 md:gap-3",
                      dim.options.length === 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-3",
                    )}
                    role="listbox"
                    aria-label={dim.title}
                  >
                    {dim.options.map((option, optionIndex) => {
                      const isActive = selected[dimIndex] === optionIndex;
                      return (
                        <button
                          key={option.label}
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          className={cn(
                            "rounded-[12px] border px-4 py-3.5 md:py-4 text-left transition-all duration-300",
                            isActive
                              ? "border-canopy/40 bg-white shadow-[var(--shadow-soft)] text-forest"
                              : "border-n200/60 bg-[var(--n50)]/50 text-n600 hover:border-canopy/25 hover:bg-white",
                          )}
                          onClick={() => selectOption(dimIndex, optionIndex)}
                        >
                          <span className="font-ui font-semibold text-type-body-lg leading-snug block">
                            {option.label}
                          </span>
                          {"detail" in option && option.detail ? (
                            <span className="mt-1 block font-mono text-[10px] tracking-[0.14em] uppercase text-n500">
                              ({option.detail})
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>

                {dimIndex < dimensions.length - 1 ? (
                  <div className="flex justify-center py-5 md:py-6" aria-hidden>
                    <motion.span
                      className="block w-px h-8 bg-gradient-to-b from-canopy/45 to-transparent"
                      initial={reduced ? false : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + dimIndex * 0.05 }}
                      style={{ transformOrigin: "top" }}
                    />
                  </div>
                ) : null}
              </div>
            ))}

            <motion.div
              className="mt-8 md:mt-10 rounded-[20px] border border-forest/15 bg-white overflow-hidden"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
            >
              <div className="px-6 py-4 md:px-8 border-b border-n200/60 bg-[var(--n50)]/60">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy">
                  Pathway Matrix
                </p>
              </div>
              <div className="divide-y divide-n200/60">
                {dimensions.map((dim, dimIndex) => {
                  const option = dim.options[selected[dimIndex]];
                  return (
                    <motion.div
                      key={dim.id}
                      className="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr] gap-2 sm:gap-6 px-6 py-4 md:px-8 md:py-5 items-start sm:items-center"
                      layout={!reduced}
                      transition={{ duration: 0.35, ease }}
                    >
                      <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-n500">
                        {dim.title}
                      </p>
                      <p className="font-ui font-semibold text-type-lead text-forest leading-snug">
                        {option.label}
                        {"detail" in option && option.detail ? (
                          <span className="ml-2 font-mono text-[10px] tracking-[0.12em] uppercase text-n500">
                            ({option.detail})
                          </span>
                        ) : null}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function TalentConnectionSection() {
  const reduced = useReducedMotion();
  const { title, statements, body } = ENERGY_WORKFORCE_TALENT;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.white}>
      <div className={cn(PAGE, SECTION)}>
        <motion.h2
          className="font-ui font-semibold text-type-h2 text-forest text-center leading-tight max-w-3xl mx-auto"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          {title}
        </motion.h2>

        <ul className="mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-4xl mx-auto">
          {statements.map((item, index) => (
            <motion.li
              key={item}
              className="border-t border-n200/70 pt-6 font-ui font-semibold text-type-h3 text-forest leading-snug text-center lg:text-left"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07, ease }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="mt-14 md:mt-16 max-w-2xl mx-auto text-center text-type-body-lg text-n600 leading-relaxed"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2, ease }}
        >
          {body}
        </motion.p>
      </div>
    </MotionSection>
  );
}

function JourneySection() {
  const reduced = useReducedMotion();
  const { title, stages } = ENERGY_WORKFORCE_JOURNEY;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} align="center" className="mb-14 md:mb-20" />

        <div className="max-w-xl mx-auto">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              className="relative"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="py-8 md:py-10 border-t border-n200/70 first:border-t-0 first:pt-0">
                <motion.h3
                  className="font-ui font-semibold text-type-h2 text-forest leading-tight"
                  initial={reduced ? false : { clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.04, ease }}
                >
                  {stage.title}
                </motion.h3>
                <motion.p
                  className="mt-4 text-type-body-lg text-n600 leading-relaxed max-w-md"
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.04 }}
                >
                  {stage.description}
                </motion.p>
              </div>

              {index < stages.length - 1 ? (
                <div className="flex justify-center py-2 md:py-4" aria-hidden>
                  <motion.span
                    className="block w-px h-8 md:h-12 bg-gradient-to-b from-canopy/40 to-transparent"
                    initial={reduced ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                    style={{ transformOrigin: "top" }}
                  />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function WhoItServesSection() {
  const reduced = useReducedMotion();
  const { title, items } = ENERGY_WORKFORCE_AUDIENCES;
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
                  <span className="font-ui font-semibold text-type-h3 text-forest leading-snug group-hover:text-canopy transition-colors">
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

function FutureReadinessSection() {
  const reduced = useReducedMotion();
  const { title, statements } = ENERGY_WORKFORCE_READINESS;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <h2 className="font-ui font-semibold text-type-h2 text-forest text-center leading-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <ul className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {statements.map((item, index) => (
            <motion.li
              key={item}
              className="border-t border-n200/70 pt-6 font-ui font-semibold text-type-h3 text-forest leading-snug"
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

function EngagementSection() {
  const reduced = useReducedMotion();
  const { title, body, primary } = ENERGY_WORKFORCE_ENGAGEMENT;

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
          <h2 className="font-ui font-semibold text-type-h2 text-forest leading-tight">{title}</h2>
          <p className="mt-6 text-type-body-lg text-n600 leading-relaxed">{body}</p>
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
  const { title, description } = ENERGY_WORKFORCE_ECOSYSTEM;

  return (
    <MotionSection
      id="ecosystem"
      className={cn(ECOSYSTEM_SURFACE.white, "border-t border-n200/40 scroll-mt-24")}
    >
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <EcosystemExplorer highlightSegmentId="energy-workforce" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
