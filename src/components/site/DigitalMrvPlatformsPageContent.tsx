import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import {
  DIGITAL_MRV_APPLICATIONS,
  DIGITAL_MRV_DEFINITION,
  DIGITAL_MRV_DELIVERY,
  DIGITAL_MRV_ECOSYSTEM,
  DIGITAL_MRV_LAYER,
  DIGITAL_MRV_LOOKING_AHEAD,
  DIGITAL_MRV_OUTCOMES,
  DIGITAL_MRV_PAGE,
} from "@/lib/digital-mrv-content";
import { ECOSYSTEM_SURFACE } from "@/lib/ecosystem-page-surfaces";
import { cn } from "@/lib/utils";

const PAGE = "container-x max-w-[90rem]";
const SECTION = "py-14 md:py-20 lg:py-28";
const SECTION_COMPACT = "py-10 md:py-14 lg:py-16";
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

export function DigitalMrvPlatformsPageContent() {
  return (
    <div className="bg-background ecosystem-segment-page">
      <HeroSection />
      <DefinitionSection />
      <ApplicationsSection />
      <DigitalLayerSection />
      <OutcomesSection />
      <DeliverySection />
      <LookingAheadSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, titleLines, supportingTitle, description, accentSoft } = DIGITAL_MRV_PAGE;

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
            <HeroMrvScene reduced={!!reduced} />
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

function HeroMrvScene({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative aspect-square max-w-md ml-auto" aria-hidden>
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="mrv-flow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8F0D4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2ECC8A" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3].map((layer) => (
          <motion.ellipse
            key={layer}
            cx="210"
            cy="210"
            rx={160 - layer * 28}
            ry={100 - layer * 18}
            stroke="#A8F0D4"
            strokeOpacity={0.1 + layer * 0.05}
            strokeWidth="1"
            animate={reduced ? undefined : { opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 5 + layer, repeat: Infinity, ease: "easeInOut", delay: layer * 0.35 }}
          />
        ))}

        <motion.path
          d="M80 210 C140 160 280 160 340 210"
          stroke="url(#mrv-flow)"
          strokeWidth="1.5"
          animate={reduced ? undefined : { pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M80 210 C140 260 280 260 340 210"
          stroke="#A8F0D4"
          strokeOpacity="0.2"
          strokeWidth="1"
          animate={reduced ? undefined : { pathLength: [0.3, 1, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {[
          { x: 80, y: 210 },
          { x: 210, y: 140 },
          { x: 340, y: 210 },
          { x: 210, y: 280 },
        ].map((node, i) => (
          <motion.g
            key={i}
            animate={reduced ? undefined : { opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <line x1="210" y1="210" x2={node.x} y2={node.y} stroke="#A8F0D4" strokeOpacity="0.12" />
            <circle cx={node.x} cy={node.y} r="4" fill="#A8F0D4" fillOpacity="0.45" />
          </motion.g>
        ))}

        <circle cx="210" cy="210" r="5" fill="#2ECC8A" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

function DefinitionSection() {
  const reduced = useReducedMotion();
  const { title, pillars } = DIGITAL_MRV_DEFINITION;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.first}>
      <div className={cn(PAGE, SECTION_COMPACT)}>
        <SectionHeader title={title} align="center" className="mb-8 md:mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className={cn(
                "text-center md:px-6 lg:px-8",
                index > 0 && "md:border-l md:border-n200/70",
                index > 0 && "pt-6 md:pt-0 border-t md:border-t-0 border-n200/70",
              )}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-ui font-semibold text-xl md:text-2xl text-forest leading-snug uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm md:text-[15px] text-n600 leading-relaxed max-w-xs mx-auto md:max-w-none">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ApplicationsSection() {
  const reduced = useReducedMotion();
  const { title, items } = DIGITAL_MRV_APPLICATIONS;
  const [active, setActive] = useState<number | null>(null);

  return (
    <MotionSection
      id="capabilities"
      className={cn(ECOSYSTEM_SURFACE.sheet, "scroll-mt-24")}
    >
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} align="center" className="mb-12 md:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className={cn(
                "rounded-[20px] border px-6 py-7 md:px-8 md:py-8 transition-colors duration-300 cursor-default",
                active === index
                  ? "border-canopy/30 bg-white shadow-[var(--shadow-soft)]"
                  : "border-n200/70 bg-[var(--n50)]/40 hover:border-canopy/20 hover:bg-white",
              )}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === index ? null : index)}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h3 className="font-ui font-semibold text-xl md:text-2xl text-forest leading-snug">
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-sm md:text-base text-n600 leading-relaxed transition-all duration-300",
                  active === index ? "mt-3 opacity-100" : "mt-0 h-0 opacity-0 overflow-hidden",
                )}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function DigitalLayerSection() {
  const reduced = useReducedMotion();
  const { title, steps } = DIGITAL_MRV_LAYER;
  const rows = [steps.slice(0, 3), steps.slice(3, 6)] as const;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION_COMPACT)}>
        <SectionHeader title={title} align="center" className="mb-8 md:mb-10" />

        <div className="hidden lg:flex items-start justify-between gap-1 max-w-5xl mx-auto relative">
          <div
            className="absolute top-[5px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-canopy/30 to-transparent"
            aria-hidden
          />
          {steps.map((step, index) => (
            <motion.div
              key={step}
              className="relative flex-1 min-w-0 text-center px-1 bg-[var(--n100)]"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <motion.span
                className="block mx-auto mb-3 h-2.5 w-2.5 rounded-full bg-canopy ring-4 ring-[var(--n100)]"
                initial={reduced ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.08 + index * 0.05 }}
                aria-hidden
              />
              <p className="font-ui font-semibold text-sm xl:text-[15px] text-forest leading-snug">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block lg:hidden max-w-2xl mx-auto space-y-5">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-2">
              {row.map((step, index) => (
                <div key={step} className="contents">
                  <motion.div
                    className="flex-1 min-w-0 rounded-xl border border-n200/60 bg-white/60 px-3 py-3.5 text-center"
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (rowIndex * 3 + index) * 0.05 }}
                  >
                    <p className="font-ui font-semibold text-sm text-forest leading-snug">{step}</p>
                  </motion.div>
                  {index < row.length - 1 ? (
                    <ArrowRight size={14} className="shrink-0 text-canopy/35" aria-hidden />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="md:hidden max-w-xs mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <p className="py-3 text-center font-ui font-semibold text-base text-forest leading-snug">{step}</p>
              {index < steps.length - 1 ? (
                <div className="flex justify-center" aria-hidden>
                  <motion.span
                    className="block w-px h-5 bg-gradient-to-b from-canopy/35 to-transparent"
                    initial={reduced ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.06 + index * 0.04 }}
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

function OutcomesSection() {
  const reduced = useReducedMotion();
  const { title, statements } = DIGITAL_MRV_OUTCOMES;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.white}>
      <div className={cn(PAGE, SECTION)}>
        <h2 className="font-ui font-semibold text-[clamp(2rem,4vw,3rem)] text-forest text-center leading-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <ul className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {statements.map((item, index) => (
            <motion.li
              key={item}
              className="border-t border-n200/70 pt-6 font-ui font-semibold text-[clamp(1.25rem,2vw,1.5rem)] text-forest leading-snug"
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

function DeliverySection() {
  const reduced = useReducedMotion();
  const { title, body, capabilities } = DIGITAL_MRV_DELIVERY;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.mint}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy">
              How Planetive Supports Delivery
            </p>
            <h2 className="mt-4 font-ui font-semibold text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{body}</p>
          </motion.div>

          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-n500 mb-6">
              Capability Areas
            </p>
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

function LookingAheadSection() {
  const reduced = useReducedMotion();
  const { headline, body, primary } = DIGITAL_MRV_LOOKING_AHEAD;

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
  const { title, description } = DIGITAL_MRV_ECOSYSTEM;

  return (
    <MotionSection id="ecosystem" className={cn(ECOSYSTEM_SURFACE.sheet, "border-t border-n200/40 scroll-mt-24")}>
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <EcosystemExplorer highlightSegmentId="digital-mrv" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
