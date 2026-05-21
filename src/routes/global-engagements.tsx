import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { GlobalEngagementsPageContent } from "@/components/site/GlobalEngagementsPageContent";

export const Route = createFileRoute("/global-engagements")({
  head: () => ({
    meta: [
      { title: "Global Engagements — Planetive" },
      {
        name: "description",
        content:
          "Global engagement snapshots — climate conferences, energy forums, ESG leadership, and sustainability partnerships across Pakistan, MENA, and international capitals.",
      },
      { property: "og:title", content: "Global Engagements — Planetive" },
      {
        property: "og:description",
        content:
          "Empowering a sustainable future through global climate, energy, and finance engagements.",
      },
    ],
  }),
  component: GlobalEngagementsPage,
});

function GlobalEngagementsPage() {
  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <GlobalEngagementsPageContent />
      <Footer />
    </main>
  );
}
