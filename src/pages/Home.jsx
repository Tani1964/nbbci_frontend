import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowRight, PiPlayFill } from "react-icons/pi";
import { about, church, pastor, sundayFlow, yearTheme } from "../data/church";
import { ministries } from "../data/ministries";
import { recordings } from "../data/media";
import { usePageMeta, useReveal } from "../lib/hooks";
import { takeIntro } from "../lib/intro";
import { ArrowLink, ButtonLink, Photo, Picture, Scripture, SectionHeading } from "../components/ui";
import { FindUs, SundayTimeline, WeeklyRhythm } from "../components/sections";

const memberPortraits = Array.from({ length: 13 }, (_, i) => `/assets/church/congregation/member-portrait-${String(i + 1).padStart(2, "0")}.webp`);
const newer = [
  "/assets/church/ministries/child-hands-clasped-414.webp",
  "/assets/church/worship/worshipper-hand-raised-b-414.webp",
  "/assets/church/ministries/children-in-prayer-414.webp",
  "/assets/church/worship/young-minister-with-microphone-414.webp",
  "/assets/church/congregation/members-embrace-414.webp",
];
// interleave the newer, sharper photos through the older portraits
const faces = memberPortraits.flatMap((src, i) => (i % 3 === 1 && newer[Math.floor(i / 3)] ? [src, newer[Math.floor(i / 3)]] : [src])).concat(newer.slice(4));

// ~450-byte blurred preview shown while the hero photo downloads
const HERO_PLACEHOLDER = "data:image/webp;base64,UklGRjYBAABXRUJQVlA4ICoBAACwBgCdASogABYAPu1iqU2ppaOiMAgBMB2JaACsMzL1yNA7Aa4tifav9rOQhZ6e77UxcppOTpOYx2HOoSvbgADOGWwtsHyMFkhHzYcIlFKhSAI7v69twtHOYaGA9Kf7ZaGI8Hwny8h/ITzL62pdlaoMzf8aFa0grEFqHUKhXEt9LCzKw2pDDdH+OICG7hVZ8erkbRNaMHpriPp6REMVmLxzDUrcyUywZl/VRKdXm8TgnZrfPJJHkTFO2Y2Q8X93iDbmnDq5H0o4V2ObAyIo/T2kzsR/XlGFr+WCRoWz+tJFenVQcmISTLpwTCuYj/mgJmq1kHtcOYT2E3eJAQbIhcHGy8eQX6UUtiBkGxHjt6zzVLV6uiD9zm91muqlKX8SjoeTOgAL54EWDCgA";
const CREST = "/assets/church/brand/nbbc-logo-400.webp";
const EDGE_LAYERS = 12;

/** First-visit intro: the crest as a 3D medallion, halo, name, then an iris opening onto the photo. */
function CrestIntro({ onSkip, onDone }) {
  return (
    <div className="intro" onAnimationEnd={(e) => { if (e.target === e.currentTarget) onDone(); }}>
      <div className="intro-stage" aria-hidden>
        <svg className="intro-halo" viewBox="0 0 200 200">
          <circle className="halo-line" cx="100" cy="100" r="98" pathLength="1" />
          <circle className="halo-dots" cx="100" cy="100" r="90" pathLength="1" />
        </svg>
        {/* Opacity lives on the pivot: animating it on .medal itself would flatten the 3D scene */}
        <div className="medal-pivot">
          <div className="medal">
            {Array.from({ length: EDGE_LAYERS }, (_, i) => (
              <span key={i} className="medal-edge" style={{ transform: `translateZ(${-i}px)` }} />
            ))}
            <span className="medal-face medal-back"><img src={CREST} alt="" /></span>
            <span className="medal-face medal-front"><img src={CREST} alt="" /></span>
          </div>
        </div>
      </div>
      <p className="intro-name" aria-hidden>
        {["New", "Birth", "Baptist", "Church"].map((w, i) => (
          <span key={w} style={{ "--i": i }}>{w}</span>
        ))}
      </p>
      <p className="intro-tag" aria-hidden>Raising Fruitful Disciples · John 15:16</p>
      <button type="button" onClick={onSkip} className="intro-skip">Skip intro</button>
    </div>
  );
}

