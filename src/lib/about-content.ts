import type { LucideIcon } from "lucide-react";
import { Banknote, Droplets, Leaf, Sun } from "lucide-react";

/** Local copies in public/images/about/ (from planetive.org/about-us) */
const teamImg = (file: string) => `/images/about/team/${file}`;
const partnerImg = (file: string) => `/images/about/partners/${file}`;

export const ABOUT_INTRO = {
  eyebrow: "Enabling Sustainable Development",
  title: "About Us",
  summary:
    "Planetive is an advisory firm that provides consultancy in areas of Clean Energy, Climate Change, Clean Water, Sustainable Finance and Business Sustainability, to stakeholders from around the globe with key focus on the Middle East and Pakistan.",
  body: "At Planetive we contribute towards the global ESG/SDG goals by supporting companies to reach their net-zero targets and bridging the capital gap of sustainability projects as well as project assessment and evaluations. Planetive team is determined to make a positive global change by working on the shared goal of a sustainable and greener world, economy and society with support of our advisors from different parts of the world.",
  /** Mission map — Dubai & Islamabad locations */
  missionMapImage: "/images/about/partners/Location%20.png",
  focusAreas: [
    { label: "Clean Energy", icon: Sun },
    { label: "Climate Change", icon: Leaf },
    { label: "Decarbonization", icon: Droplets },
    { label: "Sustainable Finance", icon: Banknote },
  ] as { label: string; icon: LucideIcon }[],
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  group: "leadership" | "advisors" | "team";
  image?: string;
  /** CSS object-position for portrait framing (e.g. "70% center") */
  imagePosition?: string;
  /** Zoom factor for full-body or wide shots (container clips overflow) */
  imageScale?: number;
  bio: string[];
  link?: { href: string; label: string };
};

