import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Compass,
  Cpu,
  GraduationCap,
  Leaf,
  Banknote,
  Network,
  Sun,
  Layers,
} from "lucide-react";

/** Topic-specific photos in public/images/what-we-do/ (one image per lens / service area). */
export function whatWeDoLocalImage(file: string) {
  return `/images/what-we-do/${file}`;
}

export const WHAT_WE_DO_HERO = {
  title: "What We Do",
  subtitle: "Empowering Sustainable Future",
  intro:
    "Planetive bridges strategy, capital, and implementation — helping businesses and projects integrate sustainable models from planning through execution.",
};

export type PillarPageLayout = "editorial" | "cinematic" | "split" | "magazine";

export type EcosystemPillar = {
  id: string;
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
  body: string[];
  capabilities: string[];
  outcomes: { value: string; label: string }[];
  image: string;
  /** CSS object-position for the hero/feature image */
  imagePosition?: string;
  layout: PillarPageLayout;
  icon: LucideIcon;
  relatedServiceIds: string[];
  /** Donut segment fill */
  color: string;
  /** Active / hover accent */
  colorActive: string;
};

/** Four ecosystem lenses from the Planetive brand deck (simplified from nine products). */
export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: "advisory",
    title: "Advisory & project development",
    shortLabel: "Advisory",
    tagline: "Strategy to execution on the ground",
    description:
      "From strategy through execution, we design and deliver high-impact decarbonisation work — end-to-end advisory, project structuring, and on-the-ground delivery for enterprises and markets in transition.",
    body: [
      "Planetive advisors work across clean energy, climate finance, carbon markets, and ESG — aligning boards, investors, and operators around measurable transition pathways rather than slide-deck promises.",
      "We structure mandates for the Middle East, Pakistan, and global partners: feasibility, stakeholder mapping, capital readiness, and implementation oversight so projects move from intent to audited impact.",
    ],
    capabilities: [
      "Project development from concept to execution",
      "Sustainability advisory and implementation planning",
      "Stakeholder alignment across policy, capital, and operations",
    ],
    outcomes: [
      { value: "End-to-end", label: "Mandate coverage" },
      { value: "Global", label: "Advisor network" },
      { value: "ESG / SDG", label: "Aligned delivery" },
    ],
    image: whatWeDoLocalImage("advisory.jpg"),
    imagePosition: "50% 30%",
    layout: "editorial",
    icon: Compass,
    relatedServiceIds: ["carbon", "finance", "energy"],
    color: "#0A3D2E",
    colorActive: "#1A6B4A",
  },
  {
    id: "technology",
    title: "Technology platforms",
    shortLabel: "Platforms",
    tagline: "Climate data with audit-grade rigor",
    description:
      "Digitized engines for decarbonization, carbon markets, agriculture, finance, and supply chains — so climate and business data move together with audit-grade rigor.",
    body: [
      "Our platform lens connects enterprise decarbonization intelligence, digitized MRV for carbon capture and storage, climate-smart agriculture, and unified finance ecosystems into one coherent operating picture.",
      "Whether you are issuing credits, tracing supply chains, or reporting to regulators, the goal is the same: trustworthy data that teams can act on — not spreadsheets scattered across vendors.",
    ],
    capabilities: [
      "End-to-end decarbonization intelligence for enterprises",
      "Digitized MRV for carbon capture and storage systems",
      "Climate-smart agriculture and unified finance ecosystems",
      "Marketplaces for decarbonized supply chains",
    ],
    outcomes: [
      { value: "MRV", label: "Digitized assurance" },
      { value: "Unified", label: "Finance & ag data" },
      { value: "Market", label: "Decarbonized supply chains" },
    ],
    image: whatWeDoLocalImage("platforms.jpg"),
    imagePosition: "50% 40%",
    layout: "cinematic",
    icon: Layers,
    relatedServiceIds: ["carbon", "energy"],
    color: "#1A6B4A",
    colorActive: "#2ECC8A",
  },
  {
    id: "agents",
    title: "AI agents",
    shortLabel: "AI agents",
    tagline: "Portfolios that stay visible and actionable",
    description:
      "In-house agents that track opportunities, manage partnerships, and support human resources — keeping complex sustainability portfolios visible and actionable.",
    body: [
      "Sustainability work spans dozens of stakeholders, markets, and timelines. Our agent layer surfaces the right opportunity, partner, or risk before it gets lost in email — so humans focus on judgment, not hunting.",
      "From mandate tracking and partnership CRM to workforce coordination, agents are built in-house and tuned to how Planetive actually delivers — not generic chatbots bolted onto legacy tools.",
    ],
    capabilities: [
      "Opportunity tracking across markets and mandates",
      "Partnership and relationship management",
      "HR and workforce systems aligned to delivery",
    ],
    outcomes: [
      { value: "24/7", label: "Portfolio visibility" },
      { value: "In-house", label: "Built for delivery" },
      { value: "Faster", label: "Partner & deal flow" },
    ],
    image: whatWeDoLocalImage("agents.jpg"),
    imagePosition: "50% 45%",
    layout: "split",
    icon: Bot,
    relatedServiceIds: ["governance"],
    color: "#157A52",
    colorActive: "#3DD99A",
  },
  {
    id: "programs",
    title: "Connecting programs",
    shortLabel: "Programs",
    tagline: "Talent and collaboration for transition",
    description:
      "Programs that build the skilled workforce and cross-border collaboration needed for the clean energy transition — connecting talent, teams, and markets.",
    body: [
      "The energy transition needs people as much as projects. Our programs connect fellows, champions, and institutional partners across regions — building pipelines of talent who understand sustainability in practice.",
      "From workforce development and summer intensives to cross-border knowledge exchange with global forums and universities, programs are how Planetive scales impact beyond a single advisory mandate.",
    ],
    capabilities: [
      "Workforce development for the energy transition",
      "Cross-market collaboration and knowledge exchange",
      "Capacity building with global partners",
    ],
    outcomes: [
      { value: "Fellows", label: "Graduate pipeline" },
      { value: "Champions", label: "Student mentorship" },
      { value: "Global", label: "Partner network" },
    ],
    image: whatWeDoLocalImage("programs.jpg"),
    imagePosition: "50% 35%",
    layout: "magazine",
    icon: Network,
    relatedServiceIds: ["governance", "finance"],
    color: "#2A8F63",
    colorActive: "#A8F0D4",
  },
];

