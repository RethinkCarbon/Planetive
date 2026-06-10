import type { LucideIcon } from "lucide-react";
import { Building2, Flame } from "lucide-react";

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
      description:
        "Access a global repository of decarbonisation and energy transition insights.",
    },
    {
      step: "02",
      title: "Evaluate",
      description:
        "Unlock precise decarbonization potential with AI-driven insights in minutes.",
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
      description:
        "Track progress and compliance with dynamic, data-rich performance dashboards.",
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

export type IndustryId = "financial-institutions" | "oil-and-gas";

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
