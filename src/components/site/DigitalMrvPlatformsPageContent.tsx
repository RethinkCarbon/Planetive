import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  Factory,
  Leaf,
  Network,
  Sun,
  Wheat,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { EcosystemSectionHeader as SectionHeader } from "@/components/site/EcosystemSectionHeader";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import { useAutoRotate } from "@/hooks/use-auto-rotate";
import {
  DIGITAL_MRV_APPLICATIONS,
  DIGITAL_MRV_DEFINITION,
  DIGITAL_MRV_DELIVERY,
  DIGITAL_MRV_ECOSYSTEM,
  DIGITAL_MRV_LAYER,
  DIGITAL_MRV_LOOKING_AHEAD,
  DIGITAL_MRV_PAGE,
} from "@/lib/digital-mrv-content";
import { ECOSYSTEM_SURFACE } from "@/lib/ecosystem-page-surfaces";
import { cn } from "@/lib/utils";

const PAGE = "container-x max-w-[90rem]";
const SECTION = "py-14 md:py-20 lg:py-24";
const ease = [0.22, 1, 0.36, 1] as const;

const APPLICATION_ICONS: LucideIcon[] = [Leaf, Sun, Wind, Wheat, Factory, Network];

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
      <FrameworkSection />
      <ApplicationsSection />
      <PipelineSection />
      <DeliverySection />
      <CtaSection />
      <EcosystemSection />
    </div>
  );
}

