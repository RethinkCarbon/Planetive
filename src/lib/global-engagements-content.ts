/** Local copies in public/images/global-engagements/ (from planetive.org, no fx-gs grayscale) */
const IMG_VERSION = "15";
const img = (file: string) => `/images/global-engagements/${file}?v=${IMG_VERSION}`;

export type GlobalEngagement = {
  id: string;
  event: string;
  headline: string;
  body: string[];
  image: string;
  /** Optional rotating gallery for card media */
  images?: string[];
  /** Year label for cross-section year filters */
  year?: number;
  /** CSS object-position for card image framing */
  imagePosition?: string;
  /** Zoom factor to crop letterboxing (container clips overflow) */
  imageScale?: number;
  relatedArticle?: string;
};

export type GlobalEngagementSection = {
  id: string;
  kind: "grid" | "highlight";
  /** Section heading (year label or team milestone title) */
  title: string;
  subtitle?: string;
  year?: number;
  /** Team milestone banner image */
  image?: string;
  /** Optional rotating gallery for team milestone banners */
  images?: string[];
  items?: GlobalEngagement[];
};

export const GLOBAL_ENGAGEMENTS_HERO = {
  eyebrow: "Empowering Sustainable Future",
  title: "Global Engagement Snapshots",
  summary:
    "Highlights from Planetive and Ayla Majid’s participation in climate, energy, finance, and leadership forums across Pakistan, MENA, and global capitals.",
};

