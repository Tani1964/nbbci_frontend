import { Link } from "react-router-dom";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import { church, socials } from "../data/church";
import { usePageMeta } from "../lib/hooks";

// A link-in-bio page for social profiles (route kept at /link).
const internal = [
  { label: "Plan your visit", to: "/visit" },
  { label: "Watch a service", to: "/media" },
  { label: "This month's events", to: "/events" },
  { label: "Give", to: "/give" },
  { label: "Prayer request", to: "/prayer" },
];

export default function Links() {
  usePageMeta({ title: "Links", description: `Quick links for ${church.name}, ${church.town}.`, path: "/link" });
  const row = "flex min-h-[60px] items-center justify-between border-b hairline px-1 py-4 font-display text-[1.375rem] transition-colors hover:text-plum";
  return (
    <section className="container-site flex min-h-[80vh] justify-center pb-section pt-16">
      <div className="w-full max-w-md">
        <img src="/assets/church/brand/nbbc-logo-400.webp" alt="" width="88" height="88" className="mx-auto h-[88px] w-[88px] rounded-full bg-white" />
        <h1 className="mt-6 text-center text-display-m">{church.name}</h1>
        <p className="mt-2 text-center text-ink-2">{church.slogan} · {church.town}</p>
        <ul className="mt-10 border-t-2 border-ink">
          {internal.map((l) => (
            <li key={l.to}><Link to={l.to} className={row}>{l.label}<PiArrowRight aria-hidden className="h-5 w-5" /></Link></li>
          ))}
          {socials.map((s) => (
            <li key={s.id}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={row}>
                {s.label}<PiArrowUpRight aria-hidden className="h-5 w-5" /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
