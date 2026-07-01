export type EcosystemWheelShape =
  | "circle"
  | "crescent"
  | "square"
  | "chevron"
  | "ring"
  | "wave"
  | "triangle"
  | "house"
  | "diamond";

export type EcosystemWheelSegment = {
  id: string;
  name: string;
  lines: string[];
  description: string;
  shape: EcosystemWheelShape;
  color: string;
  /** In-app route when the segment is clicked. */
  route?: string;
  /** Opens in a new tab when the segment is clicked. */
  url?: string;
};

/** Clockwise from top — matches brand ecosystem wheel artwork. */
export const ECOSYSTEM_WHEEL_SEGMENTS: EcosystemWheelSegment[] = [
  {
    id: "rethink-carbon",
    name: "Rethink Carbon",
    lines: ["Rethink", "Carbon"],
    description: "ESG and Sustainability Management Solution for enterprises.",
    shape: "circle",
    color: "#1a4d3a",
    route: "/ecosystem/rethink-carbon",
  },
  {
    id: "digital-mrv",
    name: "Digital MRV Platforms",
    lines: ["Digital MRV", "Platforms"],
    description:
      "Digitized Validation & verification for Energy Transition and Decarbonization Systems.",
    shape: "crescent",
    color: "#1e5340",
    route: "/ecosystem/digital-mrv-platforms",
  },
  {
    id: "agri-tech",
    name: "Agri Tech Solutions",
    lines: ["Agri Tech", "Solutions"],
    description:
      "Automated Modern Farming Solutions and remote monitoring for Farms and Agri-service companies.",
    shape: "square",
    color: "#244c42",
    route: "/ecosystem/agri-tech-solutions",
  },
  {
    id: "energy-intelligence",
    name: "Energy Sector Intelligence Platform",
    lines: ["Energy Sector", "Intelligence", "Platform"],
    description: "AI Powered Integrated Energy sector Global Financial Ecosystem.",
    shape: "chevron",
    color: "#2a6250",
    route: "/ecosystem/energy-sector-intelligence",
  },
  {
    id: "green-supply-chain",
    name: "Green Supply Chain",
    lines: ["Green", "Supply Chain"],
    description: "Marketplace for decarbonized supply chains.",
    shape: "ring",
    color: "#3d8b63",
  },
  {
    id: "energy-workforce",
    name: "Energy Transition Workforce",
    lines: ["Energy", "Transition", "Workforce"],
    description:
      "Skilled workforce powering the clean energy transition — tech, projects, and operations.",
    shape: "wave",
    color: "#2f6e50",
    route: "/ecosystem/energy-transition-workforce",
  },
  {
    id: "in-house-agents",
    name: "Planetive's In-house Agents",
    lines: ["In-house", "Agents"],
    description:
      "Eco System of Opportunity Tracking, Partnership management, Financial Modelling Suite and HR Agents.",
    shape: "triangle",
    color: "#2a6650",
    route: "/ecosystem/in-house-agents",
  },
  {
    id: "advisory-house",
    name: "Advisory House",
    lines: ["Advisory", "House"],
    description: "End to end advisory services from planning to implementation.",
    shape: "house",
    color: "#1f4f3c",
    route: "/ecosystem/advisory-house",
  },
  {
    id: "project-development",
    name: "Project Development",
    lines: ["Project", "Development"],
    description:
      "Designing and delivering high-impact Energy Transition and decarbonisation projects from concept to execution.",
    shape: "diamond",
    color: "#183b2f",
    route: "/ecosystem/project-development",
  },
];

export const WHEEL_COLORS = {
  hover: "#4a9d72",
  text: "#ffffff",
  center: "#ffffff",
  centerText: "#1a4d3a",
  divider: "#ffffff",
} as const;
