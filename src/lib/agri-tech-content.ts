export const AGRI_TECH_PAGE = {
  id: "agri-tech",
  eyebrow: "Planetive Ecosystem",
  titleLines: ["Agri Tech", "Solutions"] as const,
  supportingTitle: "Digital Infrastructure For Modern Agricultural Operations",
  description:
    "Planetive develops digital experiences that support connected agricultural environments through intelligent workflows, operational visibility and resilient infrastructure.",
  accent: "#244c42",
  accentSoft: "#A8F0D4",
} as const;

export const AGRI_TECH_OVERVIEW = {
  title: "Connecting Agricultural Operations Through Intelligence",
  intro:
    "Planetive offers cloud-based digital experiences designed to unify and streamline agricultural service operations.",
  supports: [
    "Real-Time Visibility",
    "Workflow Coordination",
    "Operational Intelligence",
    "Automation",
    "Advanced Analytics",
    "Decision Support",
    "Value Chain Optimization",
  ] as const,
};

export const AGRI_TECH_TERRAFLOW = {
  label: "Featured Experience",
  title: "TerraFlow",
  supportingTitle: "Connected Agriculture Across The Value Chain",
  description:
    "TerraFlow is Planetive's cloud-based agriculture platform designed to unify and streamline agricultural service operations through connected digital experiences.",
  descriptionExtended:
    "Built to support agricultural service businesses, TerraFlow enables operational visibility, workflow coordination and decision-making across the agricultural value chain.",
  capabilities: [
    "Cloud-Based SaaS",
    "Real-Time Data",
    "Workflow Automation",
    "Advanced Analytics",
    "Decision Support",
    "Operational Efficiency",
    "Value Chain Visibility",
    "Profitability",
  ] as const,
  architecture: {
    center: "TerraFlow",
    modulesLabel: "Connected Modules",
    modules: [
      "Crop Health Management",
      "Soil Planning & Testing",
      "Seeds Management",
      "Irrigation Management",
      "Pest Prediction & Control",
      "Weather Updates",
      "Agricultural Advisory",
    ] as const,
  },
  surfaces: [
    {
      title: "Web Experience",
      for: "Corporate Operations",
      description: "Support centralized visibility and coordination.",
      visual: "web" as const,
    },
    {
      title: "Mobile Experience",
      for: "Field Operators",
      description: "Enable field execution and connected workflows.",
      visual: "mobile-field" as const,
    },
    {
      title: "Mobile Experience",
      for: "Farmers",
      description: "Create accessible agricultural experiences.",
      visual: "mobile-farmer" as const,
    },
  ] as const,
};

export const AGRI_TECH_VERDANT = {
  label: "Featured Experience",
  categoryLabel: "Controlled Agriculture Experience",
  title: "VerdantOS",
  supportingTitle: "Digital Infrastructure For Controlled Agriculture",
  focusDescription:
    "Focused on controlled agricultural environments including vertical farming, hydroponics operations and connected monitoring.",
  description:
    "VerdantOS is Planetive's digital agriculture experience designed to support controlled agricultural environments through connected monitoring, operational visibility and intelligent management.",
  modules: [
    {
      title: "Vertical Farming Systems",
      description:
        "Support structured controlled agricultural environments through connected operational experiences.",
    },
    {
      title: "Hydroponics Operations Platform",
      description:
        "Enable operational visibility and management across hydroponic environments.",
    },
    {
      title: "Monitoring & Control Software",
      description:
        "Support connected oversight and management across agricultural environments.",
    },
    {
      title: "IoT / Digital Agriculture",
      description: "Create connected experiences across agricultural operations.",
    },
    {
      title: "Operational Intelligence",
      description: "Transform operational inputs into usable decision support.",
    },
    {
      title: "Web Application & Management Interface",
      description: "Enable centralized access and operational coordination.",
    },
  ] as const,
  panel: {
    eyebrow: "Controlled Environment Architecture",
    layers: [
      { title: "Environment Zones" },
      { title: "Water Circulation" },
      { title: "Growing Layers" },
      { title: "Connected Monitoring" },
      { title: "Operational Control" },
    ] as const,
  },
};

export const AGRI_TECH_CONNECTED_LAYER = {
  title: "One Connected Operational Layer",
  center: "VerdantOS",
  supporting:
    "Connected workflows support operational awareness and better decision-making across controlled agricultural environments.",
  nodes: [
    {
      id: "water",
      label: "Water",
      description: "Circulation and flow across connected growing environments.",
    },
    {
      id: "environment",
      label: "Environment",
      description: "Zones and conditions across controlled agricultural settings.",
    },
    {
      id: "operations",
      label: "Operations",
      description:
        "Operational visibility and management across hydroponic environments.",
    },
    {
      id: "monitoring",
      label: "Monitoring",
      description:
        "Connected oversight and management across agricultural environments.",
    },
    {
      id: "control",
      label: "Control",
      description: "Management across connected agricultural environments.",
    },
    {
      id: "insights",
      label: "Insights",
      description: "Operational inputs transformed into usable decision support.",
    },
  ] as const,
};

export const AGRI_TECH_PROCESS = {
  steps: [
    {
      title: "Observe",
      description: "Real-time visibility across connected agricultural environments.",
    },
    {
      title: "Monitor",
      description:
        "Connected oversight and management across agricultural environments.",
    },
    {
      title: "Control",
      description: "Management across connected agricultural environments.",
    },
    {
      title: "Coordinate",
      description: "Workflow coordination across agricultural service operations.",
    },
    {
      title: "Optimize",
      description: "Decision support and process optimization.",
    },
    {
      title: "Operate",
      description: "Centralized access and operational coordination.",
    },
  ] as const,
};

export const AGRI_TECH_WHY = {
  headline: "From Monitoring To Operational Clarity",
  statements: [
    "Real-Time Visibility",
    "Connected Operations",
    "Intelligent Decisions",
    "Process Optimization",
    "Operational Efficiency",
  ] as const,
};

export const AGRI_TECH_ENGAGEMENT = {
  title: "Built Around Your Operations",
  body: "Planetive supports organizations exploring connected agricultural infrastructure through configurable digital experiences and operational intelligence.",
  primary: "Start A Conversation",
  secondary: "Explore Ecosystem",
};

export const AGRI_TECH_ECOSYSTEM = {
  title: "Part Of The Planetive Ecosystem",
  description:
    "Agri Tech Solutions extends Planetive's work in resilient development, digital agriculture, and connected operational infrastructure.",
};
