import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { DigitalMrvPlatformsPageContent } from "@/components/site/DigitalMrvPlatformsPageContent";
import { DIGITAL_MRV_PAGE } from "@/lib/digital-mrv-content";

export const Route = createFileRoute("/ecosystem/digital-mrv-platforms")({
  head: () => ({
    meta: [
      {
        title: `${DIGITAL_MRV_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        name: "description",
        content: DIGITAL_MRV_PAGE.description,
      },
      {
        property: "og:title",
        content: `${DIGITAL_MRV_PAGE.titleLines.join(" ")} — Planetive`,
      },
      {
        property: "og:description",
        content: DIGITAL_MRV_PAGE.supportingTitle,
      },
    ],
  }),
  component: DigitalMrvPlatformsRoutePage,
});

function DigitalMrvPlatformsRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar variant="solid" />
      <DigitalMrvPlatformsPageContent />
      <Footer />
    </main>
  );
}
