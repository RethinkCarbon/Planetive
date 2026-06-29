import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type RotatingWordsProps = {
  words: readonly string[];
  intervalMs?: number;
  className?: string;
};

export function RotatingWords({
  words,
  intervalMs = 2000,
  className,
}: RotatingWordsProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reducedMotion || words.length <= 1) return;

    const timer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setVisible(true);
      }, 350);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, reducedMotion, words]);

  return (
    <span
      className={cn("inline-grid align-baseline text-mint-soft", className)}
      aria-live="polite"
    >
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
        {words[index]}
      </span>
      <span
        className={cn(
          "col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-500 ease-in-out",
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        {words[index]}
      </span>
    </span>
  );
}
