/** @type {import('tailwindcss').Config} */
// Design tokens live as CSS variables in src/index.css (light + dark).
// Tailwind maps semantic names onto them so components never hard-code colour.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        paper: v("paper"),
        "paper-2": v("paper-2"),
        ink: v("ink"),
        "ink-2": v("ink-2"),
        line: v("line"),
        plum: v("plum"),
        "plum-ink": v("plum-ink"),
        aubergine: v("aubergine"),
        ochre: v("ochre"),
        cream: v("cream"),
      },
      fontFamily: {
        display: ['"Newsreader Variable"', "Georgia", "serif"],
        sans: ['"Instrument Sans Variable"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.16em" }],
        "display-xl": ["clamp(2.75rem, 1.4rem + 5.6vw, 6.75rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-l": ["clamp(2.25rem, 1.45rem + 3.2vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-m": ["clamp(1.75rem, 1.3rem + 1.7vw, 2.875rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-s": ["clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        lede: ["clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)", { lineHeight: "1.6" }],
      },
      maxWidth: {
        site: "82rem",
        prose: "38rem",
      },
      spacing: {
        section: "clamp(4.5rem, 3rem + 6vw, 9rem)",
        gutter: "clamp(1.25rem, 0.6rem + 3vw, 3rem)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      borderRadius: {
        arch: "999px 999px 0 0",
      },
    },
  },
  plugins: [],
};
