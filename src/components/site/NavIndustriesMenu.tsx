import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { INDUSTRIES_NAV } from "@/lib/industries-content";

type NavIndustriesMenuProps = {
  isSolid: boolean;
  onNavigate?: () => void;
  variant?: "dropdown" | "list";
};

export function NavIndustriesMenu({
  isSolid,
  onNavigate,
  variant = "dropdown",
}: NavIndustriesMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = pathname.startsWith("/industries/");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (variant !== "dropdown") return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [variant]);

  const triggerClass = cn(
    "inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors",
    isSolid
      ? isActive
        ? "bg-n100 text-forest"
        : "text-n800 hover:bg-n100"
      : isActive
        ? "bg-white/15 text-white"
        : "text-white/90 hover:text-white hover:bg-white/10",
  );

  const menuPanelClass = cn(
    "rounded-xl overflow-hidden shadow-[var(--shadow-elevated)] backdrop-blur-md border",
    isSolid ? "bg-white/95 border-n200/90" : "bg-[#0A3D2E]/94 border-white/20",
  );

  const itemClass = (active: boolean, index: number, total: number) =>
    cn(
      "flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors",
      index === 0 && "rounded-t-xl",
      index === total - 1 && "rounded-b-xl",
      isSolid
        ? active
          ? "bg-mint-soft/50 text-forest font-medium"
          : "text-n700 hover:bg-n100 hover:text-forest"
        : active
          ? "bg-white/12 text-white font-medium"
          : "text-white/90 hover:bg-white/10 hover:text-white",
    );

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  const navLinks = (
    <ul>
      {INDUSTRIES_NAV.map((item, index) => {
        const active = pathname === item.to;
        return (
          <li key={item.to}>
            <Link
              to={item.to}
              role="menuitem"
              onClick={close}
              className={itemClass(active, index, INDUSTRIES_NAV.length)}
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
  );

  if (variant === "list") {
    return (
      <li>
        <span className="block px-3 pt-2 pb-1 text-[10px] font-mono uppercase tracking-wider text-n500">
          Industries
        </span>
        <ul className="mb-2">
          {INDUSTRIES_NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={close}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-n700 hover:bg-n100 hover:text-forest"
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

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
      >
        Industries
        <ChevronDown
          size={16}
          className={cn("transition-transform opacity-80", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className={cn(
            "absolute left-0 top-full z-50 mt-2 min-w-[12.5rem]",
            menuPanelClass,
          )}
        >
          {navLinks}
        </div>
      )}
    </div>
  );
}
