import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import { EditorialCapabilityPanel } from "@/components/site/ecosystem/EditorialCapabilityPanel";
import {
  IN_HOUSE_AGENTS_ECOSYSTEM,
  IN_HOUSE_AGENTS_ENABLES,
  IN_HOUSE_AGENTS_LAYER,
  IN_HOUSE_AGENTS_LOOKING_FORWARD,
  IN_HOUSE_AGENTS_OVERVIEW,
  IN_HOUSE_AGENTS_PAGE,
  IN_HOUSE_AGENTS_SYSTEMS,
} from "@/lib/in-house-agents-content";
import { ECOSYSTEM_SURFACE } from "@/lib/ecosystem-page-surfaces";
import {
  ecosystemEase,
  ecosystemViewport,
  fadeUpChild,
  scaleIn,
  staggerContainer,
} from "@/lib/ecosystem-motion";
import { cn } from "@/lib/utils";

const PAGE = "container-x max-w-[90rem]";
const SECTION = "py-14 md:py-20 lg:py-28";
const ease = [0.22, 1, 0.36, 1] as const;

type IntelligenceSystem = (typeof IN_HOUSE_AGENTS_SYSTEMS.systems)[number];

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

export function InHouseAgentsPageContent() {
  return (
    <div className="bg-background ecosystem-segment-page">
      <HeroSection />
      <OverviewSection />
      <SystemsSection />
      <ConnectedLayerSection />
      <EnablesSection />
      <LookingForwardSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, titleLines, supportingTitle, description, accentSoft } = IN_HOUSE_AGENTS_PAGE;

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
              {titleLines.map((line, index) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + index * 0.1, ease: ecosystemEase }}
                >
                  {line}
                </motion.span>
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
            <HeroIntelligenceScene reduced={!!reduced} />
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

function HeroIntelligenceScene({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative aspect-square max-w-md ml-auto" aria-hidden>
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        {[120, 160, 200].map((r, i) => (
          <motion.circle
            key={r}
            cx="210"
            cy="210"
            r={r}
            stroke="#A8F0D4"
            strokeOpacity={0.1 + i * 0.04}
            strokeWidth="1"
            animate={reduced ? undefined : { opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {[
          { x: 210, y: 80 },
          { x: 340, y: 180 },
          { x: 280, y: 320 },
          { x: 140, y: 320 },
          { x: 80, y: 180 },
        ].map((node, i) => (
          <motion.g
            key={i}
            animate={reduced ? undefined : { opacity: [0.35, 0.85, 0.35] }}
            transition={{
              duration: 4.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            <line x1="210" y1="210" x2={node.x} y2={node.y} stroke="#A8F0D4" strokeOpacity="0.12" />
            <circle cx={node.x} cy={node.y} r="4" fill="#A8F0D4" fillOpacity="0.45" />
          </motion.g>
        ))}

        <motion.circle
          cx="210"
          cy="210"
          r="7"
          fill="#2ECC8A"
          fillOpacity="0.5"
          animate={reduced ? undefined : { scale: [1, 1.12, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function OverviewSection() {
  const reduced = useReducedMotion();
  const { title, body, statements } = IN_HOUSE_AGENTS_OVERVIEW;

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
              {statements.map((item, index) => (
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

function SystemsSection() {
  const reduced = useReducedMotion();
  const { sectionLabel, systems } = IN_HOUSE_AGENTS_SYSTEMS;

  return (
    <MotionSection id="systems" className={cn(ECOSYSTEM_SURFACE.mint, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <motion.p
          className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy mb-16 md:mb-24"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.45, ease: ecosystemEase }}
        >
          {sectionLabel}
        </motion.p>

        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {systems.map((system, index) => (
            <SystemEditorial key={system.id} system={system} index={index} reduced={!!reduced} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function SystemEditorial({
  system,
  index,
  reduced,
}: {
  system: IntelligenceSystem;
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
      <motion.div
        className="lg:col-span-6"
        initial={reduced ? false : "hidden"}
        whileInView="visible"
        viewport={ecosystemViewport}
        variants={staggerContainer}
      >
        <motion.p
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy"
          variants={fadeUpChild}
        >
          {system.label}
        </motion.p>
        <motion.h3
          className="mt-4 font-ui font-semibold text-type-h2 text-forest leading-[1.02]"
          variants={fadeUpChild}
        >
          {system.title}
        </motion.h3>
        <motion.p
          className="mt-3 font-mono text-[10px] tracking-[0.16em] uppercase text-n500"
          variants={fadeUpChild}
        >
          {system.category}
        </motion.p>
        <motion.p
          className="mt-5 font-ui font-semibold text-xl md:text-2xl text-n800 leading-snug"
          variants={fadeUpChild}
        >
          {system.tagline}
        </motion.p>
        <motion.p
          className="mt-6 text-type-body-lg text-n600 leading-relaxed"
          variants={fadeUpChild}
        >
          {system.description}
        </motion.p>

        <motion.div className="mt-8 pt-8 border-t border-n200/60" variants={fadeUpChild}>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500 mb-4">
            Capability Areas
          </p>
          <motion.ul
            className="space-y-2"
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={ecosystemViewport}
            variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.02 } } }}
          >
            {system.capabilities.map((cap) => (
              <motion.li
                key={cap}
                className="text-sm md:text-base text-n600"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: ecosystemEase } },
                }}
              >
                {cap}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:col-span-6 lg:pt-2"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={ecosystemViewport}
        transition={{ duration: 0.55, delay: 0.12, ease: ecosystemEase }}
      >
        <EditorialCapabilityPanel
          eyebrow={system.panel.eyebrow}
          layers={system.panel.layers}
          direction={reversed ? "left" : "right"}
          className="max-w-none"
        />
      </motion.div>
    </motion.article>
  );
}

function ConnectedLayerSection() {
  const reduced = useReducedMotion();
  const { title, center, systems } = IN_HOUSE_AGENTS_LAYER;
  const [active, setActive] = useState<string | null>(null);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={ecosystemViewport}
          variants={fadeUpChild}
        >
          <SectionHeader title={title} align="center" className="mb-14 md:mb-20" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-4xl mx-auto">
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              className="rounded-[24px] border border-canopy/25 bg-white px-6 py-8 md:px-8 md:py-10 shadow-[var(--shadow-soft)] text-center max-w-xs"
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={ecosystemViewport}
              variants={scaleIn}
            >
              <p className="font-ui font-semibold text-type-lead text-forest leading-snug">
                {center}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            {systems.map((name, index) => (
              <motion.div
                key={name}
                className="relative"
                initial={reduced ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <button
                  type="button"
                  className={cn(
                    "w-full text-left py-5 md:py-6 border-t border-n200/70 first:border-t-0 transition-colors",
                    active === name ? "text-forest" : "text-n600 hover:text-forest",
                  )}
                  onMouseEnter={() => setActive(name)}
                  onFocus={() => setActive(name)}
                  onMouseLeave={() => setActive(null)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(active === name ? null : name)}
                >
                  <span className="font-ui font-semibold text-type-h3 leading-snug">{name}</span>
                </button>

                {index < systems.length - 1 ? (
                  <div className="flex justify-start pl-2 py-1" aria-hidden>
                    <motion.span
                      className="block w-px h-6 bg-gradient-to-b from-canopy/40 to-transparent"
                      initial={reduced ? false : { scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.1 + index * 0.05 }}
                      style={{ transformOrigin: "top" }}
                    />
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function EnablesSection() {
  const reduced = useReducedMotion();
  const { title, statements } = IN_HOUSE_AGENTS_ENABLES;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <motion.h2
          className="font-ui font-semibold text-type-h2 text-forest text-center leading-tight max-w-3xl mx-auto"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.5, ease: ecosystemEase }}
        >
          {title}
        </motion.h2>
        <ul className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {statements.map((item, index) => (
            <motion.li
              key={item}
              className="border-t border-n200/70 pt-6 font-ui font-semibold text-type-h3 text-forest leading-snug"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}

function LookingForwardSection() {
  const reduced = useReducedMotion();
  const { headline, body, primary } = IN_HOUSE_AGENTS_LOOKING_FORWARD;

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
          <h2 className="font-ui font-semibold text-type-h2 text-forest leading-tight">
            {headline}
          </h2>
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
  const reduced = useReducedMotion();
  const { title, description } = IN_HOUSE_AGENTS_ECOSYSTEM;

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
            <EcosystemExplorer highlightSegmentId="in-house-agents" />
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
