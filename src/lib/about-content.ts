/** Local copies in public/images/about/ (from planetive.org/about-us) */
const teamImg = (file: string) => `/images/about/team/${file}`;
const partnerImg = (file: string) => `/images/about/partners/${file}`;

export const ABOUT_INTRO = {
  eyebrow: "Enabling Sustainable Development",
  title: "About Us",
  summary:
    "Planetive is an advisory firm that provides consultancy in areas of Clean Energy, Climate Change, Clean Water, Sustainable Finance and Business Sustainability, to stakeholders from around the globe with key focus on the Middle East and Pakistan.",
  body: "At Planetive we contribute towards the global ESG/SDG goals by supporting companies to reach their net-zero targets and bridging the capital gap of sustainability projects as well as project assessment and evaluations. Planetive team is determined to make a positive global change by working on the shared goal of a sustainable and greener world, economy and society with support of our advisors from different parts of the world.",
  heroImage: teamImg("hero.jpg"),
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
      "Ayla is the founder of Planetive with a dynamic and inclusive vision for a fairer world, by way of advocacy that enhance the UN Sustainable Development Goals. She is a dynamic professional creating space & opportunity for women through economic empowerment. Ayla shapes policy and perspectives through her engagement with public and private board roles. She has worked immensely for energy transition through policy and sustainable finance work. Ayla regularly writes on topics including, future of energy, future of digital, diversity and inclusion.",
      "Ayla is a Young Global Leader at the World Economic Forum and a member of the Global Future Council on Energy of the WEF. Academically, Ayla holds MBA from Lahore University of Management Sciences, LLB from University of London, and ACCA.",
    ],
  },
  {
    id: "agnes",
    name: "Agnes Budzyn",
    role: "Advisor",
    group: "advisors",
    image: teamImg("agnes-budzyn.jpg"),
    bio: [
      "Agnes is a versatile leader in financial and emerging technology markets, specializing in financial technology, investments, strategic growth and risk management. With a decade of traditional finance experience at BlackRock. Her years in traditional finance provided her first-hand experience working with many of the world's largest institutions and advising key regulators on strategic challenges. She performed country-wide financial reviews of Ireland and Greece and others for the European Central Bank and managed the restructuring of a $40bn multi-asset class portfolio while part of a special situations team at BlackRock.",
      "At ConsenSys, Agnes' role relied on the maintenance and leverage of strong relationships with financial institutions, government bodies (SEC, CFTC, FDIC, U.S. Department of State, OCC, IMF, World Bank, and The Federal Reserve Bank of New York and the U.S. Department of the Treasury).",
    ],
  },
  {
    id: "mustapha",
    name: "Mustapha Mokass",
    role: "Advisor",
    group: "advisors",
    image: teamImg("mustapha-mokass.jpg"),
    bio: [
      "Mustapha is the Founder and CEO of Climate Finance Group, mobilizing international social investors in support of the agriculture strategy and the 10 GW renewable energy development plan (solar, wind, hydro). He founded several sustainability ventures, waste-to-energy technology, off-grid solar pumping technology and an advisory climate finance & investment firm.",
      "He is a graduate of the MS in Sustainability & Social Innovation at HEC Paris and holds a M.Sc. in Urban and Environmental Engineering and EE from Harvard University Kennedy School of Government and Oxford Said Business School University. He is a visiting professor of HEC Paris and he authored a book \"Fostering a Global Clean Energy Market\".",
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
      "Dr. Ali Adnan Ibrahim has vast leadership experience in the sphere of sustainability, finance and development. Currently involved in sustainable transformation at the Royal Commission for Riyadh City. Prior this, Ali was Global/Group Head of Social & Sustainable Finance at the Al Baraka Banking Group, in Bahrain.",
      "In his various roles, he engages in planning and formulation of market-based strategies for financial inclusion and enterprise development, impact and blended finance, digital and sustainable finance, Islamic finance, the intersection of impact and faith, microfinance, foreign direct investments, and financial regulation.",
      "Ibrahim is co-chairman of the Sustainability Working Group of the General Council of Islamic Banks and Financial Institutions (CIBAFI). Ibrahim also chairs the Sustainable Development Committee of the Bahrain Association of Banks that examines and explore various ways in which the banking sector can contribute to the continued sustainable development of Bahrain. Ibrahim is Member of the Sustainable Finance Working Group (SFWG) managed by the International Institute of Finance. He also chairs the Global Islamic and Sustainable FinTech Center at the Bahrain Fintech Bay.",
      "Ibrahim is an active member of various communities of the World Economic Forum including the Forum of Young Global Leaders and the Executive Working Group on Financing. As Fulbright Scholar, Ibrahim received his doctorate in juridical sciences (SJD—with distinction) from the Georgetown University Law Center, master of laws (LL.M.) from the Washington University School of Law, and a bachelor of laws (LL.B. Honours) from the International Islamic University, Islamabad, Pakistan. He has attended \"Global Leadership and Public Policy in 21st Century\" at Harvard University and \"Transformational Leadership\" at Oxford University. He has served as an adjunct faculty at the Georgetown University Law Center.",
    ],
  },
  {
    id: "han",
    name: "Han Yik",
    role: "Advisor",
    group: "advisors",
    image: teamImg("han-yik.jpg"),
    bio: [
      "Han Yik is Managing Partner of Strategic Focus Investments and a sustainability-minded investor and future-oriented thought leader on global long-term investment strategy. He advises various organizations (including asset managers and think tanks) on issues ranging from ESG, capital markets, geopolitics and blockchain/digital assets. In addition, as a Pledge Champion for Tobacco Free Portfolios, Han serves as an ambassador for the organization, helping to raise awareness of the Tobacco Free Finance Pledge in the USA.",
      "Han was formerly the Head of Institutional Investors at the World Economic Forum, where he worked with the senior leadership of the world's largest asset owners (sovereign wealth funds and government pension funds) and with top government officials from across the globe on issues around long-term investing as well as providing strategic guidance on initiatives involving public-private cooperation. He has written articles and reports on various investment topics and led the Forum's initiative on Global Retirement Investment Systems Reform, addressing the challenges of the global pension crisis, receiving extensive press coverage from media outlets such as Bloomberg, The Financial Times, Barron's and others. In addition, he has been a keynote speaker at various global conferences, including the CIE Chairs & CEOs Symposium in Sydney, the Singapore Fintech Festival, the Global Asset Owner Series from the CFA Society of New York, the Asia Risk Congress, the Salesforce World Tour and CROSAPF and has led roundtables for asset owners and investors during the World Economic Forum Annual Meeting in Davos. Previously, Han was a Senior Institutional Portfolio Strategist and Head of Institutional Thought Leadership at Bank of America Merrill Lynch where he managed $2.5 billion (USD) in multi-asset class portfolios for BAML's institutional client base.",
    ],
  },
  {
    id: "malak",
    name: "Malak Al Akiely",
    role: "Advisor",
    group: "advisors",
    image: teamImg("malak-al-akiely.png"),
    bio: [
      "Malak Al Akiely is a seasoned professional in agricultural commodities, specializing in ensuring food abundance, security, and sustainable agriculture through a focus on business development. Her expertise lies in addressing the heightened demand for grains in the MENA region, serving countries such as Jordan, Iraq, Egypt, and Saudi Arabia. Malak navigates the complexities of the wheat and feedstuff markets with finesse, showcasing her strategic planning and industry insight. She brings a commitment to fostering growth and sustainability in the agricultural sector. Malak contributes expertise to the Oil, Energy, and Renewable Energy sectors.",
      "Beyond her entrepreneurial endeavors, Malak participates in Jordan's economic growth, holding positions in the National Entrepreneurship Council, Excellence Center for Entrepreneurship projects, and the Jordan Economic Forum.",
      "Recognized globally, Malak is a Young Global Leader (YGL) honored by the World Economic Forum, and a recipient of the U.S. Department of State's International Visitor Leadership Program. As the first Jordanian woman to cross 80 degrees north pole, Malak remains a trailblazer, contributing to sustainability discussions worldwide. Holding an MBA in Management Business Administration from the German-Jordanian University, Malak is the youngest member of various committees, embodying dedication to economic prosperity and stability in Jordan.",
    ],
  },
  {
    id: "hira",
    name: "Hira Mumtaz",
    role: "Consultant",
    group: "team",
    image: teamImg("hira-mumtaz.jpg"),
    bio: [
      "Hira Mumtaz is an energy and climate professional, having academic and professional expertise in energy and climate, with focus on policy, finance and business. She is a Fulbright Scholar, with a Masters in energy policy from the University of Michigan.",
      "She has worked with several multi-donor agencies and consulted for governmental, non-governmental and private organizations within Pakistan, some parts of Asia, U.S. as well as U.K., in the areas of energy and climate policy, power regulation, renewables, sustainability, climate finance, financial planning, governance and business restructuring. Her current interests also lie in carbon markets.",
    ],
  },
  {
    id: "kamal",
    name: "Kamal Rahim",
    role: "Head of Strategy & Growth",
    group: "team",
    image: teamImg("kamal-rahim.jpg"),
    bio: [
      "Kamal Rahim is an accomplished business development professional with a background in engineering and over a decade of experience in the energy sector and industrial digitization.",
      "Throughout his career, Kamal has been involved in multiple projects from conception to execution, including the successful establishment of a 1320 MW power plant, a bulk handling sea terminal with an offshore trans-shipment facility, and the implementation of digital twin and asset performance management solutions for power plants. Additionally, Kamal has developed industrial SaaS solutions for the transportation sector and facilitated mergers and acquisitions as part of his business development and consultancy activities.",
      "Kamal holds a degree in Mechanical Engineering from NUST in Pakistan and serves as an advisor on the prestigious Harvard Business Review (HBR) Advisory Council.",
      "He is passionate about global economic prosperity and constantly seeks innovative solutions. Kamal is well-equipped to navigate complex business landscapes with a techno-commercial lens, build strong relationships with stakeholders, and drive strategic growth initiatives to deliver measurable results.",
    ],
  },
  {
    id: "maha",
    name: "Maha Kamal",
    role: "Consultant",
    group: "team",
    /* CDN asset fdf9f09 is Rija Zahid’s photo, not Maha — omit until a verified portrait is available */
    bio: [
      "Maha Kamal is a climate governance and policy specialist with +8 years experience. Her work explores Sustainable Development Goals and Climate Policy. She was awarded the Chevening Scholarship at Queen Mary, University of London for a Masters in International Public Policy, and received a distinction on her dissertation on the Paris Agreement. She taught economics and policy at Information Technology University and supervises theses related to energy and climate.",
      "She is a Global Shaper (community of the World Economic Forum). She is affiliated with the Sustainable Development Policy Institute (SDPI). She speaks at leading national conferences such as Sustainable Development Conference etc. She has written on policy issues in Dawn, The News, South Asia Magazine, Express Tribune etc. She holds two Bachelor's degrees from Boston University in International Relations and Journalism. She is co-chair (Islamabad) Women in Energy Pakistan and built strategic partnerships at the World Bank's We POWER forum, held at the Asian Development Bank (ADB) headquarters in 2019. In this role, she coordinates with the World Bank on strategic insights on gender mainstreaming in energy and climate sectors. Trained Climate Reality Leader (2021).",
    ],
  },
  {
    id: "umair",
    name: "Umair Hussian Farooqi",
    role: "Financial Analyst",
    group: "team",
    image: teamImg("umair-farooqi.jpeg"),
    bio: [
      "Umair Hussian Farooqi is a finance graduate with seven years of extensive experience in the banking industry, audit, and accounts. His career is marked by a profound knowledge of financial analysis and planning, which he has adeptly utilized to provide precise financial insights and strategic recommendations. Umair’s expertise spans managing comprehensive audits, optimizing financial operations, and ensuring strict adherence to regulatory standards. His analytical prowess is complemented by his ability to evaluate financial statements meticulously, identify areas for cost reduction, and drive overall financial performance.",
      "Umair’s deep understanding of financial planning enables him to forecast financial trends accurately and develop robust financial strategies. Known for his attention to detail and dedication to excellence, he has consistently delivered results that exceed expectations, making him a valuable asset in any financial role. With his strategic mindset and analytical acumen, Umair is poised to drive significant value and innovation in this role.",
    ],
  },
  {
    id: "zainab",
    name: "Zainab Ahmed",
    role: "Business Analyst",
    group: "team",
    image: teamImg("zainab-ahmed.jpg"),
    bio: [
      "A Business Finance student with a strong foundation in financial analysis, data analytics, and economic strategy. With a keen interest in sustainable finance and business strategies, I am passionate about utilizing my skills to empower organizations by working in multiple sectors.",
      "Therefore, this work experience has led me to learn about the corporate and development sector and gain a diverse range of skills including research and development, data analytics, financial analysis, strategy building, technical proposal building and report writing while also having promising soft skills.",
      "Moreover, my academic foundation in Business Finance equips me with a solid understanding of economic dynamics, while my involvement in the development sector engages me into learning more about sustainable finance.",
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
      "Shahid Jamal is an experienced professional with a background in agriculture and carbon credits. Holding a Bachelor's degree in Agriculture, he gained valuable experience working as a Survey Officer in the agricultural sector for one year, where he was responsible for conducting surveys and analyzing agricultural data. Currently, Shahid works as a Carbon Credits Research Analyst, where he focuses on studying carbon credit mechanisms, researching sustainable practices, and contributing to climate change mitigation efforts.",
      "Shahid specializes in leveraging carbon credits to promote sustainable farming practices and reduce greenhouse gas emissions. His expertise includes evaluating carbon credit systems, regenerative agriculture, and carbon sequestration, ensuring compliance with international standards.",
    ],
  },
];

export const PARTNER_LOGOS = [
  { name: "The DO", src: partnerImg("the-do.png") },
  { name: "LUMS", src: partnerImg("lums.png") },
  { name: "Spurt", src: partnerImg("spurt.png") },
  { name: "Mezzan", src: partnerImg("mezzan.jpeg") },
  { name: "Hawkamah", src: partnerImg("hawkamah.png") },
  { name: "RELP", src: partnerImg("relp.png") },
  { name: "IEF", src: partnerImg("ief.png") },
];
