import { useEffect, useLayoutEffect, useRef, useState, type ElementType } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type TypewriterTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  cursorClassName?: string;
  speedMs?: number;
  startDelayMs?: number;
  showCursor?: boolean;
};

export function TypewriterText({
  text,
  as: Tag = "span",
  className,
  cursorClassName,
  speedMs = 28,
  startDelayMs = 0,
  showCursor = true,
}: TypewriterTextProps) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(reducedMotion);
  const [length, setLength] = useState(reducedMotion ? text.length : 0);
  const [done, setDone] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setLength(text.length);
      setDone(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, text]);

  useLayoutEffect(() => {
    if (reducedMotion || started) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setStarted(true);
    }
  }, [reducedMotion, started]);

  useEffect(() => {
    if (!started || reducedMotion) return;

    setLength(0);
    setDone(false);

    let index = 0;
    let typeTimer: number | undefined;
    const startTimer = window.setTimeout(() => {
      typeTimer = window.setInterval(() => {
        index += 1;
        setLength(index);
        if (index >= text.length) {
          if (typeTimer != null) window.clearInterval(typeTimer);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimer);
      if (typeTimer != null) window.clearInterval(typeTimer);
    };
  }, [started, reducedMotion, speedMs, startDelayMs, text]);

  const visibleText = text.slice(0, length);

  return (
    <Tag ref={ref} className={cn("grid w-full min-w-0 align-top", className)} aria-label={text}>
      <span className="invisible col-start-1 row-start-1 whitespace-normal break-words" aria-hidden>
        {text}
      </span>
      <span className="col-start-1 row-start-1 whitespace-normal break-words">
        {visibleText}
        {showCursor && !done ? (
          <span
            className={cn(
              "ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.06em] animate-pulse bg-canopy",
              cursorClassName,
            )}
            aria-hidden
          />
        ) : null}
      </span>
    </Tag>
  );
}
