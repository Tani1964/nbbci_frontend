import { useState } from "react";
import { about, church, deacons, pastor } from "../data/church";
import { usePageMeta, useReveal } from "../lib/hooks";
import { ButtonLink, PageHeader, Picture, Scripture, SectionHeading } from "../components/ui";

function Deacon({ person, index }) {
  const [open, setOpen] = useState(false);
  const id = `deacon-bio-${index}`;
  return (
    <article className="grid gap-8 border-t hairline py-12 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-4 lg:col-span-3">
        <div className="arch mx-auto aspect-[4/5] max-w-[16rem] bg-paper-2 md:mx-0 md:max-w-none" data-reveal="image">
          <img src={person.photo} alt={person.name} loading="lazy" decoding="async" className="h-full w-full object-cover" style={{ objectPosition: person.focus }} />
        </div>
      </div>
      <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
        <p className="eyebrow mb-3">{person.role}</p>
        <h3 className="text-display-m">{person.name}</h3>
        <div className="prose-church mt-6 max-w-prose text-ink-2">
          <p>{person.bio[0]}</p>
          <div id={id} hidden={!open} className="prose-church mt-5">
            {person.bio.slice(1).map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            {person.verse && <Scripture text={person.verse.text} reference={`Favourite verse · ${person.verse.ref}`} className="!mt-8 border-l-2 border-plum pl-6" />}
          </div>
        </div>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)} className="link-arrow mt-6">
          {open ? "Show less" : "Read full biography"}
        </button>
      </div>
    </article>
  );
}

export default function About() {
  usePageMeta({ title: "About us", description: `Our story, mission, vision and leadership. ${church.name}, ${church.town} is raising fruitful disciples (John 15:16).`, path: "/about-us" });
  useReveal("about");

  return (
    <>
      <PageHeader eyebrow="About us" title={<>Raising fruitful <em>disciples</em>.</>} lede={about.intro} />

      <div className="container-site">
        <Picture
          src="/assets/church/congregation/sunday-worship-drone-view"
          widths={[768, 1280, 2048]}
          sizes="(min-width: 1312px) 1312px, 100vw"
          alt="The congregation gathered in the auditorium for Sunday worship"
          className="aspect-[4/3] rounded-sm sm:aspect-[16/9] lg:aspect-[21/9]"
          focus="50% 55%"
          eager
          reveal
        />
      </div>

      {/* Story */}
      <section aria-labelledby="story-title" className="py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Our story" title={<span id="story-title">Decades in the heart of Ikorodu.</span>} />
          </div>
          <div className="prose-church max-w-prose text-lede text-ink-2 lg:col-span-7 lg:col-start-6" data-reveal>
            {about.story.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            <p className="font-display text-display-s italic text-ink">{about.invitation}</p>
          </div>
        </div>
      </section>

      {/* Mission – the W.M.I.T.E. acronym as the typographic centrepiece */}
      <section aria-labelledby="mission-title" className="bg-aubergine py-section text-cream">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5 !text-ochre" data-reveal>Our mission</p>
              <h2 id="mission-title" className="text-display-l text-cream" data-reveal>{about.missionLead}</h2>
            </div>
            <p className="self-end text-cream/70 lg:col-span-4 lg:col-start-9" data-reveal>
              Together these five commitments spell <abbr title="Win, Make, Integrate, Train, Equip" className="font-semibold text-cream no-underline">W.M.I.T.E.</abbr>
            </p>
          </div>
          <ol className="mt-14 border-t border-cream/20">
            {about.mission.map((m, i) => (
              <li key={m.letter} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-b border-cream/20 py-5 sm:grid-cols-[6rem_1fr] md:py-7" data-reveal style={{ "--reveal-delay": `${i * 70}ms` }}>
                <span aria-hidden className="font-display text-[3rem] leading-none text-ochre sm:text-[4.5rem]">{m.letter}</span>
                <span className="font-display text-[1.625rem] leading-tight text-cream sm:text-[2.5rem]">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Vision + pillars */}
      <section aria-labelledby="vision-title" className="py-section">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5" data-reveal>Our vision</p>
            <h2 id="vision-title" className="text-display-l" data-reveal>{about.vision}</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9" data-reveal>
            <p className="eyebrow mb-5">Five pillars</p>
            <p className="text-ink-2">We fulfil the Great Commission through:</p>
            <ol className="mt-4 border-t hairline">
              {about.pillars.map((p, i) => (
                <li key={p} className="flex items-baseline gap-4 border-b hairline py-3">
                  <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-plum">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pastor */}
      <section id="pastor" aria-labelledby="pastor-title" className="bg-paper-2 py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="arch mx-auto aspect-[4/5] max-w-[22rem] bg-paper lg:max-w-none" data-reveal="image" style={{ "--reveal-cover": "rgb(var(--paper-2))" }}>
                <img src={pastor.photo} alt={pastor.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-[50%_30%]" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow mb-5" data-reveal>Our pastor</p>
            <h2 id="pastor-title" className="text-display-l" data-reveal>{pastor.name}</h2>
            <p className="mt-3 text-ink-2" data-reveal>{pastor.role}</p>
            <Scripture text={pastor.mandate} reference={`His ministry mandate · ${pastor.mandateRef}`} className="my-10 border-l-2 border-plum pl-6" />
            <div className="prose-church max-w-prose text-ink-2" data-reveal>
              {pastor.bio.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Deacons */}
      <section aria-labelledby="deacons-title" className="py-section">
        <div className="container-site">
          <SectionHeading eyebrow="Leadership" title={<span id="deacons-title">Our deacons</span>} lede="Each deacon oversees a family of ministries, serving alongside our pastor." className="mb-6" />
          {deacons.map((d, i) => <Deacon key={d.name} person={d} index={i} />)}
        </div>
      </section>

      <section className="border-t hairline py-section">
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-display-l" data-reveal>The best way to know us is to worship with us.</h2>
          <div className="flex flex-wrap gap-3" data-reveal>
            <ButtonLink to="/visit">Plan your visit</ButtonLink>
            <ButtonLink to="/ministries" variant="outline">Explore ministries</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
