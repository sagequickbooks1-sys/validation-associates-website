import Link from "next/link";
import { services, servicesImage, servicesLead } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { serviceIcons, ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Services",
  description:
    "Quality, validation, regulatory, and clinical services for life-science companies - globally.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Services"
          title={servicesLead.headline}
          intro={servicesLead.question + " " + servicesLead.intro}
          image={servicesImage}
        />

        {/* Right-sized + served + stages */}
        <section className="bg-white border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-5">
              <p className="text-lg text-[color:var(--color-ink)] leading-relaxed">
                {servicesLead.rightSized}
              </p>
              <p className="text-lg text-[color:var(--color-ink-muted)] leading-relaxed">
                {servicesLead.served}
              </p>
            </div>
            <div className="md:col-span-5 md:pl-8 md:border-l border-[color:var(--color-line)]">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Implementation Stages
              </span>
              <ol className="mt-4 space-y-3">
                {servicesLead.stages.map((stage, i) => (
                  <li
                    key={stage}
                    className="flex items-start gap-3 text-[color:var(--color-navy)]"
                  >
                    <span className="text-xs font-mono text-[color:var(--color-green-deep)] pt-1 w-7 shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-medium">{stage}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* In-page nav */}
        <section className="bg-[color:var(--color-cream)] border-b border-[color:var(--color-line)] sticky top-[80px] z-30 backdrop-blur">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[color:var(--color-ink-muted)]">
            <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-green-deep)] mr-2 self-center">
              Jump to:
            </span>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="hover:text-[color:var(--color-navy)] transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </section>

        {/* Service sections */}
        {services.map((s, i) => {
          const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
          const isAccent = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-32 ${
                isAccent ? "bg-[color:var(--color-cream)]" : "bg-white"
              } border-b border-[color:var(--color-line)]`}
            >
              <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-24 grid md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono text-[color:var(--color-green-deep)]">
                      0{i + 1}
                    </span>
                    <Icon className="text-[color:var(--color-navy)]" size={28} />
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] leading-tight tracking-tight mb-5">
                    {s.title}
                  </h2>
                  <p className="text-lg text-[color:var(--color-ink)] leading-relaxed mb-5">
                    {s.short}
                  </p>
                  {s.longBlurb && (
                    <p className="text-base text-[color:var(--color-ink-muted)] leading-relaxed mb-6">
                      {s.longBlurb}
                    </p>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-navy)] hover:gap-3 transition-all"
                  >
                    Discuss this service <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="md:col-span-7">
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 py-2 border-b border-[color:var(--color-line)]"
                      >
                        <span className="text-[color:var(--color-green-deep)] font-bold mt-0.5">+</span>
                        <span className="text-[color:var(--color-ink)]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
                Have a scope in mind?{" "}
                <span className="italic text-[color:var(--color-blue-soft)]">Let&apos;s talk.</span>
              </h2>
            </div>
            <div className="md:col-span-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-4 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-5 w-full transition-colors"
              >
                <span>Start a conversation</span>
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
