import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { PlanetiveLogo } from "@/components/site/PlanetiveLogo";
import { NavAnimatedPanel } from "@/components/site/nav/NavAnimatedPanel";
import {
  ConsultingDropdownPanel,
  NavConsultingMenu,
} from "@/components/site/nav/NavConsultingMenu";
import {
  EcosystemDropdownPanel,
  NavEcosystemMenu,
} from "@/components/site/nav/NavEcosystemMenu";
import {
  InsightsDropdownPanel,
  NavInsightsMenu,
} from "@/components/site/nav/NavInsightsMenu";
import {
  NavSolutionsMenu,
  SolutionsMegaPanel,
  SolutionsNavTrigger,
} from "@/components/site/nav/NavSolutionsMenu";
import { ConsultingNavTrigger } from "@/components/site/nav/NavConsultingMenu";
import { EcosystemNavTrigger } from "@/components/site/nav/NavEcosystemMenu";
import { InsightsNavTrigger } from "@/components/site/nav/NavInsightsMenu";
import { useNavHoverMenu } from "@/components/site/nav/useNavHoverMenu";
import type { NavMenuId } from "@/lib/site-nav-content";

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

  const isSolid = variant === "solid" || scrolled;
  const solutionsHover = hoverHandlers("solutions");

  return (
    <header
      ref={headerRef}
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

          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            <li className="relative">
              <div {...solutionsHover}>
                <SolutionsNavTrigger isSolid={isSolid} isOpen={openMenu === "solutions"} />
              </div>
            </li>

            <NavDropdownItem
              menu="consulting"
              isOpen={openMenu === "consulting"}
              hoverHandlers={hoverHandlers}
              onClose={close}
              trigger={
                <ConsultingNavTrigger isSolid={isSolid} isOpen={openMenu === "consulting"} />
              }
              panel={<ConsultingDropdownPanel onClose={close} />}
              panelClassName="absolute left-1/2 top-full z-[60] w-max -translate-x-1/2 pt-2"
            />

            <NavDropdownItem
              menu="ecosystem"
              isOpen={openMenu === "ecosystem"}
              hoverHandlers={hoverHandlers}
              onClose={close}
              trigger={
                <EcosystemNavTrigger isSolid={isSolid} isOpen={openMenu === "ecosystem"} />
              }
              panel={<EcosystemDropdownPanel onClose={close} />}
              panelClassName="absolute left-1/2 top-full z-[60] w-max -translate-x-1/2 pt-2"
            />

            <NavDropdownItem
              menu="insights"
              isOpen={openMenu === "insights"}
              hoverHandlers={hoverHandlers}
              onClose={close}
              trigger={
                <InsightsNavTrigger isSolid={isSolid} isOpen={openMenu === "insights"} />
              }
              panel={<InsightsDropdownPanel onClose={close} />}
              panelClassName="absolute right-0 top-full z-[60] w-max pt-2"
            />
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
              onClick={() => {
                close();
                setMobileOpen((open) => !open);
              }}
              className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ${
                isSolid ? "bg-n100 text-forest" : "bg-white/15 text-white"
              }`}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileOpen ? (
          <div
            data-site-mobile-nav
            className="lg:hidden mt-2 glass rounded-3xl p-4 shadow-[var(--shadow-soft)] max-h-[min(85vh,32rem)] overflow-y-auto"
          >
            <ul className="flex flex-col">
              <NavSolutionsMenu
                variant="list"
                isSolid
                isOpen={false}
                onToggle={() => {}}
                onClose={() => setMobileOpen(false)}
              />
              <NavConsultingMenu
                variant="list"
                isSolid
                isOpen={false}
                onToggle={() => {}}
                onClose={() => setMobileOpen(false)}
              />
              <NavEcosystemMenu
                variant="list"
                isSolid
                isOpen={false}
                onToggle={() => {}}
                onClose={() => setMobileOpen(false)}
              />
              <NavInsightsMenu
                variant="list"
                isSolid
                isOpen={false}
                onToggle={() => {}}
                onClose={() => setMobileOpen(false)}
              />
              <li className="mt-2">
                <Link
                  to="/work-with-us"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center rounded-full px-4 py-2.5 text-sm font-semibold font-heading btn-primary"
                >
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      {openMenu === "solutions" ? (
        <div
          className="hidden lg:block absolute inset-x-0 top-full -mt-2 pt-3"
          {...solutionsHover}
        >
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
