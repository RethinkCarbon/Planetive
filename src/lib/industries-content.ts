import type { LucideIcon } from "lucide-react";
import { Building2, Factory, Flame, Mountain, Truck, Wheat, Zap } from "lucide-react";

/** Shared platform copy from rethinkcarbon.io */
export const RETHINK_CARBON = {
  name: "ReThink Carbon",
  url: "https://www.rethinkcarbon.io",
  tagline: "Advancing decarbonisation through market intelligence",
  summary:
    "One unified platform for every step of the journey — accelerating decarbonization with AI-driven assessments, optimization, tracking, and market intelligence.",
  aiStrategist:
    "AI-Powered Strategist: evaluate eligibility against global standards and estimate emission reductions in minutes, not months.",
  methodology: [
    {
      step: "01",
      title: "Discover",
      description: "Access a global repository of decarbonisation and energy transition insights.",
    },
    {
      step: "02",
      title: "Evaluate",
      description: "Unlock precise decarbonization potential with AI-driven insights in minutes.",
    },
    {
      step: "03",
      title: "Invest",
      description:
        "Maximize efficiency and value across energy transition projects with real-time recommendations.",
    },
    {
      step: "04",
      title: "Monitor",
      description: "Track progress and compliance with dynamic, data-rich performance dashboards.",
    },
  ],
  benefits: [
    {
      title: "Accelerated execution",
      description:
        "Cut planning timelines to minutes rather than months through artificial intelligence.",
    },
    {
      title: "Expert precision",
      description:
        "Leverage real-time data and global benchmarks to select optimal technologies and ensure compliance.",
    },
    {
      title: "Cost optimization",
      description: "Reduce errors and overruns with automated processes.",
    },
    {
      title: "Market leadership",
      description:
        "Position your organisation as a decarbonization pioneer, attracting ESG investors and top talent.",
    },
    {
      title: "Mitigate risks",
      description:
        "Stay ahead of regulatory shifts with predictive analytics, avoiding penalties and delays.",
    },
  ],
} as const;

export type IndustryId =
  | "financial-institutions"
  | "oil-and-gas"
  | "textile-manufacturing"
  | "agriculture"
  | "power-utilities"
  | "mining-metals"
  | "transport-logistics";

export type IndustryPage = {
  id: IndustryId;
  title: string;
  navLabel: string;
  tagline: string;
  description: string;
  body: string[];
  icon: LucideIcon;
  accent: string;
  accentSoft: string;
  /** How ReThink Carbon supports this sector */
  rethinkFocus: string[];
  useCases: { title: string; description: string }[];
  outcomes: { value: string; label: string }[];
};

