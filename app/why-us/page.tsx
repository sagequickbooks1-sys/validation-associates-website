import Image from "next/image";
import Link from "next/link";
import {
  whyUsLegacy as whyUs,
  whyUsPageIntro,
  whyUsImage,
  values,
  aboutWhyUs,
  company,
} from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Why Us",
  description:
    "Quality, experience, and end-to-end support - three reasons life-science clients return to Validation Associates.",
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Why Us"
          title="Why Us"
          intro={whyUsPageIntro}
          image={whyUsImage}
        />

        {/* Three pillars - Quality / Experience / Support, full original copy */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 space-y-20">
            {whyUs.map((w, i) => (
              <div
                key={w.key}
                className="grid md:grid-cols-12 gap-12 items-start"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-mono text-[color:var(--color-green-deep)]">
                      0{i + 1}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                      Pillar
                    </span>
                  </div>
                  <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] leading-[0.98] tracking-tight">
                    {w.title}
                  </h2>
                </div>
                <div className="md:col-span-8 md:pl-8 md:border-l border-[color:var(--color-line)]">
                  <p className="text-lg text-[color:var(--color-ink)] leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pull-out - "Quality, Validation, Regulatory, Clinical." */}
        <section className="bg-[color:var(--color-navy)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image src={whyUsImage.src} alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[color:var(--color-navy-deep)]/85" />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green)]">
                Our Standard
              </span>
              <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] tracking-tight">
                {aboutWhyUs.pulloutHeadline}
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-8 md:border-l border-white/15">
              <p className="text-lg text-white/85 leading-relaxed">{aboutWhyUs.pullout}</p>
            </div>
          </div>
        </section>

        {/* About + Mission */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                A comprehensive solution provider - consulting, contracting, training, and cost-savings.
              </h2>
              <div className="mt-6 inline-flex items-baseline gap-3 px-4 py-2 bg-[color:var(--color-cream)] border border-[color:var(--color-line)]">
                <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Our Mission
                </span>
                <span className="font-display text-lg text-[color:var(--color-navy)]">
                  {aboutWhyUs.mission}
                </span>
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8 md:border-l border-[color:var(--color-line)]">
              <p className="text-lg text-[color:var(--color-ink)] leading-relaxed">
                {aboutWhyUs.aboutBlock}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-[color:var(--color-cream)] border-y border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Our Core Values - We Commit To
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                What you can expect - every engagement, every time.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {values.map((v, i) => (
                <div key={v.title} className="bg-white p-8">
                  <div className="text-xs font-mono text-[color:var(--color-green-deep)] mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-2xl text-[color:var(--color-navy)] mb-2 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Result quote */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-24 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
              The result
            </span>
            <blockquote className="font-display text-4xl md:text-6xl mt-6 leading-[1.05] tracking-tight text-[color:var(--color-navy)]">
              &ldquo;{company.repeatBusiness}&rdquo;
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[color:var(--color-green-deep)] text-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
                Read what our clients say.
              </h2>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/testimonials"
                className="inline-flex items-center justify-between gap-4 bg-white text-[color:var(--color-green-deep)] hover:bg-[color:var(--color-cream)] font-semibold px-8 py-5 w-full transition-colors"
              >
                <span>See testimonials</span>
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
