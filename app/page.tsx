import Link from "next/link";
import Image from "next/image";
import {
  company,
  stats,
  services,
  whyUs,
  whyUsHomeRightCol,
  testimonials,
  testimonialsSection,
  homeBottomCta,
  affiliatedPartners,
  servicesLead,
  heroImage,
  whyUsImage,
} from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceIcons, ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Validation Associates - Connecting Life Sciences",
  description:
    "Validation, compliance, and staffing for the pharmaceutical, biotech, and medical-device industries. Three offices across the USA, Canada, and India.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[color:var(--color-ink)]">
      <SiteHeader />

      <main className="flex-1">
        {/* ─────────────── 1. Welcome / Hero ─────────────── */}
        <section className="relative bg-white border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12">
            <div className="lg:col-span-7 px-6 lg:px-10 py-16 md:py-20 lg:py-24 lg:pr-16 flex flex-col justify-center lg:border-r border-[color:var(--color-line)]">
              <span className="inline-flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)] mb-7">
                <span className="w-2 h-2 bg-[color:var(--color-green)]" />
                Pharma · Biotech · Medical Device · Healthcare
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[color:var(--color-navy)] leading-[0.96] tracking-tight mb-7">
                People. Strategy. Solutions.{" "}
                <span className="italic text-[color:var(--color-green-deep)]">Simplified.</span>
              </h1>
              <p className="text-lg text-[color:var(--color-ink-muted)] max-w-xl leading-relaxed mb-6">
                {company.heroBody}
              </p>
              <p className="font-display italic text-xl text-[color:var(--color-navy)] max-w-xl leading-relaxed mb-9">
                {company.heroTagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-7 py-4 transition-colors shadow-sm"
                >
                  Our Services <ArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[color:var(--color-navy)] border-2 border-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white font-semibold px-7 py-4 transition-colors"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            {/* Hero image - fills the right column edge-to-edge with object-cover.
                Anchored slightly left so the DNA helix stays intact; pill bottle
                and central glow remain visible. Stats overlay sits ON the image
                at the bottom with a subtle navy gradient for legibility. */}
            <div className="lg:col-span-5 relative bg-[color:var(--color-navy-deep)] min-h-[300px] md:min-h-[380px] lg:min-h-[480px] overflow-hidden">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[25%_center]"
              />
              {/* Stats overlay anchored to the bottom of the image */}
              <div
                className="absolute inset-x-0 bottom-0 pt-20 pb-5 lg:pt-24 lg:pb-7 px-6 lg:px-8 text-white"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,26,46,0.95) 30%, rgba(8,26,46,0.55) 70%, rgba(8,26,46,0) 100%)",
                }}
              >
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-none mb-1.5 tracking-tight">
                        {s.value}
                      </div>
                      <div className="text-[10px] md:text-[11px] text-white/90 leading-snug">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────── 2. Our Services ─────────────── */}
        <section className="bg-[color:var(--color-cream)] border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
            <div className="grid md:grid-cols-12 gap-12 mb-14 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green)]">
                  Our Services
                </span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[color:var(--color-navy)] mt-4 leading-[0.95] tracking-tight">
                  {servicesLead.headline}
                </h2>
                <p className="font-display italic text-2xl md:text-3xl text-[color:var(--color-green-deep)] mt-3">
                  {servicesLead.question}
                </p>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)] space-y-5">
                {servicesLead.homeRightCol.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[color:var(--color-ink)] leading-relaxed"
                        : "text-[color:var(--color-ink-muted)] leading-relaxed"
                    }
                  >
                    {para}
                  </p>
                ))}
                {/* "See all services" CTA placed under the paragraph, in the right column */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-7 py-3.5 transition-colors shadow-sm mt-2"
                >
                  See all services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* 4 service cards - NOT clickable per request; CTA lives in the right column above */}
            <div className="grid md:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {services.map((s, i) => {
                const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
                return (
                  <article key={s.slug} className="bg-white p-9 lg:p-10">
                    <div className="flex items-center gap-3 mb-7">
                      <span className="text-xs font-mono text-[color:var(--color-green-deep)]">
                        0{i + 1}
                      </span>
                      <span className="flex-1 h-px bg-[color:var(--color-line)]" />
                      <Icon className="text-[color:var(--color-green-deep)]" size={28} />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-[color:var(--color-navy)] mb-4 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                      {s.homeBlurb}
                    </p>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* ─────────────── 3. Why Choose Us ─────────────── */}
        <section className="bg-[color:var(--color-navy)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src={whyUsImage.src}
              alt={whyUsImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[color:var(--color-navy-deep)]/85" />
          </div>
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
            <div className="grid md:grid-cols-12 gap-12 mb-16 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green)]">
                  Why Choose Us
                </span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4 leading-[0.98] tracking-tight">
                  Trusted Expertise. Reliable Delivery.{" "}
                  <span className="italic text-[color:var(--color-blue-soft)]">Agile Collaboration.</span>
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-white/15">
                <p className="text-lg text-white/80 leading-relaxed">
                  {whyUsHomeRightCol}
                </p>
                <Link
                  href="/why-us"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
                >
                  Read the full story <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {whyUs.map((w, i) => (
                <div key={w.key} className="bg-[color:var(--color-navy)] p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6 text-xs">
                    <span className="font-mono text-[color:var(--color-green)]">0{i + 1}</span>
                    <span className="uppercase tracking-[0.18em] text-white/60">{w.title}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-4">
                    {w.title}
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────── 4. Testimonials ─────────────── */}
        <section className="bg-[color:var(--color-cream)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
            <div className="grid md:grid-cols-12 gap-12 mb-14 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  {testimonialsSection.eyebrow}
                </span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  {testimonialsSection.headline}
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-lg text-[color:var(--color-ink-muted)] leading-relaxed">
                  {testimonialsSection.body}
                </p>
                <Link
                  href="/testimonials"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                >
                  Read all testimonials <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Home shows the latest 4 - including the new 8th testimonial.
                The full list lives on /testimonials. */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[testimonials[7], testimonials[0], testimonials[1], testimonials[4]].map(
                (t, i) => (
                  <figure
                    key={i}
                    className="bg-white p-7 lg:p-8 border-t-2 border-[color:var(--color-green)] flex flex-col"
                  >
                    <svg
                      width="32"
                      height="24"
                      viewBox="0 0 32 24"
                      fill="none"
                      className="text-[color:var(--color-green-deep)] mb-5"
                      aria-hidden
                    >
                      <path
                        d="M0 24V14C0 6 4 1 12 0v6c-3 1-5 4-5 8h5v10H0zm18 0V14C18 6 22 1 30 0v6c-3 1-5 4-5 8h5v10H18z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote className="font-display text-lg text-[color:var(--color-navy)] leading-snug flex-1 mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="pt-4 border-t border-[color:var(--color-line)]">
                      <div className="text-sm font-semibold text-[color:var(--color-navy)]">{t.role}</div>
                      <div className="text-xs text-[color:var(--color-ink-muted)]">{t.company}</div>
                    </figcaption>
                  </figure>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ─────────────── 5. Affiliated Partners ─────────────── */}
        <section className="bg-white border-t border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
            <div className="grid md:grid-cols-12 gap-12 mb-14 items-end">
              <div className="md:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Affiliated Partners
                </span>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                  Memberships, certifications, and recognition.
                </h2>
              </div>
              <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
                <p className="text-lg text-[color:var(--color-ink-muted)] leading-relaxed">
                  Active memberships in the regulatory and pharmaceutical professional societies that set the standards we work to - plus the certifications and recognition that back our work.
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
                  className="bg-white aspect-[5/3] flex items-center justify-center px-5 py-4 hover:bg-[color:var(--color-cream)] transition-colors"
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

        {/* ─────────────── CTA band ───────────────
            Sits just above the navy-deep footer. Previously used
            green-deep, which made the CTA section blend with the
            green branded "Hire Talent" / "Our Services" buttons and
            visually merge with the footer. Switched to a light cream
            band with a bold green button so the CTA pops cleanly
            between the white Partners section and the dark footer. */}
        <section className="bg-[color:var(--color-cream)] border-t border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[color:var(--color-navy)]">
                {homeBottomCta.headline}
              </h2>
              <p className="mt-5 text-lg text-[color:var(--color-ink)] leading-relaxed max-w-2xl">
                {homeBottomCta.body}
              </p>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-5 w-full transition-colors shadow-md"
              >
                <span>{homeBottomCta.buttonLabel}</span>
                <ArrowRight />
              </Link>
              <p className="text-sm text-[color:var(--color-ink-muted)] mt-4">
                {company.hqPhone} · {company.email}
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
