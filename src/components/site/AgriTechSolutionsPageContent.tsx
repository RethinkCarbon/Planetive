import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cpu,
  GraduationCap,
  Leaf,
  Link2,
  Monitor,
  Package,
  Recycle,
  Smartphone,
  Sprout,
  Truck,
  User,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import { useAutoRotate } from "@/hooks/use-auto-rotate";
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

const VALUE_CHAIN_ICONS: LucideIcon[] = [Sprout, Cpu, Package, Truck, Wallet, Users];

const AGRI_CO_SURFACE_ICONS: LucideIcon[] = [Monitor, Smartphone, User];

const HERO_PILLAR_ANCHORS: Record<(typeof AGRI_TECH_PAGE.pillars)[number], string> = {
  "Agri-Co": "#agri-co",
  "VERT-OS": "#vert-os",
  "ECO Parks": "#eco-parks",
  ACEP: "#acep",
};

const VERT_OS_CARD_ICONS: LucideIcon[] = [BarChart3, Cpu, Package, Leaf];

const ACEP_PILLAR_ICONS: LucideIcon[] = [Sprout, GraduationCap, Link2];

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

            <div className="mt-10 flex flex-wrap gap-2.5">
              {pillars.map((pillar) => (
                <a
                  key={pillar}
                  href={HERO_PILLAR_ANCHORS[pillar]}
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-mint-soft/95 backdrop-blur-sm transition-colors hover:border-mint-soft/40 hover:bg-white/15"
                >
                  {pillar}
                </a>
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
              <a
                href="#lifecycle"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-mint-soft/50 hover:text-mint-soft"
              >
                View lifecycle
                <ArrowRight size={14} className="opacity-80" aria-hidden />
              </a>
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
  const { title, description, stages } = AGRI_TECH_VALUE_CHAIN;
  const { active, setActive } = useAutoRotate({
    length: stages.length,
    intervalMs: 2800,
  });
  const current = stages[active];
  const CurrentIcon = VALUE_CHAIN_ICONS[active] ?? Sprout;

  return (
    <MotionSection id="lifecycle" className={cn(ECOSYSTEM_SURFACE.first, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader
          title={title}
          description={description}
          className="mb-12 md:mb-14 max-w-3xl"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-5 space-y-2">
            {stages.map((stage, index) => {
              const Icon = VALUE_CHAIN_ICONS[index] ?? Sprout;
              const isActive = active === index;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "group relative flex w-full items-center gap-3.5 overflow-hidden rounded-2xl px-4 py-3.5 text-left transition-all duration-200",
                    isActive
                      ? "bg-white shadow-[var(--shadow-soft)] ring-1 ring-canopy/15"
                      : "bg-transparent hover:bg-white/80",
                  )}
                >
                  {isActive && !reduced ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-canopy/70"
                      style={{ animation: "mrv-progress 2.8s linear forwards" }}
                    />
                  ) : null}
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      isActive
                        ? "border-canopy/25 bg-mint-soft/40 text-forest"
                        : "border-n200/80 bg-white text-n500",
                    )}
                  >
                    <Icon size={18} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-ui font-semibold text-base md:text-lg text-forest leading-snug">
                      {stage.label}
                    </span>
                    <span className="mt-0.5 block text-xs md:text-sm text-n500 leading-snug line-clamp-1">
                      {stage.summary}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full transition-opacity",
                      isActive ? "bg-canopy opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <motion.div
            key={current.id}
            className="lg:col-span-7 relative overflow-hidden rounded-[28px] bg-forest text-white p-7 md:p-10 min-h-[20rem] flex flex-col"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-white/10"
            />
            <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <CurrentIcon size={26} className="text-mint-soft" aria-hidden />
            </div>
            <p className="relative z-10 mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/75">
              Stage {String(active + 1).padStart(2, "0")} · {current.label}
            </p>
            <h3 className="relative z-10 mt-3 font-ui font-semibold text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight">
              {current.summary}
            </h3>
            <p className="relative z-10 mt-4 max-w-xl text-base md:text-lg text-n200/90 leading-relaxed">
              {current.detail}
            </p>
            <div className="relative z-10 mt-auto pt-8 flex flex-wrap gap-2">
              {current.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90"
                >
                  {cap}
                </span>
              ))}
            </div>
            <div className="relative z-10 mt-6 flex gap-1.5" aria-hidden>
              {stages.map((stage, index) => (
                <span
                  key={stage.id}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === active ? "w-6 bg-mint-soft" : "w-1.5 bg-white/25",
                  )}
                />
              ))}
            </div>
          </motion.div>
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
        <div className="relative overflow-hidden rounded-[28px] border border-n200/60 bg-gradient-to-br from-mint-soft/25 via-white to-[var(--n50)] p-8 md:p-10 lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-canopy/5 blur-2xl"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              className="lg:col-span-5"
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={ecosystemViewport}
              variants={staggerContainer}
            >
              <motion.p
                className="inline-flex items-center gap-2 rounded-full border border-canopy/20 bg-white/80 px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase text-canopy"
                variants={fadeUpChild}
              >
                {label}
              </motion.p>
              <motion.h2
                className="mt-5 font-ui font-semibold text-[clamp(2.25rem,4.5vw,3.5rem)] text-forest leading-[1.02]"
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
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-n500 mb-5"
                initial={reduced ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ecosystemViewport}
                transition={{ duration: 0.45, ease: ecosystemEase }}
              >
                Platform modules
              </motion.p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {modules.map((item, index) => (
                  <motion.li
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-n200/70 bg-white/90 px-4 py-3.5 shadow-[0_1px_0_rgba(10,61,46,0.04)] transition-all hover:border-canopy/25 hover:shadow-[var(--shadow-soft)]"
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={ecosystemViewport}
                    transition={{ duration: 0.45, delay: index * 0.04, ease: ecosystemEase }}
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest font-mono text-[11px] font-semibold text-mint-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-ui font-semibold text-base md:text-lg text-forest leading-snug pt-0.5">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <motion.p
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy mb-8 md:mb-10"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ecosystemViewport}
            transition={{ duration: 0.45, ease: ecosystemEase }}
          >
            Experience surfaces
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {surfaces.map((surface, index) => {
              const Icon = AGRI_CO_SURFACE_ICONS[index] ?? Monitor;
              return (
                <motion.article
                  key={`${surface.title}-${surface.for}`}
                  className="relative overflow-hidden rounded-[24px] border border-n200/70 bg-white p-6 md:p-8 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5"
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={ecosystemViewport}
                  transition={{ duration: 0.45, delay: index * 0.07, ease: ecosystemEase }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-canopy/60 via-mint-soft to-canopy/40"
                  />
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-canopy/20 bg-mint-soft/35 text-forest">
                    <Icon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <p className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                    {surface.title}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-n500">
                    For {surface.for}
                  </p>
                  <p className="mt-4 font-ui font-semibold text-lg md:text-xl text-forest leading-snug">
                    {surface.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
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
  const { active, setActive } = useAutoRotate({
    length: capabilityCards.length,
    intervalMs: 3200,
  });
  const SpotlightIcon = VERT_OS_CARD_ICONS[active] ?? Leaf;

  return (
    <MotionSection id="vert-os" className={cn(ECOSYSTEM_SURFACE.mint, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <motion.div
            className="lg:col-span-6 max-w-3xl"
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

          <motion.div
            key={capabilityCards[active].title}
            className="lg:col-span-6 relative overflow-hidden rounded-[24px] bg-forest text-white p-7 md:p-9 min-h-[14rem]"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: ecosystemEase }}
          >
            {!reduced ? (
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-mint-soft/80"
                style={{ animation: "mrv-progress 3.2s linear forwards" }}
              />
            ) : null}
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <SpotlightIcon size={22} className="text-mint-soft" aria-hidden />
              </span>
              <div className="flex gap-1.5" aria-hidden>
                {capabilityCards.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === active ? "w-5 bg-mint-soft" : "w-2 bg-white/30 hover:bg-white/50",
                    )}
                    aria-label={`Show ${capabilityCards[index].title}`}
                  />
                ))}
              </div>
            </div>
            <h3 className="mt-5 font-ui font-semibold text-2xl md:text-[1.65rem] leading-snug">
              {capabilityCards[active].title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {capabilityCards[active].items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {capabilityCards.map((card, index) => {
            const Icon = VERT_OS_CARD_ICONS[index] ?? Leaf;
            const isActive = active === index;
            return (
              <button
                key={card.title}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-left transition-all duration-200",
                  isActive
                    ? "border-canopy/35 bg-white shadow-[var(--shadow-soft)] ring-1 ring-canopy/10"
                    : "border-n200/60 bg-white/50 hover:bg-white hover:border-canopy/20",
                )}
              >
                <Icon
                  size={18}
                  className={cn(isActive ? "text-canopy" : "text-n500")}
                  aria-hidden
                />
                <p className="mt-3 font-ui font-semibold text-sm md:text-base text-forest leading-snug">
                  {card.title}
                </p>
              </button>
            );
          })}
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
          <ol className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {deployment.steps.map((step, index) => (
              <li key={step} className="relative text-center sm:text-left">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-canopy/30 bg-mint-soft/40 font-mono text-sm font-semibold text-forest">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm md:text-base font-semibold text-forest">{step}</p>
                {index < deployment.steps.length - 1 ? (
                  <span
                    className="hidden lg:block absolute top-5 left-[calc(100%-0.5rem)] w-[calc(100%-2.5rem)] h-px bg-canopy/20"
                    aria-hidden
                  />
                ) : null}
              </li>
            ))}
          </ol>
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
    <MotionSection
      id="eco-parks"
      className={cn(ECOSYSTEM_SURFACE.forestTint, "scroll-mt-24")}
    >
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader
          title={title}
          description={description}
          className="mb-12 md:mb-14 max-w-3xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {flow.map((step, index) => (
            <motion.div
              key={step}
              className="relative rounded-[20px] border border-n200/70 bg-white p-5 md:p-6 shadow-[var(--shadow-soft)]"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={ecosystemViewport}
              transition={{ duration: 0.45, delay: index * 0.05, ease: ecosystemEase }}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest font-mono text-xs font-semibold text-mint-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-ui font-semibold text-base md:text-lg text-forest leading-snug">
                {step}
              </p>
              {index < flow.length - 1 && index % 4 !== 3 ? (
                <span
                  className="hidden lg:block pointer-events-none absolute top-1/2 -right-3 h-px w-6 bg-canopy/25"
                  aria-hidden
                />
              ) : null}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 md:mt-14 rounded-[24px] bg-forest px-6 py-8 md:px-10 md:py-9 text-white"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Recycle size={22} className="text-mint-soft" aria-hidden />
              </span>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-mint-soft/80">
                Circular outputs
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-ui font-semibold text-sm text-white/95"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-center text-sm text-n600"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.4, delay: 0.12 }}
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
          {pillars.map((pillar, index) => {
            const PillarIcon = ACEP_PILLAR_ICONS[index] ?? Sprout;
            return (
              <motion.article
                key={pillar.title}
                className="relative overflow-hidden rounded-[20px] border border-n200/70 bg-white px-6 py-7 md:px-8 md:py-8 shadow-[var(--shadow-soft)]"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ecosystemViewport}
                transition={{ duration: 0.45, delay: index * 0.08, ease: ecosystemEase }}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-canopy/20 bg-mint-soft/35 text-forest">
                  <PillarIcon size={22} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="mt-5 font-ui font-semibold text-xl md:text-2xl text-forest leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-n600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-12 md:mt-14 rounded-[20px] border border-n200/70 bg-white px-6 py-7 md:px-8"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.45 }}
        >
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-canopy mb-5">
            Outcomes
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-soft/50 text-forest">
                  <Check size={16} strokeWidth={2.5} aria-hidden />
                </span>
                <span className="font-ui font-semibold text-lg md:text-xl text-forest">
                  {outcome}
                </span>
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
  const { title, body, primary, secondary } = AGRI_TECH_ENGAGEMENT;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.forest}>
      <div className={cn(PAGE, "py-16 md:py-20 lg:py-28")}>
        <motion.div
          className="max-w-3xl mx-auto text-center md:text-left md:mx-0"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/75">
            Next step
          </p>
          <h2 className="mt-4 font-ui font-semibold text-[clamp(1.85rem,3.5vw,2.75rem)] text-white leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-n200/90 leading-relaxed">{body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-mint"
            >
              {primary}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-mint-soft/50 hover:text-mint-soft"
            >
              {secondary}
              <ArrowRight size={14} className="opacity-80" aria-hidden />
            </a>
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
            <EcosystemExplorer
              highlightSegmentId="agri-tech"
              className="max-w-[min(100%,20rem)] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[30rem] xl:max-w-[34rem]"
            />
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
