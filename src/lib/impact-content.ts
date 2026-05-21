import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Banknote,
  Cpu,
  Landmark,
  Wheat,
  Users,
  FileCheck,
  ClipboardCheck,
  Recycle,
  TrendingUp,
  Globe2,
} from "lucide-react";

/** GoDaddy stock images used on planetive.org/impact-1 (same order as live site). */
export function impactStockImage(stockId: string, width = 1200, height = 675) {
  return `https://img1.wsimg.com/isteam/stock/${stockId}/:/rs=w:${width},h:${height},cg:true,m/cr=w:${width},h:${height}`;
}

export type ImpactTopic = {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  icon: LucideIcon;
  links?: { href: string; label: string }[];
  highlight?: string;
};

export const IMPACT_HERO_QUOTE = {
  text: "You cannot get through a single day without having an impact on the world around you. What you do makes a difference, and you have to decide what kind of difference you want to make.",
  attribution: "Jane Goodall",
};

export const ENERGY_TRANSITION = {
  title: "Energy Transition",
  paragraphs: [
    "We advocate for energy transition through work with policy makers and leading global organizations and platforms. The world needs a rapid energy transition including reduction of emissions, providing cleaner technologies, sustainable energy generation, and provision of affordable energy. Our work is aimed towards net zero emissions by 2050.",
  ],
  image: impactStockImage("10480"),
};

