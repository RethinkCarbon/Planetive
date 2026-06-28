import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ProjectDevelopmentPageContent } from "@/components/site/ProjectDevelopmentPageContent";
import { PROJECT_DEVELOPMENT_PAGE } from "@/lib/project-development-content";

export const Route = createFileRoute("/ecosystem/project-development")({
  head: () => ({
    meta: [
      {
        title: `${PROJECT_DEVELOPMENT_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        name: "description",
        content: PROJECT_DEVELOPMENT_PAGE.description,
      },
      {
        property: "og:title",
        content: `${PROJECT_DEVELOPMENT_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        property: "og:description",
        content: PROJECT_DEVELOPMENT_PAGE.supportingTitle,
      },
    ],
  }),
  component: ProjectDevelopmentRoutePage,
});

function ProjectDevelopmentRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <ProjectDevelopmentPageContent />
      <Footer />
    </main>
  );
}
