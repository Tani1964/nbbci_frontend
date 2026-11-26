import { useEffect } from "react";
import { church } from "../data/church";

const SITE = `${church.name}, ${church.town}`;

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Per-route <title>, description, Open Graph and canonical URL. */
export function usePageMeta({ title, description, path = "/" }) {
  useEffect(() => {
    const full = title ? `${title} · ${SITE}` : `${SITE} · ${church.slogan}`;
    document.title = full;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    setMeta("property", "og:title", full);
    const url = `${church.site}${path === "/" ? "/" : path}`;
    setMeta("property", "og:url", url);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [title, description, path]);
}

/**
 * Scroll reveal for any element with [data-reveal] inside the page.
 * Content is visible by default; animation is only armed when JS runs and
 * the visitor has not asked for reduced motion.
 */
export function useReveal(dep) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    root.classList.add("reveal-armed");
    const els = document.querySelectorAll("[data-reveal]:not(.is-revealed)");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}
