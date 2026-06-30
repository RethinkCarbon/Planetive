import { CalendarDays, ExternalLink, Video } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import {
  BOOKING_REP,
  type BookingArea,
  getBookingEmbedUrl,
  getBookingPageUrl,
  isBookingConfigured,
  resolveBookingArea,
} from "@/lib/site-booking";
import { cn } from "@/lib/utils";

type BookMeetingSectionProps = {
  className?: string;
  /** When true, skips outer section padding (for embedding inside another section). */
  embedded?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  areas?: readonly BookingArea[];
};

export function BookMeetingSection({
  className = "",
  embedded = false,
  eyebrow = "Book a call",
  title,
  description,
  areas,
}: BookMeetingSectionProps) {
  const hasAreas = areas && areas.length > 0;
  const [selectedId, setSelectedId] = useState(areas?.[0]?.id ?? "");

  const selected = hasAreas ? resolveBookingArea(areas, selectedId) : null;

  const embedUrl = getBookingEmbedUrl(selected?.embedUrl);
  const pageUrl = getBookingPageUrl(selected?.embedUrl);
  const configured = isBookingConfigured(selected?.embedUrl);

  const displayLabel = selected?.label ?? BOOKING_REP.name;
  const displayRole = selected?.description ?? BOOKING_REP.role;

  const content = (
    <div
      className={cn(
        "rounded-[32px] border border-n200 bg-white shadow-[var(--shadow-soft)] overflow-hidden",
        className,
      )}
    >
      {hasAreas ? (
        <div className="lg:hidden border-b border-n200/80 bg-[var(--n50)]/60 px-4 py-4">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500 mb-3">
            Choose an area
          </p>
          <AreaPicker
            areas={areas}
            selectedId={selected!.id}
            onSelect={setSelectedId}
            layout="row"
          />
        </div>
      ) : null}

      <div
        className={cn(
          "grid grid-cols-1",
          hasAreas
            ? "lg:grid-cols-[12.5rem_minmax(0,1fr)_minmax(0,1.6fr)]"
            : "lg:grid-cols-12",
        )}
      >
        {hasAreas ? (
          <div className="hidden lg:flex lg:flex-col border-b lg:border-b-0 lg:border-r border-n200/80 bg-[var(--n50)]/80 p-4">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-n500 mb-3 px-1">
              Book for
            </p>
            <AreaPicker
              areas={areas}
              selectedId={selected!.id}
              onSelect={setSelectedId}
              layout="column"
            />
          </div>
        ) : null}

        <div
          className={cn(
            "p-8 md:p-10 border-b lg:border-b-0 border-n200/80 bg-[var(--n50)]/60",
            hasAreas ? "" : "lg:col-span-4 lg:border-r",
          )}
        >
          <div className="flex items-center gap-2 text-canopy">
            <Video size={16} aria-hidden />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase">{eyebrow}</span>
          </div>
          <h2 className="mt-4 font-ui font-semibold text-2xl md:text-[1.75rem] text-forest leading-tight">
            {title ?? `Book a ${displayLabel} consultation`}
          </h2>
          {hasAreas ? (
            <p className="mt-2 text-sm font-semibold text-n600">{displayLabel}</p>
          ) : (
            <p className="mt-2 text-sm font-semibold text-n600">{displayRole}</p>
          )}
          <p className="mt-4 text-sm text-n600 leading-relaxed">
            {description ??
              "Pick a time that works for you. You'll receive a calendar invite with a Google Meet link — no back-and-forth email needed."}
          </p>

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

        <div
          className={cn(
            "min-h-[520px] flex flex-col",
            hasAreas ? "" : "lg:col-span-8",
          )}
        >
          {configured && embedUrl ? (
            <>
              <iframe
                key={selected?.id ?? "default"}
                title={`Book a Google Meet — ${displayLabel}`}
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
                Booking for {displayLabel}. Times shown in your local timezone.
              </p>
            </>
          ) : (
            <BookingSetupPlaceholder areaLabel={displayLabel} />
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

function AreaPicker({
  areas,
  selectedId,
  onSelect,
  layout,
}: {
  areas: readonly BookingArea[];
  selectedId: string;
  onSelect: (id: string) => void;
  layout: "column" | "row";
}) {
  return (
    <ul
      className={cn(
        layout === "column" ? "flex flex-col gap-1" : "flex gap-2 overflow-x-auto pb-1",
      )}
      role="listbox"
      aria-label="Select a booking area"
    >
      {areas.map((area) => {
        const isSelected = area.id === selectedId;
        return (
          <li key={area.id} role="option" aria-selected={isSelected}>
            <button
              type="button"
              onClick={() => onSelect(area.id)}
              className={cn(
                "rounded-2xl text-left transition-all duration-200 font-ui",
                layout === "column" ? "w-full px-3 py-3" : "shrink-0 px-4 py-2.5",
                isSelected
                  ? "bg-white shadow-[var(--shadow-soft)] ring-1 ring-mint/50 text-forest font-semibold"
                  : "hover:bg-white/70 text-n800 font-medium",
                layout === "column" ? "text-sm" : "text-xs",
              )}
            >
              {area.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function BookingSetupPlaceholder({ areaLabel }: { areaLabel?: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 md:p-12 text-center">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-mint-soft text-canopy">
        <CalendarDays size={24} aria-hidden />
      </span>
      <h3 className="mt-5 font-ui font-semibold text-xl text-forest">Live booking coming soon</h3>
      <p className="mt-3 max-w-md text-sm text-n600 leading-relaxed">
        {areaLabel
          ? `${areaLabel} scheduling is being set up. In the meantime, send us a message and we'll reply within two business days.`
          : "Our team is setting up instant Google Meet scheduling. In the meantime, send us a message and we'll reply within two business days."}
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
