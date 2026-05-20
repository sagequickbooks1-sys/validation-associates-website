import Image from "next/image";
import Link from "next/link";
import { careers, careersImage, company, eeoStatement } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Careers",
  description:
    "Build your career with Validation Associates - engagement leadership, comprehensive benefits, and the support of an established life-science firm.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Custom hero - the careers banner (800x419, 1.9:1) is rendered at
            its natural aspect ratio. Padding, h1 scale, and column alignment
            match the site-wide custom hero pattern. */}
        <section className="relative bg-[color:var(--color-navy-deep)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20 lg:py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)] mb-6">
                <span className="w-2 h-2 bg-[color:var(--color-green)]" />
                Careers
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
                {careers.heroQuestion}
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                {careers.heroBody}
              </p>
            </div>
            <div className="md:col-span-7 flex justify-center">
              {/* New image is near-square (1.14:1) - cap its width so it
                  doesn't tower over the text column. */}
              <div className="relative w-full max-w-[460px] overflow-hidden">
                <Image
                  src={careersImage.src}
                  alt={careersImage.alt}
                  width={careersImage.width ?? 1445}
                  height={careersImage.height ?? 1272}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                {careers.cultureTitle}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                {careers.cultureLead}
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-8 md:border-l border-[color:var(--color-line)] text-lg text-[color:var(--color-ink)] leading-relaxed">
              <p>{careers.cultureBody}</p>
            </div>
          </div>
        </section>

        {/* Our Purpose Is Beyond Profit */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green)]">
                Our Purpose
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                {careers.purposeTitle}
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-8 md:border-l border-white/15 text-lg text-white/85 leading-relaxed space-y-5">
              <p>{careers.purposeBody}</p>
              <p className="font-display italic text-xl text-[color:var(--color-blue-soft)]">
                {careers.purposeBody2}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Benefits & Perks
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                What we offer.
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {careers.benefits.map((b, i) => (
                <li
                  key={b}
                  className="bg-white p-6 flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span className="text-xs font-mono text-[color:var(--color-green-deep)] mt-1">
                    0{i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <span className="text-[color:var(--color-ink)]">{b}</span>
                </li>
              ))}
            </ul>

            {/* Equal Employment Opportunity card - sits inside the "What We Offer"
                band per client docx so it reads as a final, framed commitment. */}
            <div className="mt-10 bg-[color:var(--color-navy)] text-white p-8 lg:p-10 border-l-4 border-[color:var(--color-green)]">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green)] mb-3 block">
                {eeoStatement.title}
              </span>
              <p className="text-base text-white/85 leading-relaxed">
                {eeoStatement.body}
              </p>
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section className="bg-[color:var(--color-cream)] border-y border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-20 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
              How to Apply
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 mb-6 leading-tight">
              Send us your resume.
            </h2>
            <p className="text-lg text-[color:var(--color-ink-muted)] leading-relaxed mb-8 max-w-2xl mx-auto">
              {careers.apply}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${company.careersEmail}`}
                className="inline-flex items-center gap-2 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-7 py-4 transition-colors"
              >
                Email your resume <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[color:var(--color-navy)] border-2 border-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white font-semibold px-7 py-4 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
