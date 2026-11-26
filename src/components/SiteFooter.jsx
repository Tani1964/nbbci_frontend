import { Link } from "react-router-dom";
import { PiYoutubeLogo, PiFacebookLogo, PiInstagramLogo, PiBroadcast } from "react-icons/pi";
import { church, socials, weekly } from "../data/church";

const icons = { youtube: PiYoutubeLogo, facebook: PiFacebookLogo, instagram: PiInstagramLogo, radio: PiBroadcast };

const columns = [
  {
    title: "Church",
    links: [
      { label: "About us", to: "/about-us" },
      { label: "Our pastor", to: "/about-us#pastor" },
      { label: "Ministries", to: "/ministries" },
      { label: "Events", to: "/events" },
    ],
  },
  {
    title: "Take a step",
    links: [
      { label: "Plan a visit", to: "/visit" },
      { label: "Watch a service", to: "/media" },
      { label: "Prayer & care", to: "/prayer" },
      { label: "Give", to: "/give" },
    ],
  },
];

export default function SiteFooter() {
  const sunday = weekly.find((w) => w.highlight);
  return (
    <footer className="bg-aubergine text-cream">
      <div className="container-site pb-10 pt-section">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-display-l text-cream">
              Raising <em className="text-ochre">fruitful</em> disciples.
            </p>
            <p className="mt-4 text-eyebrow font-semibold uppercase text-cream/60">{church.sloganRef}</p>
            <div className="mt-10 space-y-1 text-cream/85">
              <p className="font-semibold text-cream">{sunday.title} · Sundays {sunday.time}</p>
              <p>
                {church.address.line1}, {church.address.line2}
                <br />
                {church.address.city}, {church.address.region}
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="mb-5 font-sans text-eyebrow font-semibold uppercase text-ochre">{col.title}</h2>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="inline-block py-1 text-cream/85 transition-colors hover:text-cream hover:underline hover:underline-offset-4">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div>
              <h2 className="mb-5 font-sans text-eyebrow font-semibold uppercase text-ochre">Contact</h2>
              <ul className="space-y-2 text-cream/85">
                {church.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="inline-block py-1 hover:text-cream hover:underline hover:underline-offset-4">{p.display}</a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${church.email}`} className="inline-block [overflow-wrap:anywhere] py-1 hover:text-cream hover:underline hover:underline-offset-4">{church.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-cream/15 pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-2" aria-label="Social media">
            {socials.map((s) => {
              const Icon = icons[s.id];
              return (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-cream/20 px-4 text-sm text-cream/90 transition-colors hover:border-cream hover:bg-cream hover:text-[rgb(30_20_25)]"
                  >
                    <Icon aria-hidden className="h-[18px] w-[18px]" />
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-cream/60">
            © {new Date().getFullYear()} {church.name}, {church.town}. A Baptist church in {church.address.region}.
          </p>
        </div>
      </div>
    </footer>
  );
}
