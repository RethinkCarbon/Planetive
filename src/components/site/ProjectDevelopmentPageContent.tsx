import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import {
  PROJECT_DEVELOPMENT_ECOSYSTEM,
  PROJECT_DEVELOPMENT_ENGAGEMENT,
  PROJECT_DEVELOPMENT_EXPERIENCE,
  PROJECT_DEVELOPMENT_LONG_TERM,
  PROJECT_DEVELOPMENT_MEANING,
  PROJECT_DEVELOPMENT_PAGE,
  PROJECT_DEVELOPMENT_PROCESS,
} from "@/lib/project-development-content";
import { ECOSYSTEM_SURFACE } from "@/lib/ecosystem-page-surfaces";
import { cn } from "@/lib/utils";

const PAGE = "container-x max-w-[90rem]";
const SECTION = "py-14 md:py-20 lg:py-28";
const ease = [0.22, 1, 0.36, 1] as const;

type ExperienceProject = (typeof PROJECT_DEVELOPMENT_EXPERIENCE.projects)[number];

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

export function ProjectDevelopmentPageContent() {
  return (
    <div className="bg-background ecosystem-segment-page">
      <HeroSection />
      <MeaningSection />
      <ExperienceSection />
      <HowItWorksSection />
      <LongTermSection />
      <EngagementSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, titleLines, supportingTitle, description, accentSoft } =
    PROJECT_DEVELOPMENT_PAGE;

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
            <HeroDevelopmentScene reduced={!!reduced} />
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

function HeroDevelopmentScene({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative aspect-square max-w-md ml-auto" aria-hidden>
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        {[0, 1, 2, 3].map((layer) => (
          <motion.rect
            key={layer}
            x={70 + layer * 18}
            y={100 + layer * 52}
            width={280 - layer * 36}
            height={28}
            rx="3"
            stroke="#A8F0D4"
            strokeOpacity={0.15 + layer * 0.06}
            fill="#A8F0D4"
            fillOpacity={0.03}
            animate={reduced ? undefined : { y: [0, -2 - layer, 0] }}
            transition={{
              duration: 5 + layer,
              repeat: Infinity,
              ease: "easeInOut",
              delay: layer * 0.3,
            }}
          />
        ))}

        <motion.path
          d="M80 340 L160 280 L240 320 L340 260"
          stroke="#2ECC8A"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={reduced ? undefined : { pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {[
          { x: 160, y: 280 },
          { x: 240, y: 320 },
          { x: 340, y: 260 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#A8F0D4"
            fillOpacity="0.45"
            animate={reduced ? undefined : { opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function MeaningSection() {
  const reduced = useReducedMotion();
  const { title, body, capabilities } = PROJECT_DEVELOPMENT_MEANING;

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
            <p className="mt-6 text-type-body-lg text-n600 leading-relaxed">{body}</p>
          </motion.div>

          <div className="lg:col-span-7">
            <ul className="space-y-4 md:space-y-5">
              {capabilities.map((item, index) => (
                <motion.li
                  key={item}
                  className="font-ui font-semibold text-type-h3 text-forest leading-snug border-b border-n200/60 pb-4 md:pb-5 last:border-0"
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

function ExperienceSection() {
  const reduced = useReducedMotion();
  const { sectionTitle, projects } = PROJECT_DEVELOPMENT_EXPERIENCE;

  return (
    <MotionSection id="experience" className={cn(ECOSYSTEM_SURFACE.whiteDivider, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader
          eyebrow="Selected Development Experience"
          title={sectionTitle}
          className="mb-16 md:mb-24 max-w-3xl"
        />

        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectEditorial
              key={project.id}
              project={project}
              index={index}
              reduced={!!reduced}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ProjectEditorial({
  project,
  index,
  reduced,
}: {
  project: ExperienceProject;
  index: number;
  reduced: boolean;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      className={cn(
        "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start",
        reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
      )}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="lg:col-span-6">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy">
          {project.label}
        </p>
        <h3 className="mt-4 font-ui font-semibold text-type-h3 text-forest leading-tight">
          {project.title}
        </h3>

        {"status" in project && project.status ? (
          <p className="mt-3 font-mono text-[10px] tracking-[0.16em] uppercase text-n500">
            {project.status}
          </p>
        ) : null}

        {"sector" in project && project.sector ? (
          <p className="mt-2 text-sm font-semibold text-n600">Sector: {project.sector}</p>
        ) : null}

        <p className="mt-6 text-type-body-lg text-n600 leading-relaxed">{project.description}</p>

        {"scale" in project && project.scale ? (
          <p className="mt-6 font-ui font-semibold text-lg text-forest leading-snug">
            {project.scale}
          </p>
        ) : null}

        {"target" in project && project.target ? (
          <p className="mt-2 text-base text-n600">
            Target: <span className="text-forest font-semibold">{project.target}</span>
          </p>
        ) : null}

        {"potential" in project && project.potential ? (
          <p className="mt-2 text-base text-n600">
            Potential: <span className="text-forest font-semibold">{project.potential}</span>
          </p>
        ) : null}

        {"additional" in project && project.additional ? (
          <p className="mt-4 text-sm md:text-base text-n600 leading-relaxed">
            {project.additional}
          </p>
        ) : null}

        {"supportingCopy" in project && project.supportingCopy ? (
          <p className="mt-4 text-type-body-lg text-n600 leading-relaxed">
            {project.supportingCopy}
          </p>
        ) : null}

        {"highlights" in project && project.highlights ? (
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="border-t border-n200/70 pt-4 font-ui font-semibold text-base text-forest leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {"portfolio" in project && project.portfolio ? (
          <ul className="mt-6 space-y-2">
            {project.portfolio.map((item) => (
              <li
                key={item}
                className="font-ui font-semibold text-base text-forest leading-snug border-b border-n200/50 pb-2 last:border-0"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {"collaborations" in project && project.collaborations
          ? project.collaborations.map((collaboration) => (
              <div key={collaboration.title} className="mt-10 pt-8 border-t border-n200/60">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500">
                  Collaboration Reference
                </p>
                <h4 className="mt-3 font-ui font-semibold text-type-h3 text-forest leading-snug">
                  {collaboration.title}
                </h4>
                <p className="mt-4 text-base text-n600 leading-relaxed">
                  {collaboration.description}
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {collaboration.highlights.map((item) => (
                    <li
                      key={item}
                      className="border-t border-n200/60 pt-3 font-ui font-semibold text-sm text-forest leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-n600 leading-relaxed">
                  {collaboration.supportingCopy}
                </p>
              </div>
            ))
          : null}
      </div>

      <div className="lg:col-span-6 lg:sticky lg:top-28 self-start">
        <ProjectHighlightCard project={project} />
      </div>
    </motion.article>
  );
}

function ProjectHighlightCard({ project }: { project: ExperienceProject }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-forest text-white p-7 md:p-9 shadow-[0_22px_50px_-24px_rgba(10,61,46,0.45)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10"
      />
      <p className="relative z-10 font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/75">
        {project.label}
      </p>
      <h4 className="relative z-10 mt-4 font-ui font-semibold text-xl md:text-2xl leading-tight">
        Delivery scope
      </h4>
      <p className="relative z-10 mt-3 text-sm md:text-base text-n200/85 leading-relaxed">
        Planetive support across this initiative, from planning through delivery.
      </p>
      <div className="relative z-10 mt-8 flex flex-wrap gap-2">
        {project.scope.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSection() {
  const reduced = useReducedMotion();
  const { title, steps } = PROJECT_DEVELOPMENT_PROCESS;
  const [active, setActive] = useState(0);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
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
                onClick={() => setActive(index)}
              >
                <span
                  className={cn(
                    "absolute top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 bg-[var(--n100)] transition-colors",
                    active === index ? "border-canopy bg-canopy" : "border-n300",
                  )}
                  aria-hidden
                />
                <span className="font-ui font-semibold text-sm md:text-base text-forest">
                  {step.title}
                </span>
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

function LongTermSection() {
  const reduced = useReducedMotion();
  const { title, statements } = PROJECT_DEVELOPMENT_LONG_TERM;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.mint}>
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
  const { title, body, primary } = PROJECT_DEVELOPMENT_ENGAGEMENT;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
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
  const { title, description } = PROJECT_DEVELOPMENT_ECOSYSTEM;

  return (
    <MotionSection
      id="ecosystem"
      className={cn(ECOSYSTEM_SURFACE.sheet, "border-t border-n200/40 scroll-mt-24")}
    >
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <EcosystemExplorer highlightSegmentId="project-development" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
