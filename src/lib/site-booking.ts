import { TEAM } from "@/lib/about-content";

export type BookingRepresentative = {
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
};

export type BookingConsultant = {
  id: string;
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  /** Per-person Google Calendar embed URL — add when ready. */
  embedUrl?: string;
};

/**
 * Google Calendar appointment schedule embed URL (shared fallback).
 *
 * Set up in Google Calendar → Appointment schedules → Share → Website embed → Inline embed.
 * Override in production with VITE_GOOGLE_CALENDAR_BOOKING_URL.
 */
const DEFAULT_BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3RK0C582OFpVA8AeJs9h0lJyba6thvkeeNjjG2mhBPHhEbydBrkk5BBWMEk1DF9j35aDYmMS4l?gv=true";

export const BOOKING_REP: BookingRepresentative = {
  name: "Planetive Team",
  role: "Consulting & advisory",
};

function consultantFromTeam(id: string, embedUrl?: string): BookingConsultant {
  const member = TEAM.find((t) => t.id === id);
  if (!member?.image) {
    throw new Error(`Booking consultant "${id}" needs a team portrait in about-content.`);
  }
  return {
    id: member.id,
    name: member.name,
    role: member.role,
    image: member.image,
    imagePosition: member.imagePosition,
    embedUrl,
  };
}

/** Consultants available on the consulting booking flow. */
export const BOOKING_CONSULTANTS: readonly BookingConsultant[] = [
  consultantFromTeam("kamal"),
  consultantFromTeam("umair"),
];

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

export function resolveBookingConsultant(
  consultants: readonly BookingConsultant[],
  selectedId: string,
): BookingConsultant {
  return consultants.find((c) => c.id === selectedId) ?? consultants[0];
}
