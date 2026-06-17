import { useState, useMemo } from "react";
import { CalendarDays, ChevronDown, Globe2, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GLOBAL_ENGAGEMENTS_HERO,
  GLOBAL_ENGAGEMENT_SECTIONS,
  type GlobalEngagement,
  type GlobalEngagementSection,
} from "@/lib/global-engagements-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { GlobalPartnersMapSection } from "@/components/site/GlobalPartnersMap";

const CATEGORY_FILTERS = [
  { id: "all", label: "All categories" },
  { id: "climate-energy", label: "Climate & Energy" },
  { id: "finance-policy", label: "Finance & Policy" },
  { id: "leadership-learning", label: "Leadership & Learning" },
  { id: "partnerships", label: "Partnerships" },
  { id: "team-milestones", label: "Team milestones" },
] as const;

const YEAR_FILTERS = [
  { id: "all", label: "All" },
  { id: "year-2025", label: "2025" },
  { id: "year-2024", label: "2024" },
  { id: "year-2023", label: "2023" },
  { id: "year-earlier", label: "Earlier" },
] as const;

type CategoryFilterId = (typeof CATEGORY_FILTERS)[number]["id"];
type YearFilterId = (typeof YEAR_FILTERS)[number]["id"];
type FilterMode = "category" | "year";

const ENGAGEMENT_CATEGORY_BY_ID: Record<string, CategoryFilterId> = {
  "pcc-2025": "finance-policy",
  "ief-paris-2025": "finance-policy",
  "acoa-2025": "leadership-learning",
  "liibs-2025": "leadership-learning",
  "acca-bhc-2025": "finance-policy",
  "pmif-2025": "climate-energy",
  "ccus-mena-2025": "climate-energy",
  "ief-riyadh-2025": "climate-energy",
  "finance-minister-2025": "finance-policy",
  "lums-2025": "partnerships",
  "wwf-2025": "partnerships",
  "oicci-2025": "partnerships",

  "buraq-2024": "leadership-learning",
  "ygl-morocco-2024": "leadership-learning",
  "wef-riyadh-2024": "climate-energy",
  "liibs-2024": "climate-energy",
  "icci-dubai-2024": "finance-policy",
  "mwc-2024": "climate-energy",

  "fii-2023": "finance-policy",
  "cop28-2023": "climate-energy",
  "wef-gfc-2023": "partnerships",
  "buraq-2023": "leadership-learning",
  "eisenhower-2023": "leadership-learning",
  "gastech-2023": "climate-energy",
  "cpec-2023": "climate-energy",
  "liibs-2023": "leadership-learning",
  "finland-pakistan-2023": "climate-energy",
  "iwd-2023": "leadership-learning",
  "leap-2023": "climate-energy",

  "cif-2021": "climate-energy",
  "davos-2020": "finance-policy",
  "wef-dalian-2020": "climate-energy",
  "wef-dubai-2020": "climate-energy",
  "ntu-2019": "leadership-learning",
};

function classifyEngagement(engagement: GlobalEngagement): CategoryFilterId {
  const curatedCategory = ENGAGEMENT_CATEGORY_BY_ID[engagement.id];
  if (curatedCategory) return curatedCategory;

  const text = `${engagement.event} ${engagement.headline} ${engagement.body.join(" ")}`
    .toLowerCase();

  if (/(workshop|team hosted|team conducted|planetive team)/.test(text)) {
    return "team-milestones";
  }
  if (/(finance|investment|minister|policy|esg|transparency|public financial|bank)/.test(text)) {
    return "finance-policy";
  }
  if (/(partnership|collaborat|forum with|wwf|oicci|lums|hawkamah|relp)/.test(text)) {
    return "partnerships";
  }
  if (/(camp|youth|leadership|fellowship|learning|education|summit)/.test(text)) {
    return "leadership-learning";
  }
  return "climate-energy";
}

