import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import {
  ENERGY_INTELLIGENCE_APPLIES,
  ENERGY_INTELLIGENCE_CTA,
  ENERGY_INTELLIGENCE_ECOSYSTEM,
  ENERGY_INTELLIGENCE_ENGAGEMENT,
  ENERGY_INTELLIGENCE_FLOW,
  ENERGY_INTELLIGENCE_GRIDLENS,
  ENERGY_INTELLIGENCE_OUTCOME,
  ENERGY_INTELLIGENCE_PAGE,
  ENERGY_INTELLIGENCE_PROCESS,
  ENERGY_INTELLIGENCE_WHAT_WE_DO,
} from "@/lib/energy-sector-intelligence-content";
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

function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "max-w-xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-n600 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}

export function EnergySectorIntelligencePageContent() {
  return (
    <div className="bg-background">
      <HeroSection />
      <WhatWeDoSection />
      <EngagementSection />
      <GridLensSection />
      <HowWeEngageSection />
      <WhereAppliesSection />
      <IntelligenceFlowSection />
      <OutcomeFrameworkSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, titleLines, supportingTitle, description, accentSoft } =
    ENERGY_INTELLIGENCE_PAGE;

  return (
    <section
      className="relative isolate min-h-[100dvh] overflow-hidden text-white flex flex-col"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 78% 40%, ${accentSoft}40, transparent 58%)`,
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
            <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.05]">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 font-display text-[clamp(1.15rem,2.4vw,1.85rem)] text-mint-soft/95 leading-snug max-w-xl">
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
            className="lg:col-span-5 hidden lg:block"
            initial={reduced ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
          >
            <HeroEnergyScene reduced={!!reduced} />
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

function HeroEnergyScene({ reduced }: { reduced: boolean }) {
  return (
    <div className="relative aspect-square max-w-md ml-auto" aria-hidden>
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="esi-flow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8F0D4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2ECC8A" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {[200, 160, 120, 80].map((r, i) => (
          <motion.circle
            key={r}
            cx="210"
            cy="210"
            r={r}
            stroke="#A8F0D4"
            strokeOpacity={0.12 + i * 0.04}
            strokeWidth="1"
            animate={reduced ? undefined : { opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <motion.path
          d="M40 280 L120 220 L200 260 L280 200 L360 240"
          stroke="url(#esi-flow)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={reduced ? undefined : { pathLength: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M60 320 L160 280 L240 300 L340 260"
          stroke="#A8F0D4"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          animate={reduced ? undefined : { strokeDashoffset: [0, -24] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        {[
          { x: 120, y: 150 },
          { x: 300, y: 170 },
          { x: 210, y: 100 },
          { x: 180, y: 300 },
          { x: 300, y: 280 },
        ].map((node, i) => (
          <motion.g
            key={i}
            animate={reduced ? undefined : { opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <line x1="210" y1="210" x2={node.x} y2={node.y} stroke="#A8F0D4" strokeOpacity="0.15" />
            <rect
              x={node.x - 5}
              y={node.y - 5}
              width="10"
              height="10"
              rx="2"
              fill="#A8F0D4"
              fillOpacity="0.45"
            />
          </motion.g>
        ))}

        <circle cx="210" cy="210" r="6" fill="#2ECC8A" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

function WhatWeDoSection() {
  const reduced = useReducedMotion();
  const { title, description, capabilities } = ENERGY_INTELLIGENCE_WHAT_WE_DO;
  const [active, setActive] = useState<number | null>(null);

  return (
    <MotionSection
      id="capabilities"
      className={cn(ECOSYSTEM_SURFACE.first, "scroll-mt-24")}
    >
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} description={description} className="max-w-3xl mb-12 md:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {capabilities.map((cap, index) => (
            <motion.button
              key={cap.title}
              type="button"
              className={cn(
                "group text-left rounded-[20px] border px-6 py-7 md:py-8 transition-colors duration-300",
                active === index
                  ? "border-canopy/35 bg-white shadow-[var(--shadow-soft)]"
                  : "border-n200/70 bg-white/80 hover:border-canopy/25 hover:bg-white",
                index === capabilities.length - 1 && "md:col-span-2 lg:col-span-1",
              )}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(null)}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-n400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl text-forest leading-snug">{cap.title}</h3>
              <p
                className={cn(
                  "mt-3 text-sm text-n600 leading-relaxed transition-all duration-300",
                  active === index ? "opacity-100 max-h-24" : "opacity-0 max-h-0 overflow-hidden md:opacity-70 md:max-h-24",
                )}
              >
                {cap.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function EngagementSection() {
  const reduced = useReducedMotion();
  const { title, label, body, duration, scope } = ENERGY_INTELLIGENCE_ENGAGEMENT;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16">
          <div className="xl:col-span-5">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy">{label}</p>
            <h2 className="mt-4 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{body}</p>
            <p className="mt-6 text-sm font-mono uppercase tracking-wider text-n500">
              Program Duration: {duration}
            </p>
          </div>

          <div className="xl:col-span-7">
            <ol className="relative border-l border-n200/80 ml-3 space-y-0">
              {scope.map((item, index) => (
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

function GridLensSection() {
  const reduced = useReducedMotion();
  const { label, title, supportingTitle, description, capabilities } = ENERGY_INTELLIGENCE_GRIDLENS;
  const [active, setActive] = useState<number | null>(null);

  return (
    <MotionSection id="gridlens" className={cn(ECOSYSTEM_SURFACE.mint, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <div className="xl:col-span-5 xl:sticky xl:top-28">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy">{label}</p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] text-forest leading-[1.02]">
              {title}
            </h2>
            <p className="mt-4 font-display text-xl md:text-2xl text-n800 leading-snug">
              {supportingTitle}
            </p>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{description}</p>
            <div className="mt-10 hidden xl:block">
              <GridLensVisual reduced={!!reduced} />
            </div>
          </div>

          <div className="xl:col-span-7 space-y-3 md:space-y-4">
            <div className="xl:hidden mb-8">
              <GridLensVisual reduced={!!reduced} />
            </div>
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className={cn(
                  "rounded-[20px] border px-6 py-6 md:px-8 md:py-7 transition-colors duration-300 cursor-default",
                  active === index
                    ? "border-canopy/30 bg-white shadow-[var(--shadow-soft)]"
                    : "border-n200/70 bg-white/80 hover:border-canopy/20 hover:bg-white",
                )}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === index ? null : index)}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-n400">
                  Capability {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl md:text-2xl text-forest leading-snug">
                  {cap.title}
                </h3>
                <p
                  className={cn(
                    "text-sm md:text-base text-n600 leading-relaxed transition-all duration-300",
                    active === index ? "mt-3 opacity-100" : "mt-0 h-0 opacity-0 overflow-hidden",
                  )}
                >
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function GridLensVisual({ reduced }: { reduced: boolean }) {
  return (
    <div
      className="rounded-[24px] border border-n200/60 bg-white p-8 md:p-10"
      aria-hidden
    >
      <svg viewBox="0 0 300 300" className="w-full h-auto" fill="none">
        <defs>
          <linearGradient id="gridlens-flow" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#A8F0D4" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#2ECC8A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A8F0D4" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M${40 + i * 20} ${220 - i * 15} Q150 ${160 - i * 12} ${260 - i * 20} ${220 - i * 15}`}
            stroke="url(#gridlens-flow)"
            strokeWidth="1.5"
            animate={reduced ? undefined : { opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
          />
        ))}

        {[
          { x: 80, y: 120 },
          { x: 150, y: 80 },
          { x: 220, y: 120 },
          { x: 200, y: 200 },
          { x: 100, y: 200 },
        ].map((node, i) => (
          <motion.g
            key={i}
            animate={reduced ? undefined : { opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 4.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          >
            <line x1="150" y1="150" x2={node.x} y2={node.y} stroke="#1A6B4A" strokeOpacity="0.12" />
            <circle cx={node.x} cy={node.y} r="4" fill="#2ECC8A" fillOpacity="0.4" />
          </motion.g>
        ))}

        <motion.circle
          cx="150"
          cy="150"
          r="8"
          stroke="#1A6B4A"
          strokeOpacity="0.2"
          fill="#1A6B4A"
          fillOpacity="0.08"
          animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function HowWeEngageSection() {
  const reduced = useReducedMotion();
  const { title, steps } = ENERGY_INTELLIGENCE_PROCESS;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <MotionSection id="process" className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} align="center" className="mb-12 md:mb-16" />

        <div className="hidden lg:flex items-start justify-between gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start flex-1 min-w-0">
              <button
                type="button"
                className={cn(
                  "flex-1 text-left transition-opacity",
                  activeStep === index ? "opacity-100" : "opacity-55 hover:opacity-80",
                )}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
              >
                <span className="font-mono text-[10px] text-n400">0{index + 1}</span>
                <p className="mt-2 font-display text-lg text-forest leading-snug">{step.title}</p>
              </button>
              {index < steps.length - 1 ? (
                <ArrowRight size={14} className="shrink-0 mx-2 mt-6 text-canopy/30" aria-hidden />
              ) : null}
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              className={cn(
                "w-full text-left rounded-[20px] border px-5 py-5 transition-colors",
                activeStep === index
                  ? "border-canopy/30 bg-white"
                  : "border-n200/70 bg-white/70",
              )}
              onClick={() => setActiveStep(index)}
            >
              <p className="font-display text-lg text-forest">{step.title}</p>
            </button>
          ))}
        </div>

        <motion.div
          key={activeStep}
          className="mt-10 md:mt-12 max-w-2xl mx-auto text-center"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-display text-xl md:text-2xl text-forest">
            {steps[activeStep].title}
          </p>
          <p className="mt-4 text-base md:text-lg text-n600 leading-relaxed">
            {steps[activeStep].description}
          </p>
        </motion.div>
      </div>
    </MotionSection>
  );
}

