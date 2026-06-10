import { z } from "zod";

export const PLANETIVE_INBOX_EMAIL = "info@planetive.org";

export const siteFormPayloadSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("contact"),
    name: z.string().trim().min(1),
    email: z.string().trim().email(),
    organization: z.string().trim().optional(),
    message: z.string().trim().min(1),
  }),
  z.object({
    kind: z.literal("newsletter"),
    email: z.string().trim().email(),
    source: z.enum(["footer", "blog"]),
  }),
  z.object({
    kind: z.literal("application"),
    name: z.string().trim().min(1),
    email: z.string().trim().email(),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(1),
    interest: z.string().trim().min(1),
  }),
]);

export type SiteFormPayload = z.infer<typeof siteFormPayloadSchema>;
