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
  /** Global engagement photo — color, on-stage advisory context */
  heroImage: "/images/global-engagements/ICCI--DUBAI.jpg",
  heroImagePosition: "50% 35%",
  focusAreas: [
    { label: "Clean Energy", icon: Sun },
    { label: "Climate Change", icon: Leaf },
    { label: "Clean Water", icon: Droplets },
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
      "Agnes is a leader in financial and emerging technology markets, with a decade at BlackRock advising regulators and managing complex portfolios, and later roles at ConsenSys building relationships across global financial institutions and government bodies.",
    ],
  },
  {
    id: "mustapha",
    name: "Mustapha Mokass",
    role: "Advisor",
    group: "advisors",
    image: teamImg("mustapha-mokass.jpg"),
    bio: [
      "Mustapha is Founder and CEO of Climate Finance Group, mobilizing investment for agriculture and large-scale renewable energy. A HEC Paris graduate and visiting professor, he has founded sustainability ventures across climate finance, waste-to-energy, and off-grid solar.",
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
      "Dr. Ali Adnan Ibrahim leads sustainable transformation in Riyadh and previously headed social and sustainable finance at Al Baraka Banking Group. A Fulbright Scholar and WEF Young Global Leader, he advises on Islamic finance and sustainable fintech in the Gulf.",
    ],
  },
  {
    id: "han",
    name: "Han Yik",
    role: "Advisor",
    group: "advisors",
    image: teamImg("han-yik.jpg"),
    bio: [
      "Han Yik is Managing Partner of Strategic Focus Investments and advises asset managers and think tanks on ESG, capital markets, and long-term investment strategy. He formerly led institutional investor engagement at the World Economic Forum and institutional portfolio strategy at Bank of America Merrill Lynch.",
    ],
  },
  {
    id: "malak",
    name: "Malak Al Akiely",
    role: "Advisor",
    group: "advisors",
    image: teamImg("malak-al-akiely.png"),
    bio: [
      "Malak Al Akiely is a commodities and business development leader focused on food security and sustainable agriculture across the MENA region. A World Economic Forum Young Global Leader, she contributes to Jordan's economic forums and entrepreneurship councils while advising on grains, energy, and renewables markets.",
    ],
  },
  {
    id: "hira",
    name: "Hira Mumtaz",
    role: "Consultant",
    group: "team",
    image: teamImg("hira-mumtaz.jpg"),
    bio: [
      "Hira Mumtaz is an energy and climate professional and Fulbright Scholar with a master's in energy policy from the University of Michigan. She consults across Pakistan, Asia, the US, and UK on energy policy, renewables, climate finance, and carbon markets.",
    ],
  },
  {
    id: "kamal",
    name: "Kamal Rahim",
    role: "Head of Strategy & Growth",
    group: "team",
    image: teamImg("kamal-rahim.jpg"),
    bio: [
      "Kamal Rahim leads strategy and growth at Planetive, with a decade in energy and industrial digitization spanning power, ports, and digital twin solutions. A mechanical engineer and HBR Advisory Council member.",
    ],
  },
  {
    id: "maha",
    name: "Maha Kamal",
    role: "Consultant",
    group: "team",
    /* CDN asset fdf9f09 is Rija Zahid’s photo, not Maha — omit until a verified portrait is available */
    bio: [
      "Maha Kamal is a climate governance and policy specialist with expertise in SDGs and the Paris Agreement. A Chevening Scholar and World Economic Forum Global Shaper, she writes and speaks on energy and climate policy and co-chairs Women in Energy Pakistan.",
    ],
  },
  {
    id: "umair",
    name: "Umair Hussian Farooqi",
    role: "Financial Analyst",
    group: "team",
    image: teamImg("umair-farooqi.jpeg"),
    bio: [
      "Umair Hussian Farooqi is a financial analyst with seven years in banking, audit, and accounts. He delivers financial analysis, planning, and regulatory compliance support that helps teams forecast trends and improve performance.",
    ],
  },
  {
    id: "zainab",
    name: "Zainab Ahmed",
    role: "Business Analyst",
    group: "team",
    image: teamImg("zainab-ahmed.jpg"),
    bio: [
      "Zainab Ahmed is a business analyst with a background in business finance, data analytics, and sustainable finance. She supports research, financial analysis, strategy, and proposal development across corporate and development-sector engagements.",
    ],
  },
  {
    id: "shahid",
    name: "Shahid Jamal",
    role: "Carbon Credit and Sustainable Agriculture Specialist",
    group: "team",
    image: teamImg("shahid-jamal.jpeg"),
    imagePosition: "52% center",
    bio: [
      "Shahid Jamal specializes in carbon credits and sustainable agriculture, researching mechanisms, regenerative practices, and carbon sequestration to support climate mitigation and compliance with international standards.",
    ],
  },
];

export const PARTNER_LOGOS = [
  { name: "The DO", src: partnerImg("the-do-logo.png") },
  { name: "LUMS", src: partnerImg("lums-logo.png") },
  { name: "Spurt", src: partnerImg("spurt-logo.png") },
  { name: "Mezzan", src: partnerImg("mezzan-logo.jpeg") },
  { name: "Hawkamah", src: partnerImg("hawkamah-logo.png") },
  { name: "RELP", src: partnerImg("relp-logo.png") },
  { name: "IEF", src: partnerImg("ief-logo.png") },
] as const;
