import { useEffect, useState, type ReactNode } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ENGAGEMENT_PROGRAM_IDS,
  PROGRAM_LABELS,
  WORK_WITH_US_HERO,
  type EngagementProgramId,
} from "@/lib/engagement-programs-content";
import { BookMeetingSection } from "@/components/site/BookMeetingSection";
import { EngagementProgramsSection } from "@/components/site/EngagementProgramsSection";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { useSiteForm } from "@/hooks/use-site-form";
import { Route } from "@/routes/work-with-us";

export function WorkWithUsPageContent() {
  const { interest: interestFromUrl } = Route.useSearch();
  const [interest, setInterest] = useState<EngagementProgramId>(
    interestFromUrl ?? "fellows",
  );
  const form = useSiteForm();

  useEffect(() => {
    if (interestFromUrl) setInterest(interestFromUrl);
  }, [interestFromUrl]);

  const selectInterest = (id: EngagementProgramId) => {
    setInterest(id);
    form.reset();
    const url = new URL(window.location.href);
    url.searchParams.set("interest", id);
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <WorkWithUsHero />
      <BookMeetingSection />
      <EngagementProgramsSection
        variant="full"
        onSelectProgram={(id) => {
          selectInterest(id);
          document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <ApplicationSection
        interest={interest}
        form={form}
        onSelectInterest={selectInterest}
      />
    </>
  );
}

function WorkWithUsHero() {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,240,212,0.4), transparent 55%)",
        }}
      />
      <div className="container-x relative z-10 pt-40 md:pt-48 pb-24 md:pb-32">
        <ScrollReveal variant="fade-up" className="max-w-3xl">
          <p className="text-sm font-semibold text-mint-soft/95">
            {WORK_WITH_US_HERO.subtitle}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.75rem,6.5vw,4.25rem)] leading-[1.02]">
            {WORK_WITH_US_HERO.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-n200/95 leading-relaxed max-w-2xl">
            {WORK_WITH_US_HERO.description}
          </p>
        </ScrollReveal>
      </div>
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function ApplicationSection({
  interest,
  form,
  onSelectInterest,
}: {
  interest: EngagementProgramId;
  form: ReturnType<typeof useSiteForm>;
  onSelectInterest: (id: EngagementProgramId) => void;
}) {
  const { submit, isSubmitting, isSuccess, error } = form;
  return (
    <section
      id="apply"
      className="py-16 md:py-24 bg-white border-t border-n200/60 scroll-mt-28"
    >
      <div className="container-x">
        <ScrollReveal className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            Explore limitless opportunities
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] text-forest">
            Apply now and elevate change
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4 space-y-3">
            {ENGAGEMENT_PROGRAM_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => onSelectInterest(id)}
                className={cn(
                  "w-full text-left rounded-2xl border px-5 py-4 transition-colors",
                  interest === id
                    ? "border-canopy bg-mint-soft/40 shadow-[var(--shadow-soft)]"
                    : "border-n200 bg-[var(--n50)] hover:border-canopy/40",
                )}
              >
                <span className="text-sm font-semibold text-forest">
                  {PROGRAM_LABELS[id]}
                </span>
              </button>
            ))}
          </div>

          <ScrollReveal variant="fade-up" delay={80} className="lg:col-span-8">
            <div className="rounded-[32px] bg-white border border-n200 p-8 md:p-10 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-2xl text-forest">
                Apply — {PROGRAM_LABELS[interest]}
              </h3>

              <form
                className="mt-8 space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formEl = e.currentTarget;
                  const data = new FormData(formEl);
                  const ok = await submit({
                    kind: "application",
                    interest: PROGRAM_LABELS[interest],
                    name: String(data.get("name") ?? ""),
                    email: String(data.get("email") ?? ""),
                    phone: String(data.get("phone") ?? "") || undefined,
                    message: String(data.get("message") ?? ""),
                  });
                  if (ok) formEl.reset();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Name" required>
                    <input
                      name="name"
                      required
                      disabled={isSubmitting || isSuccess}
                      className={INPUT_CLASS}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      name="phone"
                      type="tel"
                      disabled={isSubmitting || isSuccess}
                      className={INPUT_CLASS}
                      placeholder="+92 …"
                      autoComplete="tel"
                    />
                  </Field>
                </div>
                <Field label="Email" required>
                  <input
                    name="email"
                    required
                    type="email"
                    disabled={isSubmitting || isSuccess}
                    className={INPUT_CLASS}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Tell us about your interest" required>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    disabled={isSubmitting || isSuccess}
                    className={`${INPUT_CLASS} resize-none`}
                    placeholder={
                      interest === "partner"
                        ? "Organization, collaboration goals, and timeline…"
                        : "Why sustainability, and what you hope to learn…"
                    }
                  />
                </Field>
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-primary disabled:opacity-60"
                >
                  <Send size={14} aria-hidden />
                  {isSubmitting ? "Submitting…" : "Submit application"}
                </button>
                {isSuccess && (
                  <p className="text-sm text-canopy" role="status">
                    Thanks — we&apos;ll review your application and respond within a few
                    business days.
                  </p>
                )}
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const INPUT_CLASS =
  "mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-n600">
        {label}
        {required && <span className="text-canopy"> *</span>}
      </label>
      {children}
    </div>
  );
}
