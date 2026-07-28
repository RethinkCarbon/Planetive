import { formatDisplayText } from "@/lib/format-display-text";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Factory,
  Wheat,
  Truck,
  Banknote,
  Building2,
  Sun,
  BarChart3,
  Compass,
  Hammer,
  Cpu,
  LineChart,
  Globe2,
  CheckCircle2,
  Search,
  Wrench,
  Recycle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal, ScrollRevealGroup } from "@/components/site/ScrollReveal";
import { RotatingWords } from "@/components/site/RotatingWords";
import { RETHINK_CARBON } from "@/lib/industries-content";

/* ------------------------------- Process -------------------------------- */
export function ProcessSection() {
  const items: { icon: LucideIcon; tag: string; title: string; body: string }[] = [
    {
      icon: Search,
      tag: "01 · Diagnosis",
      title: "Understand what is missing, misaligned, or inefficient.",
      body: "We map systems end-to-end — emissions, capital flows, supply chains, governance — to surface the gaps that block progress.",
    },
    {
      icon: Wrench,
      tag: "02 · Implementation",
      title: "Convert insight into value-added solutions.",
      body: "Our ventures and advisory teams translate strategy into projects, platforms, and partnerships that move the needle.",
    },
    {
      icon: Recycle,
      tag: "03 · Sustainability",
      title: "Ensure the system sustains itself.",
      body: "We embed measurement, financing, and governance so impact compounds long after the engagement ends.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Approach"
          title="Diagnosis → Implementation → Sustainability"
          description="A continuous loop, not a linear consultancy. Every Planetive engagement closes the gap between intent and outcome."
        />

        <ScrollRevealGroup className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6" stagger={120}>
          {items.map(({ icon: Icon, tag, title, body }, i) => (
            <article
              key={tag}
              className="group relative rounded-[28px] bg-white p-8 border border-n200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute -top-px right-8 h-px w-24"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--mint), transparent)",
                }}
              />
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-soft text-forest">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-mono tracking-wider text-n400">{tag}</span>
              </div>
              <h3 className="mt-6 font-ui font-semibold text-2xl text-forest">
                {formatDisplayText(title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-n600">{body}</p>

              {i < items.length - 1 && (
                <ArrowRight
                  size={18}
                  className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-mint"
                />
              )}
            </article>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

/* ------------------------------- Ecosystem ------------------------------ */
const ecosystem: {
  name: string;
  desc: string;
  icon: LucideIcon;
  tone: "forest" | "mint";
  href?: string;
}[] = [
  {
    name: "Rethink Carbon",
    desc: "Carbon measurement, planning, and decarbonization SaaS.",
    icon: BarChart3,
    tone: "forest",
    href: RETHINK_CARBON.url,
  },
  {
    name: "ETW",
    desc: "Energy Transition Workbench for clean power deployment.",
    icon: Sun,
    tone: "mint",
  },
  {
    name: "AgriTech",
    desc: "Climate-smart agriculture data and advisory.",
    icon: Wheat,
    tone: "forest",
  },
  {
    name: "CCUS DMRV",
    desc: "Digital MRV for carbon capture, utilisation & storage.",
    icon: Factory,
    tone: "mint",
  },
  {
    name: "Green Supply Chain",
    desc: "Scope-3 traceability and supplier engagement.",
    icon: Truck,
    tone: "forest",
  },
  {
    name: "FM Suite",
    desc: "Financial modeling tools for sustainable projects.",
    icon: LineChart,
    tone: "mint",
  },
  {
    name: "Advisory House",
    desc: "ESG, climate strategy & transition advisory.",
    icon: Compass,
    tone: "forest",
  },
  {
    name: "Project Development",
    desc: "End-to-end origination, structuring, and delivery.",
    icon: Hammer,
    tone: "mint",
  },
  {
    name: "In-house AI Agents",
    desc: "Domain-trained agents for climate intelligence.",
    icon: Cpu,
    tone: "forest",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-[var(--n100)]">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Planetive Ecosystem"
          title="Nine ventures. One climate intelligence engine."
          description="Each node specialises — together they form an integrated stack across intelligence, advisory, and execution."
        />

        <ScrollRevealGroup
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={70}
        >
          {ecosystem.map(({ name, desc, icon: Icon, tone, href }) => {
            const body = (
              <>
                <GeometricCorner tone={tone} />
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    tone === "forest"
                      ? "bg-[var(--forest)] text-[var(--mint-soft)]"
                      : "bg-mint-soft text-forest"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-ui font-semibold text-xl text-forest">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-n600">{desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-canopy group-hover:text-mint transition-colors">
                  Learn more <ArrowUpRight size={14} />
                </div>
              </>
            );

            const cardClass =
              "group relative overflow-hidden rounded-[28px] bg-white border border-n200 p-7 hover:border-mint transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]";

            if (href) {
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${cardClass} block`}
                >
                  {body}
                </a>
              );
            }

            return (
              <article key={name} className={cardClass}>
                {body}
              </article>
            );
          })}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

function GeometricCorner({ tone }: { tone: "forest" | "mint" }) {
  return (
    <svg
      aria-hidden
      className={`absolute -top-8 -right-8 h-32 w-32 ${
        tone === "forest" ? "text-mint-soft/60" : "text-canopy/15"
      }`}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.5" />
      <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

/* ------------------------------ What We Do ------------------------------ */
export function WhatWeDoSection() {
  const pillars = [
    {
      title: "Climate Intelligence",
      body: "Data, models, and AI agents that translate climate complexity into decisions.",
      points: ["Emissions analytics", "Risk & scenario modeling", "Disclosure-ready reporting"],
    },
    {
      title: "Advisory & Strategy",
      body: "Net-zero pathways, ESG strategy, and transition roadmaps tailored to your sector.",
      points: ["Net-zero strategy", "ESG materiality", "Capital structuring"],
    },
    {
      title: "Project Development",
      body: "From origination to financial close — clean energy, agriculture, infrastructure.",
      points: ["Feasibility & design", "Permitting & finance", "Delivery & MRV"],
    },
    {
      title: "Technology Platforms",
      body: "Purpose-built SaaS and AI agents that operationalise sustainability at scale.",
      points: ["Rethink Carbon", "CCUS DMRV", "FM Suite"],
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="What We Do"
          title="Four pillars. One mandate: move from intent to impact."
          description="Planetive operates across the full climate value chain — intelligence, advisory, delivery, and the platforms that hold them together."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="relative rounded-[28px] overflow-hidden border border-n200 bg-white p-8 md:p-10"
              style={i % 2 === 0 ? undefined : { background: "var(--gradient-mint)" }}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs tracking-wider text-n400 mt-2">0{i + 1}</span>
                <div>
                  <h3 className="font-ui font-semibold text-3xl text-forest">
                    {formatDisplayText(p.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-n600 max-w-md">{p.body}</p>
                  <ul className="mt-6 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-n800">
                        <CheckCircle2 size={16} className="text-mint" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Impact Areas ---------------------------- */
export function ImpactSection() {
  const areas: { title: string; icon: LucideIcon; desc: string }[] = [
    {
      title: "Clean Energy",
      icon: Sun,
      desc: "Solar, wind, storage & grid modernisation projects.",
    },
    {
      title: "Climate-Smart Agriculture",
      icon: Wheat,
      desc: "Resilient farming systems and food security.",
    },
    {
      title: "Carbon Accounting",
      icon: BarChart3,
      desc: "Scope 1/2/3 measurement, MRV, and disclosure.",
    },
    {
      title: "Green Supply Chains",
      icon: Truck,
      desc: "Traceability, scope-3, and supplier transition.",
    },
    {
      title: "Financial Ecosystem",
      icon: Banknote,
      desc: "Blended finance, green bonds, sustainable capital.",
    },
    {
      title: "Sustainable Infrastructure",
      icon: Building2,
      desc: "Cities, water, mobility — built for the next century.",
    },
  ];

  return (
    <section id="impact" className="py-24 md:py-32 bg-[var(--n100)]">
      <div className="container-x">
        <SectionHeader
          eyebrow="Impact Areas"
          title="Where Planetive moves the needle."
          description="Six interconnected domains where capital, capability, and climate intelligence converge."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map(({ title, icon: Icon, desc }) => (
            <article
              key={title}
              className="rounded-[28px] bg-white border border-n200 p-7 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <Icon size={28} className="text-canopy group-hover:text-mint transition-colors" />
                <Leaf size={16} className="text-n200" />
              </div>
              <h3 className="mt-6 font-ui font-semibold text-xl text-forest">
                {formatDisplayText(title)}
              </h3>
              <p className="mt-2 text-sm text-n600 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Rethink Carbon ----------------------------- */
export function RethinkCarbonSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div
          className="rounded-[36px] overflow-hidden p-8 md:p-14 relative"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <svg viewBox="0 0 800 400" className="h-full w-full text-mint-soft">
              <circle
                cx="650"
                cy="80"
                r="120"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="650" cy="80" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path
                d="M0 350 Q 200 250, 400 320 T 800 280"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 border border-white/20">
                Featured Venture
              </span>
              <h2 className="mt-5 font-ui font-semibold text-[clamp(2rem,4.5vw,3.75rem)]">
                <span className="text-mint-soft">Measure.</span> Plan. Decarbonize.
              </h2>
              <p className="mt-5 max-w-lg text-n200 leading-relaxed">
                Rethink Carbon is Planetive's flagship platform for enterprise decarbonization —
                from baseline to net-zero, with audit-grade data and AI-assisted reduction pathways.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["Measure", "Emissions baseline"],
                  ["Plan", "Reduction pathways"],
                  ["Decarbonize", "Operational change"],
                ].map(([k, v], i) => (
                  <div key={k} className="rounded-2xl bg-white/10 border border-white/15 p-4">
                    <div className="text-mint-soft font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 font-ui font-semibold text-lg">{k}</div>
                    <div className="text-xs text-n200 mt-1">{v}</div>
                  </div>
                ))}
              </div>

              <a
                href={RETHINK_CARBON.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold btn-mint"
              >
                Explore Rethink Carbon <ArrowRight size={16} />
              </a>
            </div>

            {/* Dashboard mock */}
            <div className="relative">
              <div className="rounded-3xl bg-white/95 backdrop-blur p-6 shadow-[var(--shadow-elevated)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-n400">Enterprise · Q3 2025</div>
                    <div className="font-ui font-semibold text-2xl text-forest mt-0.5">
                      Emissions Overview
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft text-forest text-xs px-2.5 py-1 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Live
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["Scope 1", "8.4k", "tCO₂e", "-12%"],
                    ["Scope 2", "14.2k", "tCO₂e", "-18%"],
                    ["Scope 3", "62.1k", "tCO₂e", "-7%"],
                  ].map(([s, v, u, d]) => (
                    <div key={s} className="rounded-xl bg-n50 p-3">
                      <div className="text-[10px] text-n400 uppercase tracking-wider">{s}</div>
                      <div className="mt-1 font-ui font-semibold text-xl text-forest">{v}</div>
                      <div className="text-[10px] text-n400">{u}</div>
                      <div className="mt-2 inline-flex items-center text-[10px] font-semibold text-canopy">
                        {d} YoY
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs text-n400">
                    <span>Net-zero pathway</span>
                    <span>2050</span>
                  </div>
                  <div className="mt-3 h-32 relative">
                    <svg viewBox="0 0 300 120" className="h-full w-full">
                      <defs>
                        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#2ECC8A" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#2ECC8A" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 30 Q 60 40 100 55 T 200 85 T 300 110 L 300 120 L 0 120 Z"
                        fill="url(#g1)"
                      />
                      <path
                        d="M0 30 Q 60 40 100 55 T 200 85 T 300 110"
                        stroke="#0A3D2E"
                        strokeWidth="2"
                        fill="none"
                      />
                      {[0, 75, 150, 225, 300].map((x) => (
                        <circle key={x} cx={x} cy={30 + (x / 300) * 80} r="3" fill="#2ECC8A" />
                      ))}
                    </svg>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-n200 p-3">
                    <div className="text-n400">Reduction target</div>
                    <div className="font-ui font-semibold text-lg text-forest mt-1">
                      -42% by 2030
                    </div>
                  </div>
                  <div className="rounded-xl border border-n200 p-3">
                    <div className="text-n400">Initiatives active</div>
                    <div className="font-ui font-semibold text-lg text-forest mt-1">27 / 34</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white p-4 shadow-[var(--shadow-elevated)] border border-n200">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 rounded-xl bg-mint-soft items-center justify-center">
                    <BarChart3 size={16} className="text-forest" />
                  </span>
                  <div>
                    <div className="text-[10px] text-n400 uppercase">MRV Verified</div>
                    <div className="text-sm font-semibold text-forest">ISO 14064 ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Global Engagements --------------------------- */
export function GlobalSection() {
  const regions = [
    {
      name: "Pakistan",
      tag: "Home Market",
      body: "Pioneering carbon systems, clean energy, and climate-smart agriculture engagements across South Asia.",
    },
    {
      name: "MENA",
      tag: "Strategic Region",
      body: "Advisory and project development with sovereign and private partners across the Middle East & North Africa.",
    },
    {
      name: "Global Partners",
      tag: "Network",
      body: "Coalitions with multilaterals, financial institutions, technology providers, and research bodies worldwide.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Global Engagements"
          title="Local depth. Global reach."
          description="From Karachi to the Gulf to global capitals, Planetive partners across geographies to deliver climate outcomes that hold."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {regions.map((r) => (
            <article
              key={r.name}
              className="relative overflow-hidden rounded-[28px] border border-n200 bg-white p-8 hover:shadow-[var(--shadow-elevated)] transition-all"
            >
              <Globe2 size={28} className="text-canopy" />
              <div className="mt-5 text-xs font-mono tracking-wider text-n400">{r.tag}</div>
              <h3 className="mt-2 font-ui font-semibold text-2xl text-forest">{r.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-n600">{r.body}</p>

              <svg
                aria-hidden
                className="mt-6 w-full h-28 text-canopy/30"
                viewBox="0 0 300 100"
                fill="none"
              >
                <path d="M0 70 Q 75 40 150 60 T 300 50" stroke="currentColor" strokeWidth="1" />
                <circle cx="60" cy="55" r="3" fill="#2ECC8A" />
                <circle cx="150" cy="60" r="3" fill="#2ECC8A" />
                <circle cx="240" cy="52" r="3" fill="#2ECC8A" />
              </svg>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Insights ------------------------------- */
export function InsightsSection({
  posts,
}: {
  posts: Array<{
    slug: string;
    title: string;
    summary: string;
    publishedAt: string;
    imageUrl: string | null;
    categories?: string[];
  }>;
}) {
  return (
    <section className="py-24 md:py-32 bg-[var(--n100)]">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Insights"
            title="Field notes from the climate frontier."
            description="Research, commentary, and case studies from across the Planetive ecosystem."
            align="left"
          />
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-canopy"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-[28px] overflow-hidden bg-white border border-n200 hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <div className="h-40 relative overflow-hidden bg-mint-soft">
                {p.imageUrl ? (
                  <img
                    src={p.imageUrl}
                    alt=""
                    className="h-full w-full object-cover [filter:none]"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full" style={{ background: "var(--gradient-mint)" }} />
                )}
                {p.categories?.[0] && (
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/80 text-forest">
                    {p.categories[0]}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-n400">
                  {new Date(p.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h3 className="mt-2 font-ui font-semibold text-xl text-forest leading-tight group-hover:text-canopy transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-n600 leading-relaxed line-clamp-3">{p.summary}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-canopy group-hover:text-mint transition-colors">
                  Read article <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Final CTA ------------------------------ */
export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <ScrollReveal variant="scale-up" duration={900}>
          <div
            className="relative overflow-hidden rounded-[36px] p-10 md:p-16 text-center"
            style={{ background: "var(--gradient-hero)" }}
          >
            <svg
              aria-hidden
              className="absolute -left-10 -bottom-10 h-64 w-64 text-mint-soft/30"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <svg
              aria-hidden
              className="absolute -right-10 -top-10 h-64 w-64 text-mint-soft/30"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50 20 L80 50 L50 80 L20 50 Z" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            <div className="relative max-w-3xl mx-auto">
              <h2 className="font-ui font-semibold text-white text-[clamp(2rem,5vw,4rem)] leading-[1.12]">
                <span className="block">
                  Ready to build your{" "}
                  <RotatingWords
                    words={["climate", "decarbonization", "ESG", "sustainability"]}
                    intervalMs={3000}
                    reserveLongest
                  />
                </span>
                <span className="block">transition roadmap?</span>
              </h2>
              <p className="mt-5 text-n200 text-base md:text-lg max-w-xl mx-auto">
                Tell us where you are. We'll show you what comes next — diagnosis, implementation,
                and the systems to sustain it.
              </p>
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold btn-mint"
              >
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ----------------------------- Section Header --------------------------- */
export function SectionHeader({
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <ScrollReveal className={align === "center" ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      <h2 className="font-ui font-semibold text-[clamp(2rem,4vw,3.25rem)] text-forest">
        {formatDisplayText(title)}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-n600 leading-relaxed">{description}</p>
      )}
    </ScrollReveal>
  );
}