export const INDUSTRIES: IndustryPage[] = [
  {
    id: "financial-institutions",
    title: "Financial Institutions",
    navLabel: "Financial Institutions",
    tagline: "Climate intelligence for banks, asset owners, and sustainable finance",
    description:
      "Planetive helps financial institutions align portfolios, disclosures, and transition finance with credible decarbonisation pathways — powered by ReThink Carbon market intelligence and Planetive advisory.",
    body: [
      "Banks, insurers, and asset managers face mounting pressure from regulators, investors, and counterparties to evidence climate risk integration, financed emissions, and credible net-zero commitments.",
      "Through Planetive and ReThink Carbon, institutions can move from static reporting to dynamic portfolio intelligence — evaluating opportunities, stress-testing transition scenarios, and monitoring performance against global benchmarks.",
    ],
    icon: Building2,
    accent: "#0A3D2E",
    accentSoft: "#1A6B4A",
    rethinkFocus: [
      "Portfolio-level decarbonisation potential scored in minutes with AI-driven eligibility checks",
      "Financed emissions and transition risk visibility across mandates and asset classes",
      "ESG and sustainable finance workflows aligned to global standards and disclosure frameworks",
      "Real-time market intelligence to prioritize high-impact climate investments",
      "Compliance monitoring dashboards for evolving regulatory and taxonomy requirements",
    ],
    useCases: [
      {
        title: "Sustainable finance & green bonds",
        description:
          "Evaluate and structure green, sustainability-linked, and transition instruments with auditable impact assumptions.",
      },
      {
        title: "Portfolio transition planning",
        description:
          "Discover and rank decarbonisation levers across holdings — from energy exposure to hard-to-abate sectors.",
      },
      {
        title: "Client & counterparty advisory",
        description:
          "Equip relationship teams with rapid assessments that strengthen climate dialogue with corporates and sovereigns.",
      },
      {
        title: "Regulatory readiness",
        description:
          "Mitigate disclosure and prudential risk with predictive analytics and consistent, data-rich monitoring.",
      },
    ],
    outcomes: [
      { value: "Minutes", label: "Not months for assessments" },
      { value: "ESG", label: "Investor-grade intelligence" },
      { value: "Global", label: "Benchmarks & standards" },
    ],
  },
  {
    id: "oil-and-gas",
    title: "Oil & Gas",
    navLabel: "Oil & Gas",
    tagline: "Decarbonisation and energy transition for upstream, midstream, and downstream",
    description:
      "Operators and energy majors navigating the transition need rigorous project evaluation, MRV-ready data, and capital-efficient abatement — delivered through ReThink Carbon and Planetive’s energy practice.",
    body: [
      "The oil and gas sector must balance energy security, shareholder returns, and credible transition plans — from methane abatement and flare reduction to CCS, electrification, and portfolio reshaping.",
      "ReThink Carbon gives technical and commercial teams a single platform to discover global best practices, evaluate abatement potential with AI speed, prioritize capital, and monitor delivery against net-zero milestones.",
    ],
    icon: Flame,
    accent: "#1A6B4A",
    accentSoft: "#2ECC8A",
    rethinkFocus: [
      "AI-powered project evaluation against global decarbonisation and energy transition standards",
      "Digitized MRV workflows for carbon capture, storage, and emissions reduction initiatives",
      "Technology and pathway benchmarking to reduce planning error and capital overrun",
      "Real-time recommendations across CCUS, methane, renewables integration, and efficiency",
      "Executive dashboards for portfolio-wide transition progress and compliance",
    ],
    useCases: [
      {
        title: "Abatement & CCUS portfolios",
        description:
          "Screen and rank capture, storage, and offset projects with standardized eligibility and reduction estimates.",
      },
      {
        title: "Methane & operational efficiency",
        description:
          "Identify high-impact operational levers and track performance with dynamic monitoring tools.",
      },
      {
        title: "Energy transition investments",
        description:
          "Compare technologies and partners using global insights — from hydrogen to power-to-X and electrification.",
      },
      {
        title: "Stakeholder reporting",
        description:
          "Support net-zero disclosures and investor communications with consistent, audit-grade data layers.",
      },
    ],
    outcomes: [
      { value: "MRV", label: "Digitized assurance" },
      { value: "AI", label: "Rapid project evaluation" },
      { value: "Capital", label: "Optimized transition spend" },
    ],
  },
  {
    id: "textile-manufacturing",
    title: "Textile & Manufacturing",
    navLabel: "Textile & Manufacturing",
    tagline: "Decarbonising production, supply chains, and industrial operations",
    description:
      "Manufacturers and textile groups need credible scope 1–3 pathways, efficiency gains, and ESG-ready reporting — supported by ReThink Carbon intelligence and Planetive implementation advisory.",
    body: [
      "Textile and manufacturing sectors face rising buyer requirements, border carbon adjustments, and energy cost volatility — while upgrading boilers, processes, renewables, and circular models across complex supplier networks.",
      "Planetive helps industrial leaders evaluate abatement options, structure transition programs, and monitor performance with AI-assisted assessments and standardized reporting workflows.",
    ],
    icon: Factory,
    accent: "#244c42",
    accentSoft: "#3d8b63",
    rethinkFocus: [
      "Scope 1–3 hotspot analysis across plants, processes, and supplier tiers",
      "Energy efficiency, fuel switching, and renewable integration scenario modeling",
      "ESG healthchecks and disclosure alignment for buyers and regulators",
      "Carbon credit and inset feasibility for hard-to-abate process emissions",
      "Monitoring dashboards for intensity targets and science-based milestones",
    ],
    useCases: [
      {
        title: "Facility & process decarbonisation",
        description:
          "Prioritise boilers, cogeneration, electrification, and efficiency retrofits with rapid eligibility screening.",
      },
      {
        title: "Supply chain emissions",
        description:
          "Map tiered supplier exposure and design engagement programs for measurable reductions.",
      },
      {
        title: "Sustainable product lines",
        description:
          "Support low-carbon product claims and buyer questionnaires with consistent data layers.",
      },
      {
        title: "Transition finance",
        description:
          "Build business cases for capex and green financing linked to verified abatement outcomes.",
      },
    ],
    outcomes: [
      { value: "Scope 3", label: "Supply chain visibility" },
      { value: "Efficiency", label: "Process optimization" },
      { value: "ESG", label: "Buyer-ready reporting" },
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture",
    navLabel: "Agriculture",
    tagline: "Climate-smart land use, resilience, and carbon programs",
    description:
      "Agribusiness, cooperatives, and food systems partners need rigorous MRV, nature-based solutions, and transition planning — from soil carbon to renewable energy across rural operations.",
    body: [
      "Agriculture sits at the intersection of food security, land use change, and nature-based climate solutions — with growing demand for credible carbon programs and sustainable sourcing.",
      "Planetive supports feasibility, structuring, and monitoring of agricultural decarbonisation and carbon initiatives, combining field-level insight with ReThink Carbon assessment tools.",
    ],
    icon: Wheat,
    accent: "#1f4f3c",
    accentSoft: "#2f6e50",
    rethinkFocus: [
      "Nature-based and agricultural carbon project feasibility and structuring",
      "Methane, fertilizer, and land-use emissions profiling across portfolios",
      "Remote monitoring and MRV alignment for distributed farm assets",
      "Agri-tech and renewable integration for diesel displacement",
      "Reporting for buyers, standards bodies, and carbon market participation",
    ],
    useCases: [
      {
        title: "Carbon & nature programs",
        description:
          "Develop forests, soil carbon, and regenerative agriculture initiatives with robust baselines.",
      },
      {
        title: "Farm energy transition",
        description:
          "Evaluate distributed solar, biogas, and efficiency projects across rural sites.",
      },
      {
        title: "Sustainable sourcing",
        description: "Equip food and commodity buyers with supplier-level climate intelligence.",
      },
      {
        title: "Program monitoring",
        description: "Track outcomes, leakage, and permanence with structured reporting workflows.",
      },
    ],
    outcomes: [
      { value: "MRV", label: "Field-to-market assurance" },
      { value: "Nature", label: "Based solutions" },
      { value: "Rural", label: "Energy transition" },
    ],
  },
  {
    id: "power-utilities",
    title: "Power & Utilities",
    navLabel: "Power & Utilities",
    tagline: "Grid transition, clean generation, and utility-scale decarbonisation",
    description:
      "Utilities, IPPs, and grid operators need integrated planning for renewables, storage, and grid modernization — with credible emissions accounting and investor-grade transition roadmaps.",
    body: [
      "Power and utility companies are central to national decarbonisation — balancing reliability, affordability, and rapid deployment of clean generation, transmission upgrades, and demand-side solutions.",
      "Planetive advises on project development, portfolio strategy, and ESG enablement — with ReThink Carbon powering scenario evaluation and performance monitoring across the asset lifecycle.",
    ],
    icon: Zap,
    accent: "#0A3D2E",
    accentSoft: "#1A6B4A",
    rethinkFocus: [
      "Renewable and storage portfolio screening with AI-assisted feasibility",
      "Grid and generation emissions modeling for transition planning",
      "Regulatory and taxonomy alignment for utility disclosures",
      "Carbon market and offset strategy for residual emissions",
      "Executive dashboards for capacity, intensity, and milestone tracking",
    ],
    useCases: [
      {
        title: "Clean generation portfolios",
        description:
          "Rank solar, wind, hydro, and hybrid projects against grid needs and carbon impact.",
      },
      {
        title: "Grid modernization",
        description:
          "Support transmission, distribution, and flexibility investments with structured business cases.",
      },
      {
        title: "Utility ESG & disclosures",
        description: "Align reporting with evolving standards and financed transition narratives.",
      },
      {
        title: "Distributed energy programs",
        description:
          "Scale site-level renewables and efficiency across commercial and industrial offtakers.",
      },
    ],
    outcomes: [
      { value: "GW", label: "Pipeline intelligence" },
      { value: "Grid", label: "Transition planning" },
      { value: "24/7", label: "Performance monitoring" },
    ],
  },
  {
    id: "mining-metals",
    title: "Mining & Metals",
    navLabel: "Mining & Metals",
    tagline: "Hard-to-abate operations, electrification, and responsible supply chains",
    description:
      "Mining and metals producers need rigorous abatement roadmaps — from diesel displacement and process heat to CCUS and green metals — backed by Planetive advisory and ReThink Carbon analytics.",
    body: [
      "Extractives and metals face intense scrutiny on scope 1 emissions, water, community impact, and downstream buyer requirements — while investing in electrification, renewables, and novel process technologies.",
      "Planetive helps operators evaluate pathways, structure ESG programs, and monitor transition delivery with sector-specific intelligence and implementation support.",
    ],
    icon: Mountain,
    accent: "#183b2f",
    accentSoft: "#2a6250",
    rethinkFocus: [
      "Mine-site energy and diesel displacement feasibility assessments",
      "Process emissions and CCUS screening for smelting and refining assets",
      "Scope 3 and responsible sourcing intelligence for metals supply chains",
      "Community and nature interface planning for land-based projects",
      "Investor and buyer-grade transition reporting and monitoring",
    ],
    useCases: [
      {
        title: "Mine electrification",
        description:
          "Assess haul fleet, processing, and camp energy transitions with prioritized capex roadmaps.",
      },
      {
        title: "Process decarbonisation",
        description:
          "Evaluate heat, hydrogen, and CCUS options for refining and metals production.",
      },
      {
        title: "Green metals strategy",
        description:
          "Support low-carbon product positioning and offtake discussions with verified data.",
      },
      {
        title: "ESG & permitting",
        description: "Strengthen climate narratives for lenders, regulators, and host communities.",
      },
    ],
    outcomes: [
      { value: "Sites", label: "Asset-level roadmaps" },
      { value: "CCUS", label: "Pathway evaluation" },
      { value: "ESG", label: "Stakeholder assurance" },
    ],
  },
  {
    id: "transport-logistics",
    title: "Transport & Logistics",
    navLabel: "Transport & Logistics",
    tagline: "Fleet transition, freight decarbonisation, and mobility programs",
    description:
      "Airlines, shipping, logistics, and mobility operators need fleet and fuel transition strategies — from EV rollout to sustainable aviation fuel — with measurable emissions tracking.",
    body: [
      "Transport accounts for a growing share of global emissions — with corporates and carriers under pressure to decarbonise fleets, hubs, and freight networks while maintaining service levels.",
      "Planetive supports transition planning, carbon program development, and monitoring across multimodal operations — leveraging ReThink Carbon for rapid assessments and reporting.",
    ],
    icon: Truck,
    accent: "#1a4d3a",
    accentSoft: "#2ECC8A",
    rethinkFocus: [
      "Fleet electrification and alternative fuel feasibility by route and asset class",
      "Freight and logistics emissions baselining across scopes and corridors",
      "Carbon credit and inset programs for aviation, maritime, and road freight",
      "Hub and depot renewable energy and efficiency opportunities",
      "Customer and regulator reporting for science-based transport targets",
    ],
    useCases: [
      {
        title: "Fleet transition roadmaps",
        description:
          "Prioritise EV, H2, and biofuel pathways with total cost and emissions modeling.",
      },
      {
        title: "Freight & logistics",
        description:
          "Map corridor-level abatement levers for 3PLs, shippers, and last-mile operators.",
      },
      {
        title: "Aviation & maritime",
        description:
          "Structure SAF, offset, and efficiency programs aligned to sector initiatives.",
      },
      {
        title: "Mobility ESG reporting",
        description:
          "Deliver consistent disclosures for investors, customers, and climate frameworks.",
      },
    ],
    outcomes: [
      { value: "Fleet", label: "Transition planning" },
      { value: "Fuel", label: "Pathway analysis" },
      { value: "Scope 3", label: "Logistics visibility" },
    ],
  },
];

export const INDUSTRIES_NAV = INDUSTRIES.map((i) => ({
  to: `/industries/${i.id}` as const,
  label: i.navLabel,
  color: i.accentSoft,
}));

export function industryPath(id: IndustryId) {
  return `/industries/${id}` as const;
}

export function getIndustry(slug: string): IndustryPage | undefined {
  return INDUSTRIES.find((i) => i.id === slug);
}
