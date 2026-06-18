import Link from "next/link";
import { termsAndConditions, company, offices } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for the Validation Associates LLC website and text-message communications.",
};

export default function TermsPage() {
  const hq = offices.find((o) => o.isHQ)!;
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[color:var(--color-navy-deep)] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 py-16 md:py-20 lg:py-24">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)] mb-6">
              <span className="w-2 h-2 bg-[color:var(--color-green)]" />
              Legal
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-white/70">
              Last Updated: {termsAndConditions.lastUpdated}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white">
          <div className="mx-auto max-w-[860px] px-6 lg:px-10 py-16 lg:py-20">
            <div className="space-y-5 text-[color:var(--color-ink)] leading-relaxed">
              {termsAndConditions.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {termsAndConditions.sections.map((s, i) => (
                <section
                  key={s.title}
                  className="scroll-mt-24"
                  id={`section-${i + 1}`}
                >
                  <div className="flex items-baseline gap-4 mb-5 pb-4 border-b border-[color:var(--color-line)]">
                    <span className="font-mono text-sm text-[color:var(--color-green-deep)]">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-navy)] leading-tight">
                      {s.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-[color:var(--color-ink)] leading-relaxed">
                    {s.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact card */}
            <div className="mt-12 bg-[color:var(--color-cream)] border border-[color:var(--color-line)] p-6 lg:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)] block mb-3">
                Questions?
              </span>
              <div className="font-display text-lg text-[color:var(--color-navy)] mb-3">
                {company.legalName}
              </div>
              <div className="text-sm text-[color:var(--color-ink)] leading-relaxed space-y-1">
                <p>
                  {hq.street}
                  <br />
                  {hq.cityState}
                </p>
                <p className="pt-2">
                  Email:{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[color:var(--color-navy)] font-semibold hover:underline"
                  >
                    {company.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={`tel:${company.hqPhone}`}
                    className="text-[color:var(--color-navy)] font-semibold hover:underline"
                  >
                    {company.hqPhone}
                  </a>
                </p>
              </div>
              <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed mt-5">
                See also our{" "}
                <Link
                  href="/privacy"
                  className="text-[color:var(--color-navy)] font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                for details on how we handle personal information.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[color:var(--color-line)]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
              >
                Back to home <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
