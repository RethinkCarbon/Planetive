import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type RevealVariant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up";

const variantClass: Record<RevealVariant, string> = {
  "fade-up": "reveal-fade-up",
  "fade-in": "reveal-fade-in",
  "fade-left": "reveal-fade-left",
  "fade-right": "reveal-fade-right",
  "scale-up": "reveal-scale-up",
};

type ScrollRevealProps = {
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  style?: CSSProperties;
};

export function ScrollReveal({
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  duration,
  className,
  children,
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -6% 0px",
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const revealIfInView = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (inView) setVisible(true);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    obs.observe(el);

    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      revealIfInView();
      requestAnimationFrame(() => {
        revealIfInView();
        obs.disconnect();
        obs.observe(el);
      });
    };

    window.addEventListener("pageshow", onPageShow);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      obs.disconnect();
    };
  }, [reducedMotion, once, threshold, rootMargin]);

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) setVisible(true);
  }, [reducedMotion]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", variantClass[variant], visible && "reveal-visible", className)}
      style={{
        ...style,
        ...(duration ? { ["--reveal-duration" as string]: `${duration}ms` } : {}),
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
}

type ScrollRevealGroupProps = {
  className?: string;
  children: ReactNode;
  stagger?: number;
  variant?: RevealVariant;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export function ScrollRevealGroup({
  className,
  children,
  stagger = 90,
  variant = "fade-up",
  once = true,
  threshold = 0.1,
  rootMargin = "0px 0px -6% 0px",
}: ScrollRevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const revealIfInView = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (inView) setVisible(true);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    obs.observe(el);

    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      revealIfInView();
      requestAnimationFrame(() => {
        revealIfInView();
        obs.disconnect();
        obs.observe(el);
      });
    };

    window.addEventListener("pageshow", onPageShow);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      obs.disconnect();
    };
  }, [reducedMotion, once, threshold, rootMargin]);

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) setVisible(true);
  }, [reducedMotion]);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<{ className?: string; style?: CSSProperties }>;
        return cloneElement(el, {
          className: cn(
            "reveal",
            variantClass[variant],
            visible && "reveal-visible",
            el.props.className,
          ),
          style: {
            ...el.props.style,
            transitionDelay: visible ? `${index * stagger}ms` : "0ms",
          },
        });
      })}
    </div>
  );
}