export function GlobalEngagementsPageContent() {
  const [filterMode, setFilterMode] = useState<FilterMode>("category");
  const [activeCategory, setActiveCategory] = useState<CategoryFilterId>("all");
  const [activeYear, setActiveYear] = useState<YearFilterId>("all");
  const [activeEvent, setActiveEvent] = useState<string>("all");
  const [showYearOptions, setShowYearOptions] = useState(false);

  const yearEventFilters = useMemo(() => {
    if (filterMode !== "year" || activeYear === "all") return [];

    return GLOBAL_ENGAGEMENT_SECTIONS.flatMap((section) => {
      if (section.kind !== "grid" || section.id !== activeYear) return [];
      return (section.items ?? []).map((item) => ({
        id: item.id,
        label: item.event,
      }));
    });
  }, [filterMode, activeYear]);

  const visibleSections = useMemo(() => {
    return GLOBAL_ENGAGEMENT_SECTIONS.flatMap((section) => {
      if (filterMode === "year") {
        const sectionYearMatch =
          activeYear === "all" ||
          section.id === activeYear ||
          (activeYear === "year-2024" && section.id === "team-relp-2024") ||
          (activeYear === "year-2023" && section.id === "team-hawkamah-2023");

        if (!sectionYearMatch) return [];
      }

      if (section.kind === "highlight") {
        if (
          filterMode === "category" &&
          activeCategory !== "all" &&
          activeCategory !== "team-milestones"
        ) {
          return [];
        }
        return [section];
      }

      const filteredItems = (section.items ?? []).filter((item) => {
        const categoryMatch =
          filterMode !== "category" ||
          activeCategory === "all" ||
          classifyEngagement(item) === activeCategory;
        const eventMatch =
          filterMode !== "year" || activeEvent === "all" || item.id === activeEvent;
        return categoryMatch && eventMatch;
      });

      if (filteredItems.length === 0) return [];
      return [{ ...section, items: filteredItems }];
    });
  }, [filterMode, activeCategory, activeYear, activeEvent]);

  const engagementCount = GLOBAL_ENGAGEMENT_SECTIONS.flatMap((s) =>
    s.kind === "grid" ? (s.items ?? []) : [],
  ).length;

  return (
    <>
      <GlobalEngagementsHero count={engagementCount} />
      <GlobalPartnersMapSection />
      <FilterBar
        filterMode={filterMode}
        onFilterModeChange={setFilterMode}
        activeCategory={activeCategory}
        onCategoryChange={(category) => {
          setFilterMode("category");
          setActiveCategory(category);
          setActiveYear("all");
          setActiveEvent("all");
        }}
        activeYear={activeYear}
        onYearChange={(year) => {
          setFilterMode("year");
          setActiveYear(year);
          setActiveEvent("all");
          setActiveCategory("all");
          setShowYearOptions(false);
        }}
        showYearOptions={showYearOptions}
        onToggleYearOptions={() => setShowYearOptions((open) => !open)}
        activeEvent={activeEvent}
        onEventChange={setActiveEvent}
        yearEvents={yearEventFilters}
      />
      <div className="pb-20 md:pb-28">
        {visibleSections.map((section, i) => (
          <SectionBlock key={section.id} section={section} index={i} />
        ))}
      </div>
    </>
  );
}

