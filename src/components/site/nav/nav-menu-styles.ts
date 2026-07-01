import { cn } from "@/lib/utils";

export function navTriggerClass(isSolid: boolean, isActive: boolean, isOpen: boolean) {
  return cn(
    "inline-flex items-center gap-1 px-2 py-2 rounded-full text-sm lg:text-[15px] xl:text-base transition-colors duration-200 cursor-default select-none font-body font-medium min-h-[2.5rem]",
    isActive || isOpen ? "bg-n100 text-forest" : "text-n800 hover:bg-n100",
  );
}

export function navLinkClass(isSolid: boolean, isActive: boolean) {
  return cn(navTriggerClass(isSolid, isActive, false), "cursor-pointer");
}

export function navMegaPanelClass() {
  return cn(
    "rounded-2xl border border-n200/80 bg-white/98 shadow-[var(--shadow-elevated)] backdrop-blur-md",
  );
}

export function navMegaLinkClass(active: boolean) {
  return cn(
    "group flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-base font-body font-normal transition-colors",
    active ? "bg-mint-soft/40 text-forest" : "text-n700 hover:bg-n100 hover:text-forest",
  );
}

export function navMegaGroupTitleClass() {
  return "font-mono text-sm tracking-[0.14em] uppercase text-canopy font-medium";
}

export function navMegaColumnTitleClass() {
  return navMegaGroupTitleClass();
}
