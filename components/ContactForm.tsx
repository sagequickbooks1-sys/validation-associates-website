"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@/components/Icons";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      role: fd.get("role"),
      message: fd.get("message"),
      smsOptIn: fd.get("smsOptIn") ? "yes" : "no",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[color:var(--color-cream)] border-l-4 border-[color:var(--color-green)] p-8 lg:p-10">
        <div className="flex items-start gap-5">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[color:var(--color-green-deep)] shrink-0"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" />
            <path
              d="M8 12l3 3 5-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
              Submitted Successfully
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-[color:var(--color-navy)] mt-3 mb-3 leading-tight">
              Thank you - your message has been sent.
            </h3>
            <p className="text-[color:var(--color-ink)] leading-relaxed">
              We&apos;ve received your inquiry and a copy has been delivered to{" "}
              <strong>info@validationassociates.com</strong>. A team member will
              respond within one business day.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all underline underline-offset-4"
            >
              Send another message <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const disabled = status === "submitting";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="sm:col-span-1">
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          disabled={disabled}
          className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors disabled:opacity-60"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          disabled={disabled}
          className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors disabled:opacity-60"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          disabled={disabled}
          className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors disabled:opacity-60"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
          Phone{" "}
          <span className="font-normal normal-case text-[10px] text-[color:var(--color-ink-muted)]/70">
            (optional)
          </span>
        </label>
        <input
          type="tel"
          name="phone"
          disabled={disabled}
          className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors disabled:opacity-60"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
          I&apos;m reaching out as a
        </label>
        <select
          name="role"
          disabled={disabled}
          className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors disabled:opacity-60"
        >
          <option>Hiring manager</option>
          <option>Candidate / consultant</option>
          <option>Partner / vendor</option>
          <option>Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
          How can we help?
        </label>
        <textarea
          name="message"
          rows={6}
          required
          disabled={disabled}
          className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors resize-y disabled:opacity-60"
        />
      </div>

      {/* SMS opt-in - 10DLC consent disclosure. Optional - form submits regardless. */}
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 bg-[color:var(--color-cream)] border border-[color:var(--color-line)] p-4 cursor-pointer hover:border-[color:var(--color-navy)]/40 transition-colors">
          <input
            type="checkbox"
            name="smsOptIn"
            value="yes"
            disabled={disabled}
            className="mt-1 w-4 h-4 accent-[color:var(--color-green)] shrink-0"
          />
          <span className="text-xs text-[color:var(--color-ink)] leading-relaxed">
            By opting in for text messages, you agree to receive appointment reminders and important updates from VALIDATION ASSOCIATES LLC at the number provided. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. View our{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[color:var(--color-navy)] underline hover:text-[color:var(--color-green-deep)]"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="font-semibold text-[color:var(--color-navy)] underline hover:text-[color:var(--color-green-deep)]"
            >
              Terms &amp; Conditions
            </Link>{" "}
            for more information.
          </span>
        </label>
      </div>

      {status === "error" && (
        <div className="sm:col-span-2 bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-900 leading-relaxed">
          <strong>We couldn&apos;t send your message.</strong>{" "}
          {errorMsg ||
            "Please try again, or email info@validationassociates.com directly."}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center gap-2 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 transition-colors"
        >
          {status === "submitting" ? (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="animate-spin"
                aria-hidden
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeOpacity="0.3"
                />
                <path
                  d="M21 12a9 9 0 00-9-9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send message <ArrowRight size={16} />
            </>
          )}
        </button>
        <p className="text-xs text-[color:var(--color-ink-muted)] mt-4">
          Messages are delivered to <strong>info@validationassociates.com</strong>. SMS opt-in is optional - the form submits with or without it.
        </p>
      </div>
    </form>
  );
}
