import { useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ABOUT_INTRO,
  PARTNER_LOGOS,
  TEAM,
  type TeamMember,
} from "@/lib/about-content";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export function AboutUsPageContent() {
  const leadership = TEAM.filter((m) => m.group === "leadership");
  const advisors = TEAM.filter((m) => m.group === "advisors");
  const team = TEAM.filter((m) => m.group === "team");

  return (
    <div className="about-us-page">
      <AboutHero />
      <AboutIntro />
      <TeamSection title="Leadership" members={leadership} featured />
      <TeamSection title="Team & Advisors" subtitle="Global advisors" members={advisors} />
      <TeamSection title="Planetive Team" subtitle="Operations & specialists" members={team} />
      <PartnersSection />
      <AboutClosingCta />
    </div>
  );
}

function AboutHero() {
  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(168,240,212,0.4), transparent 55%)",
        }}
      />
      <div className="container-x relative z-10 pt-40 md:pt-48 pb-24 md:pb-32">
        <ScrollReveal variant="fade-up" className="max-w-3xl">
          <h1 className="font-ui font-semibold text-[clamp(2.75rem,6.5vw,4.5rem)] leading-[1.02]">
            {ABOUT_INTRO.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-n200/95 leading-relaxed max-w-2xl">
            {ABOUT_INTRO.summary}
          </p>
        </ScrollReveal>
      </div>
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[var(--n50)]"
      />
    </section>
  );
}

