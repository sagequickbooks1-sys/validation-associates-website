import Image from "next/image";
import Link from "next/link";
import { affiliatedPartners, techPartners, servicesImage } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Affiliated Partners",
  description:
    "Memberships, certifications, recognition, and strategic technology alliances that back the work we deliver to life-science clients.",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Affiliated Partners"
          title="Memberships, certifications, and strategic alliances."
          intro="Active in the regulatory and pharmaceutical professional societies that set the standards we work to - backed by certifications and recognition that validate our work."
          image={servicesImage}
        />

        {/* Affiliations grid - 10 logos from the original home page */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Memberships, certifications & recognition
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                Where we&apos;re active, certified, and recognized.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {affiliatedPartners.map((p) => (
                <div
                  key={p.name}
                  className="bg-white p-6 lg:p-8 flex flex-col items-center text-center hover:bg-[color:var(--color-cream)] transition-colors"
                >
                  <div className="h-20 w-full flex items-center justify-center mb-4">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={200}
                      height={100}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                  <div className="font-display text-lg text-[color:var(--color-navy)] leading-tight">
                    {p.name}
                  </div>
                  <p className="text-xs text-[color:var(--color-ink-muted)] mt-2 leading-snug">
                    {p.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic technology alliances */}
        <section className="bg-[color:var(--color-cream)] border-y border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="grid md:grid-cols-12 gap-12 mb-12 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Strategic Technology Alliances
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                  Best-of-breed platforms, deployed in regulated environments.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                  Each platform on this list is one we have implemented, configured, and validated inside life-science environments - so the technology arrives audit-ready.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {techPartners.map((p) => (
                <div
                  key={p.name}
                  className="bg-white aspect-[5/3] flex items-center justify-center p-4 hover:bg-[color:var(--color-cream)] transition-colors"
                  title={p.note}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={140}
                    height={70}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
                Looking to validate a platform?
              </h2>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-5 w-full transition-colors"
              >
                <span>Talk to our team</span>
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
