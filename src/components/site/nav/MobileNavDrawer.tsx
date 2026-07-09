import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PlanetiveLogo } from "@/components/site/PlanetiveLogo";
import { MobileMenuIcon } from "@/components/site/nav/MobileMenuIcon";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { INDUSTRIES_NAV } from "@/lib/industries-content";
import {
  NAV_EXPLORE_LINKS,
  NAV_PUBLICATIONS_LINKS,
  NAV_SOLUTION_GROUPS,
  isConsultingNavPath,
  isPublicationsPath,
  isSolutionsPath,
} from "@/lib/site-nav-content";
import { cn } from "@/lib/utils";

const DRAWER_EASE = [0.32, 0.72, 0, 1] as const;
const DRAWER_OPEN_MS = 0.42;
const DRAWER_CLOSE_MS = 0.34;
const EXIT_HOLD_MS = 360;

const navListVariants = {
  open: {
    transition: { staggerChildren: 0.055, delayChildren: 0.12 },
  },
  closed: {
    transition: { staggerChildren: 0.035, staggerDirection: -1 },
  },
};

const navItemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.36, ease: DRAWER_EASE },
  },
  closed: {
    opacity: 0,
    x: 18,
    transition: { duration: 0.26, ease: DRAWER_EASE },
  },
};

type MobileNavDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const instant = reducedMotion;
  const drawerDuration = open ? DRAWER_OPEN_MS : DRAWER_CLOSE_MS;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      setVisible(true);
      return;
    }
    const timer = window.setTimeout(() => setVisible(false), instant ? 0 : EXIT_HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [open, instant]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible ? (
        <>
          <motion.div
            key="mobile-nav-overlay"
            aria-hidden={!open}
            className="fixed inset-0 z-[80] bg-forest/50 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: instant ? 0 : open ? 0.35 : 0.28,
              ease: DRAWER_EASE,
            }}
            onClick={onClose}
          />

          <motion.aside
            key="mobile-nav-drawer"
            data-site-mobile-nav
            id="site-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            aria-hidden={!open}
            inert={!open ? true : undefined}
            className={cn(
              "fixed top-0 right-0 z-[90] flex h-[100dvh] max-h-[100dvh] w-[min(92vw,22rem)] flex-col bg-white lg:hidden",
              "border-l border-n200/60 shadow-[-8px_0_48px_rgba(10,61,46,0.14)]",
              open ? "pointer-events-auto" : "pointer-events-none",
            )}
            style={{
              paddingTop: "env(safe-area-inset-top, 0px)",
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: open ? 0 : "100%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: instant ? 0 : drawerDuration,
              ease: DRAWER_EASE,
            }}
          >
            <motion.div
              className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-n200/50 px-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: open ? 1 : 0, y: open ? 0 : -8 }}
              transition={{
                duration: instant ? 0 : 0.32,
                delay: instant ? 0 : open ? 0.1 : 0,
                ease: DRAWER_EASE,
              }}
            >
              <Link to="/" onClick={onClose} className="flex min-w-0 items-center">
                <PlanetiveLogo zoom className="-translate-y-px" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-forest touch-manipulation transition-transform duration-200 active:scale-90"
              >
                <MobileMenuIcon open />
              </button>
            </motion.div>

            <nav className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <motion.ul
                className="flex-1 overflow-y-auto overscroll-contain px-4 py-3"
                variants={instant ? undefined : navListVariants}
                initial="closed"
                animate={open ? "open" : "closed"}
              >
                <MobileNavAccordion
                  title="Solutions"
                  defaultOpen={isSolutionsPath(pathname)}
                  reducedMotion={instant}
                >
                  {NAV_SOLUTION_GROUPS.map((group) => (
                    <div key={group.title} className="mb-3 last:mb-0">
                      <p className="px-3 pb-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-n500">
                        {group.title}
                      </p>
                      <ul className="space-y-0.5">
                        {group.items.map((item) => {
                          const active = pathname === item.to;
                          return (
                            <li key={item.to}>
                              <Link
                                to={item.to}
                                onClick={onClose}
                                className={cn(
                                  mobileSubLinkClass,
                                  active && mobileSubLinkActiveClass,
                                )}
                              >
                                {item.color ? (
                                  <span
                                    className="h-2 w-2 shrink-0 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                    aria-hidden
                                  />
                                ) : null}
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}

                  <div className="mt-3 border-t border-n200/60 pt-3">
                    <p className="px-3 pb-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-n500">
                      Industries we serve
                    </p>
                    <ul className="space-y-0.5">
                      {INDUSTRIES_NAV.map((item) => (
                        <li key={item.to}>
                          <span
                            aria-disabled="true"
                            className={cn(mobileSubLinkClass, "text-n500 cursor-not-allowed")}
                          >
                            <span
                              className="h-2 w-2 shrink-0 rounded-full opacity-60"
                              style={{ backgroundColor: item.color }}
                              aria-hidden
                            />
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {NAV_EXPLORE_LINKS.length > 0 ? (
                    <div className="mt-3 border-t border-n200/60 pt-3">
                      <p className="px-3 pb-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-n500">
                        Get in touch
                      </p>
                      <ul className="space-y-0.5">
                        {NAV_EXPLORE_LINKS.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              onClick={onClose}
                              className={cn(
                                mobileSubLinkClass,
                                pathname === item.to && mobileSubLinkActiveClass,
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </MobileNavAccordion>

                <MobileNavRow
                  href="/consulting"
                  onClose={onClose}
                  active={isConsultingNavPath(pathname)}
                >
                  Consulting
                </MobileNavRow>

                <MobileNavRow
                  href="/about-us"
                  onClose={onClose}
                  active={pathname === "/about-us" || pathname.startsWith("/about-us/")}
                >
                  About Us
                </MobileNavRow>

                <MobileNavAccordion
                  title="Publications"
                  defaultOpen={isPublicationsPath(pathname)}
                  reducedMotion={instant}
                >
                  <ul className="space-y-0.5">
                    {NAV_PUBLICATIONS_LINKS.map((item) => {
                      const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
                      return (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            onClick={onClose}
                            className={cn(mobileSubLinkClass, active && mobileSubLinkActiveClass)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </MobileNavAccordion>
              </motion.ul>

              <motion.div
                className="shrink-0 border-t border-n200/70 bg-[var(--n50)]/80 px-4 py-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
                transition={{
                  duration: instant ? 0 : 0.34,
                  delay: instant ? 0 : open ? 0.22 : 0,
                  ease: DRAWER_EASE,
                }}
              >
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center rounded-full px-4 py-3.5 text-sm font-semibold font-body btn-primary shadow-[var(--shadow-soft)] transition-transform duration-200 active:scale-[0.98]"
                >
                  Work With Us
                </Link>
              </motion.div>
            </nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function MobileNavRow({
  children,
  href,
  onClose,
  active,
}: {
  children: ReactNode;
  href: string;
  onClose: () => void;
  active: boolean;
}) {
  return (
    <motion.li variants={navItemVariants}>
      <Link
        to={href}
        onClick={onClose}
        className={cn(mobileTopLinkClass, active && mobileTopLinkActiveClass)}
      >
        {children}
      </Link>
    </motion.li>
  );
}

function MobileNavAccordion({
  title,
  children,
  defaultOpen = false,
  reducedMotion = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  reducedMotion?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return (
    <motion.li variants={navItemVariants}>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className={cn(
          mobileTopLinkClass,
          "w-full justify-between gap-3",
          expanded && "bg-n50 text-forest",
        )}
      >
        <span>{title}</span>
        <ChevronDown
          size={17}
          strokeWidth={2.25}
          className={cn(
            "shrink-0 text-n400 transition-transform duration-[350ms]",
            expanded && "rotate-180 text-canopy",
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
          aria-hidden
        />
      </button>
      <motion.div
        initial={false}
        animate={{ opacity: expanded ? 1 : 0.85 }}
        transition={{ duration: reducedMotion ? 0 : 0.25 }}
        className={cn(
          "grid transition-[grid-template-rows] duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)]",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mr-3 my-1.5 border-r-2 border-mint/50 pr-2 pb-1">{children}</div>
        </div>
      </motion.div>
    </motion.li>
  );
}

const mobileTopLinkClass =
  "flex items-center rounded-xl px-3.5 py-3 text-sm font-semibold font-body text-n800 hover:bg-n50 hover:text-forest active:bg-n100 transition-colors duration-200";

const mobileTopLinkActiveClass = "bg-mint-soft/45 text-forest";

const mobileSubLinkClass =
  "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium font-body text-n700 hover:bg-n50 hover:text-forest active:bg-n100 transition-colors duration-200";

const mobileSubLinkActiveClass = "bg-mint-soft/40 text-forest font-semibold";
