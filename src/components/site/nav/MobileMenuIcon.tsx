import { cn } from "@/lib/utils";

type MobileMenuIconProps = {
  open: boolean;
  className?: string;
};

const ICON_EASE = "cubic-bezier(0.32, 0.72, 0, 1)";

/** Animated 3-bar icon that morphs into an X. */
export function MobileMenuIcon({ open, className }: MobileMenuIconProps) {
  return (
    <span
      className={cn("relative block h-[15px] w-[20px] will-change-transform", className)}
      aria-hidden
    >
      <span
        className={cn(
          "absolute left-0 block h-[2px] w-full rounded-full bg-current",
          "transition-[top,transform] duration-[380ms]",
          open ? "top-[6.5px] rotate-45" : "top-0 rotate-0",
        )}
        style={{ transitionTimingFunction: ICON_EASE }}
      />
      <span
        className={cn(
          "absolute left-0 top-[6.5px] block h-[2px] w-full rounded-full bg-current",
          "transition-[opacity,transform] duration-[280ms]",
          open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
        )}
        style={{ transitionTimingFunction: ICON_EASE }}
      />
      <span
        className={cn(
          "absolute left-0 block h-[2px] w-full rounded-full bg-current",
          "transition-[top,transform] duration-[380ms]",
          open ? "top-[6.5px] -rotate-45" : "top-[13px] rotate-0",
        )}
        style={{ transitionTimingFunction: ICON_EASE }}
      />
    </span>
  );
}
