import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AdvisoryHousePageContent } from "@/components/site/AdvisoryHousePageContent";
import { ADVISORY_HOUSE_PAGE } from "@/lib/advisory-house-content";

export const Route = createFileRoute("/ecosystem/advisory-house")({
  head: () => ({
    meta: [
      {
        title: `${ADVISORY_HOUSE_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        name: "description",
        content: ADVISORY_HOUSE_PAGE.description,
      },
      {
        property: "og:title",
        content: `${ADVISORY_HOUSE_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        property: "og:description",
        content: ADVISORY_HOUSE_PAGE.supportingTitle,
      },
    ],
  }),
  component: AdvisoryHouseRoutePage,
});

function AdvisoryHouseRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <AdvisoryHousePageContent />
      <Footer />
    </main>
  );
}
