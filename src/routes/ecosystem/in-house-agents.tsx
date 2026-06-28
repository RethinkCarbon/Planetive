import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { InHouseAgentsPageContent } from "@/components/site/InHouseAgentsPageContent";
import { IN_HOUSE_AGENTS_PAGE } from "@/lib/in-house-agents-content";

export const Route = createFileRoute("/ecosystem/in-house-agents")({
  head: () => ({
    meta: [
      {
        title: `${IN_HOUSE_AGENTS_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        name: "description",
        content: IN_HOUSE_AGENTS_PAGE.description,
      },
      {
        property: "og:title",
        content: `${IN_HOUSE_AGENTS_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        property: "og:description",
        content: IN_HOUSE_AGENTS_PAGE.supportingTitle,
      },
    ],
  }),
  component: InHouseAgentsRoutePage,
});

function InHouseAgentsRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <InHouseAgentsPageContent />
      <Footer />
    </main>
  );
}
