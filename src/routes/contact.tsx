import { createFileRoute } from "@tanstack/react-router";
import { BookMeetingSection } from "@/components/site/BookMeetingSection";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Mail, MapPin, Send } from "lucide-react";
import { useSiteForm } from "@/hooks/use-site-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Planetive" },
      {
        name: "description",
        content:
          "Start a conversation with Planetive. Build your climate transition roadmap with our team of advisors, technologists, and project developers.",
      },
      { property: "og:title", content: "Contact Planetive" },
      {
        property: "og:description",
        content: "Ready to build your climate transition roadmap?",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { submit, isSubmitting, isSuccess, error } = useSiteForm();

  return (
    <main className="min-h-screen bg-background contact-page">
      <Navbar variant="solid" />
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        description="Tell us where you are. We'll show you what comes next — diagnosis, implementation, and the systems to sustain it."
      />

      <BookMeetingSection />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <ScrollReveal className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
              Or send a message
            </span>
            <h2 className="mt-3 font-ui font-semibold text-[clamp(1.75rem,3vw,2.5rem)] text-forest">
              We&apos;ll get back to you
            </h2>
            <p className="mt-3 text-sm md:text-base text-n600 leading-relaxed">
              Share context on your organisation and goals — we typically respond within two
              business days.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-[32px] bg-white border border-n200 p-8 md:p-10 shadow-[var(--shadow-soft)]">
              <form
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const ok = await submit({
                    kind: "contact",
                    name: String(data.get("name") ?? ""),
                    email: String(data.get("email") ?? ""),
                    organization: String(data.get("organization") ?? "") || undefined,
                    message: String(data.get("message") ?? ""),
                  });
                  if (ok) form.reset();
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold uppercase tracking-wider text-n600"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    disabled={isSubmitting || isSuccess}
                    className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold uppercase tracking-wider text-n600"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    disabled={isSubmitting || isSuccess}
                    className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-organization"
                    className="text-xs font-semibold uppercase tracking-wider text-n600"
                  >
                    Organisation
                  </label>
                  <input
                    id="contact-organization"
                    name="organization"
                    disabled={isSubmitting || isSuccess}
                    className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint"
                    placeholder="Company / institution"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold uppercase tracking-wider text-n600"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    disabled={isSubmitting || isSuccess}
                    className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint resize-none"
                    placeholder="Tell us about your sustainability or climate ambition..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-primary disabled:opacity-60"
                >
                  <Send size={14} /> {isSubmitting ? "Sending…" : "Send message"}
                </button>
                {isSuccess && (
                  <p className="text-sm text-canopy" role="status">
                    Thanks — we'll get back to you within two business days.
                  </p>
                )}
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div
                className="rounded-[32px] p-8 md:p-10 text-white"
                style={{ background: "var(--gradient-hero)" }}
              >
                <h3 className="font-ui font-semibold text-3xl">Talk to Planetive</h3>
                <p className="mt-3 text-n200 text-sm leading-relaxed">
                  Whether you're scoping a net-zero strategy, financing a clean energy project, or
                  building a carbon program — start here.
                </p>
                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-white/10 inline-flex items-center justify-center">
                      <Mail size={16} />
                    </span>
                    <span>hello@planetive.org</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-white/10 inline-flex items-center justify-center">
                      <MapPin size={16} />
                    </span>
                    <span>Pakistan · MENA · Global</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-mint-soft p-8">
                <p className="font-ui font-semibold text-2xl text-forest leading-tight">
                  "The Earth is a fine place and worth fighting for."
                </p>
                <p className="mt-3 text-sm text-n600">— Ernest Hemingway</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
