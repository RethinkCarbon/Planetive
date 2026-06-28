import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AgriTechSolutionsPageContent } from "@/components/site/AgriTechSolutionsPageContent";
import { AGRI_TECH_PAGE } from "@/lib/agri-tech-content";

export const Route = createFileRoute("/ecosystem/agri-tech-solutions")({
  head: () => ({
    meta: [
      {
        title: `${AGRI_TECH_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        name: "description",
        content: AGRI_TECH_PAGE.description,
      },
      {
        property: "og:title",
        content: `${AGRI_TECH_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        property: "og:description",
        content: AGRI_TECH_PAGE.supportingTitle,
      },
    ],
  }),
  component: AgriTechSolutionsRoutePage,
});

function AgriTechSolutionsRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <AgriTechSolutionsPageContent />
      <Footer />
    </main>
  );
}
