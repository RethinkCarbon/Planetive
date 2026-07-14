import { cn } from "@/lib/utils";

export function navTriggerClass(_isSolid: boolean, isActive: boolean, isOpen: boolean) {
  const emphasized = isActive || isOpen;

  return cn(
    "relative inline-flex items-center gap-1 px-2.5 py-2 text-sm lg:text-[15px] xl:text-base font-body font-medium min-h-[2.5rem] cursor-default select-none",
    "text-n800/90 transition-colors duration-200 ease-out",
    "hover:text-forest",
    emphasized && "text-forest",
    "after:pointer-events-none after:absolute after:left-2.5 after:right-2.5 after:bottom-[0.35rem] after:h-px after:origin-center after:rounded-full after:bg-canopy/80 after:transition-transform after:duration-200 after:ease-out",
    emphasized ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
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