export const IMPACT_TOPICS: ImpactTopic[] = [
  {
    id: "businesses",
    title: "Enabling Sustainable Businesses",
    icon: Building2,
    image: impactStockImage("5lRnKOR"),
    paragraphs: [
      "The private sector has a huge role to play in sustainability. Businesses by aligning their operations, supply chains and processes with sustainability yielding not only financial but social returns as well.",
      "Planetive knowledge platform advocates for providing awareness and important information to drive businesses towards sustainable models.",
    ],
  },
  {
    id: "finance",
    title: "Enabling Sustainable Finance",
    icon: Banknote,
    image: impactStockImage("2628"),
    highlight: "USD 2.5 trillion",
    paragraphs: [
      "The annual SDG financing gap is USD 2.5 trillion. Routing the pool of capital towards promoting and scaling projects that achieve SDGs and ESGs requires an enabling financial eco system with private capital, multilateral and government funding, insurance, guarantees and policies.",
      "The sustainability funding gap requires stakeholders to act!!",
    ],
  },
  {
    id: "technology",
    title: "Digital and Emerging Sustainable Technologies",
    icon: Cpu,
    image: impactStockImage("14366"),
    paragraphs: [
      "Technology and innovation have the ability to expedite achieving the SDG and ESG goals through energy efficiency, smarter building designs, waste reduction, resource and bio diversity conservation, using data and digital technologies.",
      "Government and private sector have to ensure the full utilization of disruptive and innovative technologies. This also goes for the widespread availability of information on latest technology that can be adopted and customized to other areas like AI for good, drones for agriculture, EVs, digital for: healthcare, water security, weather and disaster management to name a few.",
    ],
  },
  {
    id: "infrastructure",
    title: "Sustainable Infrastructure",
    icon: Landmark,
    image: impactStockImage("3ARZDB"),
    paragraphs: [
      "Infrastructure of the future has to be aligned with the sustainability goals. A resilient & well-planned infrastructure can play a huge role in climate mitigation, preparedness and adaptation. Sustainable infrastructure forms the base of sustainable economies and societies.",
      "We advocate for a lifecycle approach of creating sustainable infrastructure measuring every molecule and node.",
    ],
  },
  {
    id: "agriculture",
    title: "Sustainable Agriculture",
    icon: Wheat,
    image: impactStockImage("y6rNnwP"),
    paragraphs: [
      "Global food security and resource management makes Sustainable Agriculture a key priority — an absolute must for the present and the future generations through efficient use of resources and the deployment of technology for improving food and agricultural goods production.",
      "The interconnectedness of global food supply chains require a cohesive action across local and international agricultural markets to adopt sustainable management of land, water and natural resources. Planetive supports policy makers and regulators to ensure policies sustainable agricultural; and at the same time the private sector be it investors or technology providers have to play their significant part.",
    ],
  },
  {
    id: "employability",
    title: "Sustainability & Employability",
    icon: Users,
    image: impactStockImage("8607"),
    links: [
      {
        href: "https://www.un.org/sustainabledevelopment/blog/2019/04/green-economy-could-create-24-million-new-jobs/",
        label: "ILO: 24 million new jobs by 2030",
      },
      {
        href: "https://www.irena.org/newsroom/pressreleases/2020/Jan/Energy-Transformation-Can-Create-More-than-40m-Jobs-in-Renewable-Energy",
        label: "IRENA: 40M+ renewable energy jobs by 2050",
      },
    ],
    paragraphs: [
      "International Labour Organization estimates that by 2030 a shift towards green economy could create 24 million new jobs. IRENA estimates that renewable energy could employ more than 40 million people by 2050.",
      "The goal ahead for many countries including Pakistan is to move towards sustainability while creating social, environmental and economic benefits.",
    ],
  },
  {
    id: "sdg-policies",
    title: "SDG Implementation Policies",
    icon: FileCheck,
    image: impactStockImage("3521"),
    paragraphs: [
      "The developing economies need higher level of public private partnership due to limited resources available with the governments. It thus becomes important to involve key stakeholders through provision of enabling policies and eco system.",
      "Our active advocacy is focused towards promoting SDG and ESG aligned polices and the governance mechanism around the same.",
    ],
  },
  {
    id: "assessment",
    title: "Impact Assessment",
    icon: ClipboardCheck,
    image: impactStockImage("jamN8gk"),
    paragraphs: [
      "Impact assessment is a continuous process throughout the journey of a project lifecycle. Globally stakeholders are demanding more transparency for informed decision making and evaluating impact.",
      "As an outcome businesses too are reconsidering their operations due to the increased awareness of consumers, investors and key stakeholders to include ESG factors in their operations and investments. At Planetive we work with stakeholders to set their path for sustainable value creation and measure the impact along the way.",
    ],
  },
  {
    id: "circular",
    title: "Circular Economy",
    icon: Recycle,
    image: impactStockImage("8609"),
    paragraphs: [
      "In the world of everything sustainable, circular economy plays an essential role in maintaining healthy levels of natural resources, reducing the build-up of waste and at the same time a key driver of economic growth through financial savings and job creation. While the United Nations expects the human population to reach 9.6 billion by 2050, global resources are decreasing; water scarcity, increasing solid waste, deforestation, and threat to the ocean life are giving rise to an environmental and existential crisis.",
      "Resource extraction and processing leads to 90% global biodiversity loss and water stress. By 2060 the annual global extraction would reach up to 143 billion tonnes. It is extremely crucial that the world needs to diverge from the linear model of production 'extract-make-use-dispose' and adopt recycling and reuse to form a circular model of production.",
      "Circular economy ensures smart and sustainable use of natural resource till the last mile, ensuring sustainability and minimizing environmental damage. With better resource management we can preserve natural capital by optimizing resource use with circularity.",
      "Planetive engages with the public & private sector organisations in raising awareness and devising policies through insights that can give boost to the circular economy, help integrate resource management and bring efficiencies in production, consumption and infrastructure sectors with an aim to achieve sustainability. We also engage with innovators and entrepreneurs who are creating technologies and innovations to leap frog circular economy.",
    ],
  },
  {
    id: "investing",
    title: "Impact Investing",
    icon: TrendingUp,
    image: impactStockImage("2628"),
    highlight: "USD 715 billion",
    paragraphs: [
      "Investors around the world have realized that now is the time for mindful investing that generates a positive social, environmental returns alongside and financial returns. The Global Impact Investing Network estimates a total global impact investing market size of USD 715 billion.",
      "The available impact capital can scale projects addressing global challenges in areas such as agriculture, clean energy, food supply chains, healthcare, and financial inclusions.",
    ],
  },
  {
    id: "planetive",
    title: "Planetive & Impact",
    icon: Globe2,
    image: impactStockImage("5lRnKOR"),
    paragraphs: [
      "Planetive aims to put Pakistan on the map of sustainable development while working with stakeholders and partners to bring prosperity, transparency, and highlighting SDG opportunities.",
      "Pakistan has pledged to make the Sustainable Development Goals a national agenda and Planetive is working with key actors to spread awareness and create enabling atmosphere for impact investment in the country.",
    ],
  },
];

export const IMPACT_MARKET_STAT = {
  value: "$1.571 trillion",
  year: "2024",
  source: "GIIN",
  label: "Impact Investment market size",
};
