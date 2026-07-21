export const AGRI_TECH_PAGE = {
  id: "agri-tech",
  eyebrow: "Planetive Ecosystem",
  title: "Transforming Agriculture Across The Full Value Chain",
  description:
    "Planetive operates at the intersection of technology, stakeholder empowerment and sustainable development through integrated agricultural solutions designed to modernize farming practices, strengthen food systems and improve economic resilience.",
  pillars: ["Agri-Co", "VERT-OS", "ECO Parks", "ACEP"] as const,
  accent: "#244c42",
  accentSoft: "#A8F0D4",
} as const;

export const AGRI_TECH_VALUE_CHAIN = {
  title: "Designed Across The Agricultural Lifecycle",
  description:
    "From planning through community impact — one connected view of how Planetive supports the full agricultural value chain.",
  stages: [
    {
      id: "pre-production",
      label: "Pre-Production",
      summary: "Plan with confidence before the season starts.",
      detail:
        "Ground decisions in soil health, seed quality, climate signals, and agronomic advice so production starts on a clear footing.",
      capabilities: [
        "Soil Testing",
        "Seed Management",
        "Climate Analysis",
        "Crop Planning",
        "Agronomic Advisory",
      ],
    },
    {
      id: "production",
      label: "Production",
      summary: "Modern growing with visibility on the ground.",
      detail:
        "Connect controlled-environment and field operations to monitoring, automation, and precision inputs in real time.",
      capabilities: [
        "Hydroponics",
        "Aeroponics",
        "IoT Monitoring",
        "Environmental Control",
        "Nutrient Dosing",
      ],
    },
    {
      id: "post-harvest",
      label: "Post-Harvest",
      summary: "Protect quality after the crop leaves the field.",
      detail:
        "Document food safety, certification, and quality so downstream buyers and regulators can trust what you deliver.",
      capabilities: ["Certification", "Food Safety", "Quality Documentation"],
    },
    {
      id: "market",
      label: "Market Linkages",
      summary: "Move product with market intelligence behind every decision.",
      detail:
        "Link pricing, supply chains, and export readiness so producers and service businesses capture value at scale.",
      capabilities: ["Market Intelligence", "Pricing", "Supply Chain", "Export", "Commerce"],
    },
    {
      id: "finance",
      label: "Finance & ESG",
      summary: "Make sustainability measurable for investors and partners.",
      detail:
        "Tie operational performance to carbon, ROI, and ESG reporting so finance and impact stay in the same conversation.",
      capabilities: ["Carbon Credits", "ROI Analytics", "ESG Reporting"],
    },
    {
      id: "community",
      label: "Community",
      summary: "Build lasting capacity beyond a single harvest.",
      detail:
        "Support enterprise development, training, and digital tools so communities can sustain modern agricultural livelihoods.",
      capabilities: ["Capacity Building", "Enterprise", "Digital Support"],
    },
  ] as const,
};

export const AGRI_TECH_AGRI_CO = {
  label: "Platform",
  title: "Agri-Co Platform",
  supportingTitle: "Cloud Platform For Agricultural Service Businesses",
  description:
    "A unified cloud platform enabling agricultural service businesses to coordinate operations, deliver advisory services and manage value chain workflows across field and enterprise teams.",
  modules: [
    "Crop Health Management",
    "Mechanization Management",
    "Live Market Insights",
    "Crop Certification",
    "Process Management",
    "ESG Reporting",
  ] as const,
  surfaces: [
    {
      title: "Web Experience",
      for: "Corporate Operations",
      description: "Centralized visibility and coordination across service operations.",
      visual: "web" as const,
    },
    {
      title: "Field Experience",
      for: "Field Operators",
      description: "Connected execution and workflow management in the field.",
      visual: "mobile-field" as const,
    },
    {
      title: "Farmer Experience",
      for: "Farmers",
      description: "Accessible agricultural services and market connectivity.",
      visual: "mobile-farmer" as const,
    },
  ] as const,
};

export const AGRI_TECH_VERT_OS = {
  label: "Controlled Environment Agriculture",
  title: "VERT-OS",
  supportingTitle: "Vertical Farm Management System",
  description:
    "Complete monitoring, automation and business intelligence for Controlled Environment Agriculture.",
  capabilityCards: [
    {
      title: "Monitoring",
      items: ["Climate", "Water", "Mist", "Shade", "UV", "Alerts"],
    },
    {
      title: "Automation",
      items: [
        "Climate Control",
        "Irrigation",
        "Nutrient Dosing",
        "pH",
        "Lighting",
        "Remote Access",
      ],
    },
    {
      title: "Business Management",
      items: ["Planning", "Certification", "Inventory", "Sales", "Economics"],
    },
    {
      title: "Analytics & Intelligence",
      items: ["Yield Prediction", "Optimization", "ROI", "Scenario Planning", "Early Warnings"],
    },
  ] as const,
  deployment: {
    title: "Integrated IoT Deployment",
    steps: ["Engineering", "Installation", "Calibration", "Training", "Support"],
    timeline: "Rapid Deployment",
    timelineDetail: "(4–5 Weeks)",
  },
  closingStatement: "Planetive also delivers turnkey greenhouse and vertical farming deployments.",
};

export const AGRI_TECH_ECO_PARKS = {
  title: "Circular Carbon Economy Infrastructure",
  description:
    "Integrated sustainability model combining micro-algae systems, wastewater treatment and agricultural reuse.",
  flow: [
    "Wastewater",
    "Micro-Algae",
    "Carbon Utilization",
    "Organic Nutrients",
    "Vertical Farming",
    "Water Reuse",
    "Carbon Credits",
  ] as const,
  outcomes: ["Organic Nutrients", "Biomass", "Water Reuse", "Carbon Credits"] as const,
  partnerNote: "Delivered with technology partners.",
};

export const AGRI_TECH_ACEP = {
  title: "Agri-Based Community Empowerment Program",
  supportingTitle: "Technology-Enabled Community Agriculture",
  description:
    "A structured initiative designed to enable communities through modern farming systems and long-term enterprise development.",
  pillars: [
    {
      title: "Modern Agriculture",
      description:
        "Deploy controlled-environment and digital agriculture systems suited to community-scale production.",
    },
    {
      title: "Capacity Building",
      description:
        "Structured training and operational support to build lasting agricultural enterprise capability.",
    },
    {
      title: "Market Linkages",
      description:
        "Connect community production to markets, pricing intelligence and supply chain pathways.",
    },
  ] as const,
  outcomes: ["Food Security", "Climate Resilience", "Health", "Enterprise"] as const,
  closingStrip: [
    "Ultra-Short Supply Chain",
    "Less Waste",
    "Higher Community Value",
    "Better Traceability",
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
