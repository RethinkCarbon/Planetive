import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarDays, ChevronDown } from "lucide-react";
import { isConsultingNavPath, NAV_CONSULTING_BOOK, NAV_CONSULTING_LINKS } from "@/lib/site-nav-content";
import { cn } from "@/lib/utils";
import {
  navMegaLinkClass,
  navMegaPanelClass,
  navTriggerClass,
} from "./nav-menu-styles";

type NavConsultingMenuProps = {
  isSolid: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  variant?: "dropdown" | "list";
};

export function ConsultingNavTrigger({
  isSolid,
  isOpen,
}: Pick<NavConsultingMenuProps, "isSolid" | "isOpen">) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = isConsultingNavPath(pathname);

  return (
    <span
      className={navTriggerClass(isSolid, isActive, isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      Consulting
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

export function ConsultingDropdownPanel({ onClose }: { onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div
      className={cn(navMegaPanelClass(), "w-[18rem] max-w-[calc(100vw-2rem)] p-2")}
      role="menu"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="space-y-0.5 p-1">
        {NAV_CONSULTING_LINKS.map((item) => {
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
      <div className="mt-1 p-2 pt-3 border-t border-n200/70">
        <Link
          to={NAV_CONSULTING_BOOK.to}
          hash={NAV_CONSULTING_BOOK.hash}
          role="menuitem"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold font-heading btn-mint"
        >
          <CalendarDays size={15} aria-hidden />
          {NAV_CONSULTING_BOOK.label}
        </Link>
      </div>
    </div>
  );
}

export function NavConsultingMenu({
  isSolid,
  isOpen,
  onClose,
  variant = "dropdown",
}: NavConsultingMenuProps) {
  if (variant === "list") {
    return (
      <li>
        <span className="block px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-n500">
          Consulting
        </span>
        <ul className="mb-2">
          {NAV_CONSULTING_LINKS.map((item) => (
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
          <li className="px-3 pt-2">
            <Link
              to={NAV_CONSULTING_BOOK.to}
              hash={NAV_CONSULTING_BOOK.hash}
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold font-heading btn-mint"
            >
              <CalendarDays size={15} aria-hidden />
              {NAV_CONSULTING_BOOK.label}
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  return <ConsultingNavTrigger isSolid={isSolid} isOpen={isOpen} />;
}