function HeroSection() {
  const reduced = useReducedMotion();
  const { titleLines, supportingTitle, description, accentSoft } = DIGITAL_MRV_PAGE;

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
          "relative z-10 flex flex-1 flex-col justify-center pt-28 md:pt-36 pb-16 md:pb-24",
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
            <HeroSignalPanel reduced={!!reduced} />
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

function HeroSignalPanel({ reduced }: { reduced: boolean }) {
  const rows = [
    { label: "Measure", value: "Live inputs" },
    { label: "Report", value: "Structured views" },
    { label: "Verify", value: "Trusted outcomes" },
  ];

  return (
    <div className="relative ml-auto w-full max-w-md" aria-hidden>
      <div className="rounded-[28px] border border-white/15 bg-white/8 p-6 md:p-7 backdrop-blur-sm">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-mint-soft/70">
          Monitoring stack
        </p>
        <ul className="mt-6 space-y-4">
          {rows.map((row, index) => (
            <motion.li
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
            >
              <span className="font-ui font-semibold text-lg text-white">{row.label}</span>
              <span className="text-sm text-n200/80">{row.value}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-mint-soft/80"
            initial={reduced ? { width: "72%" } : { width: "18%" }}
            animate={{ width: "72%" }}
            transition={{ duration: 1.4, delay: 0.35, ease }}
          />
        </div>
      </div>
    </div>
  );
}

function FrameworkSection() {
  const reduced = useReducedMotion();
  const { title, pillars } = DIGITAL_MRV_DEFINITION;

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.first}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader
          eyebrow="Framework"
          title={title}
          description="Three connected layers that turn operational signals into decision-ready evidence."
          align="left"
          className="mb-12 md:mb-16 max-w-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              className="relative border-t border-forest/15 pt-6"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-canopy">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-ui font-semibold text-type-h3 text-forest leading-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-type-body-lg text-n600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function ApplicationsSection() {
  const reduced = useReducedMotion();
  const { eyebrow, title, description, items } = DIGITAL_MRV_APPLICATIONS;
  const { active, setActive } = useAutoRotate({
    length: items.length,
    intervalMs: 2500,
  });
  const current = items[active];
  const CurrentIcon = APPLICATION_ICONS[active] ?? Building2;

  return (
    <MotionSection id="capabilities" className={cn(ECOSYSTEM_SURFACE.sheet, "scroll-mt-24")}>
      <div className={cn(PAGE, SECTION)}>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-5 space-y-2.5">
            {items.map((item, index) => {
              const Icon = APPLICATION_ICONS[index] ?? Leaf;
              const isActive = active === index;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "group relative flex w-full items-center gap-3.5 overflow-hidden rounded-2xl px-4 py-3.5 text-left transition-all duration-200",
                    isActive
                      ? "bg-white shadow-[var(--shadow-soft)] ring-1 ring-canopy/15"
                      : "bg-transparent hover:bg-white/70",
                  )}
                >
                  {isActive ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-canopy/70"
                      style={{
                        animation: reduced ? undefined : "mrv-progress 2.5s linear forwards",
                      }}
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
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs md:text-sm text-n500 leading-snug">
                      {item.summary}
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
            key={current.title}
            className="lg:col-span-7 relative overflow-hidden rounded-[28px] bg-forest text-white p-7 md:p-10 min-h-[22rem] flex flex-col"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-10 bottom-8 h-28 w-28 rotate-45 border border-white/10"
            />

            <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <CurrentIcon size={26} className="text-mint-soft" aria-hidden />
            </div>
            <p className="relative z-10 mt-6 font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/75">
              Workflow {String(active + 1).padStart(2, "0")}
            </p>
            <h3 className="relative z-10 mt-3 font-ui font-semibold text-[clamp(1.75rem,3vw,2.35rem)] leading-tight">
              {current.title}
            </h3>
            <p className="relative z-10 mt-4 text-base md:text-lg text-n200/90 leading-relaxed max-w-lg">
              {current.detail}
            </p>
            <div className="relative z-10 mt-auto pt-8 flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative z-10 mt-6 flex gap-1.5" aria-hidden>
              {items.map((item, index) => (
                <span
                  key={item.title}
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

function PipelineSection() {
  const reduced = useReducedMotion();
  const { eyebrow, title, description, steps } = DIGITAL_MRV_LAYER;
  const { active, setActive } = useAutoRotate({
    length: steps.length,
    intervalMs: 2200,
  });
  const current = steps[active];

  return (
    <MotionSection className="bg-forest text-white">
      <div className={cn(PAGE, SECTION)}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/80">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-ui font-semibold text-type-h2 text-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-type-body-lg text-n200/85 leading-relaxed">{description}</p>
        </div>

        <div className="mt-14 md:mt-16 mx-auto max-w-5xl">
          <div className="relative hidden md:block">
            <div
              aria-hidden
              className="absolute left-[6%] right-[6%] top-5 h-px bg-gradient-to-r from-transparent via-mint-soft/45 to-transparent"
            />
            <ol className="relative grid grid-cols-6 gap-2">
              {steps.map((step, index) => {
                const isActive = active === index;
                return (
                  <li key={step.title} className="flex flex-col items-center text-center">
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={cn(
                        "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200",
                        isActive
                          ? "border-mint bg-mint text-forest shadow-[0_0_24px_rgba(168,240,212,0.35)] scale-110"
                          : "border-mint-soft/40 bg-forest text-mint-soft hover:border-mint-soft/70",
                      )}
                      aria-label={step.title}
                      aria-current={isActive ? "step" : undefined}
                    >
                      {isActive || index < active ? (
                        index < active ? (
                          <Check size={16} strokeWidth={2.4} aria-hidden />
                        ) : (
                          <span className="font-ui font-semibold text-sm">{index + 1}</span>
                        )
                      ) : (
                        <span className="font-ui font-semibold text-sm opacity-70">{index + 1}</span>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={cn(
                        "mt-4 font-ui text-xs lg:text-sm leading-snug max-w-[7.5rem] transition-colors",
                        isActive ? "text-mint-soft font-semibold" : "text-n200/80",
                      )}
                    >
                      {step.title}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="md:hidden space-y-3">
            {steps.map((step, index) => {
              const isActive = active === index;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors",
                    isActive ? "border-mint/40 bg-white/10" : "border-white/10 bg-white/5",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                      isActive ? "bg-mint text-forest" : "bg-white/10 text-mint-soft",
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="font-ui font-medium text-sm text-white">{step.title}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={current.title}
            className="relative mt-10 overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.07] p-6 md:p-8 backdrop-blur-sm"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full border border-mint-soft/15"
            />
            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-forest font-ui font-semibold text-lg">
                {String(active + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/75">
                  Stage {active + 1} of {steps.length}
                </p>
                <h3 className="mt-2 font-ui font-semibold text-xl md:text-2xl text-white leading-tight">
                  {current.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm md:text-base text-n200/90 leading-relaxed">
                  {current.detail}
                </p>
              </div>
            </div>
            <div className="relative z-10 mt-6 flex gap-1.5" aria-hidden>
              {steps.map((step, index) => (
                <span
                  key={step.title}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === active ? "w-7 bg-mint-soft" : "w-1.5 bg-white/25",
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

function DeliverySection() {
  const reduced = useReducedMotion();
  const { title, body, capabilities } = DIGITAL_MRV_DELIVERY;
  const { active, setActive } = useAutoRotate({
    length: capabilities.length,
    intervalMs: 2300,
  });
  const current = capabilities[active];

  return (
    <MotionSection className={ECOSYSTEM_SURFACE.mint}>
      <div className={cn(PAGE, SECTION)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
              How Planetive delivers
            </p>
            <h2 className="mt-3 font-ui font-semibold text-type-h2 text-forest leading-tight">
              {title}
            </h2>
            <p className="mt-5 text-type-body-lg text-n600 leading-relaxed">{body}</p>

            <div className="mt-8 hidden lg:flex flex-col gap-1.5">
              {capabilities.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                      isActive ? "bg-white text-forest shadow-sm" : "text-forest/65 hover:bg-white/60",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-[0.14em]",
                        isActive ? "text-canopy" : "text-forest/35",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-ui text-sm font-medium">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={current.title}
              className="relative overflow-hidden rounded-[28px] bg-forest text-white p-7 md:p-10 min-h-[17rem]"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-white/10"
              />
              <p className="relative z-10 font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/75">
                Capability {String(active + 1).padStart(2, "0")} /{" "}
                {String(capabilities.length).padStart(2, "0")}
              </p>
              <h3 className="relative z-10 mt-5 font-ui font-semibold text-[clamp(1.7rem,3vw,2.35rem)] leading-tight">
                {current.title}
              </h3>
              <p className="relative z-10 mt-4 max-w-xl text-base md:text-lg text-n200/90 leading-relaxed">
                {current.detail}
              </p>
              {!reduced ? (
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-mint-soft/70"
                  style={{ animation: "mrv-progress 2.3s linear forwards" }}
                />
              ) : null}
            </motion.div>

            <div className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:hidden [scrollbar-width:none]">
              {capabilities.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "border-forest bg-forest text-white"
                        : "border-n200/80 bg-white text-forest/75",
                    )}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function CtaSection() {
  const reduced = useReducedMotion();
  const { headline, body, primary } = DIGITAL_MRV_LOOKING_AHEAD;

  return (
    <MotionSection className="bg-forest text-white">
      <div className={cn(PAGE, "py-14 md:py-20 lg:py-24")}>
        <motion.div
          className="max-w-3xl"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/75">
            Looking ahead
          </p>
          <h2 className="mt-4 font-ui font-semibold text-type-h2 text-white leading-tight">
            {headline}
          </h2>
          <p className="mt-5 text-type-body-lg text-n200/90 leading-relaxed">{body}</p>
          <div className="mt-9">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold btn-mint"
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
    <MotionSection
      id="ecosystem"
      className={cn(ECOSYSTEM_SURFACE.sheet, "border-t border-n200/40 scroll-mt-24")}
    >
      <div className={cn(PAGE, "py-12 md:py-16 lg:py-20")}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Planetive" title={title} description={description} />
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <EcosystemExplorer
              highlightSegmentId="digital-mrv"
              className="max-w-[min(100%,20rem)] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[30rem] xl:max-w-[34rem]"
            />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
