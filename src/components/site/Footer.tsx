import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { PlanetiveLogo } from "@/components/site/PlanetiveLogo";
import { useSiteForm } from "@/hooks/use-site-form";
import { RETHINK_CARBON } from "@/lib/industries-content";
import { cn } from "@/lib/utils";

const FOOTER_PAGES = [
  { to: "/about-us", label: "About Us" },
  { to: "/consulting", label: "Consulting" },
  { to: "/what-we-do", label: "Ecosystem Overview" },
  { to: "/impact", label: "Impact" },
  { to: "/global-engagements", label: "Global Engagements" },
  { to: "/blog", label: "Publications" },
  { to: "/work-with-us", label: "Work With Us" },
  { to: "/contact", label: "Contact" },
] as const;

const FOOTER_SOLUTIONS: Array<{ label: string; to?: string; href?: string }> = [
  { label: "Rethink Carbon", href: RETHINK_CARBON.url },
  { label: "Digital MRV Platforms", to: "/ecosystem/digital-mrv-platforms" },
  { label: "Agri Tech Solutions", to: "/ecosystem/agri-tech-solutions" },
  { label: "Agri-Co Platform", href: "/ecosystem/agri-tech-solutions#agri-co" },
  { label: "VERT-OS", href: "/ecosystem/agri-tech-solutions#vert-os" },
  { label: "Energy Sector Intelligence", to: "/ecosystem/energy-sector-intelligence" },
];

const GLOBAL_PRESENCE = [
  {
    country: "Pakistan",
    flagSrc: "/images/flags/pakistan.svg",
    flagAlt: "Flag of Pakistan",
  },
  {
    country: "United Arab Emirates",
    flagSrc: "/images/flags/uae.svg",
    flagAlt: "Flag of the United Arab Emirates",
  },
] as const;

const LINKEDIN_URL = "https://www.linkedin.com/company/planetive/";

const linkClass =
  "inline-block text-sm text-white/80 transition-all duration-200 ease-out hover:translate-x-0.5 hover:text-mint-soft focus-visible:outline-none focus-visible:text-mint-soft";

function FooterLink({
  label,
  to,
  href,
}: {
  label: string;
  to?: string;
  href?: string;
}) {
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={linkClass}
      >
        {label}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={linkClass}>
        {label}
      </Link>
    );
  }

  return <span className="text-sm text-white/55">{label}</span>;
}

export function Footer() {
  const { submit, isSubmitting, isSuccess, error } = useSiteForm();

  return (
    <footer className="relative overflow-hidden bg-[var(--n900)] text-[var(--n200)] border-t border-mint/25 site-footer">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="container-x relative z-10 py-14 md:py-16 lg:py-20">
        <ScrollRevealGroup
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10"
          stagger={100}
          variant="fade-up"
        >
          <div
            className="lg:col-span-3"
            style={{ ["--reveal-duration" as string]: "0.2s" }}
          >
            <PlanetiveLogo onDark zoom="footer" />
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5",
                "text-sm font-medium text-white transition-all duration-200 ease-out",
                "hover:border-mint hover:bg-mint hover:text-forest hover:scale-[1.02]",
              )}
            >
              <Linkedin size={15} aria-hidden />
              Join us on LinkedIn
            </a>
          </div>

          <div
            className="lg:col-span-2"
            style={{ ["--reveal-duration" as string]: "0.2s" }}
          >
            <h4 className="text-sm font-semibold tracking-wide text-white">Pages</h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_PAGES.map((item) => (
                <li key={item.to}>
                  <FooterLink label={item.label} to={item.to} />
                </li>
              ))}
            </ul>
          </div>

          <div
            className="lg:col-span-3"
            style={{ ["--reveal-duration" as string]: "0.2s" }}
          >
            <h4 className="text-sm font-semibold tracking-wide text-white">Our Solutions</h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_SOLUTIONS.map((item) => (
                <li key={item.label}>
                  <FooterLink label={item.label} to={item.to} href={item.href} />
                </li>
              ))}
            </ul>
          </div>

          <div
            className="lg:col-span-4 space-y-10"
            style={{ ["--reveal-duration" as string]: "0.2s" }}
          >
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Newsletter</h4>
              <p className="mt-4 text-sm text-white/65 leading-relaxed">
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
                    className="flex-1 rounded-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-mint disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="rounded-full px-4 py-2.5 text-sm font-semibold btn-mint transition-transform duration-200 hover:scale-[1.03] disabled:opacity-60"
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

            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Global Presence</h4>
              <ul className="mt-5 space-y-3">
                {GLOBAL_PRESENCE.map((place) => (
                  <li
                    key={place.country}
                    className="flex items-center gap-3 text-sm text-white/80 transition-transform duration-200 hover:translate-x-0.5"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15 bg-white/5">
                      <img
                        src={place.flagSrc}
                        alt={place.flagAlt}
                        width={28}
                        height={28}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    {place.country}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollRevealGroup>

        <ScrollReveal delay={120} duration={200} variant="fade-in">
          <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/45">
            <p>© {new Date().getFullYear()} Planetive. All rights reserved.</p>
            <p>Climate Intelligence · Advisory · Project Development</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
