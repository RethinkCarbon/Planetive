import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { TypewriterText } from "@/components/site/TypewriterText";
import { SharedResponsibilitySection } from "@/components/site/SharedResponsibility";
import { useHomeHeroScrollSnap } from "@/hooks/use-home-hero-scroll-snap";

const FinalCTASection = lazy(() =>
  import("@/components/site/Sections").then((m) => ({ default: m.FinalCTASection })),
);
const Footer = lazy(() => import("@/components/site/Footer").then((m) => ({ default: m.Footer })));

function SectionFallback() {
  return (
    <div className="py-24 md:py-32" aria-hidden>
      <div className="container-x">
        <div className="h-8 w-48 rounded-full bg-n200/60 animate-pulse" />
        <div className="mt-6 h-12 max-w-xl rounded-2xl bg-n200/40 animate-pulse" />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Planetive — Climate Intelligence for a Sustainable Future" },
      {
        name: "description",
        content:
          "Planetive connects strategy, technology, capital, and implementation to help enterprises and financial institutions move from diagnosis to sustainable impact.",
      },
      { property: "og:title", content: "Planetive — Climate Intelligence" },
      {
        property: "og:description",
        content:
          "Climate intelligence, advisory, and project development for enterprises and financial institutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useHomeHeroScrollSnap();

  return (
    <main className="min-h-screen bg-background home-page">
      <Navbar />
      <Hero />
      <HomeEcosystemWheelSection />
      <SharedResponsibilitySection />
      <Suspense fallback={<SectionFallback />}>
        <FinalCTASection />
        <Footer />
      </Suspense>
    </main>
  );
}

function HomeEcosystemWheelSection() {
  const heading = "Strategic Growth Engine";
  const supporting =
    "Through nine integrated ventures, we help decision-makers turn sustainability goals into measurable profitability and long-term business upside.";
  const headingDuration = heading.length * 30 + 280;

  return (
    <section
      id="ecosystem"
      className="relative z-10 border-t border-n200/40 bg-background pt-24 pb-8 md:pt-28 md:pb-12 scroll-mt-24"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal className="max-w-xl lg:col-span-5">
            <h2 className="font-ui font-semibold text-[clamp(1.75rem,3vw,2.4rem)] text-forest leading-tight">
              <TypewriterText text={heading} speedMs={30} />
            </h2>
            <p className="mt-4 text-n600 leading-relaxed">
              <TypewriterText text={supporting} speedMs={16} startDelayMs={headingDuration} />
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" className="lg:col-span-7">
            <div className="flex justify-center lg:justify-end">
              <EcosystemExplorer className="w-full max-w-[min(100%,22rem)] sm:max-w-[28rem] md:max-w-[34rem] lg:max-w-[40rem] xl:max-w-[46rem] 2xl:max-w-[50rem]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
