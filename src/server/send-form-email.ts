import {
  PLANETIVE_INBOX_EMAIL,
  type SiteFormPayload,
} from "@/lib/site-form-payload";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatPayload(payload: SiteFormPayload) {
  switch (payload.kind) {
    case "contact":
      return {
        subject: `Contact form — ${payload.name}`,
        replyTo: payload.email,
        text: [
          "New contact form submission",
          "",
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Organisation: ${payload.organization || "—"}`,
          "",
          payload.message,
        ].join("\n"),
        html: [
          "<h2>New contact form submission</h2>",
          `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
          `<p><strong>Organisation:</strong> ${escapeHtml(payload.organization || "—")}</p>`,
          `<p><strong>Message:</strong></p>`,
          `<p>${escapeHtml(payload.message).replaceAll("\n", "<br>")}</p>`,
        ].join(""),
      };
    case "newsletter":
      return {
        subject: `Newsletter signup — ${payload.source}`,
        replyTo: payload.email,
        text: [
          "New newsletter signup",
          "",
          `Email: ${payload.email}`,
          `Source: ${payload.source}`,
        ].join("\n"),
        html: [
          "<h2>New newsletter signup</h2>",
          `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
          `<p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>`,
        ].join(""),
      };
    case "application":
      return {
        subject: `Work with us application — ${payload.interest}`,
        replyTo: payload.email,
        text: [
          "New work-with-us application",
          "",
          `Program: ${payload.interest}`,
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone || "—"}`,
          "",
          payload.message,
        ].join("\n"),
        html: [
          "<h2>New work-with-us application</h2>",
          `<p><strong>Program:</strong> ${escapeHtml(payload.interest)}</p>`,
          `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
          `<p><strong>Phone:</strong> ${escapeHtml(payload.phone || "—")}</p>`,
          `<p><strong>Message:</strong></p>`,
          `<p>${escapeHtml(payload.message).replaceAll("\n", "<br>")}</p>`,
        ].join(""),
      };
  }
}

export async function sendFormEmail(payload: SiteFormPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const inbox = process.env.PLANETIVE_CONTACT_EMAIL ?? PLANETIVE_INBOX_EMAIL;
  const from =
    process.env.PLANETIVE_EMAIL_FROM ?? "Planetive Website <onboarding@resend.dev>";
  const { subject, replyTo, text, html } = formatPayload(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: replyTo,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Email delivery failed (${response.status}): ${body}`);
  }
}
