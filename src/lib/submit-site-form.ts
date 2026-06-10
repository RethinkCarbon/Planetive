import { createServerFn } from "@tanstack/react-start";
import { siteFormPayloadSchema } from "@/lib/site-form-payload";

export const submitSiteForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => siteFormPayloadSchema.parse(data))
  .handler(async ({ data }) => {
    const { sendFormEmail } = await import("@/server/send-form-email");
    await sendFormEmail(data);
    return { success: true as const };
  });
