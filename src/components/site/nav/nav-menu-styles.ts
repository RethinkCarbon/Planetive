import { cn } from "@/lib/utils";

export function navTriggerClass(_isSolid: boolean, isActive: boolean, isOpen: boolean) {
  const emphasized = isActive || isOpen;

  return cn(
    "relative inline-flex items-center gap-1 px-1.5 py-1.5 lg:px-2 xl:px-2.5 text-[13px] lg:text-[13px] xl:text-sm font-body font-medium min-h-0 lg:min-h-[2.15rem] xl:min-h-[2.35rem] cursor-default select-none whitespace-nowrap",
    "text-n800/90 transition-colors duration-200 ease-out",
    "hover:text-forest",
    emphasized && "text-forest",
    "after:pointer-events-none after:absolute after:left-1.5 after:right-1.5 after:bottom-[0.2rem] after:h-px after:origin-center after:rounded-full after:bg-canopy/80 after:transition-transform after:duration-200 after:ease-out",
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
    "group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-base font-body",
    "transition-[background-color,border-color,color,box-shadow] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canopy/35 focus-visible:ring-offset-2",
    active
      ? [
          "border border-canopy/22 border-l-[3px] border-l-canopy bg-mint-soft/60 font-medium text-forest",
          "shadow-[0_1px_2px_rgba(10,61,46,0.07)]",
        ]
      : [
          "border border-transparent font-normal text-n700",
          "hover:border-canopy/14 hover:bg-mint-soft/28 hover:text-forest",
          "active:border-canopy/18 active:bg-mint-soft/40 active:text-forest",
        ],
  );
}

export function navMegaLinkDotClass(active: boolean) {
  return cn(
    "h-2 w-2 shrink-0 rounded-full transition-transform duration-200 ease-out",
    "group-hover:scale-125",
    active && "ring-2 ring-canopy/25 ring-offset-1 ring-offset-mint-soft/60",
  );
}

export function navMegaGroupTitleClass() {
  return "font-mono text-sm tracking-[0.14em] uppercase text-canopy font-medium";
}

export function navMegaColumnTitleClass() {
  return navMegaGroupTitleClass();
}