const HEADLINE = [
  { t: "A" }, { t: "family" }, { t: "raising" }, { t: "fruitful", em: true }, { t: "disciples." },
];

function Hero() {
  const ref = useRef(null);
  // Decide once, on mount, whether this is the session's first (cinematic) visit
  const [mode, setMode] = useState(() => (takeIntro() ? "hero-cinematic" : "hero-quick"));
  const [introDone, setIntroDone] = useState(mode !== "hero-cinematic");

  const skip = () => {
    setMode("hero-quick");
    setIntroDone(true);
    window.dispatchEvent(new Event("nbbc-intro-skip"));
  };

  // Any key, tap or scroll during the intro jumps straight to the page
  useEffect(() => {
    if (introDone) return;
    const onAny = (e) => { if (e.type !== "keydown" || !["Tab", "Shift"].includes(e.key)) skip(); };
    const evts = ["keydown", "wheel", "touchmove"];
    evts.forEach((t) => window.addEventListener(t, onAny, { passive: true }));
    return () => evts.forEach((t) => window.removeEventListener(t, onAny));
  }, [introDone]);

  // Scroll-linked parallax: expose scroll progress through the first viewport as --hero-p
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let raf = 0;
    const update = () => {
      raf = 0;
      const p = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
      el.style.setProperty("--hero-p", p.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={ref} aria-labelledby="hero-title" className={`${mode} relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-aubergine text-cream`}>
      <Picture
        src="/assets/church/congregation/sunday-worship-drone-view"
        widths={[640, 1024, 1600]}
        sizes="100vw"
        alt="The New Birth Baptist Church congregation standing in worship in the auditorium on a Sunday morning"
        className="hero-media !absolute -top-[2vh] bottom-0 left-0 right-0 -z-10 !bg-aubergine"
        focus="50% 40%"
        placeholder={HERO_PLACEHOLDER}
        eager
      />
      {/* Scrim: bottom-weighted for legibility, not decoration */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(26,10,20,0.6)_0%,rgba(26,10,20,0.2)_28%,rgba(26,10,20,0.6)_60%,rgba(26,10,20,0.94)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,10,20,0.55)_0%,rgba(26,10,20,0)_65%)]" />

      {!introDone && <CrestIntro onSkip={skip} onDone={() => setIntroDone(true)} />}

      <div className="hero-copy container-site flex flex-1 flex-col justify-end pb-10 pt-32 md:pb-14">
        <p className="hero-eyebrow eyebrow mb-6 !text-cream/85">New Birth Baptist Church · Ikorodu</p>
        <h1 id="hero-title" className="max-w-[14ch] text-display-xl text-cream">
          {HEADLINE.map((w, i) => (
            <span key={w.t}>
              <span className="hero-word -mb-[0.12em] inline-block overflow-hidden pb-[0.12em] pr-[0.06em] align-bottom" style={{ "--i": i }}>
                <span className={w.em ? "font-normal italic text-ochre" : undefined}>{w.t}</span>
              </span>
              {i < HEADLINE.length - 1 && " "}
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-8 max-w-md text-lede text-cream/85 md:mt-10" style={{ "--d": "3.9s" }}>
          Come as you are. Worship with us this Sunday at 9:30 AM, off Haruna Bus-stop, Ikorodu.
        </p>
        <div className="hero-fade mt-8 flex flex-wrap items-center gap-3" style={{ "--d": "4.05s" }}>
          <ButtonLink to="/visit" variant="light">
            Plan your visit <PiArrowRight aria-hidden className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink to="/media" variant="outline-light">
            <PiPlayFill aria-hidden className="h-4 w-4" /> Watch a service
          </ButtonLink>
        </div>
      </div>

      {/* This Sunday – the when & where, before anything else */}
      <div className="hero-strip border-t border-cream/15 bg-[rgba(26,10,20,0.55)] backdrop-blur-sm">
        <div className="container-site grid grid-cols-1 divide-y divide-cream/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {sundayFlow.map((s, i) => (
            <div key={s.title} className="flex items-baseline gap-4 py-4 sm:px-6 sm:py-5 sm:first:pl-0" style={{ "--i": i }}>
              <span className="font-display text-2xl text-cream">{s.time}<span className="ml-1 font-sans text-[0.6875rem] font-semibold tracking-[0.14em] text-cream/70">{s.meridiem}</span></span>
              <span className="text-[0.9375rem] text-cream/85">{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeOfTheYear() {
  return (
    <section aria-labelledby="theme-title" className="border-b hairline">
      <div className="container-site grid gap-10 py-section lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow mb-5">Church theme for {yearTheme.year}</p>
          <h2 id="theme-title" className="text-display-l">
            {yearTheme.year}: Our Year of <em>Exponential Growth</em>
          </h2>
          <p className="mt-6 text-ink-2">Also read {yearTheme.alsoRef}.</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-4" data-reveal style={{ "--reveal-delay": "120ms" }}>
          <Scripture text={yearTheme.verse} reference={yearTheme.ref} />
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section aria-labelledby="who-title" className="py-section">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 lg:pt-10">
          <SectionHeading eyebrow="Who we are" title={<span id="who-title">A Spirit-filled community in the heart of Ikorodu.</span>} />
          <div className="mt-8 max-w-prose space-y-5 text-lede text-ink-2" data-reveal>
            <p>{about.story[0]}</p>
          </div>
          <ol className="mt-10 grid max-w-prose grid-cols-2 gap-x-8 border-t hairline pt-6 sm:grid-cols-3" aria-label="Our five pillars" data-reveal>
            {about.pillars.map((p, i) => (
              <li key={p} className="flex items-baseline gap-3 py-2">
                <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-plum">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl">{p}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10" data-reveal>
            <ArrowLink to="/about-us">Read our story</ArrowLink>
          </div>
        </div>

        {/* Image composition: tall arch + offset landscape */}
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <Picture
              src="/assets/church/congregation/member-in-red-at-service"
              widths={[480, 800]}
              sizes="(min-width:1024px) 30vw, 60vw"
              alt="A member standing in worship among the congregation during a Sunday service"
              className="arch col-span-8 col-start-1 aspect-[3/4] img-zoom"
              focus="62% 30%"
              reveal
            />
            <div className="col-span-4 flex flex-col justify-end gap-4">
              <Picture
                src="/assets/church/worship/worshipper-hand-raised-a"
                widths={[414]}
                sizes="(min-width:1024px) 15vw, 30vw"
                alt="A member worshipping with his hand raised"
                className="aspect-[3/4] rounded-sm"
                focus="45% 30%"
                reveal
                delay={250}
              />
              <p className="text-sm leading-snug text-ink-2">Sunday worship in the Church Auditorium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pastor() {
  return (
    <section aria-labelledby="pastor-title" className="bg-aubergine text-cream">
      <div className="container-site grid items-center gap-12 py-section lg:grid-cols-12 lg:gap-16">
        <div className="mx-auto w-full max-w-[22rem] lg:col-span-4 lg:max-w-none">
          <div className="arch aspect-[4/5] bg-cream/10" data-reveal="image" style={{ "--reveal-cover": "rgb(var(--aubergine))" }}>
            <Photo src={pastor.photo} alt={`${pastor.name}, Resident Pastor`} loading="lazy" decoding="async" className="h-full w-full object-cover object-[50%_30%]" />
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <p className="eyebrow mb-6 !text-ochre" data-reveal>Our pastor</p>
          <Scripture text={pastor.mandate} reference={`${pastor.mandateRef} · the call he received in 2000`} tone="light" className="max-w-2xl" />
          <div className="mt-10 border-t border-cream/15 pt-8" data-reveal>
            <h2 id="pastor-title" className="text-display-m text-cream">{pastor.shortName}</h2>
            <p className="mt-2 text-cream/70">{pastor.role}</p>
            <p className="mt-5 max-w-xl text-cream/85">{pastor.summary}</p>
            <Link to="/about-us#pastor" className="mt-8 inline-flex items-center gap-2 font-semibold text-ochre underline decoration-ochre/40 underline-offset-[6px] hover:decoration-ochre">
              Meet our pastor <PiArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FirstSunday() {
  return (
    <section aria-labelledby="first-title" className="py-section">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Your first Sunday" title={<span id="first-title">Here is how a Sunday morning flows.</span>} lede="Join us for any part of the morning. If it is your first time, the 9:30 AM Worship Service is a good place to start, and there is a Children Church for little ones." />
            <div className="mt-8 flex flex-wrap gap-3" data-reveal>
              <ButtonLink to="/visit">Plan your visit</ButtonLink>
              <ButtonLink to="/visit#find-us" variant="outline">Get directions</ButtonLink>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SundayTimeline />
        </div>
      </div>
    </section>
  );
}

function ThisIsNBBC() {
  // Only fetch the 18 portraits once the section is close to the viewport
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setNear(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: "800px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} aria-labelledby="faces-title" className="overflow-hidden bg-paper-2 py-section">
      <div className="container-site">
        <SectionHeading eyebrow="This is New Birth" title={<span id="faces-title">One family, many faces.</span>} lede={about.invitation} />
      </div>
      {/* Slow marquee of real members; pauses on hover/focus. Reduced motion: a static scroller. */}
      <div className="marquee mt-14 overflow-x-auto [scrollbar-width:none] motion-safe:overflow-hidden" tabIndex={0} role="region" aria-label="Members of our church family">
        <div className="marquee-track flex w-max gap-3 px-gutter sm:gap-4">
          {[0, 1].map((copy) => (
            <ul key={copy} className={`flex shrink-0 gap-3 sm:gap-4 ${copy === 1 ? "motion-reduce:hidden" : ""}`} aria-hidden={copy === 1 ? true : undefined}>
              {faces.map((src, i) => (
                <li key={src} className={`shrink-0 ${i % 2 ? "mt-10" : ""}`}>
                  {near ? (
                    <Photo src={src} loading="eager" width="150" height="170" className="arch h-[150px] w-[132px] scale-[1.06] object-cover sm:h-[190px] sm:w-[166px]" />
                  ) : (
                    <span className="arch block h-[150px] w-[132px] bg-ink/5 sm:h-[190px] sm:w-[166px]" />
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rhythm() {
  return (
    <section aria-labelledby="rhythm-title" className="py-section">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Through the week" title={<span id="rhythm-title">Gather with us.</span>} lede="Sunday is the centre of our week, with prayer, worship and fellowship every day in between." />
          <div className="mt-8" data-reveal><ArrowLink to="/events">See the programme</ArrowLink></div>
        </div>
        <div className="lg:col-span-8">
          <WeeklyRhythm />
        </div>
      </div>
    </section>
  );
}

function MinistriesIndex() {
  return (
    <section aria-labelledby="min-title" className="border-t hairline py-section">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Ministries" title={<span id="min-title">Find your place to grow and serve.</span>} />
          <div data-reveal><ArrowLink to="/ministries">All ministries</ArrowLink></div>
        </div>
        <ul className="mt-14 border-t-2 border-ink">
          {ministries.map((m, i) => (
            <li key={m.slug} className="border-b hairline" data-reveal style={{ "--reveal-delay": `${i * 50}ms` }}>
              <Link to={`/ministries#${m.slug}`} className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 md:grid-cols-[4rem_1fr_1fr_auto] md:py-8">
                <span className="text-xs font-semibold tabular-nums tracking-[0.14em] text-ink-2">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-[1.75rem] leading-tight transition-colors duration-300 group-hover:text-plum md:text-[2.25rem]">{m.title}</span>
                <span className="hidden text-ink-2 md:block">{m.units.slice(0, 3).map((u) => u.title).join(" · ")}{m.units.length > 3 ? ` + ${m.units.length - 3} more` : ""}</span>
                <PiArrowRight aria-hidden className="h-5 w-5 text-ink-2 transition-transform duration-500 ease-soft group-hover:translate-x-1 group-hover:text-plum" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LatestService() {
  const latest = recordings[0];
  const date = new Date(latest.date + "T12:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return (
    <section aria-labelledby="watch-title" className="bg-aubergine py-section text-cream">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading tone="light" eyebrow="Watch & listen" title={<span id="watch-title">Can’t be with us in person?</span>} lede="Sunday and midweek services stream live on YouTube and Facebook, and you can listen on NBBCI Radio." />
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
            <ButtonLink to="/media" variant="light">Browse services</ButtonLink>
            <ButtonLink href="https://nbbciradio.ismyradio.com" variant="outline-light">NBBCI Radio</ButtonLink>
          </div>
        </div>
        <Link to={`/media?v=${latest.id}`} className="group block lg:col-span-7" data-reveal>
          <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
            <Photo src={latest.thumb} className="h-full w-full object-cover opacity-90 transition-transform duration-[1.2s] ease-soft group-hover:scale-[1.03]" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-cream text-[rgb(30_20_25)] transition-transform duration-500 ease-soft group-hover:scale-110">
                <PiPlayFill aria-hidden className="ml-1 h-7 w-7" />
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-cream/70">Latest recording · {date}</p>
          <p className="font-display text-display-s text-cream">{latest.title}</p>
        </Link>
      </div>
    </section>
  );
}

function GiveAndPray() {
  return (
    <section aria-label="Give and pray" className="grid md:grid-cols-2">
      <div className="border-b hairline px-gutter py-section md:border-b-0 md:border-r">
        <div className="ml-auto max-w-xl">
          <p className="eyebrow mb-5" data-reveal>Give</p>
          <h2 className="text-display-m" data-reveal>Partner with the work God is doing here.</h2>
          <p className="mt-5 max-w-md text-ink-2" data-reveal>Give your tithes and offerings by bank transfer, or in person during any service.</p>
          <div className="mt-8" data-reveal><ButtonLink to="/give">Ways to give</ButtonLink></div>
        </div>
      </div>
      <div className="px-gutter py-section">
        <div className="max-w-xl">
          <p className="eyebrow mb-5" data-reveal>Prayer & care</p>
          <h2 className="text-display-m" data-reveal>You don’t have to carry it alone.</h2>
          <p className="mt-5 max-w-md text-ink-2" data-reveal>Send a prayer request, or ask for a confidential conversation with our pastoral counselling team.</p>
          <div className="mt-8" data-reveal><ButtonLink to="/prayer" variant="outline">Ask for prayer</ButtonLink></div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="find-us" aria-labelledby="visit-title" className="border-t hairline bg-paper-2 py-section">
      <div className="container-site">
        <SectionHeading eyebrow="Find us" title={<span id="visit-title">We would love to welcome you.</span>} className="mb-12" />
        <FindUs />
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta({
    title: "",
    description: `${church.name}, ${church.town}: a Spirit-filled Baptist church raising fruitful disciples. Worship with us every Sunday at 9:30 AM, ${church.address.line1}, off Haruna Bus-stop, Ikorodu, Lagos.`,
    path: "/",
  });
  useReveal("home");
  return (
    <>
      <Hero />
      <ThemeOfTheYear />
      <WhoWeAre />
      <Pastor />
      <FirstSunday />
      <ThisIsNBBC />
      <Rhythm />
      <LatestService />
      <MinistriesIndex />
      <GiveAndPray />
      <Visit />
    </>
  );
}