export const WHAT_WE_DO_ECOSYSTEM = {
  title: "The Planetive ecosystem",
  intro:
    "Select a segment to see how advisory, platforms, agents, and programs connect in a single mandate.",
};

export type WhatWeDoService = {
  id: string;
  title: string;
  /** Short line for nav dropdown and meta */
  summary: string;
  paragraphs: string[];
  image: string;
  icon: LucideIcon;
  highlight?: string;
};

export function whatWeDoServicePath(id: string) {
  return `/what-we-do/${id}` as const;
}

export function getWhatWeDoService(slug: string): WhatWeDoService | undefined {
  return WHAT_WE_DO_SERVICES.find((s) => s.id === slug);
}

export const WHAT_WE_DO_SERVICES: WhatWeDoService[] = [
  {
    id: "advisory",
    title: "Sustainability Advisory",
    summary:
      "Integrate sustainable strategy into planning, management, and execution with global advisors.",
    icon: Compass,
    image: whatWeDoLocalImage("advisory.jpg"),
    paragraphs: [
      "With all the global challenges in hand sustainability is a key for long run developments and positive impact on our planet. To achieve that, businesses and projects need to be assessed and planned in a more sustainable manner for better outcomes.",
      "Planetive has stepped in with their sustainability advisory services to help projects and businesses integrate sustainable strategies into their business planning, management and execution. We have a unique team of advisors from around the globe who have expertise in projects like clean energy, climate change, sustainable business financing a few to count.",
    ],
  },
  {
    id: "carbon",
    title: "Carbon Credit Projects",
    summary:
      "Develop, assess, and scale carbon credit and offset projects toward net-zero goals.",
    icon: Leaf,
    image: whatWeDoLocalImage("carbon.jpg"),
    paragraphs: [
      "At Planetive our aim is to facilitate companies reach their net zero emission goals to help with the climate emergencies our planet is facing today. We believe Carbon Credits and Carbon Offsets are a powerful tool to neutralize the environment and mitigate the consequences of global warming.",
      "Right now our main focus is to support companies develop their carbon credit projects and bring them in contact with various stakeholders for better market reach. Planetive provides services to businesses in project development, assessment and evaluation to minimize their carbon footprint with carbon credits and carbon offsets.",
    ],
  },
  {
    id: "finance",
    title: "Capital Raise / Climate Financing",
    summary:
      "Bridge the SDG financing gap through collaborations with local and global capital partners.",
    icon: Banknote,
    image: whatWeDoLocalImage("finance.jpg"),
    highlight: "$2.5 trillion",
    paragraphs: [
      "There is an annual $2.5 trillion financing gap to achieve the Sustainable Development Goals. Bridging this gap requires aligning the capital sources to the projects from private and public sources, and by creating tools to augment the enabling eco-system.",
      "Planetive enables sustainable financing through collaborations with local and global players.",
    ],
  },
  {
    id: "energy",
    title: "Energy Transition",
    summary:
      "Help businesses shift from fossil fuels to clean, efficient renewable energy sources.",
    icon: Sun,
    image: whatWeDoLocalImage("energy.jpg"),
    paragraphs: [
      "Planetive being the entity that promotes sustainability has been working in the energy sector for quite a time now. We believe that the clean energy concept has a lot to offer to our planet earth. The energy transition from fossil fuels to renewable energy sources is the dire need for today's world.",
      "This will not only help us combat climate change but also will be more efficient. Planetive as a team advocates for such projects and our aim is to help businesses shift to more clean and sustainable sources of energy for a better future.",
    ],
  },
  {
    id: "technology",
    title: "Emerging Technologies",
    summary:
      "Green hydrogen and clean tech — closing knowledge gaps and connecting implementation partners.",
    icon: Cpu,
    image: whatWeDoLocalImage("technology.jpg"),
    paragraphs: [
      "The drastic climate change has compelled stakeholders to come together and work on emerging technologies to tackle climate change and work for the betterment of planet earth. Clean and cost effective technologies are the key for sustainable and safe development to accomplish the net zero emission targets.",
      "Among many other solutions, Green hydrogen has the capacity to play a key role in achieving the net zero emission goal and enhancing the energy efficiency of nations around the world. At Planetive we work with different stakeholders to provide in-depth knowledge on the scope of green hydrogen to make high-scale production feasible and more cost effective.",
      "We build the knowledge gap and connect companies with partners who they can work with for a more sustainable development practice.",
    ],
  },
  {
    id: "governance",
    title: "Sustainability in Governance and Leadership",
    summary:
      "Leadership training, workshops, and knowledge for decision-makers driving systemic change.",
    icon: GraduationCap,
    image: whatWeDoLocalImage("governance.jpg"),
    paragraphs: [
      "The establishment of policies that will lead to a fairer world and economies requires accurate information. In today's information age, we strive to share knowledge that brings societies and decision makers together to act for the collective global good. With the goal of weaving a coherent story toward net sustainability, Planetive seeks to spread knowledge through its own original content, through the expertise of its experts, as well as by sharing noteworthy information from reliable sources.",
      "Moreover when it comes to implementing sustainable strategies in different spheres of a state or on global scale Governance and Leadership plays a key role. At Planetive we offer leadership training and workshops to stakeholders who have the power to actually make a difference and implement sustainable strategies for a better future.",
    ],
  },
];

