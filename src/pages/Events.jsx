import { useMemo } from "react";
import { PiFacebookLogo } from "react-icons/pi";
import { church, programme } from "../data/church";
import { usePageMeta, useReveal } from "../lib/hooks";
import { ButtonLink, PageHeader, SectionHeading } from "../components/ui";
import { SundayTimeline, WeeklyRhythm } from "../components/sections";

const toDate = (iso) => new Date(`${iso}T23:59:59`);
const fmt = (iso, opts) => new Date(`${iso}T12:00`).toLocaleDateString("en-GB", opts);

function DateBlock({ start, end }) {
  return (
    <div className="w-[4.75rem] shrink-0 text-center sm:w-24">
      <p className="text-eyebrow font-semibold uppercase text-plum">{fmt(start, { month: "short" })}</p>
      <p className="font-display text-[2.75rem] leading-none sm:text-[3.5rem]">{fmt(start, { day: "numeric" })}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-2">
        {end ? `to ${fmt(end, { day: "numeric", month: "short" })}` : fmt(start, { weekday: "short" })}
      </p>
    </div>
  );
}

function EventRow({ item, muted }) {
  return (
    <li className={`flex gap-5 border-b hairline py-7 sm:gap-10 ${muted ? "opacity-75" : ""}`} data-reveal={muted ? undefined : true}>
      <DateBlock start={item.start} end={item.end} />
      <div className="min-w-0 flex-1 md:grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <h3 className="text-display-s">{item.title}</h3>
          <p className="mt-2 text-ink-2">{item.detail}</p>
        </div>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[0.9375rem] md:col-span-5 md:mt-1">
          <dt className="text-ink-2">Time</dt><dd>{item.time}</dd>
          <dt className="text-ink-2">Where</dt><dd>{item.place}</dd>
        </dl>
      </div>
    </li>
  );
}

export default function Events() {
  usePageMeta({ title: "Events", description: `Weekly gatherings and the monthly programme at ${church.name}, ${church.town}.`, path: "/events" });
  useReveal("events");

  const now = new Date();
  const { upcoming, past } = useMemo(() => {
    const up = [], gone = [];
    for (const it of programme.items) (toDate(it.end ?? it.start) >= now ? up : gone).push(it);
    return { upcoming: up, past: gone };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeader eyebrow="Events" title={<>What’s <em>happening</em>.</>} lede="Our week has a steady rhythm of worship and prayer, with special programmes announced each month." />

      <section aria-labelledby="weekly-title" className="pb-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Every week" title={<span id="weekly-title">Weekly gatherings</span>} />
          </div>
          <div className="lg:col-span-8"><WeeklyRhythm /></div>
        </div>
      </section>

      <section aria-labelledby="prog-title" className="border-t hairline bg-paper-2 py-section">
        <div className="container-site">
          <SectionHeading eyebrow="Monthly programme" title={<span id="prog-title">Coming up</span>} className="mb-10" />

          {upcoming.length ? (
            <ul className="border-t-2 border-ink">{upcoming.map((it) => <EventRow key={it.start + it.title} item={it} />)}</ul>
          ) : (
            <div className="grid gap-8 border-t-2 border-ink pt-10 md:grid-cols-12" data-reveal>
              <div className="md:col-span-7">
                <p className="font-display text-display-m">The next programme will be posted soon.</p>
                <p className="mt-4 max-w-prose text-ink-2">
                  Our weekly gatherings continue as usual. Special services and monthly events are announced in church and on our Facebook page first.
                </p>
              </div>
              <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
                <ButtonLink href="https://facebook.com/nbbcil"><PiFacebookLogo aria-hidden className="h-5 w-5" /> Follow on Facebook</ButtonLink>
                <ButtonLink to="/visit#contact" variant="outline">Ask us</ButtonLink>
              </div>
            </div>
          )}

          {past.length > 0 && (
            <details className="group mt-14">
              <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between border-y hairline py-3 font-semibold marker:hidden">
                Past programme · {programme.label}
                <span aria-hidden className="text-2xl font-normal text-plum transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <ul>{past.map((it) => <EventRow key={it.start + it.title} item={it} muted />)}</ul>
            </details>
          )}
        </div>
      </section>

      <section aria-labelledby="sunday-title" className="py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Sunday mornings" title={<span id="sunday-title">Joining us on Sunday?</span>} lede="Here is how the morning flows in the Church Auditorium." />
            <div className="mt-8" data-reveal><ButtonLink to="/visit">Plan your visit</ButtonLink></div>
          </div>
          <div className="lg:col-span-7"><SundayTimeline /></div>
        </div>
      </section>
    </>
  );
}
