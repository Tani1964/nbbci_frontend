import { PiMapPin, PiPhone, PiEnvelopeSimple, PiWhatsappLogo, PiVideoCamera } from "react-icons/pi";
import { church, sundayFlow, weekly } from "../data/church";
import { ArrowLink } from "./ui";

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.mapsQuery)}`;
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(church.mapsQuery)}&output=embed`;

/** The Sunday morning sequence as a vertical timeline. */
export function SundayTimeline({ tone = "default" }) {
  const light = tone === "light";
  return (
    <ol className="relative">
      {sundayFlow.map((step, i) => (
        <li key={step.title} className={`grid grid-cols-[5.5rem_1fr] gap-x-5 border-t py-7 sm:grid-cols-[8rem_1fr] sm:gap-x-8 ${light ? "border-cream/20" : "hairline"}`} data-reveal style={{ "--reveal-delay": `${i * 90}ms` }}>
          <p className={`font-display leading-none ${light ? "text-cream" : "text-ink"}`}>
            <span className="text-[2.25rem] sm:text-[3rem]">{step.time}</span>
            <span className={`ml-1 font-sans text-xs font-semibold tracking-[0.14em] ${light ? "text-cream/70" : "text-ink-2"}`}>{step.meridiem}</span>
          </p>
          <div>
            <h3 className={`text-display-s ${light ? "text-cream" : ""}`}>{step.title}</h3>
            <p className={`mt-2 ${light ? "text-cream/75" : "text-ink-2"}`}>{step.note}</p>
            <p className={`mt-1 text-sm ${light ? "text-cream/60" : "text-ink-2/80"}`}>Until {step.end}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** A plain, scannable table of weekly gatherings. Rows, not cards. */
export function WeeklyRhythm() {
  return (
    <div className="border-t-2 border-ink">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Weekly gatherings</caption>
        <thead className="sr-only">
          <tr><th scope="col">Day</th><th scope="col">Gathering</th><th scope="col">Time</th><th scope="col">Where</th></tr>
        </thead>
        <tbody>
          {weekly.map((w, i) => (
            <tr key={w.title} className="border-b hairline align-top" data-reveal style={{ "--reveal-delay": `${i * 50}ms` }}>
              <th scope="row" className="w-[7.5rem] py-5 pr-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink-2 sm:w-40">{w.day}</th>
              <td className="py-5 pr-4">
                <span className={`block font-display text-[1.375rem] leading-snug ${w.highlight ? "text-plum" : ""}`}>{w.title}</span>
                {w.subtitle && <span className="block text-sm text-ink-2">{w.subtitle}</span>}
                <span className="mt-1 block text-sm text-ink-2 md:hidden">{w.time} · {w.place}</span>
              </td>
              <td className="hidden whitespace-nowrap py-5 pr-4 md:table-cell">{w.time}</td>
              <td className="hidden py-5 text-ink-2 md:table-cell">
                {w.virtual ? (
                  <a href={church.virtualPrayerLine} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-plum underline decoration-plum/30 underline-offset-4 hover:decoration-plum">
                    <PiVideoCamera aria-hidden className="h-4 w-4" /> Join online<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  w.place
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-5 text-sm text-ink-2">
        Virtual prayer meetings hold on our conference line:{" "}
        <a className="font-semibold text-plum underline decoration-plum/30 underline-offset-4 hover:decoration-plum" href={church.virtualPrayerLine} target="_blank" rel="noopener noreferrer">
          join.freeconferencecall.com/newbbci<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
    </div>
  );
}

/** Address, contact channels and a lazily-loaded map. */
export function FindUs({ showMap = true }) {
  const rows = [
    { icon: PiMapPin, label: "Address", body: (<>{church.address.line1}, {church.address.line2}<br />{church.address.city}, {church.address.region}</>), action: { href: mapsLink, text: "Get directions" } },
    { icon: PiPhone, label: "Call", body: church.phones.map((p) => <a key={p.href} href={p.href} className="block py-1 hover:text-plum">{p.display}</a>) },
    { icon: PiWhatsappLogo, label: "WhatsApp", body: <a href={church.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-plum">{church.phones[0].display}<span className="sr-only"> (opens WhatsApp)</span></a> },
    { icon: PiEnvelopeSimple, label: "Email", body: <a href={`mailto:${church.email}`} className="inline-block [overflow-wrap:anywhere] py-1 hover:text-plum">{church.email}</a> },
  ];
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <dl className="lg:col-span-5">
        {rows.map(({ icon: Icon, label, body, action }) => (
          <div key={label} className="border-t hairline py-6 pl-12">
            <dt className="relative text-eyebrow font-semibold uppercase text-ink-2">
              <Icon aria-hidden className="absolute -left-12 top-[-2px] h-6 w-6 text-plum" />
              {label}
            </dt>
            <dd className="mt-2 text-lg leading-relaxed">
              {body}
              {action && <span className="mt-3 block text-base"><ArrowLink href={action.href}>{action.text}</ArrowLink></span>}
            </dd>
          </div>
        ))}
      </dl>
      {showMap && (
        <div className="relative min-h-[320px] overflow-hidden rounded-sm border hairline bg-paper-2 lg:col-span-7 lg:min-h-[460px]">
          <iframe
            title={`Map showing ${church.name}, ${church.address.line1}, ${church.address.city}`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[35%] dark:invert-[0.9] dark:hue-rotate-180"
          />
        </div>
      )}
    </div>
  );
}

