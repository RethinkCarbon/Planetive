import { cn } from "@/lib/utils";

export function navTriggerClass(isSolid: boolean, isActive: boolean, isOpen: boolean) {
  return cn(
    "inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium font-heading transition-colors duration-200 cursor-default select-none",
    isSolid
      ? isActive || isOpen
        ? "bg-n100 text-forest"
        : "text-n800 hover:bg-n100"
      : isActive || isOpen
        ? "bg-white/15 text-white"
        : "text-white/90 hover:text-white hover:bg-white/10",
  );
}

export function navMegaPanelClass() {
  return cn(
    "rounded-2xl border border-n200/80 bg-white/98 shadow-[var(--shadow-elevated)] backdrop-blur-md",
  );
}

export function navMegaLinkClass(active: boolean) {
  return cn(
    "group flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-heading transition-colors",
    active ? "bg-mint-soft/40 text-forest font-medium" : "text-n700 hover:bg-n100 hover:text-forest",
  );
}

export function navMegaGroupTitleClass() {
  return "font-mono text-[10px] tracking-[0.18em] uppercase text-canopy";
}

export function navMegaColumnTitleClass() {
  return "font-display text-lg text-forest leading-snug";
}
