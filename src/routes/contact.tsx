import { createFileRoute } from "@tanstack/react-router";
import { BookMeetingSection } from "@/components/site/BookMeetingSection";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { Mail, MapPin } from "lucide-react";
import { PLANETIVE_INBOX_EMAIL } from "@/lib/site-form-payload";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Planetive" },
      {
        name: "description",
        content:
          "Book a call or start a conversation with Planetive. Build your climate transition roadmap with our team of advisors, technologists, and project developers.",
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
  return (
    <main className="min-h-screen bg-background contact-page">
      <Navbar variant="solid" />
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        description="Tell us where you are. We'll show you what comes next — diagnosis, implementation, and the systems to sustain it."
      />

      <BookMeetingSection />

      <section className="py-16 md:py-24 border-t border-n200/60 bg-[var(--n50)]">
        <div className="container-x">
          <ScrollReveal className="max-w-2xl mb-10 md:mb-12">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
              Other ways to reach us
            </span>
            <h2 className="mt-3 font-ui font-semibold text-[clamp(1.75rem,3vw,2.5rem)] text-forest">
              We&apos;re here to help
            </h2>
            <p className="mt-3 text-sm md:text-base text-n600 leading-relaxed">
              Prefer email or want to share context before booking? Reach out directly — we typically
              respond within two business days.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
            <ScrollReveal variant="fade-up">
              <div
                className="h-full rounded-[32px] p-8 md:p-10 text-white"
                style={{ background: "var(--gradient-hero)" }}
              >
                <h3 className="font-ui font-semibold text-2xl md:text-3xl">Talk to Planetive</h3>
                <p className="mt-3 text-n200 text-sm leading-relaxed">
                  Whether you&apos;re scoping a net-zero strategy, financing a clean energy project,
                  or building a carbon program — start here.
                </p>
                <div className="mt-8 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 shrink-0 rounded-xl bg-white/10 inline-flex items-center justify-center">
                      <Mail size={16} aria-hidden />
                    </span>
                    <a
                      href={`mailto:${PLANETIVE_INBOX_EMAIL}`}
                      className="hover:text-mint-soft transition-colors break-all"
                    >
                      {PLANETIVE_INBOX_EMAIL}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 shrink-0 rounded-xl bg-white/10 inline-flex items-center justify-center">
                      <MapPin size={16} aria-hidden />
                    </span>
                    <span>Pakistan · MENA · Global</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={80}>
              <div className="flex h-full flex-col justify-center rounded-[32px] bg-mint-soft p-8 md:p-10">
                <p className="font-ui font-semibold text-2xl md:text-[1.65rem] text-forest leading-tight">
                  &ldquo;The Earth is a fine place and worth fighting for.&rdquo;
                </p>
                <p className="mt-4 text-sm text-n600">— Ernest Hemingway</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
