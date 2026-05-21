import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

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
  const [sent, setSent] = useState(false);
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        description="Tell us where you are. We'll show you what comes next — diagnosis, implementation, and the systems to sustain it."
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-[32px] bg-white border border-n200 p-8 md:p-10 shadow-[var(--shadow-soft)]">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-n600">
                  Name
                </label>
                <input
                  required
                  className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-n600">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-n600">
                  Organisation
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint"
                  placeholder="Company / institution"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-n600">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-n200 bg-n50 px-4 py-3 text-sm focus:outline-none focus:border-mint resize-none"
                  placeholder="Tell us about your sustainability or climate ambition..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-primary"
              >
                <Send size={14} /> Send message
              </button>
              {sent && (
                <p className="text-sm text-canopy">
                  Thanks — we'll get back to you within two business days.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-[32px] p-8 md:p-10 text-white"
              style={{ background: "var(--gradient-hero)" }}
            >
              <h3 className="font-display text-3xl">Talk to Planetive</h3>
              <p className="mt-3 text-n200 text-sm leading-relaxed">
                Whether you're scoping a net-zero strategy, financing a clean energy
                project, or building a carbon program — start here.
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
              <p className="font-display text-2xl text-forest leading-tight">
                "The Earth is a fine place and worth fighting for."
              </p>
              <p className="mt-3 text-sm text-n600">— Ernest Hemingway</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
