import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { PlanetiveLogo } from "@/components/site/PlanetiveLogo";
import { NavAnimatedPanel } from "@/components/site/nav/NavAnimatedPanel";
import { MobileNavDrawer } from "@/components/site/nav/MobileNavDrawer";
import { MobileMenuIcon } from "@/components/site/nav/MobileMenuIcon";
import { InsightsDropdownPanel, InsightsNavTrigger } from "@/components/site/nav/NavInsightsMenu";
import { SolutionsMegaPanel, SolutionsNavTrigger } from "@/components/site/nav/NavSolutionsMenu";
import { navLinkClass } from "@/components/site/nav/nav-menu-styles";
import { useNavHoverMenu } from "@/components/site/nav/useNavHoverMenu";
import { isConsultingNavPath } from "@/lib/site-nav-content";
import type { NavMenuId } from "@/lib/site-nav-content";
import { cn } from "@/lib/utils";

function NavDropdownItem({
  isOpen,
  hoverHandlers,
  onClose,
  menu,
  trigger,
  panel,
  panelClassName,
}: {
  menu: NavMenuId;
  isOpen: boolean;
  hoverHandlers: ReturnType<typeof useNavHoverMenu>["hoverHandlers"];
  onClose: () => void;
  trigger: ReactNode;
  panel: ReactNode;
  panelClassName: string;
}) {
  const handlers = hoverHandlers(menu);

  return (
    <li className="relative">
      <div {...handlers}>{trigger}</div>
      <NavAnimatedPanel show={isOpen} className={panelClassName} {...handlers}>
        {panel}
      </NavAnimatedPanel>
    </li>
  );
}

export function Navbar({ variant = "transparent" }: { variant?: "transparent" | "solid" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openMenu, close, hoverHandlers } = useNavHoverMenu();
  const headerRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

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

  useEffect(() => {
    close();
    setMobileOpen(false);
  }, [pathname, close]);

  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu, close]);

  const isCompact = variant === "solid" || scrolled;
  const isSolid = true;
  const solutionsHover = hoverHandlers("solutions");

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 inset-x-0 transition-all duration-300",
        mobileOpen ? "z-[70] max-lg:pointer-events-none" : "z-50",
        variant === "transparent" && "hero-enter",
        isCompact ? "py-2" : "py-4",
      )}
    >
      <div className="container-x">
        <nav
          className={cn(
            "flex items-center justify-between gap-2 sm:gap-3 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 lg:grid lg:grid-cols-[1fr_auto_1fr]",
            "glass shadow-[var(--shadow-soft)]",
            "transition-[opacity,transform,box-shadow] duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
            mobileOpen &&
              "max-lg:pointer-events-none max-lg:scale-[0.97] max-lg:opacity-0 max-lg:translate-y-[-6px]",
          )}
        >
          <Link to="/" className="flex shrink-0 items-center justify-self-start">
            <PlanetiveLogo zoom className="-translate-y-px md:-translate-y-0.5" />
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-0 xl:gap-0.5">
            <li className="relative">
              <div {...solutionsHover}>
                <SolutionsNavTrigger isSolid={isSolid} isOpen={openMenu === "solutions"} />
              </div>
            </li>

            <li>
              <Link
                to="/consulting"
                className={navLinkClass(isSolid, isConsultingNavPath(pathname))}
              >
                Consulting
              </Link>
            </li>

            <li>
              <Link
                to="/about-us"
                className={navLinkClass(
                  isSolid,
                  pathname === "/about-us" || pathname.startsWith("/about-us/"),
                )}
              >
                About Us
              </Link>
            </li>

            <NavDropdownItem
              menu="publications"
              isOpen={openMenu === "publications"}
              hoverHandlers={hoverHandlers}
              onClose={close}
              trigger={
                <InsightsNavTrigger isSolid={isSolid} isOpen={openMenu === "publications"} />
              }
              panel={<InsightsDropdownPanel onClose={close} />}
              panelClassName="absolute right-0 top-full z-[60] w-max pt-2"
            />
          </ul>

          <div className="flex items-center justify-end gap-2 justify-self-end">
            <Link
              to="/work-with-us"
              className="hidden md:inline-flex items-center rounded-full px-3 py-2 lg:px-4 lg:py-2.5 text-sm lg:text-sm font-semibold font-body btn-mint whitespace-normal text-center leading-tight"
            >
              Work With Us
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="site-mobile-nav"
              onClick={() => {
                close();
                setMobileOpen(true);
              }}
              className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center text-forest touch-manipulation transition-transform duration-200 active:scale-90"
            >
              <MobileMenuIcon open={false} />
            </button>
          </div>
        </nav>

        <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>

      {openMenu === "solutions" ? (
        <div className="hidden lg:block absolute inset-x-0 top-full -mt-2 pt-3" {...solutionsHover}>
          <NavAnimatedPanel show className="pt-2">
            <div className="container-x">
              <SolutionsMegaPanel onClose={close} />
            </div>
          </NavAnimatedPanel>
        </div>
      ) : null}
    </header>
  );
}
