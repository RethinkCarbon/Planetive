import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { NAV_ECOSYSTEM_LINKS } from "@/lib/site-nav-content";
import { cn } from "@/lib/utils";
import {
  navMegaLinkClass,
  navMegaPanelClass,
  navTriggerClass,
} from "./nav-menu-styles";

type NavEcosystemMenuProps = {
  isSolid: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  variant?: "dropdown" | "list";
};

export function EcosystemNavTrigger({
  isSolid,
  isOpen,
}: Pick<NavEcosystemMenuProps, "isSolid" | "isOpen">) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = NAV_ECOSYSTEM_LINKS.some(
    (l) => pathname === l.to || pathname.startsWith(`${l.to}/`),
  );

  return (
    <span
      className={navTriggerClass(isSolid, isActive, isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      Ecosystem
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

export function EcosystemDropdownPanel({ onClose }: { onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div
      className={cn(navMegaPanelClass(), "w-[16rem] max-w-[calc(100vw-2rem)] p-2")}
      role="menu"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="space-y-0.5 p-1">
        {NAV_ECOSYSTEM_LINKS.map((item) => {
          const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                role="menuitem"
                onClick={onClose}
                className={cn(navMegaLinkClass(active), "px-2 py-2.5")}
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

export function NavEcosystemMenu({
  isSolid,
  isOpen,
  onClose,
  variant = "dropdown",
}: NavEcosystemMenuProps) {
  if (variant === "list") {
    return (
      <li>
        <span className="block px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-n500">
          Ecosystem
        </span>
        <ul className="mb-2">
          {NAV_ECOSYSTEM_LINKS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onClose}
                className="block px-3 py-2 rounded-lg text-sm font-body text-n700 hover:bg-n100 hover:text-forest"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return <EcosystemNavTrigger isSolid={isSolid} isOpen={isOpen} />;
}
