/** Consulting — core advisory offering and nav structure. */

export const CONSULTING_PAGE = {
  eyebrow: "Consulting",
  title: "Strategic advisory for complex transition mandates.",
  description:
    "Advisory and project development, strengthened by digital tools and climate-tech systems that turn strategy into executable, measurable outcomes.",
  bookEyebrow: "Book a consultation",
  bookTitle: "Speak with our advisory team",
  bookDescription:
    "Schedule a discovery call to discuss your mandate — strategy, capital readiness, program design, or implementation support.",
} as const;

export const CONSULTING_SERVICES = [
  {
    title: "Strategic Advisory",
    description:
      "Board-level and executive guidance on transition strategy, ESG readiness, and sustainability alignment.",
    to: "/ecosystem/advisory-house" as const,
  },
  {
    title: "Transition Planning",
    description:
      "Structured pathways from opportunity assessment to investable, executable programs.",
    to: "/ecosystem/advisory-house" as const,
  },
  {
    title: "Capital & Project Development",
    description:
      "Financial readiness, fundraising support, and project structuring for energy and climate initiatives.",
    to: "/ecosystem/project-development" as const,
  },
  {
    title: "Executive Workshops",
    description:
      "Board and leadership programs — including ESG roadmaps and sustainability readiness sessions.",
    to: "/ecosystem/advisory-house" as const,
  },
] as const;

export const CONSULTING_PROCESS = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your mandate, constraints, and transition objectives.",
  },
  {
    step: "02",
    title: "Diagnose",
    description: "Assess pathways, readiness gaps, and investable opportunities.",
  },
  {
    step: "03",
    title: "Design",
    description: "Structure programs, governance, and delivery frameworks.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Support execution with ongoing advisory and capital enablement.",
  },
] as const;