function AboutIntro() {
  return (
    <section className="relative z-20 -mt-10 md:-mt-14 pb-16 md:pb-24">
      <div className="container-x">
        <ScrollReveal variant="scale-up" duration={900}>
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[32px] md:rounded-[40px] border border-n200/80 bg-white shadow-[var(--shadow-elevated)]">
            <div className="relative lg:col-span-5 min-h-[280px] sm:min-h-[320px] lg:min-h-[420px] overflow-hidden bg-[#eef2f5]">
              <img
                src={ABOUT_INTRO.missionMapImage}
                alt="Planetive locations — Dubai, UAE and Islamabad, Pakistan"
                className="absolute inset-0 h-full w-full scale-[1.08] object-contain object-center"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-n200/60">
              <p className="text-[15px] md:text-base text-n600 leading-relaxed">
                {ABOUT_INTRO.body}
              </p>
              <div className="mt-8 border-t border-n200/70 pt-6">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500">
                  Core focus
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
                  {ABOUT_INTRO.focusAreas.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-baseline gap-2.5 border-b border-n200/50 py-3 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                    >
                      <Icon
                        size={15}
                        strokeWidth={2}
                        className="relative top-0.5 shrink-0 text-canopy"
                        aria-hidden
                      />
                      <span className="text-[15px] font-medium text-forest leading-snug">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TeamSection({
  title,
  subtitle,
  members,
  featured = false,
}: {
  title: string;
  subtitle?: string;
  members: TeamMember[];
  featured?: boolean;
}) {
  if (members.length === 0) return null;

  return (
    <section className={cn("py-12 md:py-16", featured ? "bg-[var(--n50)]" : "bg-white")}>
      <div className="container-x">
        <ScrollReveal className="mb-10 md:mb-14">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-canopy">
            {subtitle ?? "People"}
          </span>
          <h2 className="mt-3 font-ui font-semibold text-[clamp(2rem,4vw,3rem)] text-forest">
            {title}
          </h2>
        </ScrollReveal>

        {featured ? (
          <div className="space-y-8">
            {members.map((m, i) => (
              <FeaturedMemberCard key={m.id} member={m} delay={i * 80} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
            {members.map((m, i) => (
              <MemberCard key={m.id} member={m} delay={i * 40} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function isZoomedOut(member: TeamMember) {
  return member.imageScale !== undefined && member.imageScale < 1;
}

function teamImageClassName(member: TeamMember, extra?: string) {
  return cn(
    "object-cover [filter:none]",
    isZoomedOut(member) ? "absolute max-w-none" : "h-full w-full",
    !member.imagePosition && !isZoomedOut(member) && "object-top",
    extra,
  );
}

function teamImageStyle(member: TeamMember): CSSProperties | undefined {
  const style: CSSProperties = {};
  const position = member.imagePosition ?? "50% 30%";
  const [posX, posY] = position.split(/\s+/);
  const x = posX ?? "50%";
  const y = posY ?? "50%";

  if (member.imagePosition) style.objectPosition = member.imagePosition;

  if (member.imageScale) {
    if (member.imageScale < 1) {
      const size = 100 / member.imageScale;
      style.width = `${size}%`;
      style.height = `${size}%`;
      style.left = x;
      style.top = y;
      style.transform = "translate(-50%, -50%)";
    } else {
      style.transform = `scale(${member.imageScale})`;
      style.transformOrigin = position;
    }
  }

  return Object.keys(style).length ? style : undefined;
}

function FeaturedMemberCard({ member, delay }: { member: TeamMember; delay: number }) {
  const isAyla = member.id === "ayla";
  const [expanded, setExpanded] = useState(false);
  const long = isAyla && member.bio.join(" ").length > 480;

  return (
    <ScrollReveal variant="fade-up" delay={delay}>
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[28px] md:rounded-[32px] border border-n200 bg-white shadow-[var(--shadow-soft)]">
        <div className="lg:col-span-4 relative min-h-[320px] lg:min-h-0">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className={cn(
                "absolute",
                isZoomedOut(member) ? "" : "inset-0",
                teamImageClassName(member),
              )}
              style={teamImageStyle(member)}
              loading="lazy"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center text-4xl font-ui font-semibold text-mint-soft"
              style={{ background: "var(--gradient-hero)" }}
            >
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
        </div>
        <div className="lg:col-span-8 p-8 md:p-10 lg:p-12 flex flex-col">
          <span className="text-xs font-mono tracking-wider uppercase text-canopy">
            {member.role}
          </span>
          <h3 className="mt-2 font-ui font-semibold text-3xl md:text-4xl text-forest">
            {member.name}
          </h3>
          <BioText
            paragraphs={member.bio}
            className={cn("mt-5", isAyla && !expanded && "max-h-[9.5rem] overflow-hidden")}
          />
          {member.link && (
            <a
              href={member.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-mint"
            >
              {member.link.label}
              <ExternalLink size={14} />
            </a>
          )}
          {long && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-canopy self-start"
            >
              {expanded ? "Show less" : "Read more"}
              <ChevronDown
                size={16}
                className={cn("transition-transform", expanded && "rotate-180")}
              />
            </button>
          )}
        </div>
      </article>
    </ScrollReveal>
  );
}

function BioText({ paragraphs, className }: { paragraphs: string[]; className?: string }) {
  return (
    <div className={cn("space-y-3 text-n600 leading-relaxed", className)}>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="text-sm md:text-[15px]">
          {p}
        </p>
      ))}
    </div>
  );
}

function MemberCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <ScrollReveal variant="fade-up" delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-n200/80 bg-[var(--n50)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-n100">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className={cn(
                teamImageClassName(
                  member,
                  !isZoomedOut(member) &&
                    !member.imageScale &&
                    "transition-transform duration-500 group-hover:scale-[1.02]",
                ),
                isZoomedOut(member) && "absolute",
              )}
              style={teamImageStyle(member)}
              loading="lazy"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center text-3xl font-ui font-semibold text-white"
              style={{ background: "var(--gradient-hero)" }}
            >
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-[10px] font-mono tracking-wider uppercase text-canopy">
            {member.role}
          </span>
          <h3 className="mt-2 font-ui font-semibold text-xl text-forest leading-tight">
            {member.name}
          </h3>
          <BioText paragraphs={member.bio} className="mt-3 flex-1" />
        </div>
      </article>
    </ScrollReveal>
  );
}

function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--n100)] border-t border-n200/60">
      <div className="container-x">
        <ScrollReveal className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-ui font-semibold text-[clamp(1.75rem,3vw,2.5rem)] text-forest">
            Our Partners
          </h2>
          <p className="mt-3 text-n600 text-sm leading-relaxed">
            Collaborating with institutions and organizations that share our commitment to
            sustainable development.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {PARTNER_LOGOS.map((p) => (
              <div
                key={p.name}
                className="group relative flex h-20 w-36 md:h-24 md:w-44 items-center justify-center rounded-2xl bg-white border border-n200/80 px-4 py-3 shadow-[var(--shadow-soft)]"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-52 -translate-x-1/2 rounded-xl border border-n200/80 bg-white px-3 py-2 text-left text-xs text-n600 shadow-[var(--shadow-elevated)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <p className="font-semibold text-forest">{p.name}</p>
                  <p className="mt-1 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function AboutClosingCta() {
  return (
    <section className="py-12 md:py-16 bg-[var(--n50)]">
      <div className="container-x">
        <ScrollReveal>
          <div className="rounded-[28px] border border-n200 bg-white px-8 py-10 md:px-12 text-center shadow-[var(--shadow-soft)]">
            <h2 className="font-ui font-semibold text-2xl md:text-3xl text-forest">
              Work with Planetive
            </h2>
            <p className="mt-3 text-n600 max-w-lg mx-auto">
              Connect with our team to explore advisory, project development, and climate finance
              partnerships.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold btn-mint"
            >
              Work with us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
