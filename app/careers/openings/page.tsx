import Link from "next/link";
import { jobOpenings, careersImage, company } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Current Job Openings",
  description:
    "Open roles at Validation Associates LLC - Validation Analyst/Engineer, Biomedical Engineer, Regulatory Affairs Analyst, and Management Analyst positions.",
};

export default function OpeningsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Careers"
          title="Current Job Openings"
          intro={jobOpenings.intro}
          image={careersImage}
          imageFit="contain"
        />

        {/* Roles */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-24">
            <div className="mb-12 flex items-center justify-between gap-6 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                {jobOpenings.roles.length} open roles
              </span>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
              >
                Back to Careers <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {jobOpenings.roles.map((role, i) => (
                <article key={role.title} className="bg-white p-8 lg:p-12 grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-[color:var(--color-green-deep)]">
                        0{i + 1}
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-green-deep)] bg-[color:var(--color-cream)] border border-[color:var(--color-line)] px-2.5 py-1">
                        {role.count}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-[color:var(--color-navy)] leading-tight tracking-tight">
                      {role.title}
                    </h2>
                  </div>
                  <div className="md:col-span-8 md:pl-8 md:border-l border-[color:var(--color-line)]">
                    <p className="text-[color:var(--color-ink)] leading-relaxed mb-5">
                      {role.body}
                    </p>
                    <p className="text-sm text-[color:var(--color-ink-muted)]">
                      <span className="font-semibold text-[color:var(--color-navy)]">
                        Qualifications:{" "}
                      </span>
                      {role.qualifications}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-20 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green)]">
              How to Apply
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 leading-tight">
              Send us your resume.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              {jobOpenings.applyNote}
            </p>
            <a
              href={`mailto:${company.careersEmail}`}
              className="inline-flex items-center gap-2 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-4 transition-colors"
            >
              Email your resume <ArrowRight size={16} />
            </a>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/60">
              {jobOpenings.eoe}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
