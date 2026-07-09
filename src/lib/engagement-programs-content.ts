import type { LucideIcon } from "lucide-react";
import { Briefcase, GraduationCap, Handshake, Trophy } from "lucide-react";

export type EngagementProgramId = "fellows" | "champions" | "senior" | "partner";

export type EngagementProgram = {
  id: EngagementProgramId;
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
};

/** Copy aligned with planetive.org/join-us */
export const ENGAGEMENT_PROGRAMS: EngagementProgram[] = [
  {
    id: "fellows",
    title: "Planetive Fellows",
    description:
      "Planetive Fellows is an initiative to engage young graduates who are passionate about shaping a sustainable future. Fellows get hands-on opportunities to align their passion with real sustainability projects across clean energy, climate finance, and ESG advisory.",
    icon: GraduationCap,
    cta: "Apply as a Fellow",
  },
  {
    id: "champions",
    title: "Planetive Champions",
    description:
      "Planetive Champions provides mentorship and learning for college students during summer and winter breaks — exploring dimensions of sustainability, future challenges, and how to address them through workshops, project exposure, and guidance from our team and advisors.",
    icon: Trophy,
    cta: "Join as a Champion",
  },
  {
    id: "senior",
    title: "Planetive Professionals",
    description:
      "For experienced specialists and senior leaders in sustainability, energy, finance, and ESG who want to contribute their expertise — through advisory work, project leadership, mentoring, and shaping Planetive's impact across regions.",
    icon: Briefcase,
    cta: "Join as a Professional",
  },
  {
    id: "partner",
    title: "Partner With Us",
    description:
      "Institutions, corporates, and mission-aligned organizations can collaborate with Planetive on advisory mandates, research, events, and impact programs across the Middle East, Pakistan, and global markets. Let's co-create sustainable outcomes.",
    icon: Handshake,
    cta: "Explore partnership",
  },
];

export const WORK_WITH_US_HERO = {
  eyebrow: "Empowering Sustainable Future",
  title: "Shape the Future with Us",
  subtitle: "Join our vision",
  description:
    "Whether you're a recent graduate, a student on break, an experienced professional, or an institution seeking collaboration — explore how you can grow with Planetive.",
};

export const ENGAGEMENT_PROGRAM_SECTION = {
  eyebrow: "Community & collaboration",
  title: "Planetive Fellows, Champions, Professionals & Partners",
  description:
    "We invest in emerging talent, experienced professionals, and long-term partnerships that advance sustainability across regions and sectors.",
};

export const PROGRAM_LABELS: Record<EngagementProgramId, string> = {
  fellows: "Planetive Fellows",
  champions: "Planetive Champions",
  senior: "Planetive Professionals",
  partner: "Partner with us",
};

export const ENGAGEMENT_PROGRAM_IDS: EngagementProgramId[] = [
  "fellows",
  "champions",
  "senior",
  "partner",
];

export function parseInterestParam(value: unknown): EngagementProgramId | undefined {
  if (
    value === "fellows" ||
    value === "champions" ||
    value === "senior" ||
    value === "partner"
  ) {
    return value;
  }
  return undefined;
}

export function applicationMessagePlaceholder(interest: EngagementProgramId): string {
  switch (interest) {
    case "partner":
      return "Organization, collaboration goals, and timeline…";
    case "senior":
      return "Your background, areas of expertise, and how you'd like to contribute…";
    default:
      return "Why sustainability, and what you hope to learn…";
  }
}
