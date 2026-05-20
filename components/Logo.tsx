import Image from "next/image";

/**
 * 2026 Validation Associates wordmark - full-color logo provided by the client.
 * The original PNG was 3334×2500 with ~35% empty whitespace around the brand
 * mark, which made it look tiny in the header at any reasonable height.
 * We serve a pre-trimmed version (/public/logo-2026-trim.png, 2874×850) so the
 * visible brand content fills the bounding box edge-to-edge.
 *
 * `invert` is retained for backward compatibility but rarely useful with the
 * new color logo: prefer wrapping it in a light tile on dark backgrounds
 * (see SiteFooter for an example).
 */
export function CurrentLogo({
  className = "",
  width = 320,
  invert = false,
  priority = false,
}: {
  className?: string;
  width?: number;
  invert?: boolean;
  priority?: boolean;
}) {
  // Trimmed PNG is 2874×850 - intrinsic ratio ≈ 3.38:1.
  const height = Math.round((width * 850) / 2874);
  return (
    <Image
      src="/logo-2026-trim.png"
      alt="Validation Associates - Connecting Life Sciences"
      width={width}
      height={height}
      priority={priority}
      className={`${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}

/**
 * Decorative circular checkmark mark - used alongside the wordmark in headers
 * and as a small badge on cards. Pure SVG so it never blurs.
 */
export function LogoMark({
  variant = "dark",
  size = 36,
}: {
  variant?: "dark" | "light";
  size?: number;
}) {
  const stroke = variant === "light" ? "#ffffff" : "#0f2a47";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="20" cy="20" r="18" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M11 19.5L17.5 26L29 14"
        stroke="#5BA889"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Legacy wordmark used by the older /design-1, /design-2 preview routes. */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const primary =
    variant === "light" ? "text-white" : "text-[color:var(--color-navy)]";
  const accent =
    variant === "light"
      ? "text-[color:var(--color-blue-soft)]"
      : "text-[color:var(--color-green)]";
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className={`font-display text-2xl leading-none ${primary}`}>
        Validation
      </span>
      <span className={`font-display text-2xl leading-none ${accent}`}>
        Associates
      </span>
    </span>
  );
}
