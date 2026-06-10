import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatWeDoPageContent } from "@/components/site/WhatWeDoPageContent";

export const Route = createFileRoute("/what-we-do/")({
  head: () => ({
    meta: [
      { title: "What We Do — Planetive" },
      {
        name: "description",
        content:
          "Sustainability advisory, carbon credit projects, climate financing, energy transition, emerging technologies, and governance leadership from Planetive.",
      },
      { property: "og:title", content: "What We Do — Planetive" },
      {
        property: "og:description",
        content:
          "Empowering a sustainable future through advisory, carbon markets, capital raise, clean energy, and leadership.",
      },
    ],
  }),
  component: WhatWeDoPage,
});

function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <WhatWeDoPageContent />
      <Footer />
    </main>
  );
}
