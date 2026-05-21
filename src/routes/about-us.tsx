import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AboutUsPageContent } from "@/components/site/AboutUsPageContent";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Planetive" },
      {
        name: "description",
        content:
          "Planetive is an advisory firm focused on clean energy, climate change, sustainable finance, and ESG/SDG goals across the Middle East, Pakistan, and global markets.",
      },
      { property: "og:title", content: "About Us — Planetive" },
      {
        property: "og:description",
        content:
          "Meet the Planetive team, advisors, and partners enabling sustainable development worldwide.",
      },
    ],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <AboutUsPageContent />
      <Footer />
    </main>
  );
}
