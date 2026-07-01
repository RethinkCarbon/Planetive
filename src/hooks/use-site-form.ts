import { useState } from "react";
import type { SiteFormPayload } from "@/lib/site-form-payload";
import { PLANETIVE_INBOX_EMAIL } from "@/lib/site-form-payload";
import { submitSiteForm } from "@/lib/submit-site-form";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function useSiteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: SiteFormPayload) {
    setStatus("submitting");
    setError(null);

    try {
      await submitSiteForm({ data: payload });
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      setError(`Something went wrong. Please try again or email us at ${PLANETIVE_INBOX_EMAIL}.`);
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setError(null);
  }

  return {
    submit,
    status,
    error,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
    reset,
  };
}
