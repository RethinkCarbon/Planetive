import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What We Do" },
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
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = variant === "solid" || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 hero-enter transition-all duration-300 ${
        isSolid ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between gap-6 rounded-full px-4 md:px-6 py-2.5 transition-all duration-300 ${
            isSolid ? "glass shadow-[var(--shadow-soft)]" : "glass-dark"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span
              aria-hidden
              className="inline-flex h-8 w-8 items-center justify-center rounded-full"
              style={{ background: "var(--gradient-hero)" }}
            >
              <span className="block h-3 w-3 rounded-full bg-mint-soft" />
            </span>
            <span
              className={`font-logo text-xl tracking-tight ${
                isSolid ? "text-forest" : "text-white"
              }`}
            >
              Planetive
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSolid
                      ? "text-n800 hover:bg-n100"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  activeProps={{
                    className: `px-3 py-2 rounded-full text-sm font-medium ${
                      isSolid ? "bg-n100 text-forest" : "bg-white/15 text-white"
                    }`,
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold btn-mint"
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
          <div className="lg:hidden mt-2 glass rounded-3xl p-4 shadow-[var(--shadow-soft)]">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-medium text-n800 hover:bg-n100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full px-4 py-2.5 text-sm font-semibold btn-primary"
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