export function getEcosystemPillar(slug: string): EcosystemPillar | undefined {
  return ECOSYSTEM_PILLARS.find((p) => p.id === slug);
}

export type WhatWeDoDetail =
  | { type: "pillar"; pillar: EcosystemPillar }
  | { type: "service"; service: WhatWeDoService };

/** Pillars take precedence when ids overlap (e.g. advisory, technology). */
export function getWhatWeDoDetail(slug: string): WhatWeDoDetail | undefined {
  const pillar = getEcosystemPillar(slug);
  if (pillar) return { type: "pillar", pillar };
  const service = getWhatWeDoService(slug);
  if (service) return { type: "service", service };
  return undefined;
}

/** Header dropdown — four ecosystem lenses from the donut chart */
export const WHAT_WE_DO_NAV = ECOSYSTEM_PILLARS.map((p) => ({
  to: whatWeDoServicePath(p.id),
  label: p.shortLabel,
  title: p.title,
  tagline: p.tagline,
  color: p.color,
  colorActive: p.colorActive,
  icon: p.icon,
}));

export function getRelatedServices(pillar: EcosystemPillar): WhatWeDoService[] {
  return pillar.relatedServiceIds
    .map((id) => WHAT_WE_DO_SERVICES.find((s) => s.id === id))
    .filter((s): s is WhatWeDoService => Boolean(s));
}
