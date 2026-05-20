import Image from "next/image";
import Link from "next/link";
import {
  testimonials,
  whitePapers,
  caseStudies,
  affiliatedPartners,
  clientLogos,
  clientsCompositeImage,
  testimonialsImage,
} from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Insights",
  description:
    "Testimonials, white papers, case studies, useful links, clients, and partners - everything that proves the work behind Validation Associates.",
};

export default function InsightsHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Custom hero - Process Validation graphic at natural 1.9:1 aspect.
            Matches the padding, h1 scale, and items-center alignment of the
            other custom heroes site-wide. */}
        <section className="relative bg-[color:var(--color-navy-deep)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20 lg:py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)] mb-6">
                <span className="w-2 h-2 bg-[color:var(--color-green)]" />
                Insights
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
                What clients say. What we publish. Who we serve.
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                The Insights hub is where the proof lives - testimonials from people who&apos;ve worked with us, the white papers and case studies our practitioners publish, the clients who trust us, and the organizations we partner with.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="relative w-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src={testimonialsImage.src}
                  alt={testimonialsImage.alt}
                  width={1200}
                  height={630}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick links - the 4 sub-areas as big tiles */}
        <section className="bg-white border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              <SubAreaTile
                number="01"
                title="Testimonials"
                href="/testimonials"
                summary="Hiring managers, validation leads, and HR directors in their own words - across pharma, biotech, and medical-device programs."
              />
              <SubAreaTile
                number="02"
                title="Resources"
                href="/resources"
                summary="White papers on CSV, risk-based validation, and 21 CFR Part 11 - plus 6 case studies and 25+ curated regulatory references."
              />
              <SubAreaTile
                number="03"
                title="Clients"
                href="/clients"
                summary="Global pharma, biotech, and medical-device organizations. Confidential per engagement; references on request."
              />
              <SubAreaTile
                number="04"
                title="Partners"
                href="/partners"
                summary="Memberships in RAPS, ISPE, ACRP, and SQA - plus E-Verify, D&B Verified, and our strategic technology alliances."
              />
            </div>
          </div>
        </section>

        {/* Testimonials preview */}
        <section className="bg-[color:var(--color-cream)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="grid md:grid-cols-12 gap-12 mb-12 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Testimonials
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  In their own words.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  Real quotes from the people who&apos;ve worked with us - and why 80%+ of our engagements come from repeat business and referrals.
                </p>
                <Link
                  href="/testimonials"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                >
                  Read all 7 testimonials <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((t, i) => (
                <figure
                  key={i}
                  className="bg-white p-8 lg:p-10 border-t-2 border-[color:var(--color-green)] flex flex-col"
                >
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    className="text-[color:var(--color-green-deep)] mb-6"
                    aria-hidden
                  >
                    <path
                      d="M0 24V14C0 6 4 1 12 0v6c-3 1-5 4-5 8h5v10H0zm18 0V14C18 6 22 1 30 0v6c-3 1-5 4-5 8h5v10H18z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote className="font-display text-xl text-[color:var(--color-navy)] leading-snug flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="pt-5 border-t border-[color:var(--color-line)]">
                    <div className="text-sm font-semibold text-[color:var(--color-navy)]">{t.role}</div>
                    <div className="text-xs text-[color:var(--color-ink-muted)]">{t.company}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Resources preview */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="grid md:grid-cols-12 gap-12 mb-12 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Resources
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  Field-tested guidance.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  Three white papers, six case studies, and a curated list of 25+ regulatory references for life-science quality, validation, and clinical teams.
                </p>
                <Link
                  href="/resources"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                >
                  Open the full resources library <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whitePapers.map((p, i) => (
                <article
                  key={p.title}
                  className="bg-[color:var(--color-cream)] border border-[color:var(--color-line)] p-7 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5 text-xs">
                    <span className="font-mono text-[color:var(--color-green-deep)]">0{i + 1}</span>
                    <span className="uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                      White Paper
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[color:var(--color-navy)] mb-3 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                    {p.summary}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)] mb-4">
                Case studies
              </h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {caseStudies.map((c) => (
                  <li
                    key={c.number}
                    className="flex items-baseline gap-3 py-2 border-b border-[color:var(--color-line)] text-sm"
                  >
                    <span className="font-mono text-xs text-[color:var(--color-green-deep)]">
                      {c.number}
                    </span>
                    <span className="text-[color:var(--color-ink)] flex-1">{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Clients preview */}
        <section className="bg-[color:var(--color-cream)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="grid md:grid-cols-12 gap-12 mb-10 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Clients
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  Global organizations.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  A few of the names we&apos;ve worked with - across pharma, biotech, medical device, and clinical research.
                </p>
                <Link
                  href="/clients"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                >
                  See all clients <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="bg-white border border-[color:var(--color-line)] p-8 lg:p-10 flex items-center justify-center">
              <Image
                src={clientsCompositeImage.src}
                alt={clientsCompositeImage.alt}
                width={clientsCompositeImage.width}
                height={clientsCompositeImage.height}
                className="w-full max-w-[800px] h-auto"
              />
            </div>
            <p className="mt-6 text-xs text-[color:var(--color-ink-muted)] text-center">
              Featured: {clientLogos.slice(0, 8).join(" · ")} and many more.
            </p>
          </div>
        </section>

        {/* Partners preview */}
        <section className="bg-white border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="grid md:grid-cols-12 gap-12 mb-10 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Partners
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  Memberships and recognition.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  Active in the regulatory and pharmaceutical professional societies that set the standards we work to.
                </p>
                <Link
                  href="/partners"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                >
                  See all partners <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {affiliatedPartners.map((p) => (
                <div
                  key={p.name}
                  className="bg-white aspect-[5/3] flex items-center justify-center px-5 py-4"
                  title={p.note}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={180}
                    height={90}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* Bottom CTA - matches the home page treatment so the green button
            reads clearly against a cream band (the prior white-on-green made
            the "Talk to our Team" label hard to read). */}
        <section className="bg-[color:var(--color-cream)] border-t border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight text-[color:var(--color-navy)]">
                Want a deeper look?
              </h2>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-5 w-full transition-colors shadow-md"
              >
                <span>Talk to our Team</span>
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

function SubAreaTile({
  number,
  title,
  href,
  summary,
}: {
  number: string;
  title: string;
  href: string;
  summary: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white p-8 lg:p-10 hover:bg-[color:var(--color-navy)] hover:text-white transition-colors"
    >
      <div className="flex items-center gap-3 mb-6 text-xs">
        <span className="font-mono text-[color:var(--color-green-deep)] group-hover:text-[color:var(--color-green)]">
          {number}
        </span>
        <span className="flex-1 h-px bg-[color:var(--color-line)] group-hover:bg-white/20" />
      </div>
      <h3 className="font-display text-3xl text-[color:var(--color-navy)] group-hover:text-white mb-3 leading-tight transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[color:var(--color-ink-muted)] group-hover:text-white/80 leading-relaxed mb-6 transition-colors">
        {summary}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] group-hover:text-white group-hover:gap-3 transition-all">
        Open <ArrowRight size={16} />
      </span>
    </Link>
  );
}
