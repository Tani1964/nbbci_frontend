import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PiListBold, PiXBold, PiMoon, PiSun } from "react-icons/pi";
import { church } from "../data/church";
import { useTheme } from "../lib/theme";
import { headerShouldAnimate } from "../lib/intro";

const NAV = [
  { label: "About", to: "/about-us" },
  { label: "Ministries", to: "/ministries" },
  { label: "Events", to: "/events" },
  { label: "Media", to: "/media" },
  { label: "Plan a visit", to: "/visit" },
];

function ThemeToggle({ className = "" }) {
  const { mode, toggle } = useTheme();
  const dark = mode === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-300 hover:bg-black/5 dark:hover:bg-white/10 ${className}`}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
    >
      {dark ? <PiSun aria-hidden className="h-5 w-5" /> : <PiMoon aria-hidden className="h-5 w-5" />}
    </button>
  );
}

function Wordmark({ light }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img src="/assets/church/brand/nbbc-logo-320.webp" alt="" width="44" height="44" className="h-10 w-10 shrink-0 rounded-full bg-white md:h-11 md:w-11" />
      <span className="leading-none">
        <span className={`block font-display text-[1.15rem] tracking-[-0.01em] md:text-[1.3rem] ${light ? "text-cream" : "text-ink"}`}>New Birth Baptist Church</span>
        <span className={`mt-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.2em] ${light ? "text-cream/75" : "text-ink-2"}`}>Ikorodu · Lagos</span>
        <span className="sr-only">, home page</span>
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "/home";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cinematic] = useState(headerShouldAnimate);
  const menuBtn = useRef(null);
  const panel = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll, trap focus, close on Escape while the menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => panel.current?.querySelectorAll("a, button") ?? [];
    // wait one frame so the panel is visible before moving focus into it
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => focusables()[0]?.focus()));
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const f = focusables();
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const btn = menuBtn.current;
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      btn?.focus();
    };
  }, [open]);

  const overlay = isHome && !scrolled && !open;
  const light = overlay;

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ease-soft ${cinematic ? "header-cinematic" : ""} ${
          overlay ? "border-b border-transparent bg-transparent" : "border-b border-line/10 bg-paper/95 backdrop-blur-md"
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6 md:h-20">
          <Wordmark light={light} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `relative rounded-full px-4 py-2.5 text-[0.9375rem] font-medium transition-colors duration-300 ${
                        light ? "text-cream/90 hover:text-cream" : "text-ink-2 hover:text-ink"
                      } ${isActive ? (light ? "!text-cream" : "!text-ink") : ""}
                      after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-soft hover:after:scale-x-100 ${isActive ? "after:scale-x-100" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`flex items-center gap-1 ${light ? "text-cream" : "text-ink"}`}>
            <ThemeToggle />
            <Link
              to="/give"
              className={`ml-1 hidden min-h-[44px] items-center rounded-full px-5 text-[0.9375rem] font-semibold transition-colors duration-300 sm:inline-flex ${
                light ? "bg-cream text-[rgb(30_20_25)] hover:bg-ochre" : "bg-plum text-plum-ink hover:bg-ink hover:text-paper"
              }`}
            >
              Give
            </Link>
            <button
              ref={menuBtn}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <PiXBold aria-hidden className="h-6 w-6" /> : <PiListBold aria-hidden className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-40 overflow-y-auto bg-paper pt-[72px] transition-[opacity,visibility] duration-500 ease-soft md:pt-20 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col pb-10 pt-6">
          <ul className="border-t hairline">
            {[{ label: "Home", to: "/" }, ...NAV, { label: "Give", to: "/give" }, { label: "Prayer & care", to: "/prayer" }].map((item, i) => (
              <li
                key={item.to}
                className={`border-b hairline transition-[opacity,transform] duration-500 ease-soft ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `flex items-baseline justify-between py-4 font-display text-[2rem] leading-tight ${isActive ? "text-plum" : "text-ink"}`}
                  tabIndex={open ? 0 : -1}
                >
                  {item.label}
                  <span className="font-sans text-xs font-semibold tracking-[0.16em] text-ink-2">{String(i + 1).padStart(2, "0")}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10 text-ink-2">
            <p className="eyebrow mb-3">Every Sunday</p>
            <p className="font-display text-2xl text-ink">Worship Service · 9:30 AM</p>
            <p className="mt-2 text-[0.9375rem]">{church.address.line1}, {church.address.line2}, {church.address.city}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
