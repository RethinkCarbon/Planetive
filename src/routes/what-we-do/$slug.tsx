import { createFileRoute, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatWeDoServicePageContent } from "@/components/site/WhatWeDoServicePageContent";
import { WhatWeDoPillarPageContent } from "@/components/site/WhatWeDoPillarPageContent";
import { getWhatWeDoDetail } from "@/lib/what-we-do-content";

export const Route = createFileRoute("/what-we-do/$slug")({
  loader: ({ params }) => getWhatWeDoDetail(params.slug) ?? null,
  head: ({ loaderData }) => {
    const detail = loaderData;
    if (!detail) return {};
    if (detail.type === "pillar") {
      const { pillar } = detail;
      return {
        meta: [
          { title: `${pillar.title} — Planetive` },
          { name: "description", content: pillar.tagline },
          { property: "og:title", content: pillar.title },
          { property: "og:description", content: pillar.description },
          { property: "og:image", content: pillar.image },
        ],
      };
    }
    const { service } = detail;
    return {
      meta: [
        { title: `${service.title} — Planetive` },
        { name: "description", content: service.summary },
        { property: "og:title", content: service.title },
        { property: "og:description", content: service.summary },
        { property: "og:image", content: service.image },
      ],
    };
  },
  component: WhatWeDoDetailPage,
});

function WhatWeDoDetailPage() {
  const detail = Route.useLoaderData();

  if (!detail) {
    throw notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--n50)]">
      <Navbar variant="solid" />
      {detail.type === "pillar" ? (
        <WhatWeDoPillarPageContent key={detail.pillar.id} pillar={detail.pillar} />
      ) : (
        <WhatWeDoServicePageContent key={detail.service.id} service={detail.service} />
      )}
      <Footer />
    </main>
  );
}
