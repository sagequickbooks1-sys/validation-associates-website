import Link from "next/link";
import { privacyPolicy, company, offices } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Validation Associates LLC collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-white/70">
              Last Updated: {privacyPolicy.lastUpdated}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white">
          <div className="mx-auto max-w-[860px] px-6 lg:px-10 py-16 lg:py-20">
            {/* Intro */}
            <div className="space-y-5 text-[color:var(--color-ink)] leading-relaxed">
              {privacyPolicy.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Sections */}
            <div className="mt-12 space-y-12">
              {privacyPolicy.sections.map((s, i) => (
                <section key={s.title} className="scroll-mt-24" id={`section-${i + 1}`}>
                  <div className="flex items-baseline gap-4 mb-5 pb-4 border-b border-[color:var(--color-line)]">
                    <span className="font-mono text-sm text-[color:var(--color-green-deep)]">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-navy)] leading-tight">
                      {s.title}
                    </h2>
                  </div>

                  {s.paragraphs && (
                    <div className="space-y-4 text-[color:var(--color-ink)] leading-relaxed">
                      {s.paragraphs.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  )}

                  {s.items && s.items.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {s.items.map((item, j) => {
                        const label = "label" in item ? item.label : undefined;
                        return (
                          <li
                            key={j}
                            className="flex items-baseline gap-3 leading-relaxed text-[color:var(--color-ink)]"
                          >
                            <span className="text-[color:var(--color-green-deep)] font-bold shrink-0">
                              +
                            </span>
                            <span>
                              {label && (
                                <strong className="text-[color:var(--color-navy)]">
                                  {label}:{" "}
                                </strong>
                              )}
                              {item.body}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {s.footnote && (
                    <p className="mt-5 text-sm text-[color:var(--color-ink-muted)] italic leading-relaxed">
                      {s.footnote}
                    </p>
                  )}

                  {/* Contact Us section gets the address card appended */}
                  {s.title === "Contact Us" && (
                    <div className="mt-6 bg-[color:var(--color-cream)] border border-[color:var(--color-line)] p-6 lg:p-8">
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
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Back to home */}
            <div className="mt-16 pt-8 border-t border-[color:var(--color-line)]">
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
