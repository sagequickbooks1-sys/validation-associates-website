import Link from "next/link";
import { company, nav, offices } from "@/lib/content";
import { CurrentLogo } from "@/components/Logo";

/**
 * Site-wide footer. Renders the 5 top-level nav items, with sub-items of
 * any group (e.g. Insights) shown as indented links so visitors have a
 * complete map of the site at the bottom of every page.
 */
export function SiteFooter() {
  const hq = offices.find((o) => o.isHQ)!;

  return (
    <footer className="bg-[color:var(--color-navy-deep)] text-white/75">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          {/* New color logo on a white tile so the navy + green ink reads
              cleanly against the navy-deep footer background. */}
          <div className="inline-block bg-white p-4 rounded-sm">
            <CurrentLogo width={260} className="!w-auto h-16 md:h-20" />
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-md text-white/70">
            {company.shortPitch}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)]">
            {company.tagline}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.18em]">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 ml-3 space-y-1 border-l border-white/15 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-xs text-white/55 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.18em]">
            Headquarters
          </h4>
          <p className="text-sm leading-relaxed">
            {hq.street}
            <br />
            {hq.cityState}
            <br />
            {hq.country}
          </p>
          <p className="text-sm leading-relaxed mt-3">
            <a href={`tel:${hq.phone}`} className="hover:text-white">
              Tel: {hq.phone}
            </a>
            <br />
            <span className="text-white/55">Fax: {hq.fax}</span>
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.18em]">
            Reach Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.careersEmail}`} className="hover:text-white">
                {company.careersEmail}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/55 leading-relaxed">
            Also located in Halifax, Nova Scotia (Canada) and Noida, UP (India). See{" "}
            <Link href="/contact" className="underline hover:text-white">
              contact
            </Link>{" "}
            for all offices.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-white/60">
          <span>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/30 hidden md:inline">·</span>
            <span>E-Verify compliant · Equal-opportunity employer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
