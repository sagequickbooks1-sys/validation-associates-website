import { NextResponse } from "next/server";

/**
 * Contact form delivery endpoint.
 *
 * - Always returns { ok: true } on a valid submission so the user gets a
 *   confirmation message (10DLC reviewers need to see this flow work).
 * - When RESEND_API_KEY is set in Vercel env vars, the form payload is
 *   delivered to info@validationassociates.com via the Resend HTTP API.
 *   Until then, submissions are logged server-side for the client to wire
 *   up real delivery whenever they're ready.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const email = str(body.email);
  const message = str(body.message);
  const company = str(body.company);
  const phone = str(body.phone);
  const role = str(body.role);
  const smsOptIn = body.smsOptIn === "yes" || body.smsOptIn === true;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const emailBody = [
    "New contact form submission from validationassociates.com",
    "",
    `Name:           ${name}`,
    `Email:          ${email}`,
    `Company:        ${company || "(not provided)"}`,
    `Phone:          ${phone || "(not provided)"}`,
    `Reaching out as: ${role || "(not specified)"}`,
    `SMS opt-in:     ${smsOptIn ? "Yes" : "No"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "info@validationassociates.com";
  const from = process.env.CONTACT_FROM || "Validation Associates <onboarding@resend.dev>";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `Contact form: ${name}${company ? ` (${company})` : ""}`,
          text: emailBody,
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        console.error("[contact] Resend delivery failed:", res.status, errText);
      }
    } catch (err) {
      console.error("[contact] Resend network error:", err);
    }
  } else {
    console.log(
      "[contact] No RESEND_API_KEY set - submission logged only.\n" + emailBody,
    );
  }

  return NextResponse.json({ ok: true });
}
