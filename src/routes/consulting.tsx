import { createFileRoute } from "@tanstack/react-router";
import { ConsultingPageContent } from "@/components/site/ConsultingPageContent";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/consulting")({
  head: () => ({
    meta: [
      { title: "Consulting — Planetive" },
      {
        name: "description",
        content:
          "Strategic sustainability and climate consulting from Planetive — advisory, transition planning, capital readiness, and executive workshops. Book a consultation with our team.",
      },
      { property: "og:title", content: "Consulting — Planetive" },
      {
        property: "og:description",
        content:
          "Planetive consulting supports organizations across clean energy, climate finance, ESG, and transition strategy.",
      },
    ],
  }),
  component: ConsultingPage,
});

function ConsultingPage() {
  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <ConsultingPageContent />
      <Footer />
    </main>
  );
}
