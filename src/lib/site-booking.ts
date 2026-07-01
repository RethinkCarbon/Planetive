export type BookingRepresentative = {
  name: string;
  role: string;
};

export type BookingArea = {
  id: string;
  label: string;
  description?: string;
  /** Per-area Google Calendar embed URL — optional; falls back to shared schedule. */
  embedUrl?: string;
};

/**
 * Google Calendar appointment schedule embed URL (shared fallback).
 *
 * Set up in Google Calendar → Appointment schedules → Share → Website embed → Inline embed.
 * Override in production with VITE_GOOGLE_CALENDAR_BOOKING_URL.
 */
const DEFAULT_BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3gCV4PEHAp1kx3kp4RxS8KgFI0sN22Cxw7vUdL79ABzr0yo5L8rHq8akSMvQPnGF6WHskdrf2p?gv=true";

export const BOOKING_REP: BookingRepresentative = {
  name: "Planetive Team",
  role: "Consulting & advisory",
};

/** Booking areas — each uses the shared calendar until per-area links are added. */
export const BOOKING_AREAS: readonly BookingArea[] = [
  { id: "finance", label: "Finance" },
  { id: "tech", label: "Tech" },
  { id: "consultancy", label: "Consultancy" },
] as const;

export function getBookingEmbedUrl(override?: string): string {
  if (typeof override === "string" && override.trim()) return override.trim();
  const fromEnv = import.meta.env.VITE_GOOGLE_CALENDAR_BOOKING_URL;
  if (typeof fromEnv === "string" && fromEnv.trim()) return fromEnv.trim();
  if (DEFAULT_BOOKING_EMBED_URL.trim()) return DEFAULT_BOOKING_EMBED_URL.trim();
  return "";
}

export function getBookingPageUrl(embedUrl?: string): string {
  const url = getBookingEmbedUrl(embedUrl);
  if (!url) return "";
  return url.replace(/([?&])gv=true(&|$)/, "$1").replace(/[?&]$/, "");
}

export function isBookingConfigured(embedUrl?: string): boolean {
  return getBookingEmbedUrl(embedUrl).length > 0;
}

export function resolveBookingArea(areas: readonly BookingArea[], selectedId: string): BookingArea {
  return areas.find((area) => area.id === selectedId) ?? areas[0];
}
