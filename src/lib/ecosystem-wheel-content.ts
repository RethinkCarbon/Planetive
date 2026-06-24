export type EcosystemWheelIcon =
  | "bar-chart"
  | "shield-check"
  | "wheat"
  | "line-chart"
  | "truck"
  | "users"
  | "bot"
  | "compass"
  | "hammer";

export type EcosystemWheelSegment = {
  id: string;
  name: string;
  lines: string[];
  description: string;
  icon: EcosystemWheelIcon;
  color: string;
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
    icon: "bar-chart",
    color: "#1a4d3a",
    url: "https://www.rethinkcarbon.io",
  },
  {
    id: "digital-mrv",
    name: "Digital MRV Platforms",
    lines: ["Digital MRV", "Platforms"],
    description:
      "Digitized Validation & verification for Energy Transition and Decarbonization Systems.",
    icon: "shield-check",
    color: "#1e5340",
  },
  {
    id: "agri-tech",
    name: "Agri Tech Solutions",
    lines: ["Agri Tech", "Solutions"],
    description:
      "Automated Modern Farming Solutions and remote monitoring for Farms and Agri-service companies.",
    icon: "wheat",
    color: "#244c42",
  },
  {
    id: "energy-intelligence",
    name: "Energy Sector Intelligence Platform",
    lines: ["Energy Sector", "Intelligence", "Platform"],
    description: "AI Powered Integrated Energy sector Global Financial Ecosystem.",
    icon: "line-chart",
    color: "#2a6250",
  },
  {
    id: "green-supply-chain",
    name: "Green Supply Chain",
    lines: ["Green Supply", "Chain"],
    description: "Marketplace for decarbonized supply chains.",
    icon: "truck",
    color: "#3d8b63",
  },
  {
    id: "energy-workforce",
    name: "Energy Transition Workforce",
    lines: ["Energy", "Transition", "Workforce"],
    description:
      "Skilled workforce powering the clean energy transition — tech, projects, and operations.",
    icon: "users",
    color: "#2f6e50",
  },
  {
    id: "in-house-agents",
    name: "Planetive's In-house Agents",
    lines: ["In-house", "Agents"],
    description:
      "Eco System of Opportunity Tracking, Partnership management, Financial Modelling Suite and HR Agents.",
    icon: "bot",
    color: "#2a6650",
  },
  {
    id: "advisory-house",
    name: "Advisory House",
    lines: ["Advisory", "House"],
    description: "End to end advisory services from planning to implementation.",
    icon: "compass",
    color: "#1f4f3c",
  },
  {
    id: "project-development",
    name: "Project Development",
    lines: ["Project", "Development"],
    description:
      "Designing and delivering high-impact Energy Transition and decarbonisation projects from concept to execution.",
    icon: "hammer",
    color: "#183b2f",
  },
];

export const WHEEL_COLORS = {
  hover: "#4a9d72",
  text: "#ffffff",
  center: "#ffffff",
  centerText: "#1a4d3a",
  divider: "#ffffff",
} as const;
