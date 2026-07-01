import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import {
  AGRI_TECH_ACEP,
  AGRI_TECH_AGRI_CO,
  AGRI_TECH_ECO_PARKS,
  AGRI_TECH_ECOSYSTEM,
  AGRI_TECH_ENGAGEMENT,
  AGRI_TECH_PAGE,
  AGRI_TECH_VALUE_CHAIN,
  AGRI_TECH_VERT_OS,
} from "@/lib/agri-tech-content";
import { ECOSYSTEM_SURFACE } from "@/lib/ecosystem-page-surfaces";
import {
  ecosystemEase,
  ecosystemViewport,
  fadeUpChild,
  staggerContainer,
} from "@/lib/ecosystem-motion";
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

export function AgriTechSolutionsPageContent() {
  return (
    <div className="bg-background ecosystem-segment-page">
      <HeroSection />
      <ValueChainSection />
      <AgriCoSection />
      <VertOsSection />
      <EcoParksSection />
      <ACEPSection />
      <EngagementSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, title, description, pillars, accentSoft } = AGRI_TECH_PAGE;

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
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/90">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-ui font-semibold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] max-w-3xl">
              {title}
            </h1>
            <p className="mt-6 text-base md:text-lg text-n200/90 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-1 gap-y-3">
              {pillars.map((pillar, index) => (
                <span key={pillar} className="inline-flex items-center">
                  <span className="font-ui font-semibold text-[clamp(1rem,2vw,1.35rem)] text-mint-soft/95 tracking-tight">
                    {pillar}
                  </span>
                  {index < pillars.length - 1 ? (
                    <span
                      className="mx-3 md:mx-5 h-4 w-px bg-mint-soft/35 hidden sm:inline-block"
                      aria-hidden
                    />
                  ) : null}
                </span>
              ))}
            </div>

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
            <HeroAgriScene reduced={!!reduced} />
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

function HeroAgriScene({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative aspect-square max-w-md ml-auto" aria-hidden>
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        {[0, 1, 2, 3].map((layer) => (
          <motion.g
            key={layer}
            animate={reduced ? undefined : { y: [0, -3 - layer, 0] }}
            transition={{
              duration: 5 + layer,
              repeat: Infinity,
              ease: "easeInOut",
              delay: layer * 0.4,
            }}
          >
            <rect
              x={80 + layer * 12}
              y={120 + layer * 28}
              width={260 - layer * 24}
              height={36}
              rx="4"
              stroke="#A8F0D4"
              strokeOpacity={0.2 + layer * 0.08}
              fill="#A8F0D4"
              fillOpacity={0.04}
            />
          </motion.g>
        ))}

        <motion.path
          d="M60 340 C140 300 200 360 280 310 S360 280 360 280"
          stroke="#2ECC8A"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          animate={reduced ? undefined : { strokeDashoffset: [0, -28] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M100 340 C180 320 240 350 320 330"
          stroke="#A8F0D4"
          strokeOpacity="0.25"
          strokeWidth="1"
          animate={reduced ? undefined : { opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {[
          { x: 120, y: 200 },
          { x: 210, y: 170 },
          { x: 300, y: 210 },
          { x: 170, y: 280 },
          { x: 280, y: 300 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#A8F0D4"
            fillOpacity="0.5"
            animate={reduced ? undefined : { opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function ValueChainSection() {
  const reduced = useReducedMotion();
  const { title, stages } = AGRI_TECH_VALUE_CHAIN;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.first}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} className="mb-12 md:mb-16 max-w-3xl" />

        <div className="hidden lg:block">
          <div className="relative">
            <motion.div
              className="absolute top-5 left-0 right-0 h-px bg-n200/80 origin-left"
              aria-hidden
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={ecosystemViewport}
              transition={{ duration: 0.8, ease: ecosystemEase }}
            />
            <div className="grid grid-cols-6 gap-3">
              {stages.map((stage, index) => (
                <motion.button
                  key={stage.id}
                  type="button"
                  className={cn(
                    "relative pt-8 text-left transition-opacity",
                    activeIndex === index ? "opacity-100" : "opacity-55 hover:opacity-80",
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={ecosystemViewport}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.06, ease: ecosystemEase }}
                >
                  <motion.span
                    className={cn(
                      "absolute top-3 left-0 h-3 w-3 rounded-full border-2 bg-[var(--n50)] transition-colors",
                      activeIndex === index ? "border-canopy bg-canopy" : "border-n300",
                    )}
                    aria-hidden
                  />
                  <span className="font-ui font-semibold text-sm md:text-base text-forest leading-snug block pr-2">
                    {stage.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            key={stages[activeIndex].id}
            className="mt-12 rounded-[24px] border border-n200/70 bg-white px-8 py-8 md:px-10 md:py-10 shadow-[var(--shadow-soft)]"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy mb-5">
              {stages[activeIndex].label}
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {stages[activeIndex].capabilities.map((cap) => (
                <li
                  key={cap}
                  className="rounded-full border border-n200/80 bg-[var(--n50)] px-4 py-2 text-sm font-medium text-forest"
                >
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="lg:hidden space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              className="rounded-[20px] border border-n200/70 bg-white px-6 py-6 shadow-[var(--shadow-soft)]"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-canopy shrink-0" aria-hidden />
                <h3 className="font-ui font-semibold text-lg text-forest">{stage.label}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stage.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="rounded-full border border-n200/80 bg-[var(--n50)] px-3 py-1.5 text-xs font-medium text-forest"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function AgriCoSection() {
  const reduced = useReducedMotion();
  const { label, title, supportingTitle, description, modules, surfaces } = AGRI_TECH_AGRI_CO;

  return (
    <MotionSection id="agri-co" className={cn(ECOSYSTEM_SURFACE.white, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={ecosystemViewport}
            variants={staggerContainer}
          >
            <motion.p
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy"
              variants={fadeUpChild}
            >
              {label}
            </motion.p>
            <motion.h2
              className="mt-4 font-ui font-semibold text-[clamp(2.25rem,4.5vw,3.5rem)] text-forest leading-[1.02]"
              variants={fadeUpChild}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 font-ui font-semibold text-xl md:text-2xl text-n800 leading-snug"
              variants={fadeUpChild}
            >
              {supportingTitle}
            </motion.p>
            <motion.p
              className="mt-6 text-base md:text-lg text-n600 leading-relaxed"
              variants={fadeUpChild}
            >
              {description}
            </motion.p>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.p
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-n500 mb-6"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ecosystemViewport}
              transition={{ duration: 0.45, ease: ecosystemEase }}
            >
              Platform Modules
            </motion.p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
              {modules.map((item, index) => (
                <motion.li
                  key={item}
                  className="font-ui font-semibold text-[clamp(1.05rem,1.8vw,1.35rem)] text-forest leading-snug border-b border-n200/60 py-3.5 md:py-4"
                  initial={reduced ? false : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={ecosystemViewport}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: ecosystemEase }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28 lg:mt-32 pt-16 md:pt-20 border-t border-n200/60 max-w-2xl mx-auto">
          <motion.p
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy text-center mb-14 md:mb-16"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ecosystemViewport}
            transition={{ duration: 0.45, ease: ecosystemEase }}
          >
            Experience Surfaces
          </motion.p>

          {surfaces.map((surface, index) => (
            <motion.div
              key={`${surface.title}-${surface.for}`}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ecosystemViewport}
              transition={{ duration: 0.5, delay: index * 0.08, ease: ecosystemEase }}
            >
              <AgriCoSurfaceVisual type={surface.visual} reduced={!!reduced} />
              <p className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                {surface.title}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-n500">
                For: {surface.for}
              </p>
              <p className="mt-3 font-ui font-semibold text-xl md:text-2xl text-forest leading-snug">
                {surface.description}
              </p>

              {index < surfaces.length - 1 ? (
                <div className="flex justify-center py-10 md:py-12" aria-hidden>
                  <motion.span
                    className="block w-px h-10 bg-gradient-to-b from-canopy/40 to-transparent"
                    initial={reduced ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={ecosystemViewport}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: ecosystemEase }}
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

function AgriCoSurfaceVisual({
  type,
  reduced,
}: {
  type: "web" | "mobile-field" | "mobile-farmer";
  reduced: boolean;
}) {
  const isWeb = type === "web";

  return (
    <div
      className={cn(
        "mx-auto overflow-hidden rounded-[20px] border border-n200/60 bg-white",
        isWeb ? "max-w-md" : "max-w-[200px]",
      )}
      aria-hidden
    >
      <div className="flex gap-1.5 px-4 py-3 border-b border-n200/50 bg-[var(--n50)]">
        <span className="h-2 w-2 rounded-full bg-n200" />
        <span className="h-2 w-2 rounded-full bg-n200" />
        <span className="h-2 w-2 rounded-full bg-n200" />
      </div>
      <div className={cn("p-5 space-y-3", isWeb ? "min-h-[120px]" : "min-h-[160px]")}>
        {type === "web" ? (
          <div className="flex gap-3">
            <div className="h-16 w-1/4 rounded-lg bg-mint-soft/30" />
            <div className="flex-1 space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-n200/60" />
              <div className="h-2 w-full rounded-full bg-n100" />
              <motion.div
                className="h-8 rounded-md bg-canopy/10 mt-2"
                animate={reduced ? undefined : { opacity: [0.5, 0.85, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        ) : null}
        {type === "mobile-field" ? (
          <>
            {[0, 1, 2].map((row) => (
              <motion.div
                key={row}
                className="flex items-center gap-2"
                animate={reduced ? undefined : { opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 4 + row,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: row * 0.3,
                }}
              >
                <span className="h-2 w-2 rounded-full bg-canopy/40 shrink-0" />
                <div className="h-2 flex-1 rounded-full bg-n200/50" />
              </motion.div>
            ))}
            <div className="h-12 rounded-lg bg-mint-soft/25 mt-3" />
          </>
        ) : null}
        {type === "mobile-farmer" ? (
          <>
            <div className="h-14 rounded-xl bg-mint-soft/30" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-n100" />
              <div className="h-10 rounded-lg bg-n100" />
            </div>
            <motion.div
              className="h-2 w-2/3 rounded-full bg-canopy/20"
              animate={reduced ? undefined : { width: ["50%", "75%", "50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

function VertOsSection() {
  const reduced = useReducedMotion();
  const {
    label,
    title,
    supportingTitle,
    description,
    capabilityCards,
    deployment,
    closingStatement,
  } = AGRI_TECH_VERT_OS;
  const [active, setActive] = useState<number | null>(null);

  return (
    <MotionSection id="vert-os" className={cn(ECOSYSTEM_SURFACE.mint, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={ecosystemViewport}
          variants={staggerContainer}
        >
          <motion.p
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy"
            variants={fadeUpChild}
          >
            {label}
          </motion.p>
          <motion.h2
            className="mt-4 font-ui font-semibold text-[clamp(2.25rem,4.5vw,3.5rem)] text-forest leading-[1.02]"
            variants={fadeUpChild}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mt-4 font-ui font-semibold text-xl md:text-2xl text-n800 leading-snug"
            variants={fadeUpChild}
          >
            {supportingTitle}
          </motion.p>
          <motion.p
            className="mt-5 text-base md:text-lg text-n600 leading-relaxed"
            variants={fadeUpChild}
          >
            {description}
          </motion.p>
        </motion.div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {capabilityCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={cn(
                "rounded-[20px] border px-6 py-6 md:px-8 md:py-7 transition-colors duration-300",
                active === index
                  ? "border-canopy/30 bg-white shadow-[var(--shadow-soft)]"
                  : "border-n200/70 bg-[var(--n50)]/40 hover:border-canopy/20 hover:bg-white",
              )}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ecosystemViewport}
              transition={{ duration: 0.5, delay: index * 0.07, ease: ecosystemEase }}
            >
              <h3 className="font-ui font-semibold text-xl md:text-2xl text-forest leading-snug">
                {card.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-n200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-forest"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 md:mt-16 rounded-[24px] border border-canopy/20 bg-white px-6 py-8 md:px-10 md:py-10 shadow-[var(--shadow-soft)]"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.5, ease: ecosystemEase }}
        >
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy">
            {deployment.title}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            {deployment.steps.map((step, index) => (
              <span key={step} className="inline-flex items-center">
                <span className="text-sm md:text-base font-medium text-forest">{step}</span>
                {index < deployment.steps.length - 1 ? (
                  <span className="mx-3 text-n400" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-n200/70 flex flex-wrap items-baseline gap-3">
            <span className="font-ui font-semibold text-xl md:text-2xl text-forest">
              {deployment.timeline}
            </span>
            <span className="text-sm text-n600">{deployment.timelineDetail}</span>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 text-base md:text-lg text-n600 leading-relaxed max-w-3xl"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {closingStatement}
        </motion.p>
      </div>
    </MotionSection>
  );
}

function EcoParksSection() {
  const reduced = useReducedMotion();
  const { title, description, flow, outcomes, partnerNote } = AGRI_TECH_ECO_PARKS;

  return (
    <MotionSection id="eco-parks" className={cn(ECOSYSTEM_SURFACE.white, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader
          title={title}
          description={description}
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <motion.div
          className="overflow-x-auto pb-2"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 md:gap-3 min-w-max mx-auto justify-center px-2">
            {flow.map((step, index) => (
              <span key={step} className="inline-flex items-center gap-2 md:gap-3">
                <span className="rounded-full border border-canopy/25 bg-mint-soft/30 px-4 py-2.5 text-sm font-semibold text-forest whitespace-nowrap">
                  {step}
                </span>
                {index < flow.length - 1 ? (
                  <span className="text-canopy/60 text-lg" aria-hidden>
                    ↓
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-14 flex flex-wrap justify-center gap-3"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {outcomes.map((outcome) => (
            <span
              key={outcome}
              className="rounded-full border border-n200/80 bg-[var(--n50)] px-5 py-2.5 font-ui font-semibold text-sm md:text-base text-forest"
            >
              {outcome}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 text-center text-sm text-n600"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {partnerNote}
        </motion.p>
      </div>
    </MotionSection>
  );
}

function ACEPSection() {
  const reduced = useReducedMotion();
  const { title, supportingTitle, description, pillars, outcomes, closingStrip } = AGRI_TECH_ACEP;

  return (
    <MotionSection id="acep" className={cn(ECOSYSTEM_SURFACE.sheet, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader
          eyebrow={supportingTitle}
          title={title}
          description={description}
          className="mb-12 md:mb-16 max-w-3xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              className="rounded-[20px] border border-n200/70 bg-white px-6 py-7 md:px-8 md:py-8 shadow-[var(--shadow-soft)]"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ecosystemViewport}
              transition={{ duration: 0.45, delay: index * 0.08, ease: ecosystemEase }}
            >
              <h3 className="font-ui font-semibold text-xl md:text-2xl text-forest leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm md:text-base text-n600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-14"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy mb-5">
            Outcomes
          </p>
          <ul className="flex flex-wrap gap-3">
            {outcomes.map((outcome) => (
              <li
                key={outcome}
                className="font-ui font-semibold text-[clamp(1.1rem,2vw,1.4rem)] text-forest border-b border-n200/60 pb-3 pr-6"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-14 md:mt-16 rounded-[20px] border border-canopy/20 bg-mint-soft/25 px-6 py-6 md:px-10 md:py-8"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {closingStrip.map((item) => (
              <li
                key={item}
                className="font-ui font-semibold text-base md:text-lg text-forest leading-snug text-center sm:text-left"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </MotionSection>
  );
}

function EngagementSection() {
  const reduced = useReducedMotion();
  const { title, body, primary } = AGRI_TECH_ENGAGEMENT;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.mint}>
      <div className={cn(PAGE, "py-16 md:py-24 lg:py-32")}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-ui font-semibold text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight">
            {title}
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
  const reduced = useReducedMotion();
  const { title, description } = AGRI_TECH_ECOSYSTEM;

  return (
    <MotionSection
      id="ecosystem"
      className={cn(ECOSYSTEM_SURFACE.sheet, "border-t border-n200/40 scroll-mt-24")}
    >
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ecosystemViewport}
            transition={{ duration: 0.5, ease: ecosystemEase }}
          >
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </motion.div>
          <motion.div
            className="lg:col-span-7 flex justify-center lg:justify-end"
            initial={reduced ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={ecosystemViewport}
            transition={{ duration: 0.6, delay: 0.1, ease: ecosystemEase }}
          >
            <EcosystemExplorer highlightSegmentId="agri-tech" />
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
