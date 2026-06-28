import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { ecosystemEase } from "@/lib/ecosystem-motion";
import { cn } from "@/lib/utils";

type NavAnimatedPanelProps = {
  show: boolean;
  children: ReactNode;
  className?: string;
} & Pick<ComponentProps<"div">, "onMouseEnter" | "onMouseLeave">;

export function NavAnimatedPanel({
  show,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: NavAnimatedPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className={cn(className)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.24, ease: ecosystemEase }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
