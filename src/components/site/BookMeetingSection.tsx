import { CalendarDays, ExternalLink, Video } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import {
  BOOKING_REP,
  getBookingEmbedUrl,
  getBookingPageUrl,
  isBookingConfigured,
} from "@/lib/site-booking";

type BookMeetingSectionProps = {
  className?: string;
  /** When true, skips outer section padding (for embedding inside another section). */
  embedded?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function BookMeetingSection({
  className = "",
  embedded = false,
  eyebrow = "Book a call",
  title,
  description,
}: BookMeetingSectionProps) {
  const embedUrl = getBookingEmbedUrl();
  const pageUrl = getBookingPageUrl();
  const configured = isBookingConfigured();

  const content = (
    <div
      className={`rounded-[32px] border border-n200 bg-white shadow-[var(--shadow-soft)] overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-n200/80 bg-[var(--n50)]/60">
          <div className="flex items-center gap-2 text-canopy">
            <Video size={16} aria-hidden />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-4 font-display text-2xl md:text-[1.75rem] text-forest leading-tight">
            {title ?? `Meet with ${BOOKING_REP.name}`}
          </h2>
          <p className="mt-2 text-sm font-semibold text-n600">{BOOKING_REP.role}</p>
          <p className="mt-4 text-sm text-n600 leading-relaxed">
            {description ??
              "Pick a time that works for you. You'll receive a calendar invite with a Google Meet link — no back-and-forth email needed."}
          </p>

          {BOOKING_REP.image ? (
            <div className="mt-6 overflow-hidden rounded-2xl border border-n200/80 aspect-[4/3] max-w-[220px]">
              <img
                src={BOOKING_REP.image}
                alt=""
                className="h-full w-full object-cover"
                style={
                  BOOKING_REP.imagePosition
                    ? { objectPosition: BOOKING_REP.imagePosition }
                    : undefined
                }
              />
            </div>
          ) : null}

          {configured && pageUrl ? (
            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-canopy hover:text-forest transition-colors"
            >
              Open in Google Calendar
              <ExternalLink size={14} aria-hidden />
            </a>
          ) : (
            <p className="mt-6 text-sm text-n600 leading-relaxed">
              Prefer email?{" "}
              <a
                href="mailto:hello@planetive.org"
                className="font-semibold text-canopy hover:text-forest transition-colors"
              >
                hello@planetive.org
              </a>
            </p>
          )}
        </div>

        <div className="lg:col-span-8 min-h-[520px] flex flex-col">
          {configured && embedUrl ? (
            <>
              <iframe
                title={`Book a Google Meet with ${BOOKING_REP.name}`}
                src={embedUrl}
                className="w-full flex-1 min-h-[520px] border-0 bg-white"
                loading="lazy"
              />
              <p className="px-6 py-3 text-xs text-n600 border-t border-n200/80 bg-[var(--n50)]/40">
                <CalendarDays
                  size={12}
                  className="inline-block mr-1.5 -mt-0.5 align-middle text-canopy"
                  aria-hidden
                />
                Times shown in your local timezone. A Google Meet link is included in your
                confirmation email.
              </p>
            </>
          ) : (
            <BookingSetupPlaceholder />
          )}
        </div>
      </div>
    </div>
  );

  if (embedded) return content;

  return (
    <section className="py-16 md:py-20 bg-[var(--n50)] border-t border-n200/60">
      <div className="container-x">
        <ScrollReveal>{content}</ScrollReveal>
      </div>
    </section>
  );
}

function BookingSetupPlaceholder() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 md:p-12 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-soft text-canopy">
        <CalendarDays size={24} aria-hidden />
      </span>
      <h3 className="mt-5 font-display text-xl text-forest">Live booking coming soon</h3>
      <p className="mt-3 max-w-md text-sm text-n600 leading-relaxed">
        Our team is setting up instant Google Meet scheduling. In the meantime, send us a
        message and we&apos;ll reply within two business days.
      </p>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-primary"
      >
        Contact us
      </Link>
    </div>
  );
}
