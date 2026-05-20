type IconProps = { className?: string; size?: number };

const base = "stroke-current";
const stroke = 1.6;

export function FlaskIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M9 3h6M10 3v6.5L4.5 18.2A2 2 0 006.2 21h11.6a2 2 0 001.7-2.8L14 9.5V3" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 14h9" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" strokeWidth={stroke} strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClipboardIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <rect x="5" y="5" width="14" height="16" rx="2" strokeWidth={stroke} />
      <path d="M9 3h6v4H9z" strokeWidth={stroke} strokeLinejoin="round" />
      <path d="M9 12h6M9 16h4" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

export function ChartIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M4 20h16" strokeWidth={stroke} strokeLinecap="round" />
      <path d="M7 16V10M12 16V6M17 16v-4" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight({ className = "", size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartPulseIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <path
        d="M12 20s-7-4.5-7-10a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 1.5-.5 2.9-1.3 4.2"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 13h4l2-3 2 6 2-4h8" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UsersIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden>
      <circle cx="9" cy="8" r="3.5" strokeWidth={stroke} />
      <path d="M3 20c.6-3.4 3-5.5 6-5.5s5.4 2.1 6 5.5" strokeWidth={stroke} strokeLinecap="round" />
      <circle cx="17" cy="9" r="2.5" strokeWidth={stroke} />
      <path d="M15.5 14c2 .2 3.6 1.7 4.5 4" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

export const serviceIcons = {
  "technical-services": FlaskIcon,
  "compliance-quality": ShieldCheckIcon,
  "clinical-study-compliance": ClipboardIcon,
  validation: ChartIcon,
  healthcare: HeartPulseIcon,
  "staffing-solutions": UsersIcon,
} as const;
