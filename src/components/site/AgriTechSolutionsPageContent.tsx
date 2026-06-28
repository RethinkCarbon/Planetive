import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import { EditorialCapabilityPanel } from "@/components/site/ecosystem/EditorialCapabilityPanel";
import {
  AGRI_TECH_CONNECTED_LAYER,
  AGRI_TECH_ECOSYSTEM,
  AGRI_TECH_ENGAGEMENT,
  AGRI_TECH_OVERVIEW,
  AGRI_TECH_PAGE,
  AGRI_TECH_PROCESS,
  AGRI_TECH_TERRAFLOW,
  AGRI_TECH_VERDANT,
  AGRI_TECH_WHY,
} from "@/lib/agri-tech-content";
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

export function AgriTechSolutionsPageContent() {
  return (
    <div className="bg-background">
      <HeroSection />
      <OverviewSection />
      <TerraFlowSection />
      <VerdantSection />
      <ConnectedLayerSection />
      <HowItWorksSection />
      <WhySection />
      <EngagementSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { eyebrow, titleLines, supportingTitle, description, accentSoft } = AGRI_TECH_PAGE;

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
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.05]">
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
            <p className="mt-5 font-display text-[clamp(1.15rem,2.4vw,1.85rem)] text-mint-soft/95 leading-snug max-w-xl">
              {supportingTitle}
            </p>
            <p className="mt-6 text-base md:text-lg text-n200/90 leading-relaxed max-w-xl">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 md:gap-4">
              <a
                href="#terraflow"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-mint"
              >
                Explore Platforms
                <ArrowRight size={15} aria-hidden />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-ghost-light"
              >
                Discuss Implementation
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
            transition={{ duration: 5 + layer, repeat: Infinity, ease: "easeInOut", delay: layer * 0.4 }}
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

function OverviewSection() {
  const reduced = useReducedMotion();
  const { title, intro, supports } = AGRI_TECH_OVERVIEW;

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
            <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-6 text-base md:text-lg text-n600 leading-relaxed">{intro}</p>
          </motion.div>

          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-n500 mb-6">
              The platform supports
            </p>
            <ul className="space-y-4 md:space-y-5">
              {supports.map((item, index) => (
                <motion.li
                  key={item}
                  className="font-display text-[clamp(1.2rem,2.2vw,1.65rem)] text-forest leading-snug border-b border-n200/60 pb-4 md:pb-5 last:border-0"
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

function terraFlowModulePositions(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    const radius = 38;
    return { x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
  });
}

function TerraFlowSection() {
  const reduced = useReducedMotion();
  const {
    label,
    title,
    supportingTitle,
    description,
    descriptionExtended,
    capabilities,
    architecture,
    surfaces,
  } = AGRI_TECH_TERRAFLOW;
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const modulePositions = terraFlowModulePositions(architecture.modules.length);

  return (
    <MotionSection id="terraflow" className={cn(ECOSYSTEM_SURFACE.white, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        {/* Intro */}
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
              className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] text-forest leading-[1.02]"
              variants={fadeUpChild}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 font-display text-xl md:text-2xl text-n800 leading-snug"
              variants={fadeUpChild}
            >
              {supportingTitle}
            </motion.p>
            <motion.p className="mt-6 text-base md:text-lg text-n600 leading-relaxed" variants={fadeUpChild}>
              {description}
            </motion.p>
            <motion.p className="mt-4 text-base md:text-lg text-n600 leading-relaxed" variants={fadeUpChild}>
              {descriptionExtended}
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
              Platform Capabilities
            </motion.p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
              {capabilities.map((item, index) => (
                <motion.li
                  key={item}
                  className="font-display text-[clamp(1.05rem,1.8vw,1.35rem)] text-forest leading-snug border-b border-n200/60 py-3.5 md:py-4"
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

        {/* Experience architecture */}
        <div className="mt-20 md:mt-28 lg:mt-32 pt-16 md:pt-20 border-t border-n200/60">
          <motion.p
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy text-center mb-3"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ecosystemViewport}
            transition={{ duration: 0.45, ease: ecosystemEase }}
          >
            Experience Architecture
          </motion.p>
          <motion.p
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500 text-center mb-12 md:mb-16"
            initial={reduced ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ecosystemViewport}
            transition={{ duration: 0.45, delay: 0.05, ease: ecosystemEase }}
          >
            {architecture.modulesLabel}
          </motion.p>

          <div className="relative max-w-2xl mx-auto aspect-square">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              <motion.circle
                cx="50"
                cy="50"
                r="38"
                stroke="#1A6B4A"
                strokeOpacity="0.1"
                fill="none"
                initial={reduced ? false : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={ecosystemViewport}
                transition={{ duration: 0.9, ease: ecosystemEase }}
                style={{ transformOrigin: "50px 50px" }}
              />
              {architecture.modules.map((_, i) => {
                const pos = modulePositions[i];
                return (
                  <motion.line
                    key={architecture.modules[i]}
                    x1="50"
                    y1="50"
                    x2={pos.x}
                    y2={pos.y}
                    stroke="#1A6B4A"
                    strokeOpacity={activeModule === i ? 0.35 : 0.1}
                    strokeWidth="0.5"
                    initial={reduced ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={ecosystemViewport}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: ecosystemEase }}
                  />
                );
              })}
            </svg>

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={reduced ? false : "hidden"}
              whileInView="visible"
              viewport={ecosystemViewport}
              variants={scaleIn}
            >
              <div className="rounded-full border border-canopy/30 bg-white px-5 py-3 shadow-[var(--shadow-soft)]">
                <span className="font-display text-sm md:text-base text-forest">{architecture.center}</span>
              </div>
            </motion.div>

            {architecture.modules.map((mod, i) => {
              const pos = modulePositions[i];
              return (
                <motion.button
                  key={mod}
                  type="button"
                  className={cn(
                    "absolute z-10 max-w-[7.5rem] sm:max-w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-2 text-[10px] sm:text-xs font-semibold leading-tight text-center transition-all duration-300",
                    activeModule === i
                      ? "border-canopy bg-white text-forest shadow-[var(--shadow-soft)] scale-105"
                      : "border-n200/80 bg-white/95 text-n600 hover:border-canopy/30",
                  )}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  onMouseEnter={() => setActiveModule(i)}
                  onFocus={() => setActiveModule(i)}
                  onMouseLeave={() => setActiveModule(null)}
                  onBlur={() => setActiveModule(null)}
                  initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={ecosystemViewport}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: ecosystemEase }}
                >
                  {mod}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Experience surfaces */}
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
              <TerraFlowSurfaceVisual type={surface.visual} reduced={!!reduced} />
              <p className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-canopy">
                {surface.title}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-n500">
                For: {surface.for}
              </p>
              <p className="mt-3 font-display text-xl md:text-2xl text-forest leading-snug">
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

function TerraFlowSurfaceVisual({
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
          <>
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
          </>
        ) : null}
        {type === "mobile-field" ? (
          <>
            {[0, 1, 2].map((row) => (
              <motion.div
                key={row}
                className="flex items-center gap-2"
                animate={reduced ? undefined : { opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4 + row, repeat: Infinity, ease: "easeInOut", delay: row * 0.3 }}
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

function VerdantSection() {
  const reduced = useReducedMotion();
  const { label, categoryLabel, title, supportingTitle, focusDescription, description, modules, panel } =
    AGRI_TECH_VERDANT;
  const [active, setActive] = useState<number | null>(null);

  return (
    <MotionSection id="verdantos" className={cn(ECOSYSTEM_SURFACE.mint, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          <div className="xl:col-span-5 xl:sticky xl:top-28">
            <motion.div
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
              <motion.p
                className="mt-3 font-mono text-[10px] tracking-[0.18em] uppercase text-n500"
                variants={fadeUpChild}
              >
                {categoryLabel}
              </motion.p>
              <motion.h2
                className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] text-forest leading-[1.02]"
                variants={fadeUpChild}
              >
                {title}
              </motion.h2>
              <motion.p
                className="mt-4 font-display text-xl md:text-2xl text-n800 leading-snug"
                variants={fadeUpChild}
              >
                {supportingTitle}
              </motion.p>
              <motion.p
                className="mt-5 text-base md:text-lg text-n600 leading-relaxed"
                variants={fadeUpChild}
              >
                {focusDescription}
              </motion.p>
              <motion.p
                className="mt-4 text-base md:text-lg text-n600 leading-relaxed"
                variants={fadeUpChild}
              >
                {description}
              </motion.p>
            </motion.div>
            <div className="mt-10 hidden xl:block">
              <EditorialCapabilityPanel eyebrow={panel.eyebrow} layers={panel.layers} direction="left" />
            </div>
          </div>

          <div className="xl:col-span-7 space-y-3 md:space-y-4">
            <div className="xl:hidden mb-8">
              <EditorialCapabilityPanel eyebrow={panel.eyebrow} layers={panel.layers} direction="right" />
            </div>
            {modules.map((mod, index) => (
              <motion.div
                key={mod.title}
                className={cn(
                  "rounded-[20px] border px-6 py-6 md:px-8 md:py-7 transition-colors duration-300 cursor-default",
                  active === index
                    ? "border-canopy/30 bg-white shadow-[var(--shadow-soft)]"
                    : "border-n200/70 bg-[var(--n50)]/40 hover:border-canopy/20 hover:bg-white",
                )}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === index ? null : index)}
                initial={reduced ? false : { opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={ecosystemViewport}
                transition={{ duration: 0.5, delay: index * 0.07, ease: ecosystemEase }}
                whileHover={reduced ? undefined : { y: -2 }}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-n400">
                  Module {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl md:text-2xl text-forest leading-snug">
                  {mod.title}
                </h3>
                <p
                  className={cn(
                    "text-sm md:text-base text-n600 leading-relaxed transition-all duration-300",
                    active === index ? "mt-3 opacity-100" : "mt-0 h-0 opacity-0 overflow-hidden",
                  )}
                >
                  {mod.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function ConnectedLayerSection() {
  const reduced = useReducedMotion();
  const { title, center, supporting, nodes } = AGRI_TECH_CONNECTED_LAYER;
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const positions = [
    { x: 50, y: 12 },
    { x: 85, y: 32 },
    { x: 92, y: 68 },
    { x: 70, y: 88 },
    { x: 30, y: 88 },
    { x: 8, y: 68 },
  ];

  const active = nodes.find((n) => n.id === activeNode);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.white}>
      <div className={cn(PAGE, SECTION)}>
        <motion.div
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={ecosystemViewport}
          variants={fadeUpChild}
        >
          <SectionHeader title={title} align="center" className="mb-12 md:mb-16" />
        </motion.div>

        <div className="relative max-w-lg mx-auto aspect-square">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
            <motion.circle
              cx="50"
              cy="50"
              r="38"
              stroke="#1A6B4A"
              strokeOpacity="0.1"
              fill="none"
              initial={reduced ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={ecosystemViewport}
              transition={{ duration: 0.9, ease: ecosystemEase }}
              style={{ transformOrigin: "50px 50px" }}
            />
            {nodes.map((node, i) => {
              const pos = positions[i];
              return (
                <line
                  key={node.id}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="#1A6B4A"
                  strokeOpacity={activeNode === node.id ? 0.35 : 0.12}
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={ecosystemViewport}
            variants={scaleIn}
          >
            <div className="rounded-full border border-canopy/30 bg-white px-5 py-3 shadow-[var(--shadow-soft)]">
              <span className="font-display text-sm md:text-base text-forest">{center}</span>
            </div>
          </motion.div>

          {nodes.map((node, i) => {
            const pos = positions[i];
            return (
              <motion.button
                key={node.id}
                type="button"
                className={cn(
                  "absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-300",
                  activeNode === node.id
                    ? "border-canopy bg-white text-forest shadow-[var(--shadow-soft)] scale-105"
                    : "border-n200/80 bg-white/90 text-n600 hover:border-canopy/30",
                )}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onMouseEnter={() => setActiveNode(node.id)}
                onFocus={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                onBlur={() => setActiveNode(null)}
                initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={ecosystemViewport}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: ecosystemEase }}
              >
                {node.label}
              </motion.button>
            );
          })}
        </div>

        <motion.p
          key={active?.id ?? "default"}
          className="mt-10 md:mt-12 max-w-2xl mx-auto text-center text-base md:text-lg text-n600 leading-relaxed"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {active?.description ?? supporting}
        </motion.p>
      </div>
    </MotionSection>
  );
}

function HowItWorksSection() {
  const reduced = useReducedMotion();
  const steps = AGRI_TECH_PROCESS.steps;
  const [active, setActive] = useState(0);

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <motion.p
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy text-center mb-12"
          initial={reduced ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.45, ease: ecosystemEase }}
        >
          How It Works
        </motion.p>

        <div className="hidden lg:block relative max-w-5xl mx-auto">
          <motion.div
            className="absolute top-5 left-0 right-0 h-px bg-n200/80 origin-left"
            aria-hidden
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={ecosystemViewport}
            transition={{ duration: 0.8, ease: ecosystemEase }}
          />
          <div className="flex justify-between gap-2">
            {steps.map((step, index) => (
              <motion.button
                key={step.title}
                type="button"
                className={cn(
                  "relative flex-1 text-center pt-8 transition-opacity",
                  active === index ? "opacity-100" : "opacity-50 hover:opacity-75",
                )}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={ecosystemViewport}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.08, ease: ecosystemEase }}
              >
                <motion.span
                  className={cn(
                    "absolute top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 bg-[var(--n100)] transition-colors",
                    active === index ? "border-canopy bg-canopy" : "border-n300",
                  )}
                  aria-hidden
                  initial={reduced ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={ecosystemViewport}
                  transition={{ duration: 0.35, delay: 0.25 + index * 0.08, ease: ecosystemEase }}
                />
                <span className="font-display text-sm md:text-base text-forest">{step.title}</span>
              </motion.button>
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
          <p className="font-display text-xl text-forest">{steps[active].title}</p>
          <p className="mt-3 text-base text-n600 leading-relaxed">{steps[active].description}</p>
        </motion.div>
      </div>
    </MotionSection>
  );
}

function WhySection() {
  const reduced = useReducedMotion();
  const { headline, statements } = AGRI_TECH_WHY;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.sheet}>
      <div className={cn(PAGE, SECTION)}>
        <motion.h2
          className="font-display text-[clamp(2rem,4vw,3rem)] text-forest text-center leading-tight max-w-3xl mx-auto"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={ecosystemViewport}
          transition={{ duration: 0.5, ease: ecosystemEase }}
        >
          {headline}
        </motion.h2>
        <ul className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 max-w-5xl mx-auto">
          {statements.map((item, index) => (
            <motion.li
              key={item}
              className="border-t border-n200/70 pt-6 font-display text-[clamp(1.25rem,2vw,1.5rem)] text-forest leading-snug"
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

function EngagementSection() {
  const reduced = useReducedMotion();
  const { title, body, primary, secondary } = AGRI_TECH_ENGAGEMENT;

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
          <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.75rem)] text-forest leading-tight">
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
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold border border-forest/20 text-forest hover:bg-mint-soft/30 transition-colors"
            >
              {secondary}
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
    <MotionSection id="ecosystem" className={cn(ECOSYSTEM_SURFACE.sheet, "border-t border-n200/40 scroll-mt-24")}>
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