/** Order matches planetive.org/about-us carousel / bios */
export const TEAM: TeamMember[] = [
  {
    id: "ayla",
    name: "Ayla Majid",
    role: "Founder & CEO",
    group: "leadership",
    image: teamImg("ayla-majid.jpg"),
    imagePosition: "50% 18%",
    link: {
      href: "https://www.weforum.org/people/ayla-majid/",
      label: "World Economic Forum — read her blogs",
    },
    bio: [
      "Ayla is the founder of Planetive and a Young Global Leader at the World Economic Forum, where she serves on the Global Future Council on Energy. She advances energy transition, sustainable finance, and inclusive economic opportunity through public and private board roles, policy advocacy, and writing on energy, digital transformation, and diversity.",
    ],
  },
  {
    id: "agnes",
    name: "Agnes Budzyn",
    role: "Advisor",
    group: "advisors",
    image: teamImg("agnes-budzyn.jpg"),
    bio: [
      "Agnes advises on finance and emerging technology strategy. She has led institutional and regulatory engagement across BlackRock and ConsenSys.",
    ],
  },
  {
    id: "mustapha",
    name: "Mustapha Mokass",
    role: "Advisor",
    group: "advisors",
    image: teamImg("mustapha-mokass.jpg"),
    bio: [
      "Mustapha is Founder and CEO of Climate Finance Group. He works on climate investment in renewable energy and sustainable infrastructure.",
    ],
  },
  {
    id: "ali",
    name: "Dr. Ali Adnan Ibrahim",
    role: "Advisor",
    group: "advisors",
    image: teamImg("ali-adnan-ibrahim.jpg"),
    imagePosition: "center center",
    bio: [
      "Dr. Ali Adnan Ibrahim leads sustainable transformation initiatives in Riyadh. He advises on Islamic finance, sustainable banking, and fintech in the Gulf.",
    ],
  },
  {
    id: "han",
    name: "Han Yik",
    role: "Advisor",
    group: "advisors",
    image: teamImg("han-yik.jpg"),
    bio: [
      "Han Yik advises on ESG, capital markets, and long-term investment strategy. He has held leadership roles at the World Economic Forum and Bank of America Merrill Lynch.",
    ],
  },
  {
    id: "malak",
    name: "Malak Al Akiely",
    role: "Advisor",
    group: "advisors",
    image: teamImg("malak-al-akiely.png"),
    bio: [
      "Malak Al Akiely focuses on food security, commodities, and sustainable agriculture in MENA. She advises on energy and renewables markets.",
    ],
  },
  {
    id: "kamal",
    name: "Kamal Rahim",
    role: "Head of Strategy & Growth",
    group: "team",
    image: teamImg("kamal-rahim.jpg"),
    bio: [
      "Kamal Rahim leads strategy and growth at Planetive. He has experience across energy, industrial digitization, and infrastructure sectors.",
    ],
  },
  {
    id: "umair",
    name: "Umair Hussian Farooqi",
    role: "Financial Analyst",
    group: "team",
    image: teamImg("umair-farooqi.jpeg"),
    bio: [
      "Umair Hussian Farooqi is a financial analyst with experience in banking, audit, and accounts. He supports planning, reporting, and compliance.",
    ],
  },
  {
    id: "zainab",
    name: "Zainab Ahmed",
    role: "Business Analyst",
    group: "team",
    image: teamImg("zainab-ahmed.jpg"),
    imagePosition: "50% 58%",
    bio: [
      "Zainab Ahmed is a business analyst focused on finance and sustainability projects. She supports research, analysis, and strategy development.",
    ],
  },
  {
    id: "shahid",
    name: "Shahid Jamal",
    role: "Carbon Credit and Sustainable Agriculture Specialist",
    group: "team",
    image: teamImg("shahid-jamal.jpeg"),
    imagePosition: "50% 28%",
    imageScale: 1.55,
    bio: [
      "Shahid Jamal specializes in carbon credits and sustainable agriculture. He works on regenerative practices and carbon sequestration initiatives.",
    ],
  },
  {
    id: "farhan",
    name: "Farhan Hassan Rizvi",
    role: "Product Engineer",
    group: "team",
    bio: [
      "Farhan Hassan Rizvi is a product engineer focused on building practical climate-tech solutions. He works across product development, implementation, and continuous improvement.",
    ],
  },
  {
    id: "haram",
    name: "Haram Saad",
    role: "Business Analyst",
    group: "team",
    bio: [
      "Haram Saad is a business analyst supporting sustainability-focused initiatives. She contributes to research, data analysis, and project planning.",
    ],
  },
  {
    id: "hira",
    name: "Hira Mumtaz",
    role: "Consultant",
    group: "team",
    image: teamImg("hira-mumtaz.jpg"),
    bio: [
      "Hira Mumtaz is an energy and climate consultant. She works on energy policy, renewables, climate finance, and carbon markets.",
    ],
  },
  {
    id: "maha",
    name: "Maha Kamal",
    role: "Consultant",
    group: "team",
    /* CDN asset fdf9f09 is Rija Zahid’s photo, not Maha — omit until a verified portrait is available */
    bio: [
      "Maha Kamal is a climate governance and policy specialist. Her work focuses on SDGs, energy transition, and climate policy.",
    ],
  },
];

export const PARTNER_LOGOS = [
  {
    name: "The DO",
    src: partnerImg("the-do-logo.png"),
    description: "A global platform for purpose-driven leadership and systems change.",
  },
  {
    name: "LUMS",
    src: partnerImg("lums-logo.png"),
    description: "A leading university advancing research, policy dialogue, and innovation.",
  },
  {
    name: "Pakistan Regional Economic Forum",
    src: partnerImg("PREF.jpg"),
    description: "A regional forum promoting economic cooperation and strategic policy exchange.",
  },
  {
    name: "Mezzan",
    src: partnerImg("mezzan-logo.jpeg"),
    description: "A financial services partner supporting investment and sustainable growth.",
  },
  {
    name: "Hawkamah",
    src: partnerImg("hawkamah-logo.png"),
    description: "A regional institute focused on governance, risk, and board effectiveness.",
  },
  {
    name: "RELP",
    src: partnerImg("relp-logo.png"),
    description: "A clean energy initiative enabling policy, risk, and project readiness.",
  },
  {
    name: "IEF",
    src: partnerImg("ief-logo.png"),
    description:
      "An international platform connecting energy producers and consumers for dialogue.",
  },
] as const;
