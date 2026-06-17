import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavWhatWeDoMenu } from "@/components/site/NavWhatWeDoMenu";
import { NavIndustriesMenu } from "@/components/site/NavIndustriesMenu";
import { PlanetiveLogo } from "@/components/site/PlanetiveLogo";

const links = [
  { to: "/", label: "Home" },
  { to: "/impact", label: "Impact" },
  { to: "/global-engagements", label: "Global Engagements" },
  { to: "/blog", label: "Blog" },
  { to: "/about-us", label: "About Us" },
] as const;

export function Navbar({ variant = "transparent" }: { variant?: "transparent" | "solid" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const sync = () => onScroll();

    const onPageShow = (event: PageTransitionEvent) => {
      sync();
      if (!event.persisted) return;
      document.querySelectorAll(".hero-enter").forEach((node) => {
        const el = node as HTMLElement;
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.animation = "none";
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  const isSolid = variant === "solid" || scrolled;
  const linkClass = (extra?: string) =>
    `px-3 py-2 rounded-full text-sm font-medium font-heading transition-colors ${
      isSolid
        ? "text-n800 hover:bg-n100"
        : "text-white/90 hover:text-white hover:bg-white/10"
    } ${extra ?? ""}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        variant === "transparent" ? "hero-enter" : ""
      } ${isSolid ? "py-2" : "py-4"}`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between gap-6 rounded-full px-4 md:px-6 py-2.5 transition-all duration-300 ${
            isSolid ? "glass shadow-[var(--shadow-soft)]" : "glass-dark"
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center">
            <PlanetiveLogo onDark={!isSolid} zoom />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            <li>
              <Link
                to="/"
                className={linkClass()}
                activeProps={{
                  className: linkClass(isSolid ? "bg-n100 text-forest" : "bg-white/15 text-white"),
                }}
                activeOptions={{ exact: true }}
              >
                Home
              </Link>
            </li>
            <li>
              <NavWhatWeDoMenu isSolid={isSolid} />
            </li>
            <li>
              <NavIndustriesMenu isSolid={isSolid} />
            </li>
            {links.slice(1).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={linkClass()}
                  activeProps={{
                    className: linkClass(
                      isSolid ? "bg-n100 text-forest" : "bg-white/15 text-white",
                    ),
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/work-with-us"
              className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold font-heading btn-mint"
            >
              Work With Us
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ${
                isSolid ? "bg-n100 text-forest" : "bg-white/15 text-white"
              }`}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div
            data-site-mobile-nav
            className="lg:hidden mt-2 glass rounded-3xl p-4 shadow-[var(--shadow-soft)] max-h-[min(85vh,32rem)] overflow-y-auto"
          >
            <ul className="flex flex-col">
              <li>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-sm font-medium font-heading text-n800 hover:bg-n100"
                >
                  Home
                </Link>
              </li>
              <NavWhatWeDoMenu
                variant="list"
                isSolid
                onNavigate={() => setOpen(false)}
              />
              <NavIndustriesMenu
                variant="list"
                isSolid
                onNavigate={() => setOpen(false)}
              />
              {links.slice(1).map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-medium font-heading text-n800 hover:bg-n100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/work-with-us"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full px-4 py-2.5 text-sm font-semibold font-heading btn-primary"
                >
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
