import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { NAV_INSIGHTS_LINKS } from "@/lib/site-nav-content";
import { cn } from "@/lib/utils";
import { navMegaLinkClass, navMegaPanelClass, navTriggerClass } from "./nav-menu-styles";

type NavInsightsMenuProps = {
  isSolid: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  variant?: "dropdown" | "list";
};

export function InsightsNavTrigger({
  isSolid,
  isOpen,
}: Pick<NavInsightsMenuProps, "isSolid" | "isOpen">) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = NAV_INSIGHTS_LINKS.some(
    (l) => pathname === l.to || pathname.startsWith(`${l.to}/`),
  );

  return (
    <span
      className={navTriggerClass(isSolid, isActive, isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      Insights
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

export function InsightsDropdownPanel({ onClose }: { onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div
      className={cn(navMegaPanelClass(), "p-2 min-w-[12rem]")}
      role="menu"
      onClick={(e) => e.stopPropagation()}
    >
      <ul>
        {NAV_INSIGHTS_LINKS.map((item) => {
          const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                role="menuitem"
                onClick={onClose}
                className={cn(navMegaLinkClass(active), "px-3 py-2.5")}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function NavInsightsMenu({
  isSolid,
  isOpen,
  onToggle,
  onClose,
  variant = "dropdown",
}: NavInsightsMenuProps) {
  if (variant === "list") {
    return (
      <li>
        <span className="block px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-n500">
          Insights
        </span>
        <ul className="mb-2">
          {NAV_INSIGHTS_LINKS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-sm font-heading text-n700 hover:bg-n100 hover:text-forest"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return <InsightsNavTrigger isSolid={isSolid} isOpen={isOpen} />;
}
