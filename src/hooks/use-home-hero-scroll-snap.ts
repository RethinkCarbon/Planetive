import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const HERO_ID = "home-hero";
const ECOSYSTEM_ID = "ecosystem";
const WHEEL_THRESHOLD = 10;
const TOUCH_THRESHOLD = 28;
const MIN_DURATION_MS = 300;
const MAX_DURATION_MS = 420;

function easeOutQuart(t: number) {
  return 1 - (1 - t) ** 4;
}

function isEditableTarget(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el) return false;
  return Boolean(
    el.closest("input, textarea, select, [contenteditable='true']"),
  );
}

export function useHomeHeroScrollSnap() {
  const reducedMotion = usePrefersReducedMotion();
  const snappingRef = useRef(false);
  const wheelDeltaRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const positionsRef = useRef({ heroY: 0, ecosystemY: 0 });

  useEffect(() => {
    if (reducedMotion) return;

    const hero = () => document.getElementById(HERO_ID);
    const ecosystem = () => document.getElementById(ECOSYSTEM_ID);

    const refreshPositions = () => {
      const heroEl = hero();
      const ecosystemEl = ecosystem();
      positionsRef.current = {
        heroY: heroEl
          ? heroEl.getBoundingClientRect().top + window.scrollY
          : 0,
        ecosystemY: ecosystemEl
          ? ecosystemEl.getBoundingClientRect().top + window.scrollY
          : 0,
      };
    };

    const isHeroActive = () => {
      const el = hero();
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top >= -12 && rect.bottom > window.innerHeight * 0.55;
    };

    const isEcosystemAtEntry = () => {
      const el = ecosystem();
      if (!el) return false;
      const top = el.getBoundingClientRect().top;
      return top >= -24 && top <= 96;
    };

    const smoothScrollTo = (targetY: number) => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 2) {
        snappingRef.current = false;
        return;
      }

      const duration = Math.min(
        MAX_DURATION_MS,
        Math.max(MIN_DURATION_MS, Math.abs(distance) * 0.28),
      );
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        window.scrollTo(0, startY + distance * easeOutQuart(progress));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          rafRef.current = null;
          snappingRef.current = false;
        }
      };

      // Start immediately — no extra rAF frame before movement.
      step(start);
    };

    const snapToY = (targetY: number) => {
      if (snappingRef.current) return;
      snappingRef.current = true;
      wheelDeltaRef.current = 0;
      refreshPositions();
      smoothScrollTo(targetY);
    };

    const snapDownToEcosystem = () => {
      if (!isHeroActive()) return;
      snapToY(positionsRef.current.ecosystemY);
    };

    const snapUpToHero = () => {
      if (!isEcosystemAtEntry()) return;
      snapToY(positionsRef.current.heroY);
    };

    const onWheel = (event: WheelEvent) => {
      if (snappingRef.current || isEditableTarget(event.target)) return;

      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;
      const onHero = scrollingDown && isHeroActive();
      const onEcosystemEntry = scrollingUp && isEcosystemAtEntry();

      if (!onHero && !onEcosystemEntry) {
        wheelDeltaRef.current = 0;
        return;
      }

      // Block native scroll immediately so it doesn't fight the snap.
      event.preventDefault();

      wheelDeltaRef.current += event.deltaY;
      const threshold = scrollingDown ? WHEEL_THRESHOLD : -WHEEL_THRESHOLD;
      const passed =
        scrollingDown
          ? wheelDeltaRef.current >= threshold
          : wheelDeltaRef.current <= threshold;

      if (!passed) return;

      if (onHero) snapDownToEcosystem();
      else snapUpToHero();
    };

    let touchStartY: number | null = null;

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY == null || snappingRef.current) return;
      const endY = event.changedTouches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - endY;
      touchStartY = null;

      if (delta > TOUCH_THRESHOLD && isHeroActive()) {
        snapDownToEcosystem();
        return;
      }

      if (delta < -TOUCH_THRESHOLD && isEcosystemAtEntry()) {
        snapUpToHero();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (snappingRef.current || isEditableTarget(event.target)) return;

      if (
        (event.key === "ArrowDown" ||
          event.key === "PageDown" ||
          event.key === " ") &&
        isHeroActive()
      ) {
        event.preventDefault();
        snapDownToEcosystem();
        return;
      }

      if (
        (event.key === "ArrowUp" || event.key === "PageUp") &&
        isEcosystemAtEntry()
      ) {
        event.preventDefault();
        snapUpToHero();
      }
    };

    refreshPositions();
    window.addEventListener("resize", refreshPositions, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", refreshPositions);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [reducedMotion]);
}
