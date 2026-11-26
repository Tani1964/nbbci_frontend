import { useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";

/**
 * Responsive WebP image. `src` is the path without the "-{width}.webp" suffix.
 * Pass `widths` that exist on disk; the largest is used as the fallback.
 */
export function Picture({ src, widths = [640, 1200], alt, sizes = "100vw", className = "", imgClassName = "", focus, eager = false, ratio, reveal = false, delay = 0 }) {
  const srcSet = widths.map((w) => `${src}-${w}.webp ${w}w`).join(", ");
  const fallback = `${src}-${widths[widths.length - 1]}.webp`;
  return (
    <div
      className={`relative overflow-hidden bg-paper-2 ${className}`}
      style={{ ...(ratio ? { aspectRatio: ratio } : {}), ...(delay ? { "--reveal-delay": `${delay}ms` } : {}) }}
      data-reveal={reveal ? "image" : undefined}
    >
      <img
        src={fallback}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        // React 18 only forwards the lowercase attribute
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={eager ? "high" : undefined}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        style={focus ? { objectPosition: focus } : undefined}
      />
    </div>
  );
}

/** Section opener: small eyebrow, serif title, optional lede. */
export function SectionHeading({ eyebrow, title, lede, as: Tag = "h2", align = "left", className = "", tone = "default" }) {
  const center = align === "center" ? "mx-auto text-center" : "";
  const titleTone = tone === "light" ? "text-cream" : "";
  const ledeTone = tone === "light" ? "text-cream/80" : "text-ink-2";
  const eyebrowTone = tone === "light" ? "!text-ochre" : "";
  return (
    <div className={`max-w-3xl ${center} ${className}`} data-reveal>
      {eyebrow && <p className={`eyebrow mb-5 ${eyebrowTone}`}>{eyebrow}</p>}
      <Tag className={`text-display-l ${titleTone}`}>{title}</Tag>
      {lede && <p className={`mt-6 max-w-prose text-lede ${ledeTone} ${align === "center" ? "mx-auto" : ""}`}>{lede}</p>}
    </div>
  );
}

// Full class names spelled out so Tailwind's content scanner can find them.
const BUTTON_VARIANTS = {
  primary: "btn-primary",
  light: "btn-light",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
};

/** Internal route link styled as a button. */
export function ButtonLink({ to, href, variant = "primary", children, className = "", ...rest }) {
  const cls = `${BUTTON_VARIANTS[variant]} ${className}`;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
        {external && <PiArrowUpRight aria-hidden className="h-4 w-4" />}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function ArrowLink({ to, href, children, className = "" }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`link-arrow ${className}`}>
        {children}
        <PiArrowUpRight aria-hidden className="h-4 w-4" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link to={to} className={`link-arrow ${className}`}>
      {children}
      <PiArrowRight aria-hidden className="h-4 w-4" />
    </Link>
  );
}

/** Interior page header: tall type, optional photo band beneath. */
export function PageHeader({ eyebrow, title, lede, children }) {
  return (
    <header className="container-site pb-12 pt-16 md:pb-16 md:pt-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1 className="text-display-xl">{title}</h1>
        </div>
        {lede && <p className="text-lede text-ink-2 lg:col-span-4 lg:pb-2">{lede}</p>}
      </div>
      {children}
    </header>
  );
}

/** Scripture set as a typographic moment. */
export function Scripture({ text, reference, className = "", tone = "default" }) {
  const t = tone === "light";
  return (
    <figure className={className}>
      <blockquote className={`font-display text-display-s italic ${t ? "text-cream" : "text-ink"}`}>
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption className={`mt-4 text-eyebrow font-semibold uppercase ${t ? "text-ochre" : "text-plum"}`}>{reference}</figcaption>
    </figure>
  );
}

/** Lazy third-party iframe with a quiet loading state. */
export function Embed({ src, title, height = 640, className = "", deferred = false, loadLabel, buttonClass = "btn-primary" }) {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(!deferred);
  if (!active) {
    // Click-to-load: third-party page (and its cookies) only loads when asked for
    return (
      <div className={`grid place-items-center rounded-sm border hairline bg-paper-2 p-8 text-center ${className}`} style={{ minHeight: Math.min(height, 360) }}>
        <div>
          <button type="button" onClick={() => setActive(true)} className={buttonClass}>{loadLabel ?? `Load ${title.toLowerCase()}`}</button>
          <p className="mt-4 text-sm opacity-80">Loads a player from an external site.</p>
        </div>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-sm border hairline bg-paper-2 ${className}`} style={{ height }}>
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center text-sm text-ink-2" aria-hidden>
          <span>Loading {title.toLowerCase()}…</span>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full border-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
