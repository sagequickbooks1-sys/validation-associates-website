import Image from "next/image";
import Link from "next/link";
import { clientLogos, clientsCopy, clientsCompositeImage } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Clients",
  description:
    "Validation Associates serves global biopharma, medical-device, and healthcare-technology organizations of every size.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Custom hero - client-supplied CLIENTS.jfif composite at its natural
            aspect. Padding, h1 scale, and column alignment match the
            site-wide custom hero pattern. */}
        <section className="relative bg-[color:var(--color-navy-deep)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20 lg:py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)] mb-6">
                <span className="w-2 h-2 bg-[color:var(--color-green)]" />
                Clients
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
                {clientsCopy.intro}
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                {clientsCopy.body}
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="relative w-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src={clientsCompositeImage.src}
                  alt={clientsCompositeImage.alt}
                  width={clientsCompositeImage.width}
                  height={clientsCompositeImage.height}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Named-client list. The composite logo grid now lives in the hero,
            so the body opens with the scannable / screen-reader friendly list
            of named clients (no duplicate of the logo image). */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                A few of the names we&apos;ve worked with
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                Top-tier pharmaceutical, biotech, and medical-device organizations.
              </h2>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 text-[color:var(--color-ink)]">
              {clientLogos.map((name) => (
                <li key={name} className="flex items-start gap-2 text-sm">
                  <span className="text-[color:var(--color-green-deep)] mt-1">›</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Segments */}
        <section className="bg-[color:var(--color-cream)] border-y border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Who we serve
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-[color:var(--color-navy)] mt-4 leading-[0.98] tracking-tight">
                Four segments. One bar.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-0 border-t border-l border-[color:var(--color-navy)]/10">
              {clientsCopy.segments.map((seg, i) => (
                <div
                  key={seg.title}
                  className={`p-10 lg:p-12 border-r border-b border-[color:var(--color-navy)]/10 ${
                    i % 2 === 1 ? "bg-white" : "bg-[color:var(--color-cream)]"
                  }`}
                >
                  <div className="text-xs font-mono text-[color:var(--color-green-deep)] mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-[color:var(--color-navy)] mb-4 leading-tight tracking-tight">
                    {seg.title}
                  </h3>
                  <p className="text-[color:var(--color-ink-muted)] leading-relaxed">
                    {seg.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confidentiality note */}
        <section className="bg-white border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
              On confidentiality
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[color:var(--color-navy)] mt-4 leading-tight">
              Specific engagement details are kept confidential. References are available on request.
            </h2>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight">
                Let&apos;s add your team to the list.
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
