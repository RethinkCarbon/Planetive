import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WorkWithUsPageContent } from "@/components/site/WorkWithUsPageContent";

const workWithUsSearchSchema = z.object({
  interest: z.enum(["fellows", "champions", "partner"]).optional(),
});

export const Route = createFileRoute("/work-with-us")({
  validateSearch: workWithUsSearchSchema,
  head: () => ({
    meta: [
      { title: "Work With Us — Planetive" },
      {
        name: "description",
        content:
          "Join Planetive as a Fellow or Champion, explore partnership opportunities, or apply to join our team advancing sustainability across the globe.",
      },
      { property: "og:title", content: "Work With Us — Planetive" },
      {
        property: "og:description",
        content:
          "Shape the future with Planetive — fellows, champions, partnerships, and careers in sustainability.",
      },
    ],
  }),
  component: WorkWithUsPage,
});

function WorkWithUsPage() {
  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <WorkWithUsPageContent />
      <Footer />
    </main>
  );
}
