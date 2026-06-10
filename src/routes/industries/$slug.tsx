import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { IndustryPageContent } from "@/components/site/IndustryPageContent";
import { getIndustry, type IndustryId } from "@/lib/industries-content";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    return industry ? (params.slug as IndustryId) : null;
  },
  head: ({ loaderData }) => {
    const industry = loaderData ? getIndustry(loaderData) : undefined;
    if (!industry) return {};
    return {
      meta: [
        { title: `${industry.title} — Planetive` },
        { name: "description", content: industry.tagline },
        { property: "og:title", content: `${industry.title} — Planetive` },
        { property: "og:description", content: industry.description },
      ],
    };
  },
  component: IndustryRoutePage,
});

function IndustryRoutePage() {
  const slug = Route.useLoaderData();
  const industry = slug ? getIndustry(slug) : undefined;

  if (!industry) {
    throw notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      <IndustryPageContent key={industry.id} industry={industry} />
      <Footer />
    </main>
  );
}
