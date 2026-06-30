import { motion, useReducedMotion } from "framer-motion";
import {
  ecosystemEase,
  ecosystemViewportTight,
  lineGrow,
  slideInLeft,
  slideInRight,
  staggerContainerSlow,
} from "@/lib/ecosystem-motion";
import { cn } from "@/lib/utils";

export type EditorialPanelLayer = {
  title: string;
};

type EditorialCapabilityPanelProps = {
  eyebrow: string;
  layers: readonly EditorialPanelLayer[];
  /** Which side items enter from — pairs with alternating layouts */
  direction?: "left" | "right";
  className?: string;
};

export function EditorialCapabilityPanel({
  eyebrow,
  layers,
  direction = "left",
  className,
}: EditorialCapabilityPanelProps) {
  const reduced = useReducedMotion();
  const itemVariant = direction === "right" ? slideInRight : slideInLeft;

  return (
    <motion.div
      className={cn("max-w-md", className)}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={ecosystemViewportTight}
      variants={staggerContainerSlow}
    >
      <motion.p
        className="font-mono text-[10px] tracking-[0.22em] uppercase text-canopy"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ecosystemEase } },
        }}
      >
        {eyebrow}
      </motion.p>

      <motion.div
        className="mt-5 h-px w-12 origin-left bg-canopy/35"
        variants={lineGrow}
        aria-hidden
      />

      <ul className="mt-6 md:mt-7">
        {layers.map((layer) => (
          <motion.li
            key={layer.title}
            className="relative overflow-hidden py-4 md:py-5"
            variants={itemVariant}
          >
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-px origin-left bg-n200/60"
              variants={lineGrow}
              aria-hidden
            />
            <p className="font-ui font-semibold text-[clamp(1.35rem,2.5vw,2rem)] text-forest leading-snug">
              {layer.title}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