function GlobalEngagementsHero({ count }: { count: number }) {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 75% 10%, rgba(168,240,212,0.45), transparent 55%), radial-gradient(ellipse 40% 35% at 15% 90%, rgba(26,107,74,0.45), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-x relative z-10 pt-40 md:pt-48 pb-24 md:pb-32">
        <ScrollReveal variant="fade-up" className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide bg-white/12 text-mint-soft border border-white/20 backdrop-blur-sm">
            <Globe2 size={14} aria-hidden />
            {GLOBAL_ENGAGEMENTS_HERO.eyebrow}
          </span>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.04]">
            {GLOBAL_ENGAGEMENTS_HERO.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-n200/95 leading-relaxed max-w-2xl">
            {GLOBAL_ENGAGEMENTS_HERO.summary}
          </p>
          <p className="mt-8 font-mono text-[11px] tracking-[0.2em] uppercase text-mint-soft/90">
            {count} snapshots · Pakistan · MENA · Global forums
          </p>
        </ScrollReveal>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function FilterBar({
  filterMode,
  onFilterModeChange,
  activeCategory,
  onCategoryChange,
  activeYear,
  onYearChange,
  showYearOptions,
  onToggleYearOptions,
  activeEvent,
  onEventChange,
  yearEvents,
}: {
  filterMode: FilterMode;
  onFilterModeChange: (mode: FilterMode) => void;
  activeCategory: CategoryFilterId;
  onCategoryChange: (id: CategoryFilterId) => void;
  activeYear: YearFilterId;
  onYearChange: (id: YearFilterId) => void;
  showYearOptions: boolean;
  onToggleYearOptions: () => void;
  activeEvent: string;
  onEventChange: (id: string) => void;
  yearEvents: Array<{ id: string; label: string }>;
}) {
  const activeYearLabel =
    YEAR_FILTERS.find((item) => item.id === activeYear)?.label ?? "All";

  return (
    <section className="sticky top-[4.5rem] z-30 border-b border-n200/80 bg-[var(--n50)]/95 backdrop-blur-md">
      <div className="container-x py-3 md:py-4">
        <ScrollReveal variant="fade-up" duration={500}>
          <div className="space-y-2.5">
            <div className="relative flex flex-wrap items-center gap-2.5">
              {CATEGORY_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    onFilterModeChange("category");
                    onCategoryChange(f.id);
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    filterMode === "category" && activeCategory === f.id
                      ? "bg-forest text-white shadow-[var(--shadow-soft)] ring-1 ring-forest/20"
                      : "bg-white text-n600 border border-n200 hover:border-canopy/40 hover:text-forest",
                  )}
                >
                  {f.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  onFilterModeChange("year");
                  onToggleYearOptions();
                }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold border transition-all duration-200",
                  filterMode === "year"
                    ? "bg-canopy text-white border-canopy shadow-[var(--shadow-soft)]"
                    : "bg-white text-n700 border-n200 hover:border-canopy/40 hover:text-forest",
                )}
                aria-label="Filter by year"
                title="Filter by year"
              >
                <CalendarDays size={15} className="shrink-0" />
                <span>{activeYearLabel}</span>
                <ChevronDown
                  size={14}
                  className={cn("transition-transform", showYearOptions && "rotate-180")}
                />
              </button>
            </div>

            {showYearOptions && (
              <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-n200/80 bg-white p-1.5 shadow-[var(--shadow-elevated)] z-40">
                {YEAR_FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => {
                      onFilterModeChange("year");
                      onYearChange(f.id);
                    }}
                    className={cn(
                      "w-full text-left rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200",
                      filterMode === "year" && activeYear === f.id
                        ? "bg-canopy text-white"
                        : "text-n600 hover:bg-n50 hover:text-forest",
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            {filterMode === "year" && activeYear !== "all" && yearEvents.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => onEventChange("all")}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                    activeEvent === "all"
                      ? "bg-mint text-forest"
                      : "bg-white text-n600 border border-n200 hover:border-canopy/40 hover:text-forest hover:bg-n50",
                  )}
                >
                  All dates/events
                </button>
                {yearEvents.map((ev) => (
                  <button
                    key={ev.id}
                    type="button"
                    onClick={() => onEventChange(ev.id)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                      activeEvent === ev.id
                        ? "bg-mint text-forest"
                        : "bg-white text-n600 border border-n200 hover:border-canopy/40 hover:text-forest hover:bg-n50",
                    )}
                  >
                    {ev.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SectionBlock({
  section,
  index,
}: {
  section: GlobalEngagementSection;
  index: number;
}) {
  if (section.kind === "highlight") {
    return <TeamHighlight section={section} index={index} />;
  }

  const items = section.items ?? [];
  if (items.length === 0) return null;

  return (
    <section
      id={section.id}
      className={cn("scroll-mt-32 py-12 md:py-16", index % 2 === 0 ? "bg-white" : "bg-[var(--n50)]")}
    >
      <div className="container-x">
        <ScrollReveal className="mb-10 md:mb-12">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            {section.subtitle ?? "Engagements"}
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] text-forest">
            {section.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {items.map((item, i) => (
            <EngagementCard key={item.id} engagement={item} delay={i * 35} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamHighlight({
  section,
  index,
}: {
  section: GlobalEngagementSection;
  index: number;
}) {
  return (
    <section
      className={cn(
        "py-10 md:py-14",
        index % 2 === 0 ? "bg-[var(--n100)]" : "bg-[var(--n50)]",
      )}
    >
      <div className="container-x">
        <ScrollReveal variant="scale-up">
          <article className="overflow-hidden rounded-[28px] md:rounded-[32px] border border-n200/80 bg-white shadow-[var(--shadow-elevated)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {section.image && (
                <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-0 aspect-[16/10] lg:aspect-auto">
                  <img
                    src={section.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ filter: "none" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <div
                className={cn(
                  "flex flex-col justify-center p-8 md:p-10 lg:p-12",
                  section.image ? "lg:col-span-7" : "lg:col-span-12",
                )}
              >
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-canopy">
                  <Users size={14} />
                  Planetive team
                </span>
                <h2 className="mt-4 font-display text-xl md:text-2xl lg:text-[1.65rem] text-forest leading-snug">
                  {section.title}
                </h2>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}

function EngagementCard({
  engagement,
  delay,
}: {
  engagement: GlobalEngagement;
  delay: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const previewText = engagement.body.join(" ");
  const long =
    engagement.body.length > 1 || previewText.length > 240;

  return (
    <ScrollReveal variant="fade-up" delay={delay} className="h-full">
      <article className="group flex h-full min-h-0 flex-col overflow-hidden rounded-[26px] border border-n200/80 bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-n100">
          <img
            src={engagement.image}
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ filter: "none" }}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col p-6 md:p-7">
          <p className="text-[10px] font-mono tracking-wider uppercase text-canopy leading-normal line-clamp-3 break-words">
            {engagement.event}
          </p>
          <h3 className="mt-3 font-h3 text-[1.05rem] md:text-lg text-forest leading-snug text-balance">
            {engagement.headline}
          </h3>

          <div className="mt-4 min-h-0 flex-1">
            {expanded ? (
              <div className="space-y-3.5 text-sm md:text-[15px] text-n600 leading-[1.65] [overflow-wrap:anywhere]">
                {engagement.body.map((paragraph, i) => (
                  <p key={`${engagement.id}-${i}`}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="text-sm md:text-[15px] text-n600 leading-[1.65] line-clamp-5 [overflow-wrap:anywhere]">
                {previewText}
              </p>
            )}
          </div>

          {engagement.relatedArticle && expanded && (
            <p className="mt-4 text-xs leading-relaxed text-canopy border-l-2 border-mint pl-3 [overflow-wrap:anywhere]">
              {engagement.relatedArticle}
            </p>
          )}

          {long && (
            <button
              type="button"
              onClick={() => setExpanded((open) => !open)}
              aria-expanded={expanded}
              className="mt-5 inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-forest hover:text-canopy"
            >
              {expanded ? "Show less" : "Read more"}
              <ChevronDown
                size={14}
                className={cn("shrink-0 transition-transform", expanded && "rotate-180")}
              />
            </button>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
}
