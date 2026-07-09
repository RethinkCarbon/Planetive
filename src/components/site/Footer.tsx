import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { PlanetiveLogo } from "@/components/site/PlanetiveLogo";
import { useSiteForm } from "@/hooks/use-site-form";

export function Footer() {
  const { submit, isSubmitting, isSuccess, error } = useSiteForm();
  return (
    <footer className="bg-[var(--n900)] text-[var(--n200)] mt-24">
      <div className="container-x py-16">
        <ScrollRevealGroup
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          stagger={100}
          variant="fade-up"
        >
          <div className="md:col-span-2">
            <PlanetiveLogo onDark zoom="footer" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-n400">
              Building climate intelligence for a sustainable future. Connecting strategy,
              technology, capital, and implementation for enterprises and financial institutions
              worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/planetive/" },
                { Icon: Twitter, href: "https://www.x.com/planetive" },
                { Icon: Instagram, href: "https://www.instagram.com/planetive_org" },
                { Icon: Facebook, href: "https://www.facebook.com/100824998359566" },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-mint hover:text-forest text-white inline-flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/consulting", "Consulting"],
                ["/what-we-do", "Ecosystem Overview"],
                ["/impact", "Impact"],
                ["/global-engagements", "Global Engagements"],
                ["/blog", "Blog"],
                ["/about-us", "About Us"],
                ["/work-with-us", "Work With Us"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-mint transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Newsletter</h4>
            <p className="mt-4 text-sm text-n400">
              Monthly sustainability insights, delivered to your inbox.
            </p>
            <form
              className="mt-4 space-y-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const ok = await submit({
                  kind: "newsletter",
                  email: String(data.get("email") ?? ""),
                  source: "footer",
                });
                if (ok) form.reset();
              }}
            >
              <div className="flex items-center gap-2">
                <input
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting || isSuccess}
                  placeholder="you@company.com"
                  className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-n400 focus:outline-none focus:border-mint disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="rounded-full px-4 py-2.5 text-sm font-semibold btn-mint disabled:opacity-60"
                >
                  {isSubmitting ? "…" : isSuccess ? "Joined" : "Join"}
                </button>
              </div>
              {isSuccess && (
                <p className="text-xs text-mint-soft" role="status">
                  Thanks — you&apos;re on the list.
                </p>
              )}
              {error && (
                <p className="text-xs text-red-300" role="alert">
                  {error}
                </p>
              )}
            </form>
          </div>
        </ScrollRevealGroup>

        <ScrollReveal delay={200} variant="fade-in">
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-n400">
            <p>© {new Date().getFullYear()} Planetive. All rights reserved.</p>
            <p>Climate Intelligence · Advisory · Project Development</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
