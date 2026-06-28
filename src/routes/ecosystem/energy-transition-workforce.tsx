import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { EnergyTransitionWorkforcePageContent } from "@/components/site/EnergyTransitionWorkforcePageContent";
import { ENERGY_WORKFORCE_PAGE } from "@/lib/energy-transition-workforce-content";

export const Route = createFileRoute("/ecosystem/energy-transition-workforce")({
  head: () => ({
    meta: [
      {
        title: `${ENERGY_WORKFORCE_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        name: "description",
        content: ENERGY_WORKFORCE_PAGE.description,
      },
      {
        property: "og:title",
        content: `${ENERGY_WORKFORCE_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        property: "og:description",
        content: ENERGY_WORKFORCE_PAGE.supportingTitle,
      },
    ],
  }),
  component: EnergyTransitionWorkforceRoutePage,
});

function EnergyTransitionWorkforceRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <EnergyTransitionWorkforcePageContent />
      <Footer />
    </main>
  );
}
