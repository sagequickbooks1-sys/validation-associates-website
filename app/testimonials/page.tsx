import Link from "next/link";
import { testimonials, whyUsImage } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Testimonials",
  description:
    "What hiring managers, validation leads, and HR directors say about Validation Associates.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Testimonials"
          title="In their own words."
          intro="Hiring managers, validation leads, and HR directors who've worked with us across pharma, biotech, and medical-device programs."
          image={whyUsImage}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="grid md:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="bg-white p-10 lg:p-12 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono text-[color:var(--color-green-deep)]">
                      0{i + 1}
                    </span>
                    <span className="flex-1 h-px bg-[color:var(--color-line)]" />
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-[color:var(--color-green-deep)]" aria-hidden>
                      <path d="M0 24V14C0 6 4 1 12 0v6c-3 1-5 4-5 8h5v10H0zm18 0V14C18 6 22 1 30 0v6c-3 1-5 4-5 8h5v10H18z" fill="currentColor" />
                    </svg>
                  </div>
                  <blockquote className="font-display text-2xl md:text-3xl text-[color:var(--color-navy)] leading-snug flex-1 mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="pt-5 border-t border-[color:var(--color-line)]">
                    <div className="text-base font-semibold text-[color:var(--color-navy)]">{t.role}</div>
                    <div className="text-sm text-[color:var(--color-ink-muted)]">{t.company}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
                Become our next quote.
              </h2>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-5 w-full transition-colors"
              >
                <span>Hire our team</span>
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