export const GLOBAL_ENGAGEMENT_SECTIONS: GlobalEngagementSection[] = [
  {
    id: "year-2025",
    kind: "grid",
    title: "2025",
    subtitle: "Climate, energy & ESG leadership",
    year: 2025,
    items: [
      {
        id: "pcc-2025",
        event: "Launch of 3rd PCC (Pakistan Climate Conference) Report, 2025",
        headline: "Shaping Pakistan’s Climate Future with Private Sector Leadership",
        image: img("shaping-pakistan-climate-future-private-sector-leadership.png"),
        body: [
          "At the launch of the 3rd Pakistan Climate Conference Report by OICCI and SDPI, Ayla Majid, Founder & CEO of Planetive emphasized the urgent role of the private sector in achieving Pakistan’s NDC 3.0 targets ahead of COP 30. She highlighted the need for ESG transparency, innovative green finance, and collaboration to bridge the US$200 billion climate finance gap by 2030. Her focus was on strengthening supply chains, promoting a circular economy, and fostering a resilient ecosystem to drive Pakistan’s climate future forward.",
          "Under her leadership, Planetive is advancing ESG frameworks, green finance solutions, and capacity building to drive a resilient, low-carbon future.",
        ],
      },
      {
        id: "ief-carbon-hydrogen-nov-2025",
        event:
          "International Energy Forum (IEF) — Co-hosted with the IEF Seminar on Energy Market Transparency and JODI, November 2025",
        headline: "Building Carbon Management and Hydrogen Markets",
        image: img("building-carbon-management-hydrogen-markets-nov-2025.jpg"),
        body: [
          "Innovation and Technology Readiness — Building Scale & Patenting Breakthroughs",
          "Ayla Majid participated as a panel speaker at the International Energy Forum (IEF), contributing to discussions on carbon management, CCUS, circular carbon economy, carbon markets, and innovative business models to accelerate affordable decarbonization through public-private collaboration and market-driven investment.",
        ],
      },
      {
        id: "ief-carbon-markets-2025",
        event: "International Energy Forum (IEF), June 2025",
        headline: "Building Markets to Scale Carbon Management Solutions",
        image: img("ief-june-2025.jpg"),
        images: [img("ief-june-2025.jpg"), img("ief-june-2025-2.jpg")],
        body: [
          "Building Carbon Management and Hydrogen Markets",
          "Ayla Majid, CEO & Founder of Planetive and Global President of ACCA, joined global energy leaders as a speaker at the International Energy Forum (IEF) Roundtable on Building Carbon Management and Hydrogen Markets, discussing technology readiness, innovation, financing, and international collaboration to accelerate scalable carbon management and hydrogen value chains.",
        ],
      },
      {
        id: "ief-stabilizing-markets-2025",
        event: "International Energy Forum (IEF), February 2025",
        headline: "Stabilizing Energy Markets in a Disrupted World",
        image: img("stabilizing-energy-markets-feb-2025.jpg"),
        images: [
          img("stabilizing-energy-markets-feb-2025.jpg"),
          img("stabilizing-energy-markets-feb-2025-2.jpg"),
          img("stabilizing-energy-markets-feb-2025-3.jpg"),
        ],
        body: [
          "Critical Minerals: The New Foundations for a Clean, Resilient and Competitive Global Energy System",
          "As a panel speaker at the International Energy Forum (IEF), Ayla Majid joined international policymakers and industry leaders to discuss the integration of clean electrons, low-carbon molecules, critical minerals, artificial intelligence, and resilient energy systems to strengthen energy security while advancing affordable and sustainable decarbonization.",
        ],
      },
      {
        id: "ief-paris-2025",
        event: "International Energy Forum, Industry Advisory Council Meeting, Paris 2025",
        headline: "Exploring Market Driven Pathways for Global Decarbonization",
        image: img("exploring-market-driven-pathways-global-decarbonization.png"),
        body: [
          "Planetive’s Founder & CEO, Ayla Majid, was invited to speak at the International Energy Forum (IEF) Industry Advisory Council Meeting 2025 in Paris, where she joined global leaders to discuss market-driven pathways for decarbonization. Speaking on the theme “Matching Carbon Management with Market Solutions for Affordable Decarbonization,” Ayla emphasized the need for scalable, inclusive carbon management systems backed by strong policy and investment signals.",
          "Key insights included the growth of carbon markets, the evolving global CCUS landscape, and innovative models like Storage-as-a-Service. Ayla underscored the importance of aligning carbon pricing with investment certainty to make decarbonization viable in high-growth regions. Planetive remains committed to driving practical, fair, and forward-looking solutions for a just energy transition.",
        ],
      },
      {
        id: "acoa-2025",
        event: "Empowering Workforce Development & Economic Growth (ACOA), Kigali 2025",
        headline: "Shaping Africa’s Future: Workforce Innovation Meets Climate Action",
        image: img("shaping-africas-future-workforce-innovation-meets-climate-action.png"),
        body: [
          "At ACOA2025, Planetive’s CEO & Founder Ayla Majid emphasized the need to align workforce development with sustainable growth and climate action, positioning Africa as a leader in responsible investment. Citing ACCA’s upcoming Global Trends Report 2025, she outlined five forces shaping the future of work: technology, geo-economic shifts, economic uncertainty, demographic change, and climate impact.",
          "Notably, 80% of African accounting professionals aim to become entrepreneurs—far above the global average of 52%—with nearly half already managing side ventures. Ayla highlighted the crucial role of financial professionals in driving innovation, sustainability, and long-term value in Africa’s evolving economy.",
          "In support of this vision, Planetive is actively working to bridge the gap between climate ambition and economic opportunity by fostering green skills, advancing carbon market solutions, and promoting climate-resilient entrepreneurship across emerging economies.",
        ],
      },
      {
        id: "liibs-2025",
        event: "Leaders In Islamabad Business Summit (LIIBS), 2025",
        headline: "Navigating the Unknown — Climate & Sustainability",
        image: img("navigating-the-unknown-climate-sustainability.png"),
        body: [
          "Ayla Majid, Planetive Founder & CEO, contributed her expertise to the 8th Leaders in Islamabad Business Summit (LIIBS) 2025, a premier platform for global and national leaders navigating the future amidst global shifts.",
          "As a panelist on the Climate and Sustainability session, Ayla emphasized the urgent need for bold climate action, the critical role of increased clean energy investment, the concerning rise in global CO₂ emissions, and the imperative for equitable clean energy transitions in emerging markets. This participation underscores Planetive's commitment to driving sustainable solutions through strategic ESG advisory, green finance innovation, and national upskilling initiatives, all aimed at supporting net-zero targets and fostering impactful climate partnerships for a sustainable future.",
        ],
      },
      {
        id: "acca-bhc-2025",
        event: "ACCA & British High Commission on ESG and Climate Action in Pakistan, 2025",
        headline: "Strengthening ESG Frameworks for Sustainable Growth 2025",
        image: img("strengthening-esg-frameworks-sustainable-growth-2025.png"),
        imageScale: 1.42,
        imagePosition: "50% 48%",
        body: [
          "Planetive Founder & CEO, Ayla Majid, in her role as President of ACCA, actively participated in a significant meeting alongside ACCA Chief Executive Helen Brand and the ACCA Pakistan leadership team with Jo Moir, Development Director at the British High Commission in Pakistan.",
          "The focused discussion centered on catalyzing sustainable growth within Pakistan. Key areas addressed included the fortification of Environmental, Social, and Governance (ESG) frameworks, the advancement of robust climate action policies, the enhancement of public financial management practices, and the cultivation of youth development initiatives. This engagement underscores Planetive's unwavering commitment to contributing to impactful dialogues that shape a sustainable and prosperous future on a global scale.",
        ],
      },
      {
        id: "pmif-2025",
        event: "Pakistan Minerals Investment Forum (PMIF), 2025",
        headline: "Sustainability and Climate Leadership at PMIF 2025",
        image: img("sustainability-climate-leadership-pmif-2025.png"),
        body: [
          "Planetive Founder and CEO, Ayla Majid, participated as a panelist at the Pakistan Minerals Investment Forum Summit 2025, joining global leaders to shape the future of Pakistan’s $6 trillion mineral economy.",
          "Speaking on Social License, Sustainability, and Climate Leadership in Mining, Ayla emphasized community-driven development, stakeholder partnerships, and the financial benefits of ESG integration, including improved IRRs and access to green financing. She advocated for responsible finance mechanisms like green bonds and Panda bonds to enable sustainable growth. Planetive remains committed to advancing ESG advisory, pioneering green finance, and cultivating future-ready decarbonization talent in alignment with national mineral sector reforms.",
        ],
      },
      {
        id: "ccus-mena-2025",
        event: "Carbon Capture MENA Summit Dubai, 2025",
        headline: "Financing CCUS — Joining Industry Leaders at MENA Summit 2025",
        image: img("financing-ccus-mena-summit-2025.png"),
        body: [
          "Planetive CEO & Founder, Ayla Majid, spoke at the Carbon Capture MENA Summit 2025 in Dubai, joining industry leaders from Microsoft, ING, and Japan Bank for International Cooperation in a panel on financing Carbon Capture and Storage (CCS) projects.",
          "The discussion, expertly moderated by Bloomberg’s Salih Yilmaz, focused on key financing considerations, including the role of hub models, carbon markets, and shared infrastructure in scaling CCUS investments. As MENA advances its decarbonization efforts, collaboration and financial innovation remain crucial in driving sustainable energy solutions.",
        ],
      },
      {
        id: "ief-riyadh-2025",
        event: "IEF Symposium on Energy Outlooks, Riyadh 2025",
        headline: "Riyadh Energy Forums: Advancing the Energy Transition",
        image: img("riyadh-energy-forums-advancing-energy-transition.png"),
        body: [
          "Planetive CEO & Founder, Ayla Majid, participated in two pivotal energy events in Riyadh, Saudi Arabia: the IEA-IEF-OPEC Symposium and the IEF Thought Leaders’ Roundtable. These high-level discussions brought together global energy leaders to address the complexities of the energy transition.",
          "Key insights included the critical role of Carbon Capture, Utilization, and Storage (CCUS), the future of low-carbon fuels, and the evolving energy mix balancing renewables with traditional sources. The discussions reinforced the urgency of data-driven decision-making and strategic investments for a resilient, sustainable energy ecosystem.",
          "Planetive remains committed to driving climate solutions and accelerating the shift towards a low-carbon future.",
        ],
      },
      {
        id: "finance-minister-2025",
        event: "Driving ESG & Financial Transparency with Pakistan’s Finance Minister, 2025",
        headline: "Engaging with Pakistan’s Finance Leadership on ESG & Sustainability",
        image: img("engaging-pakistan-finance-leadership-esg-sustainability.png"),
        body: [
          "Representing ACCA as its Global President, Planetive CEO & Founder Ayla Majid met with Senator Muhammad Aurangzeb, Federal Minister for Finance & Revenue, and the Ministry of Finance leadership to discuss ESG, climate action, and sustainability reporting. The discussions also focused on transforming Public Financial Management (PFM) and capacity-building initiatives to enhance economic transparency and resilience.",
          "At Planetive, we believe strong financial governance and sustainability reporting are key to accelerating the transition to a low-carbon economy, shaping a more sustainable and future-ready financial framework.",
        ],
      },
      {
        id: "lums-2025",
        event: "Fostering Sustainability and Innovation with LUMS, 2025",
        headline: "Exploring Opportunities for Sustainable Innovation",
        image: img("exploring-opportunities-sustainable-innovation.png"),
        body: [
          "Planetive CEO & Founder, Ayla Majid, in her role as ACCA’s Global President, engaged with Dr. Ali Cheema, Vice Chancellor of LUMS, and senior leadership to explore opportunities for sustainability, climate action, and digital transformation. The discussion emphasized integrating ESG principles into business and education, aligning with Planetive’s mission to drive a low-carbon economy.",
          "Strengthening collaborations between academia, industry, and sustainability leadership is key to building a resilient, future-ready economy.",
        ],
      },
      {
        id: "wwf-2025",
        event: "Collaborating with WWF-Pak for Climate Action, 2025",
        headline: "Advancing Sustainable Climate Solutions",
        image: img("advancing-sustainable-climate-solutions.png"),
        body: [
          "Ayla Majid, CEO & Founder of Planetive as Global President of ACCA, met with Hammad Naqi Khan, CEO of WWF-Pakistan, and senior leadership to advance collaboration on sustainability and climate action. The discussion reinforced ACCA’s commitment to the UN SDGs, focusing on green financing, net-zero strategies, ESG integration, and gender inclusion.",
          "These shared priorities align with Planetive’s mission to drive impactful climate solutions and accelerate the transition to a low-carbon economy.",
        ],
      },
      {
        id: "oicci-2025",
        event: "OICCI ESG & Climate Partnerships, 2025",
        headline: "Strengthening Strategic Partnerships for Sustainability and Climate Action",
        image: img("strengthening-strategic-partnerships-sustainability-climate-action.png"),
        body: [
          "Ayla Majid, CEO & Founder of Planetive in her role as Global President of ACCA, met with M. Abdul Aleem, CEO & Secretary General of the Overseas Investors Chamber of Commerce and Industry (OICCI), along with OICCI’s senior leadership. The discussion focused on strengthening strategic partnerships in Environmental, Social, and Governance (ESG) practices, advancing climate action, and promoting sustainability.",
          "With a strong emphasis on capacity building, the meeting underscored the need to enhance Pakistan’s business landscape by integrating responsible corporate practices and fostering a low-carbon economy. These priorities align with Planetive’s mission to drive impactful climate solutions, support sustainable business models, and contribute to a resilient economic future.",
        ],
      },
    ],
  },
  {
    id: "cop",
    kind: "grid",
    title: "COP",
    subtitle: "Conference of the Parties",
    items: [
      {
        id: "cop29-2024",
        event: "Conference of the Parties COP 29, Azerbaijan 2024",
        headline: "The COP 29 Azerbaijan Conference",
        image: img("cop29.jpeg"),
        year: 2024,
        body: [
          "At COP29 in Baku, Planetive joined global leaders to advance climate finance, carbon markets, and net-zero pathways. Our team engaged in dialogues on scaling green investment, strengthening ESG accountability, and supporting emerging markets in the energy transition.",
          "Planetive remains committed to bridging the climate finance gap through practical advisory, innovative instruments, and partnerships that turn ambition into bankable action.",
        ],
      },
      {
        id: "cop28-2023",
        event: "Conference of the Parties COP 28, UAE 2023",
        headline: "The COP 28 UAE Conference",
        image: img("the-cop-28-uae-conference.png"),
        year: 2023,
        body: [
          "At COP28 our dedicated team along with RELP consistently engaged in impactful events, bringing forth innovative solutions for a greener future. Notably, we have fostered valuable collaborations, including our partnership with the iTrust initiative, amplifying our efforts towards responsible environmental stewardship.",
          "The iTrust will provide customized, program-based guarantees designed to enhance bankability and promote competition with minimal fiscal and financial impact. We are implementing the International Guarantee Trust Fund for Renewable Energy (iTrust) with the purpose of providing customized program-based guarantees to be automatically granted to all renewable energy projects awarded in eligible participating public auctions.",
        ],
      },
      {
        id: "cop27-2022",
        event: "Conference of the Parties COP 27, Egypt 2022",
        headline: "The COP 27 Egypt Conference",
        image: img("cop-27.jpeg"),
        year: 2022,
        body: [
          "Planetive participated in COP27 in Sharm el-Sheikh, contributing to global conversations on climate finance, loss and damage, and the energy transition. Our team engaged with partners on accelerating renewable energy deployment and strengthening ESG frameworks across emerging markets.",
          "The conference reinforced Planetive's commitment to collaborative climate action and practical solutions that support a resilient, low-carbon future.",
        ],
      },
    ],
  },
  {
    id: "team-relp-2024",
    kind: "highlight",
    title:
      "Planetive Team hosted Pakistan's Renewable Energy Risk Assessment Workshop in Collaboration with RELP and PPIB in Islamabad, March 2024.",
    images: [
      img("hawkamah-esg-workshop-1.png"),
      img("hawkamah-esg-workshop-2.png"),
      img("hawkamah-esg-workshop-3.png"),
      img("hawkamah-esg-workshop-4.png"),
      img("hawkamah-esg-workshop-5.png"),
    ],
  },
  {
    id: "year-2024",
    kind: "grid",
    title: "2024",
    subtitle: "Forums, summits & youth leadership",
    year: 2024,
    items: [
      {
        id: "buraq-2024",
        event: "Buraq School Camp Speech, 2024",
        headline: "Inspiring the Next Generation of Sustainability Leaders at Buraq Camp",
        image: img("1736160996825.jpeg"),
        body: [
          "Our Founder & CEO, Ayla Majid, an ardent champion of sustainability, inspired a room full of eager young explorers at Buraq Camp. Through engaging discussions, she imparted her insights on sustainability, climate action, and the importance of decarbonization. Ayla emphasized the vital roles of innovation, collaboration, and responsible leadership in tackling the climate crisis.",
          "We are proud to empower the next generation of sustainability leaders, who are already showing tremendous passion and commitment to driving positive change for our planet.",
        ],
      },
      {
        id: "ygl-morocco-2024",
        event: "Young Global Leaders Trip — World Economic Forum, Morocco 2024",
        headline: "Exploring Morocco’s Strategic Role from YGL Delegation Journey",
        image: img("Morocco.jpeg"),
        body: [
          "CEO & Founder Planetive Middle East & Pakistan, Ayla Majid, recently joined a Young Global Leaders (YGL) delegation on an enlightening journey to Morocco, organized by the World Economic Forum. The trip offered a deep dive into Morocco's innovative infrastructure and economic strategies, including visits to UM6P (Mohammed VI Polytechnic University) and Tanger Med Port.",
          "Key discussions were held with the Ministers of Investment, Industry, and Economy, highlighting Morocco's vision as a gateway between Europe and Africa. The delegation also explored OCP Group’s transformation from a phosphate company to a global leader in sustainable agriculture and gained insights from CDG on fostering innovation and entrepreneurship.",
          "The journey spanned five major cities: Marrakech, Tangier, Benguerir, Rabat, and Casablanca—each showcasing Morocco's rich cultural, social, and economic diversity. This experience has enhanced our understanding of Morocco's strategic role in the global economy, reinforcing our commitment to global engagement.",
        ],
      },
      {
        id: "wef-riyadh-2024",
        event: "WEF Special Meeting on Collaboration & Energy for Development 2024",
        headline: "Special Meeting on Global Collaboration, Growth and Energy for Development",
        image: img("special-meeting-global-collaboration-growth-energy-development.png"),
        body: [
          "At the Special Meeting on Global Collaboration, Growth & Energy for Development 2024 held in Riyadh, where global leaders convened to discuss energy transition, sustainable growth, and international collaboration, Ayla Majid, Founder and CEO of Planetive, contributed insights on decarbonization, sustainable finance, and the role of carbon capture in accelerating climate action.",
          "She highlighted the importance of responsible investments and cross-border partnerships in driving the energy transition and achieving long-term sustainability goals.",
          "Beyond the discussions, Ayla explored Saudi Arabia’s cultural heritage, aligning with the country’s vision for a sustainable future. Her participation reinforced Planetive’s commitment to advancing global sustainability and energy innovation.",
        ],
      },
      {
        id: "liibs-2024",
        event: "Leaders In Islamabad Business Summit (LIIBS), 2024",
        headline: "Pakistan's Power Sector: A Way Forward",
        image: img("Leaders-in-Isb.jpeg"),
        body: [
          "At the Leaders in Islamabad Business Summit held in April 2024, our Founder & CEO, Ayla Majid, participated in a crucial session on \"Pakistan's Power Sector: A Way Forward.\" Alongside prominent figures like Federal Ministers Muhammad Ali and Sardar Awais Leghari, and industry leaders from K-Electric and Lucky Electric Power Company, Ayla Majid contributed her insights on addressing the challenges in Pakistan's energy landscape.",
          "The session highlighted the importance of diversifying into renewable energy sources, enhancing efficiency, and fostering public-private partnerships to drive sustainable progress in the sector.",
        ],
      },
      {
        id: "icci-dubai-2024",
        event: "ICCI-Business Opportunities Conference, Dubai 2024",
        headline: "Clean Energy Opportunities in Pakistan",
        image: img("ICCI--DUBAI.jpg"),
        relatedArticle: "How to finance the energy transition in Asia — By Ayla Majid",
        body: [
          "At the Business Opportunities Conference held in March 2024 in Dubai, organized by the ICCI (Islamabad Chamber of Commerce and Industry), where Pakistani businesses converged to explore and discuss future growth avenues, Ayla Majid, the Founder and CEO of Planetive, took the stage as a prominent speaker.",
          "She shared her valuable insights on the future of energy in Pakistan, emphasizing the need for a revolutionary shift towards sustainable energy solutions, highlighting Pakistan's energy challenges and the potential for clean energy investments. Citing the country's goal to reduce greenhouse gas emissions by 50% by 2030, she underscored the importance of renewable energy projects and the strategic opportunities they present for both economic growth and environmental sustainability.",
        ],
      },
      {
        id: "mwc-2024",
        event: "Sustainable Energy Summit, Spain 2024",
        headline: "MWC GSMA — Telcos Path to a Sustainable and AI-Powered Future",
        image: img("WhatsApp-Image-2024-08-19-at-12.55.05-PM.jpeg"),
        body: [
          "At MWC Barcelona, February 2024, Ayla Majid, Founder & CEO of Planetive and Board Director of Infraelectric, led discussions on steering the telecom industry toward a sustainable future. Key themes included the shift towards ESG initiatives, with telecoms investing in renewable energy and leveraging AI and IoT for network optimization.",
          "A sustainability wave for 2024 was highlighted, with a forecasted 2% reduction in carbon footprints as telcos adopt greener practices. Despite challenges like material shortages, these strategies are expected to influence the industry's future trajectory. Telcos are increasingly focusing on sustainability, from renewable energy investments to educating customers on greener practices.",
        ],
      },
    ],
  },
  {
    id: "team-hawkamah-2023",
    kind: "highlight",
    title:
      "Planetive Team conducted an ESG Workshop with Hawkamah for Board & Senior Leadership organized at DIFC, Dubai. May 2023",
    images: [
      img("dubai-esg-workshop-1.png"),
      img("dubai-esg-workshop-2.png"),
      img("dubai-esg-workshop-3.png"),
      img("dubai-esg-workshop-4.png"),
    ],
  },
  {
    id: "year-2023",
    kind: "grid",
    title: "2023",
    subtitle: "Investment & global councils",
    year: 2023,
    items: [
      {
        id: "fii-2023",
        event: "Future Investment Initiative, Riyadh 2023",
        headline: "FII — Future Investment Initiative",
        image: img("fii-future-investment-initiative.png"),
        body: [
          "Planetive attended the FII 2023 event in Riyadh, where noteworthy initiatives emerged, spanning green energy partnerships, strides in artificial intelligence, commitments to sustainable development goals, and strategies for bolstering global economic resilience.",
          "FII 2023 left an indelible mark as a platform where actionable initiatives converged, shaping the trajectory of global investments in response to contemporary challenges and opportunities.",
        ],
      },
      {
        id: "wef-gfc-2023",
        event: "WEF Annual Meeting of the Global Future Councils, 2023",
        headline: "WEF Global Future Council on Energy Transition",
        image: img("wef-global-future-council-on-energy-transition.png"),
        relatedArticle:
          "How local banking can champion decarbonization in emerging markets — By Ayla Majid",
        body: [
          "Planetive's Founder & CEO Ayla Majid attended the Annual Meeting of the Global Future Councils and explored solutions for global challenges in areas like growth, AI, and climate change. The discussions highlighted the need for collaboration across sectors and countries to achieve a sustainable future.",
          'Specific topics included the responsible use of AI, ensuring a just transition to a green economy, and leveraging technology to combat climate change and improve public health. The meeting also addressed the need for clear definitions and regulations around concepts like "sustainable finance" and "cybersecurity" to ensure responsible practices.',
        ],
      },
      {
        id: "buraq-2023",
        event: "Buraq School Camp Speech, 2023",
        headline: "Youth Sustainability Awareness Program",
        image: img("youth-sustainability-awareness-program.png"),
        body: [
          "At Buraq Space Camp, the energy crackled with excitement as Our Founder & CEO Ayla Majid, a passionate advocate for sustainability, shared her message with a room full of wide-eyed explorers. The message was clear: protecting our planet isn't optional, it's the fuel that will propel our cosmic dreams!",
          "Ayla emphasized that every single one of these young minds has the power to be a climate hero. From the smallest steps to the grandest ideas, everyone has a role to play. Let's fuel the future with knowledge, because knowledge is power, and with that power, we can embark on an interstellar journey towards a sustainable future.",
          "With so much enthusiasm in the room, it's clear that the future is in good hands. These young minds are brimming with potential, and the Buraq Space Camp event has empowered them to become the climate heroes our planet needs!",
        ],
      },
      {
        id: "eisenhower-2023",
        event: "Eisenhower Fellowships' 70th Anniversary, United States 2023",
        headline: "Eisenhower Fellowships' 70th Anniversary Panel: Emerging Solutions for Global Challenges",
        image: img("eisenhower-fellowships-70th-anniversary-panel-emerging-solutions-for-global-challenges.png"),
        body: [
          "Ayla Majid led the panel discussion at Eisenhower Fellowships' 70th Anniversary with substantive discussions on emerging solutions to some of the world's most pressing challenges.",
          "During the discussion, Governor Christine Todd Whitman discussed positive developments in farming and schools related to climate change and committed to a carbon-neutral economy by 2050. Argentina's Dr. Jose Luis Manzano emphasized the energy security implications of the Ukraine-Russia conflict and prioritized a 20% target for renewable energy by 2025.",
          "Dr. Olufunso Somorin from Kenya focused on African stakeholders' interests in the energy transition, advocating for finance to expand clean energy access in rural areas for socio-economic development and environmental mitigation.",
        ],
      },
      {
        id: "gastech-2023",
        event: "GasTech Hydrogen, Singapore 2023",
        headline: "Strategic Conference at Gastech Hydrogen Singapore",
        image: img("strategic-conference-at-gastech-hydrogen-singapore.png"),
        relatedArticle:
          "What can Asian countries teach the rest of the world about financing hydrogen development? — By Ayla Majid",
        body: [
          "Ayla Majid, Founder & CEO of Planetive is speaking at the Strategic Conference at Gastech 2023, highlighting that green hydrogen production and scale is a must for decarbonisation and the energy transition puzzle.",
        ],
      },
      {
        id: "cpec-2023",
        event: "10 Years of CPEC — The Road to Prosperity, 2023",
        headline: "CPEC — The Road to Prosperity — 10 Years Celebration",
        image: img("cpec-the-road-to-prosperity.png"),
        body: [
          'Ayla Majid emphasized the following points to pivot Gwadar as a green fuel hub, during the seminar on "Energy Sector Cooperation under CPEC" hosted by the National Institute of Maritime Affairs (NIMA) and Bahria University Islamabad, Pakistan.',
        ],
      },
      {
        id: "liibs-2023",
        event: "Leaders In Islamabad Business Summit, 2023",
        headline: "Leaders in Islamabad Business Summit 2023 — #TheBigRethink",
        image: img("leaders-in-islamabad-business-summit-2023-thebigrethink.png"),
        body: [
          "Our Founder and CEO, Ayla Majid, was part of the Leaders in Islamabad Business Summit 2023 — #TheBigRethink as a speaker, held on May 31 & June 1, 2023, at the Islamabad Serena Hotel!",
        ],
      },
      {
        id: "finland-pakistan-2023",
        event: "Finland Pakistan Business Summit, 2023",
        headline: "Finland Pakistan Business Summit for Future of Energy",
        image: img("finland-pakistan-business-summit-for-future-of-energy.png"),
        body: [
          "Founder & CEO of Planetive Ayla Majid was among the speakers on #futureofenergy at the Finland Pakistan Business Summit! The future of energy is crucial for a country like Pakistan where a detailed long term strategy that includes generation, transmission planning, and supporting policy and investment ecosystem are required.",
          "There must be an absolute focus on reliable, affordable, and clean energy.",
        ],
      },
      {
        id: "iwd-2023",
        event: "International Women's Day, 2023",
        headline: "Women Day Celebration",
        image: img("women-day-celebration.png"),
        relatedArticle: "Why Board room equity matters? — By Ayla Majid",
        body: [
          "Ayla Majid the Founder & CEO of Planetive, was invited to deliver keynote speech at International Women's Day breakfast event held at the esteemed Islamabad Serena Hotel, where the First Lady of Pakistan, Mrs Samina Alvi and other dignitaries were in attendance.",
          "Reaffirming commitment on empowering women and creating an environment where they can thrive, Ayla’s message was that for an egalitarian, peaceful and prosperous world, women’s participation in every geography and sector is a must.",
        ],
      },
      {
        id: "leap-2023",
        event: "LEAP 2023 — Riyadh, Saudi Arabia",
        headline: "The Promise of Green Hydrogen",
        image: img("the-promise-of-green-hydrogen.png"),
        relatedArticle:
          "The Fuel of the Future: Hydrogen & the Middle East Advantage — By Ayla Majid",
        body: [
          "As the Middle East has clearly emerged as a key region to lead the production of hydrogen given its unique position and availability of resources, most countries in the region have announced their strategies for hydrogen production.",
          "In February 2023, Planetive’s CEO moderated a key session on: \"The Promise of Green Hydrogen\". Session participants were: Vatche Kourkejan from Roland Berger, addressed MENA project developments, government MOUs, and identified critical gaps in hydrogen development. Theiry Leperq Founder & President Hydeal, emphasized global hydrogen's future as a decarbonization cluster. Eng. Mohammed Al Taani, Jordanian Renewable Energy Society, discussed the pivotal role of hydrogen renewables in the region's energy transition. Ahmed Al Bawai, VP Saudi Industrial Development Fund, detailed large-scale hydrogen projects, significant investments, and SIDF's role in supporting the hydrogen supply chain and value.",
        ],
      },
    ],
  },
  {
    id: "year-earlier",
    kind: "grid",
    title: "Earlier engagements",
    subtitle: "2021 — 2019",
    items: [
      {
        id: "cif-2021",
        event: "Keeping the Power On: Financing Energy Storage, 2021 CIF",
        headline: "Keeping the Power On: Financing Energy Storage",
        image: img("keeping-the-power-on-financing-energy-storage-2021-cif.png"),
        body: [
          'On December 14, 2021, the Climate Investment Funds (CIF) hosted the virtual workshop "Keeping the Power On: Financing Energy Storage Solutions." This workshop brought together multilateral development banks, country officials, companies, and organizations investing in energy storage and other elements of clean energy to explore the unique aspects of energy storage finance and the relationship between private capital and concessional financing.',
        ],
      },
      {
        id: "davos-2020",
        event: "World Economic Forum Annual Meeting, 2020 Davos",
        headline: "Stakeholders for a Cohesive and Sustainable World",
        image: img("stakeholders-for-a-cohesive-and-sustainable-world.png"),
        body: [
          'Our Founder Ayla Majid participated in the annual meeting of the World Economic Forum in January 2020 in Davos. She moderated the session on Global Risk Report 2020 titled: "What are Global Risks?" Panelists included Ann Linde (Minister for Foreign Affairs of Sweden), Peter Brabeck-Letmathe (Vice Chairman, WEF), Eric Parado (Chief Economist Inter American Development Bank), Alison Martin (Group Chief Risk Officer Zurich), and WEF Change Maker Salvador Gomez.',
          "During the session, urgent environmental, economic and social risks were discussed.",
        ],
      },
      {
        id: "wef-dalian-2020",
        event: "Annual Meeting of New Champions WEF, 2020 Dalian China",
        headline: "Accelerating the Cleantech Transition",
        image: img("accelerating-the-cleantech-transition.png"),
        body: [
          "Our Founder Ayla Majid participated in the World Economic Forum's Annual Meeting of New Champions in June 2019 in Dalian, China. With innovation, technology, and appropriate forward looking regulation countries can move forward towards CleanTech using the planet resources optimally & eliminating ecological impact.",
        ],
      },
      {
        id: "wef-dubai-2020",
        event: "Annual Meeting of Global Future Councils WEF, 2020 Dubai",
        headline: "Global Future Council on Energy",
        image: img("global-future-council-on-energy.png"),
        body: [
          "On the invitation of the World Economic Forum our Founder Ayla Majid joined the Global Future Council on Energy (GFC Energy), and attended the annual meeting held on 3—4 November 2019 in Dubai. GFC Energy works on agendas, projects and initiatives with a vision to create energy transition creating opportunities, ensuring energy sustainability, affordability, inclusiveness and security.",
        ],
      },
      {
        id: "ntu-2019",
        event: "YGLs at Nanyang Technological University Singapore, 2019",
        headline: "Executive Educational Module on Smart Cities",
        image: img("executive-educational-module-on-smart-cities.png"),
        body: [
          'In October 2019, Ayla attended "Smart Cities Education Module" at the Nanyang Technology University Singapore, along with fellow Young Global Leaders of the World Economic Forum. The module was focused on applying technologies to urban development for smarter, healthier sustainable cities and infrastructure.',
        ],
      },
    ],
  },
];

/** Flat list for search / filters */
export const ALL_GLOBAL_ENGAGEMENTS = GLOBAL_ENGAGEMENT_SECTIONS.flatMap((s) =>
  s.kind === "grid" ? (s.items ?? []) : [],
);

const ABOVE_THE_FOLD_SECTION_ID = "year-2025";
const ABOVE_THE_FOLD_IMAGE_COUNT = 6;

/** First visible engagement card images — used for route preload hints. */
export function getGlobalEngagementPreloadUrls(
  limit = ABOVE_THE_FOLD_IMAGE_COUNT,
): string[] {
  const section = GLOBAL_ENGAGEMENT_SECTIONS.find(
    (s) => s.kind === "grid" && s.id === ABOVE_THE_FOLD_SECTION_ID,
  );
  return (section?.items ?? []).slice(0, limit).map((item) => item.image);
}

export function isAboveTheFoldEngagement(sectionId: string, cardIndex: number): boolean {
  return sectionId === ABOVE_THE_FOLD_SECTION_ID && cardIndex < ABOVE_THE_FOLD_IMAGE_COUNT;
}
