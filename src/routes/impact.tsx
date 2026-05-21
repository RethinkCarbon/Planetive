import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ImpactPageContent } from "@/components/site/ImpactPageContent";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Planetive" },
      {
        name: "description",
        content:
          "Empowering a sustainable future through energy transition, sustainable finance, circular economy, impact investing, and SDG-aligned policy across Pakistan and global markets.",
      },
      { property: "og:title", content: "Impact — Planetive" },
      {
        property: "og:description",
        content:
          "Energy transition, sustainable businesses, finance, technology, infrastructure, agriculture, and impact investing.",
      },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <ImpactPageContent />
      <Footer />
    </main>
  );
}
