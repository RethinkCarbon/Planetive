import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { RotatingWords } from "@/components/site/RotatingWords";
import { HeroMissionVision } from "@/components/site/MissionVisionSection";

const HERO_FOCUS_WORDS = [
  "Decarbonization",
  "ESG",
  "Energy",
  "Sustainability",
  "Carbon Markets",
  "Clean Tech",
] as const;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    void video.play().catch(() => {
      /* autoplay blocked — gradient fallback remains visible */
    });
  }, [reducedMotion]);

  return (
    <section id="home-hero" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        {!reducedMotion && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/hero.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,61,46,0.45) 0%, rgba(10,61,46,0.25) 40%, rgba(13,18,16,0.6) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 30%, rgba(46,204,138,0.3), transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(168,240,212,0.2), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col">
        <div className="container-x flex w-full flex-1 items-center justify-start pt-40 md:pt-44 pb-8 md:pb-10">
          <div className="max-w-4xl text-left">
            <h1 className="hero-enter font-ui font-semibold text-white text-type-h1 leading-[1.15]">
              <span className="block">
                Where AI, <RotatingWords words={HERO_FOCUS_WORDS} />
              </span>
              <span className="block">and Climate Finance meet.</span>
            </h1>

            <p className="hero-enter hero-enter-d1 mt-4 sm:mt-6 max-w-2xl font-ui text-sm md:text-lg font-medium md:font-semibold leading-relaxed text-n50/95 md:text-n50 [text-shadow:0_1px_18px_rgba(10,61,46,0.5)]">
              Operating across Pakistan, the Middle East, and South Asia, Planetive combines three
              decades of leadership with cutting-edge tech to deliver scalable impact in
              decarbonization, energy transition, and ESG.
            </p>

            <div className="hero-enter hero-enter-d2 mt-6 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/work-with-us"
                search={{}}
                className="inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[11px] font-semibold btn-mint md:gap-2 md:px-6 md:py-3.5 md:text-sm"
              >
                Book a Consultation
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div className="container-x mt-auto w-full pb-10 md:pb-14">
          <HeroMissionVision />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[var(--n50)]/0" />
    </section>
  );
}
