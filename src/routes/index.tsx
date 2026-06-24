import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { EcosystemExplorer } from "@/components/site/EcosystemExplorer";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { SharedResponsibilitySection } from "@/components/site/SharedResponsibility";

const FinalCTASection = lazy(() =>
  import("@/components/site/Sections").then((m) => ({ default: m.FinalCTASection })),
);
const Footer = lazy(() =>
  import("@/components/site/Footer").then((m) => ({ default: m.Footer })),
);

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
  return (
    <main className="min-h-screen bg-background">
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
  return (
    <section id="ecosystem" className="relative z-10 border-t border-n200/40 bg-background py-12 md:py-16 scroll-mt-24">
      <div className="container-x">
        <ScrollReveal className="max-w-2xl mb-8 md:mb-10">
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-forest leading-tight">
            The Planetive ecosystem
          </h2>
          <p className="mt-3 text-n600 leading-relaxed">
            Nine ventures in one engine - hover a segment to explore how advisory, platforms,
            agents, and programs connect.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <div className="flex justify-center py-2 md:py-4">
            <EcosystemExplorer />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
