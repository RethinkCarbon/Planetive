import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type UseAutoRotateOptions = {
  length: number;
  intervalMs?: number;
  /** When false, rotation pauses (e.g. section off-screen). Default true. */
  enabled?: boolean;
  /** How long to hold after a manual selection before resuming. */
  resumeAfterMs?: number;
};

/**
 * Cycles an index on an interval. Respects reduced motion.
 * Manual setActive briefly pauses, then resumes automatically.
 */
export function useAutoRotate({
  length,
  intervalMs = 4000,
  enabled = true,
  resumeAfterMs = 6000,
}: UseAutoRotateOptions) {
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActiveState] = useState(0);
  const pausedRef = useRef(false);
  const lengthRef = useRef(length);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  lengthRef.current = length;

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const pause = useCallback(() => {
    pausedRef.current = true;
    clearResumeTimer();
  }, [clearResumeTimer]);

  const resume = useCallback(() => {
    pausedRef.current = false;
    clearResumeTimer();
  }, [clearResumeTimer]);

  const setActive = useCallback(
    (index: number | ((prev: number) => number)) => {
      pausedRef.current = true;
      clearResumeTimer();
      resumeTimerRef.current = setTimeout(() => {
        pausedRef.current = false;
        resumeTimerRef.current = null;
      }, resumeAfterMs);

      setActiveState((prev) => {
        const next = typeof index === "function" ? index(prev) : index;
        if (lengthRef.current <= 0) return 0;
        return ((next % lengthRef.current) + lengthRef.current) % lengthRef.current;
      });
    },
    [clearResumeTimer, resumeAfterMs],
  );

  useEffect(() => {
    if (length <= 0) setActiveState(0);
    else setActiveState((prev) => prev % length);
  }, [length]);

  useEffect(() => {
    if (!enabled || reducedMotion || length <= 1) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setActiveState((prev) => (prev + 1) % lengthRef.current);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [enabled, reducedMotion, length, intervalMs]);

  useEffect(() => () => clearResumeTimer(), [clearResumeTimer]);

  return { active, setActive, pause, resume, reducedMotion };
}
