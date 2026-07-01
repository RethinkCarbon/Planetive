import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { INDUSTRIES_NAV } from "@/lib/industries-content";
import { NAV_EXPLORE_LINKS, NAV_SOLUTION_GROUPS } from "@/lib/site-nav-content";
import { cn } from "@/lib/utils";
import {
  navMegaGroupTitleClass,
  navMegaLinkClass,
  navMegaPanelClass,
  navTriggerClass,
} from "./nav-menu-styles";

type NavSolutionsMenuProps = {
  isSolid: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  variant?: "dropdown" | "list";
};

export function SolutionsNavTrigger({
  isSolid,
  isOpen,
}: Pick<NavSolutionsMenuProps, "isSolid" | "isOpen">) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = pathname.startsWith("/ecosystem/") || pathname.startsWith("/industries/");

  return (
    <span
      className={navTriggerClass(isSolid, isActive, isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      Solutions
      <ChevronDown
        size={16}
        className={cn(
          "opacity-80 transition-transform duration-300 ease-out",
          isOpen && "rotate-180",
        )}
        aria-hidden
      />
    </span>
  );
}

export function SolutionsMegaPanel({ onClose }: { onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div
      className={cn(navMegaPanelClass(), "p-6 md:p-8")}
      role="menu"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
        <div className="lg:col-span-7 space-y-6">
          {NAV_SOLUTION_GROUPS.map((group) => (
            <div key={group.title}>
              <p className={navMegaGroupTitleClass()}>{group.title}</p>
              <ul className="mt-3 space-y-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        role="menuitem"
                        onClick={onClose}
                        className={navMegaLinkClass(active)}
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
        </div>

        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-n200/70 pt-6 lg:pt-0 lg:pl-6">
          <p className={navMegaGroupTitleClass()}>Industries We Serve</p>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0.5">
            {INDUSTRIES_NAV.map((item) => (
              <li key={item.to}>
                <span
                  role="note"
                  aria-disabled="true"
                  className="group flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-base font-body font-normal text-n700/75 cursor-not-allowed"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden
                  />
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          {NAV_EXPLORE_LINKS.length > 0 ? (
            <div className="mt-6 border-t border-n200/70 pt-5">
              <p className={navMegaGroupTitleClass()}>Get in touch</p>
              <ul className="mt-3 space-y-0.5">
                {NAV_EXPLORE_LINKS.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        role="menuitem"
                        onClick={onClose}
                        className={navMegaLinkClass(active)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function NavSolutionsMenu({
  isSolid,
  isOpen,
  onToggle,
  onClose,
  variant = "dropdown",
}: NavSolutionsMenuProps) {
  if (variant === "list") {
    return (
      <li>
        <span className="block px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-n500">
          Solutions
        </span>
        {NAV_SOLUTION_GROUPS.map((group) => (
          <div key={group.title} className="mb-3">
            <p className={cn(navMegaGroupTitleClass(), "px-3 pb-1")}>{group.title}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className={cn(navMegaLinkClass(false), "px-3")}
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
              ))}
            </ul>
          </div>
        ))}
        <div className="mb-3">
          <p className={cn(navMegaGroupTitleClass(), "px-3 pb-1")}>Industries We Serve</p>
          <ul>
            {INDUSTRIES_NAV.map((item) => (
              <li key={item.to}>
                <span
                  aria-disabled="true"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-base font-body font-normal text-n700/75 cursor-not-allowed"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden
                  />
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return <SolutionsNavTrigger isSolid={isSolid} isOpen={isOpen} />;
}
