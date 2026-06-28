import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { RethinkCarbonPageContent } from "@/components/site/RethinkCarbonPageContent";
import { RETHINK_CARBON_PAGE } from "@/lib/rethink-carbon-content";

export const Route = createFileRoute("/ecosystem/rethink-carbon")({
  head: () => ({
    meta: [
      { title: `${RETHINK_CARBON_PAGE.title} — Planetive` },
      {
        name: "description",
        content:
          "Accelerating the decarbonization journey with AI-driven assessments, optimization, tracking and market intelligence.",
      },
      { property: "og:title", content: `${RETHINK_CARBON_PAGE.title} — Planetive` },
      {
        property: "og:description",
        content: RETHINK_CARBON_PAGE.supportingTitle,
      },
    ],
  }),
  component: RethinkCarbonRoutePage,
});

function RethinkCarbonRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <RethinkCarbonPageContent />
      <Footer />
    </main>
  );
}
