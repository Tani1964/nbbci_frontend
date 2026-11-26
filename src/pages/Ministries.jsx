import { ministries } from "../data/ministries";
import { church } from "../data/church";
import { usePageMeta, useReveal } from "../lib/hooks";
import { ButtonLink, PageHeader, Picture } from "../components/ui";

export default function Ministries() {
  usePageMeta({ title: "Ministries", description: `Six ministry families and ${ministries.reduce((n, m) => n + m.units.length, 0)} teams at ${church.name}, ${church.town}: worship, missions, fellowship, education, welfare and administration.`, path: "/ministries" });
  useReveal("ministries");
  const total = ministries.reduce((n, m) => n + m.units.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Ministries"
        title={<>A place to <em>grow</em> and serve.</>}
        lede={`Six ministry families and ${total} teams, each one a place to grow in faith and serve God's people.`}
      />

      <div className="container-site lg:grid lg:grid-cols-12 lg:gap-16">
        {/* Index */}
        <nav aria-label="Ministry families" className="border-y hairline py-6 lg:col-span-3 lg:border-0 lg:py-0">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4">Jump to</p>
            <ol className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-0 lg:overflow-visible">
              {ministries.map((m, i) => (
                <li key={m.slug} className="shrink-0">
                  <a href={`#${m.slug}`} className="flex min-h-[44px] items-center gap-3 rounded-full border hairline px-4 text-[0.9375rem] transition-colors hover:border-plum hover:text-plum lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-3">
                    <span className="hidden text-xs font-semibold tabular-nums tracking-[0.14em] text-ink-2 lg:inline">{String(i + 1).padStart(2, "0")}</span>
                    {m.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="lg:col-span-9">
          {ministries.map((m, i) => (
            <section key={m.slug} id={m.slug} aria-labelledby={`${m.slug}-title`} className="border-t-2 border-ink py-14 first:mt-10 md:py-20 lg:first:mt-0">
              <div className="grid gap-8 md:grid-cols-12">
                <div className={m.image ? "md:col-span-7" : "md:col-span-9"} data-reveal>
                  <p className="text-xs font-semibold tabular-nums tracking-[0.14em] text-ink-2">{String(i + 1).padStart(2, "0")} / {String(ministries.length).padStart(2, "0")}</p>
                  <h2 id={`${m.slug}-title`} className="mt-4 text-display-l">{m.title}</h2>
                  <p className="mt-6 max-w-prose text-lede text-ink-2">{m.description}</p>
                  {m.coordinator && (
                    <p className="mt-6 text-sm text-ink-2">
                      Coordinated by <span className="font-semibold text-ink">{m.coordinator}</span>
                    </p>
                  )}
                </div>
                {m.image && (
                  <div className="md:col-span-5">
                    <Picture reveal delay={120} src={m.image.src} widths={m.image.widths ?? [640, 1200]} sizes="(min-width:1024px) 28vw, (min-width:768px) 40vw, 100vw" alt={m.image.alt} focus={m.image.focus} className={`${m.image.aspect ?? "aspect-[4/5]"} ${m.image.aspect === "aspect-[4/3]" ? "rounded-sm" : i % 2 ? "rounded-sm" : "arch"}`} />
                  </div>
                )}
              </div>

              <dl className="mt-12 grid gap-x-12 sm:grid-cols-2">
                {m.units.map((u, j) => (
                  <div key={u.title} className="border-t hairline py-6" data-reveal style={{ "--reveal-delay": `${(j % 2) * 80}ms` }}>
                    <dt className="font-display text-[1.5rem] leading-snug">{u.title}</dt>
                    <dd className="mt-2 text-ink-2">{u.text}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>

      <section className="bg-aubergine py-section text-cream">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5 !text-ochre" data-reveal>Get involved</p>
            <h2 className="text-display-l text-cream" data-reveal>Ready to serve? We will help you find your team.</h2>
          </div>
          <div className="lg:col-span-5" data-reveal>
            <p className="text-cream/80">Send us a message telling us where you would like to serve, or come and talk with us after a Sunday service.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/visit#contact" variant="light">Send us a message</ButtonLink>
              <ButtonLink to="/events" variant="outline-light">See what’s on</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