function WhereAppliesSection() {
  const reduced = useReducedMotion();
  const { title, items } = ENERGY_INTELLIGENCE_APPLIES;
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.white}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} className="mb-10 md:mb-14 max-w-3xl" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {items.map((item, index) => {
            const isOpen = expanded === index;
            return (
              <motion.div
                key={item.title}
                className={cn(
                  "rounded-[24px] border transition-colors duration-300",
                  isOpen
                    ? "border-canopy/25 bg-white shadow-[var(--shadow-soft)]"
                    : "border-n200/70 bg-[var(--n50)]/50",
                  index === items.length - 1 && items.length % 2 === 1 && "md:col-span-2 md:max-w-xl",
                )}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 px-6 py-6 md:px-8 md:py-7 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <span className="font-display text-xl md:text-2xl text-forest leading-snug">
                    {item.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 mt-1 text-canopy transition-transform duration-300",
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
                    <p className="px-6 pb-6 md:px-8 md:pb-8 text-sm md:text-base text-n600 leading-relaxed border-t border-n200/60 pt-5">
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

function IntelligenceFlowSection() {
  const reduced = useReducedMotion();
  const { title, steps, supporting } = ENERGY_INTELLIGENCE_FLOW;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader title={title} align="center" className="mb-12 md:mb-16" />

        <div className="hidden md:flex items-center justify-between gap-2 max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-n200/80 -translate-y-1/2" aria-hidden />
          {steps.map((step, index) => (
            <motion.div
              key={step}
              className="relative flex-1 text-center bg-[var(--n50)] px-2"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <motion.span
                className="block mx-auto mb-3 h-2 w-2 rounded-full bg-canopy"
                initial={reduced ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 + index * 0.06 }}
              />
              <p className="font-display text-sm md:text-base text-forest leading-snug">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden max-w-xs mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <p className="py-4 text-center font-display text-lg text-forest">{step}</p>
              {index < steps.length - 1 ? (
                <div className="flex justify-center" aria-hidden>
                  <motion.span
                    className="block w-px h-6 bg-gradient-to-b from-canopy/40 to-transparent"
                    initial={reduced ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.08 + index * 0.04 }}
                    style={{ transformOrigin: "top" }}
                  />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 md:mt-14 max-w-2xl mx-auto text-center text-base md:text-lg text-n600 leading-relaxed"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          {supporting}
        </motion.p>
      </div>
    </MotionSection>
  );
}

function OutcomeFrameworkSection() {
  const reduced = useReducedMotion();
  const { title, body, blocks, gridlensNote } = ENERGY_INTELLIGENCE_OUTCOME;
  const { headline, primary } = ENERGY_INTELLIGENCE_CTA;

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
          <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{body}</p>
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              className="border-t border-n200/70 pt-6 md:pt-8"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] text-forest leading-snug">
                {block.title}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 md:mt-12 max-w-2xl mx-auto text-center text-sm md:text-base text-n500 leading-relaxed"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          {gridlensNote}
        </motion.p>

        <motion.div
          className="mt-16 md:mt-20 max-w-3xl mx-auto text-center border-t border-n200/60 pt-14 md:pt-16"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-forest leading-tight">
            {headline}
          </h3>
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
  const { title, description } = ENERGY_INTELLIGENCE_ECOSYSTEM;

  return (
    <MotionSection id="ecosystem" className={cn(ECOSYSTEM_SURFACE.sheet, "border-t border-n200/40 scroll-mt-24")}>
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <EcosystemExplorer highlightSegmentId="energy-intelligence" />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
