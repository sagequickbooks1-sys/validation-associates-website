import Image from "next/image";
import Link from "next/link";
import { company, values, aboutImage, stats } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "About Us",
  description:
    "Validation Associates LLC connects life sciences with proven methodologies in quality and compliance - through hands-on, practical solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="About Us"
          title="Connecting Life Sciences."
          intro={company.shortPitch}
          image={aboutImage}
          imageFit="contain"
        />

        {/* Mission */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Our Mission
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                Positive change for our clients - through immediate impact, sustainable results, and knowledge transfer.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-lg text-[color:var(--color-ink-muted)] leading-relaxed">
              <p>{company.longPitch}</p>
              <p>{company.founded}</p>
              <p>
                Our foundation rests on many years of experience providing pharmaceutical validation training, consultancy, and project management - the kind of operating know-how that only comes from having delivered the work, repeatedly, in regulated environments.
              </p>
              <p className="font-semibold text-[color:var(--color-navy)]">
                {company.repeatBusiness}
              </p>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <section className="bg-[color:var(--color-cream)] border-y border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-5">
                <span className="font-display text-6xl text-[color:var(--color-green-deep)] leading-none tracking-tight">
                  {s.value}
                </span>
                <span className="text-sm text-[color:var(--color-ink)] leading-snug max-w-[18ch]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                What we stand for
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                Six commitments we make on every engagement.
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

        {/* Image band + reach */}
        <section className="bg-[color:var(--color-navy)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image src={aboutImage.src} alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[color:var(--color-navy)]/85" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green)]">
                Our Reach
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                Working with life-science organizations of all sizes - from venture-backed startups to top-20 pharmaceutical leaders.
              </h2>
            </div>
            <div className="md:col-span-5 md:pl-8 md:border-l border-white/15">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Pharmaceutical, biotech, and medical-device companies hire us to fill the gaps between programs, audits, and launches.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
              >
                See our services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
