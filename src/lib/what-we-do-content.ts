import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Leaf,
  Banknote,
  Sun,
  Cpu,
  GraduationCap,
} from "lucide-react";

const SITE_IMAGES =
  "https://img1.wsimg.com/isteam/ip/51b0b378-19bd-4fd6-835c-58f6b3bbd48a";

export function whatWeDoImage(filename: string, width = 1200, height = 675) {
  return `${SITE_IMAGES}/${filename}/:/rs=w:${width},h:${height},cg:true,m/cr=w:${width},h:${height}`;
}

export const WHAT_WE_DO_HERO = {
  title: "What We Do",
  subtitle: "Empowering Sustainable Future",
  intro:
    "Planetive bridges strategy, capital, and implementation — helping businesses and projects integrate sustainable models from planning through execution.",
};

/** Ecosystem lenses (brand deck) — referenced indirectly on the page */
export const WHAT_WE_DO_ECOSYSTEM = {
  /** Woven into services intro — not shown as product names */
  context:
    "Much of our work runs through an integrated ecosystem: counsel and delivery on the ground, platforms that hold climate and finance data, agents that keep opportunities and partnerships in view, and programs that connect teams across markets — usually as part of a single engagement, not a menu of separate products.",
  /** Quiet footprint under the services heading */
  lenses: [
    "Advisory & project development",
    "Technology platforms",
    "AI agents",
    "Connecting programs",
  ],
};

export type WhatWeDoService = {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  icon: LucideIcon;
  highlight?: string;
};

export const WHAT_WE_DO_SERVICES: WhatWeDoService[] = [
  {
    id: "advisory",
    title: "Sustainability Advisory",
    icon: Compass,
    image: whatWeDoImage("ryan-shultis-pa-U_Yqnwrc-unsplash.jpg"),
    paragraphs: [
      "With all the global challenges in hand sustainability is a key for long run developments and positive impact on our planet. To achieve that, businesses and projects need to be assessed and planned in a more sustainable manner for better outcomes.",
      "Planetive has stepped in with their sustainability advisory services to help projects and businesses integrate sustainable strategies into their business planning, management and execution. We have a unique team of advisors from around the globe who have expertise in projects like clean energy, climate change, sustainable business financing a few to count.",
    ],
  },
  {
    id: "carbon",
    title: "Carbon Credit Projects",
    icon: Leaf,
    image: whatWeDoImage("blob-02887a3.png"),
    paragraphs: [
      "At Planetive our aim is to facilitate companies reach their net zero emission goals to help with the climate emergencies our planet is facing today. We believe Carbon Credits and Carbon Offsets are a powerful tool to neutralize the environment and mitigate the consequences of global warming.",
      "Right now our main focus is to support companies develop their carbon credit projects and bring them in contact with various stakeholders for better market reach. Planetive provides services to businesses in project development, assessment and evaluation to minimize their carbon footprint with carbon credits and carbon offsets.",
    ],
  },
  {
    id: "finance",
    title: "Capital Raise / Climate Financing",
    icon: Banknote,
    image: whatWeDoImage("adrien-olichon-_UuN_2ixJvA-unsplash.jpg"),
    highlight: "$2.5 trillion",
    paragraphs: [
      "There is an annual $2.5 trillion financing gap to achieve the Sustainable Development Goals. Bridging this gap requires aligning the capital sources to the projects from private and public sources, and by creating tools to augment the enabling eco-system.",
      "Planetive enables sustainable financing through collaborations with local and global players.",
    ],
  },
  {
    id: "energy",
    title: "Energy Transition",
    icon: Sun,
    image: whatWeDoImage("matt-artz-2dCdOoYDjOQ-unsplash.jpg"),
    paragraphs: [
      "Planetive being the entity that promotes sustainability has been working in the energy sector for quite a time now. We believe that the clean energy concept has a lot to offer to our planet earth. The energy transition from fossil fuels to renewable energy sources is the dire need for today's world.",
      "This will not only help us combat climate change but also will be more efficient. Planetive as a team advocates for such projects and our aim is to help businesses shift to more clean and sustainable sources of energy for a better future.",
    ],
  },
  {
    id: "technology",
    title: "Emerging Technologies",
    icon: Cpu,
    image: whatWeDoImage("markus-spiske-cTc3zW019yM-unsplash.jpg"),
    paragraphs: [
      "The drastic climate change has compelled stakeholders to come together and work on emerging technologies to tackle climate change and work for the betterment of planet earth. Clean and cost effective technologies are the key for sustainable and safe development to accomplish the net zero emission targets.",
      "Among many other solutions, Green hydrogen has the capacity to play a key role in achieving the net zero emission goal and enhancing the energy efficiency of nations around the world. At Planetive we work with different stakeholders to provide in-depth knowledge on the scope of green hydrogen to make high-scale production feasible and more cost effective.",
      "We build the knowledge gap and connect companies with partners who they can work with for a more sustainable development practice.",
    ],
  },
  {
    id: "governance",
    title: "Sustainability in Governance and Leadership",
    icon: GraduationCap,
    image: whatWeDoImage("ricardo-gomez-angel-otf25n2UETg-unsplash.jpg"),
    paragraphs: [
      "The establishment of policies that will lead to a fairer world and economies requires accurate information. In today's information age, we strive to share knowledge that brings societies and decision makers together to act for the collective global good. With the goal of weaving a coherent story toward net sustainability, Planetive seeks to spread knowledge through its own original content, through the expertise of its experts, as well as by sharing noteworthy information from reliable sources.",
      "Moreover when it comes to implementing sustainable strategies in different spheres of a state or on global scale Governance and Leadership plays a key role. At Planetive we offer leadership training and workshops to stakeholders who have the power to actually make a difference and implement sustainable strategies for a better future.",
    ],
  },
];
