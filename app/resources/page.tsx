import Link from "next/link";
import {
  whitePapers,
  caseStudies,
  usefulLinks,
  servicesImage,
} from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Resources",
  description:
    "White papers, case studies, and useful regulatory links for life-science quality and validation teams.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Resources"
          title="White papers, case studies, useful links."
          intro="Explore our white papers, case studies, and a curated list of regulatory references for life-science quality, validation, and clinical teams."
          image={servicesImage}
        />

        {/* In-page nav */}
        <section className="bg-[color:var(--color-cream)] border-b border-[color:var(--color-line)] sticky top-[80px] z-30 backdrop-blur">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[color:var(--color-ink-muted)]">
            <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-green-deep)] mr-2 self-center">
              Jump to:
            </span>
            <a href="#white-papers" className="hover:text-[color:var(--color-navy)] transition-colors">
              White Papers
            </a>
            <a href="#case-studies" className="hover:text-[color:var(--color-navy)] transition-colors">
              Case Studies
            </a>
            <a href="#useful-links" className="hover:text-[color:var(--color-navy)] transition-colors">
              Useful Links
            </a>
          </div>
        </section>

        {/* White Papers */}
        <section id="white-papers" className="bg-white scroll-mt-32 border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <div className="grid md:grid-cols-12 gap-12 mb-12 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  White Papers
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  Field-tested guidance.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  Practical write-ups from our practitioners on the validation, compliance, and regulatory questions clients ask most.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {whitePapers.map((p, i) => (
                <article key={p.title} className="bg-white p-8 lg:p-10 flex flex-col">
                  <div className="flex items-center gap-3 mb-6 text-xs">
                    <span className="font-mono text-[color:var(--color-green-deep)]">0{i + 1}</span>
                    <span className="flex-1 h-px bg-[color:var(--color-line)]" />
                    <span className="uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                      White Paper
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[color:var(--color-navy)] mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed flex-1 mb-6">
                    {p.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                  >
                    Request copy <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="bg-[color:var(--color-cream)] scroll-mt-32 border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <div className="grid md:grid-cols-12 gap-12 mb-12 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Case Studies
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  Six engagements, end to end.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  Selected projects across pharmaceutical, biotech, and medical-device clients - from quality systems and clinical platforms to regulatory affairs.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {caseStudies.map((c) => (
                <article key={c.number} className="bg-white p-8 flex flex-col group">
                  <div className="flex items-center gap-3 mb-6 text-xs">
                    <span className="font-mono text-[color:var(--color-green-deep)]">
                      Case {c.number}
                    </span>
                    <span className="flex-1 h-px bg-[color:var(--color-line)]" />
                    <span className="uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                      {c.area}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-[color:var(--color-navy)] mb-4 leading-tight flex-1">
                    {c.title}
                  </h3>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                  >
                    Request details <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Useful Links */}
        <section id="useful-links" className="bg-white scroll-mt-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <div className="grid md:grid-cols-12 gap-12 mb-12 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Useful Links
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  References we keep close at hand.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  Regulatory bodies, standards organizations, and industry resources we rely on across validation, compliance, and clinical engagements.
                </p>
              </div>
            </div>
            <ul className="grid md:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {usefulLinks.map((l, i) => (
                <li key={l.url} className="bg-white p-6 lg:p-8 hover:bg-[color:var(--color-cream)] transition-colors">
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-mono text-[color:var(--color-green-deep)] shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-lg text-[color:var(--color-navy)] leading-tight group-hover:text-[color:var(--color-green-deep)] transition-colors">
                        {l.name}
                      </h3>
                    </div>
                    <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed pl-9">
                      {l.note}
                    </p>
                    <p className="pl-9 mt-2 text-xs text-[color:var(--color-blue)] truncate">
                      {l.url.replace(/^https?:\/\//, "")}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
                Need a paper or case study sent over?
              </h2>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-5 w-full transition-colors"
              >
                <span>Request resources</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
