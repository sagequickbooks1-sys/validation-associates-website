import Image from "next/image";
import {
  company,
  offices,
  departmentEmails,
  officeImage,
} from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Contact Us",
  description:
    "Book a quick call with our team. We'll be in touch within 24 hours to schedule a no-pressure discovery call tailored to your timelines, budget, and needs.",
};

export default function ContactPage() {
  const hq = offices.find((o) => o.isHQ)!;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Custom hero - uses the original Validation Associates boardroom image
            at its natural 2.26:1 aspect so the branding text isn't cropped.
            Padding + alignment match the site-wide custom hero pattern. */}
        <section className="relative bg-[color:var(--color-navy-deep)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20 lg:py-24 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)] mb-6">
                <span className="w-2 h-2 bg-[color:var(--color-green)]" />
                Contact Us
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
                Book a Quick Call with Our Team
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Fill out the form, and we&apos;ll be in touch within 24 hours to schedule a quick, no-pressure discovery call with our Client Development Director or Subject Matter Expert to better understand your current challenges and discuss solutions tailored to your timelines, budget and needs.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="relative w-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src={officeImage.src}
                  alt={officeImage.alt}
                  width={officeImage.width ?? 900}
                  height={officeImage.height ?? 398}
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Three offices */}
        <section className="bg-white border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Our Offices
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                USA · Canada · India
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)]">
              {offices.map((o, i) => (
                <div
                  key={o.label}
                  className={`p-8 lg:p-10 ${
                    o.isHQ ? "bg-[color:var(--color-navy)] text-white" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`text-xs font-mono ${
                        o.isHQ
                          ? "text-[color:var(--color-green)]"
                          : "text-[color:var(--color-green-deep)]"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-[0.18em] ${
                        o.isHQ ? "text-white/65" : "text-[color:var(--color-ink-muted)]"
                      }`}
                    >
                      {o.region}
                    </span>
                  </div>
                  <h3
                    className={`font-display text-2xl mb-4 leading-tight ${
                      o.isHQ ? "text-white" : "text-[color:var(--color-navy)]"
                    }`}
                  >
                    {o.label}
                    {o.isHQ && (
                      <span className="ml-2 text-xs font-sans uppercase tracking-[0.18em] text-[color:var(--color-green)]">
                        HQ
                      </span>
                    )}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-5 ${
                      o.isHQ ? "text-white/85" : "text-[color:var(--color-ink-muted)]"
                    }`}
                  >
                    {o.street}
                    <br />
                    {o.cityState}
                    <br />
                    {o.country}
                  </p>
                  {o.phone && (
                    <p className="text-sm mb-1">
                      <a
                        href={`tel:${o.phone}`}
                        className={
                          o.isHQ ? "text-white hover:underline" : "text-[color:var(--color-navy)] hover:underline"
                        }
                      >
                        Tel: {o.phone}
                      </a>
                    </p>
                  )}
                  {o.fax && (
                    <p
                      className={`text-sm ${
                        o.isHQ ? "text-white/65" : "text-[color:var(--color-ink-muted)]"
                      }`}
                    >
                      Fax: {o.fax}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Map of HQ */}
        <section className="bg-[color:var(--color-cream)] border-b border-[color:var(--color-line)]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <div className="grid md:grid-cols-12 gap-10 items-center mb-8">
              <div className="md:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Find Us
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 leading-tight">
                  Visit our headquarters in Herndon, Virginia.
                </h2>
              </div>
              <div className="md:col-span-7 md:pl-8 md:border-l border-[color:var(--color-line)] text-[color:var(--color-ink-muted)] leading-relaxed">
                <p>
                  {hq.street}, {hq.cityState}, {hq.country}
                </p>
                <p className="mt-2">
                  <a href={`tel:${hq.phone}`} className="text-[color:var(--color-navy)] font-semibold hover:underline">
                    Tel: {hq.phone}
                  </a>{" "}
                  · Fax: {hq.fax}
                </p>
              </div>
            </div>
            <div className="relative aspect-[16/7] bg-white border border-[color:var(--color-line)]">
              <iframe
                title="Map of Validation Associates HQ - 131 Elden Street, Herndon, VA"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  hq.street + ", " + hq.cityState
                )}&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </section>

        {/* Form + Department emails */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                Send a Message
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[color:var(--color-navy)] mt-4 mb-8 leading-tight">
                We&apos;d love to hear from you.
              </h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
                    I&apos;m reaching out as a
                  </label>
                  <select
                    name="role"
                    className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors"
                  >
                    <option>Hiring manager</option>
                    <option>Candidate / consultant</option>
                    <option>Partner / vendor</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--color-ink-muted)] mb-2">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] focus:border-[color:var(--color-navy)] px-4 py-3 outline-none text-[color:var(--color-ink)] transition-colors resize-y"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white font-semibold px-8 py-4 transition-colors"
                  >
                    Send message <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-[color:var(--color-ink-muted)] mt-4">
                    Form is a preview placeholder - final build will deliver to a designated company inbox with spam protection.
                  </p>
                </div>
              </form>
            </div>

            {/* Department emails */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-[color:var(--color-navy)] text-white p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)]">
                  Department Emails
                </span>
                <h3 className="font-display text-3xl mt-4 mb-6 leading-tight">
                  Reach the right team directly.
                </h3>
                <ul className="space-y-3 text-sm">
                  {departmentEmails.map((d) => (
                    <li key={d.email} className="flex items-baseline justify-between gap-4 pb-2 border-b border-white/10">
                      <span className="text-white/75">{d.label}</span>
                      <a
                        href={`mailto:${d.email}`}
                        className="text-white hover:text-[color:var(--color-blue-soft)]"
                      >
                        {d.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[color:var(--color-cream)] border border-[color:var(--color-line)] p-10">
                <h3 className="font-display text-2xl text-[color:var(--color-navy)] mb-3 leading-tight">
                  Response time
                </h3>
                <p className="text-[color:var(--color-ink-muted)] leading-relaxed text-sm">
                  Project inquiries are answered within{" "}
                  <strong className="text-[color:var(--color-navy)]">one business day</strong>. Career inquiries are reviewed within three.
                </p>
                <p className="mt-4 text-xs text-[color:var(--color-ink-muted)]">
                  HQ phone: {company.hqPhone} · Fax: {company.hqFax}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
