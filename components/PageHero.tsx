import Image from "next/image";

/**
 * Compact hero used on most interior pages.
 *
 * `imageFit`:
 *   - `cover` (default) - fills the 4:3 frame, crops as needed. Best for
 *     photographic imagery where edges aren't load-bearing.
 *   - `contain` - shows the full image at its natural aspect ratio,
 *     letterboxed on a light tile. Best for designed graphics (infographics,
 *     diagrams with embedded text) that must not be cropped.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageFit = "cover",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: { src: string; alt: string };
  imageFit?: "cover" | "contain";
}) {
  return (
    <section className="bg-[color:var(--color-navy-deep)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--color-green) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-16 md:py-20 lg:py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-blue-soft)] mb-6">
            <span className="w-2 h-2 bg-[color:var(--color-green)]" />
            {eyebrow}
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
              {intro}
            </p>
          )}
        </div>
        <div className="md:col-span-5">
          <div
            className={`relative aspect-[4/3] overflow-hidden ring-1 ${
              imageFit === "contain"
                ? "bg-white ring-white/15"
                : "ring-white/10"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className={imageFit === "contain" ? "object-contain p-4" : "object-cover"}
            />
            {imageFit === "cover" && (
              <div
                className="absolute inset-0 mix-blend-multiply opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-navy-deep), transparent)",
                }}
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
