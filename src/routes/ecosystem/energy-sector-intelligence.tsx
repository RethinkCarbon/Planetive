import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EnergySectorIntelligencePageContent } from "@/components/site/EnergySectorIntelligencePageContent";
import { ENERGY_INTELLIGENCE_PAGE } from "@/lib/energy-sector-intelligence-content";

export const Route = createFileRoute("/ecosystem/energy-sector-intelligence")({
  head: () => ({
    meta: [
      { title: `${ENERGY_INTELLIGENCE_PAGE.title} — Planetive` },
      {
        name: "description",
        content: ENERGY_INTELLIGENCE_PAGE.description,
      },
      {
        property: "og:title",
        content: `${ENERGY_INTELLIGENCE_PAGE.title} — Planetive`,
      },
      {
        property: "og:description",
        content: ENERGY_INTELLIGENCE_PAGE.supportingTitle,
      },
    ],
  }),
  component: EnergySectorIntelligenceRoutePage,
});

function EnergySectorIntelligenceRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <EnergySectorIntelligencePageContent />
      <Footer />
    </main>
  );
}
