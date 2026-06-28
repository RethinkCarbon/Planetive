export type BookingRepresentative = {
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
};

/**
 * Google Calendar appointment schedule embed URL.
 *
 * Set up in Google Calendar → Appointment schedules → Share → Website embed → Inline embed.
 * The URL should look like:
 * https://calendar.google.com/calendar/appointments/schedules/AcZssZ...?gv=true
 *
 * When someone books, Google Calendar adds a Google Meet link to the event automatically
 * (enable "Google Meet video conferencing" on the appointment schedule).
 *
 * Override in production with VITE_GOOGLE_CALENDAR_BOOKING_URL.
 */
const DEFAULT_BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3RK0C582OFpVA8AeJs9h0lJyba6thvkeeNjjG2mhBPHhEbydBrkk5BBWMEk1DF9j35aDYmMS4l?gv=true";

export const BOOKING_REP: BookingRepresentative = {
  name: "Planetive Team",
  role: "Consulting & advisory",
};

export function getBookingEmbedUrl(): string {
  const fromEnv = import.meta.env.VITE_GOOGLE_CALENDAR_BOOKING_URL;
  if (typeof fromEnv === "string" && fromEnv.trim()) return fromEnv.trim();
  if (DEFAULT_BOOKING_EMBED_URL.trim()) return DEFAULT_BOOKING_EMBED_URL.trim();
  return "";
}

export function getBookingPageUrl(): string {
  const embedUrl = getBookingEmbedUrl();
  if (!embedUrl) return "";
  return embedUrl.replace(/([?&])gv=true(&|$)/, "$1").replace(/[?&]$/, "");
}

export function isBookingConfigured(): boolean {
  return getBookingEmbedUrl().length > 0;
}
