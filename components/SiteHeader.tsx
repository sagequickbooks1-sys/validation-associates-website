"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, type NavItem } from "@/lib/content";
import { CurrentLogo } from "@/components/Logo";
import { ArrowRight } from "@/components/Icons";

/**
 * Sticky top header. 5 top-level tabs requested by client; "Insights"
 * is a dropdown parent housing Testimonials, Resources, Clients, Partners.
 *
 * Desktop: hover (or keyboard focus) opens the dropdown; clicking the parent
 *          label still navigates to /insights so power users can land on the hub.
 * Mobile:  parent label expands an indented sub-list inline.
 */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Close any open dropdown when route-changing clicks happen.
  function handleNavClick() {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  // Hover handlers with a small grace period so the cursor can travel from
  // the parent label down to the dropdown panel without it closing.
  function openWithDelay(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }
  function closeWithDelay() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[color:var(--color-line)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-2 flex items-center justify-between gap-6">
        {/* The pre-trimmed logo (3.38:1 wordmark + mark) reads cleanly without
            inflating the header height. Padding is tight so the logo dominates. */}
        <Link href="/" className="shrink-0" aria-label="Validation Associates - home">
          <CurrentLogo
            width={420}
            priority
            className="!w-auto h-16 md:h-20 lg:h-24"
          />
        </Link>

        {/* Desktop nav - larger tap target and more legible label size. */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-semibold text-[color:var(--color-ink)]">
          {nav.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.href}
                item={item}
                isOpen={openMenu === item.label}
                onOpen={() => openWithDelay(item.label)}
                onClose={closeWithDelay}
                onItemClick={handleNavClick}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[color:var(--color-green-deep)] transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 text-base font-semibold bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white px-6 py-3 transition-colors"
        >
          Hire Talent <ArrowRight size={16} />
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[color:var(--color-navy)]"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[color:var(--color-line)] bg-white">
          <nav className="mx-auto max-w-[1400px] px-6 py-2 flex flex-col">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href} className="border-b border-[color:var(--color-line)] last:border-0">
                  <button
                    onClick={() =>
                      setMobileExpanded((curr) => (curr === item.label ? null : item.label))
                    }
                    aria-expanded={mobileExpanded === item.label}
                    className="w-full py-3 flex items-center justify-between text-base font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-green-deep)]"
                  >
                    <span>{item.label}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pb-3">
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        className="block py-2 pl-4 text-sm font-semibold text-[color:var(--color-green-deep)] hover:text-[color:var(--color-navy)]"
                      >
                        View all {item.label.toLowerCase()} →
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={handleNavClick}
                          className="block py-2 pl-4 text-sm text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-navy)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="py-3 text-base font-medium text-[color:var(--color-ink)] border-b border-[color:var(--color-line)] last:border-0 hover:text-[color:var(--color-green-deep)]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[color:var(--color-green)] hover:bg-[color:var(--color-green-deep)] text-white px-5 py-3 transition-colors"
            >
              Hire Talent <ArrowRight size={14} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
  onItemClick,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onItemClick: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={item.href}
        onFocus={onOpen}
        onBlur={onClose}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 hover:text-[color:var(--color-green-deep)] transition-colors"
      >
        {item.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px]"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <div className="bg-white border border-[color:var(--color-line)] shadow-[0_24px_60px_-30px_rgba(15,42,71,0.35)]">
            <Link
              href={item.href}
              onClick={onItemClick}
              className="flex items-baseline justify-between gap-4 px-5 py-4 border-b border-[color:var(--color-line)] bg-[color:var(--color-cream)] hover:bg-[color:var(--color-stone)]"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-green-deep)]">
                  Insights hub
                </div>
                <div className="font-display text-lg text-[color:var(--color-navy)] mt-1 leading-tight">
                  View all {item.label.toLowerCase()}
                </div>
              </div>
              <ArrowRight size={16} className="text-[color:var(--color-navy)] mt-2 shrink-0" />
            </Link>
            <ul className="py-2">
              {item.children!.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onItemClick}
                    className="block px-5 py-3 hover:bg-[color:var(--color-cream)] group"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-base text-[color:var(--color-navy)] group-hover:text-[color:var(--color-green-deep)] transition-colors">
                        {child.label}
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-[color:var(--color-ink-muted)] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    {child.description && (
                      <p className="text-xs text-[color:var(--color-ink-muted)] leading-snug mt-0.5">
                        {child.description}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
