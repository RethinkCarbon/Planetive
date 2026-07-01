import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { INDUSTRIES_NAV } from "@/lib/industries-content";
import { cn } from "@/lib/utils";
import {
  navMegaColumnTitleClass,
  navMegaLinkClass,
  navMegaPanelClass,
  navTriggerClass,
} from "./nav-menu-styles";

type NavIndustriesMegaMenuProps = {
  isSolid: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  variant?: "dropdown" | "list";
};

export function IndustriesNavTrigger({
  isSolid,
  isOpen,
}: Pick<NavIndustriesMegaMenuProps, "isSolid" | "isOpen">) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = pathname.startsWith("/industries/");

  return (
    <span
      className={navTriggerClass(isSolid, isActive, isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      Industries
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

export function IndustriesMegaPanel({ onClose }: { onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div
      className={cn(navMegaPanelClass(), "w-[28rem] max-w-[calc(100vw-2rem)] p-6 md:p-8")}
      role="menu"
      onClick={(e) => e.stopPropagation()}
    >
      <p className={navMegaColumnTitleClass()}>Industries</p>
      <p className="mt-2 mb-5 text-sm text-n600 leading-relaxed">
        Where Planetive supports transition strategy, platforms and delivery.
      </p>
      <ul className="grid grid-cols-2 gap-0.5">
        {INDUSTRIES_NAV.map((item) => {
          const active = pathname === item.to;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                role="menuitem"
                onClick={onClose}
                className={navMegaLinkClass(active)}
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                  aria-hidden
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function NavIndustriesMegaMenu({
  isSolid,
  isOpen,
  onToggle,
  onClose,
  variant = "dropdown",
}: NavIndustriesMegaMenuProps) {
  if (variant === "list") {
    return (
      <li>
        <span className="block px-3 pt-3 pb-1 text-[10px] font-mono uppercase tracking-wider text-n500">
          Industries
        </span>
        <ul className="mb-2">
          {INDUSTRIES_NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={onClose}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-body text-n700 hover:bg-n100 hover:text-forest"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                  aria-hidden
                />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return <IndustriesNavTrigger isSolid={isSolid} isOpen={isOpen} />;
}
