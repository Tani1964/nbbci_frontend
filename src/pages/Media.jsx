import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PiPlayFill, PiMagnifyingGlass, PiYoutubeLogo, PiBroadcast, PiPlaylist } from "react-icons/pi";
import { embeds, socials } from "../data/church";
import { gallery, recordingKinds, recordings } from "../data/media";
import { usePageMeta, useReveal } from "../lib/hooks";
import { ButtonLink, Embed, PageHeader, Picture, SectionHeading } from "../components/ui";

const fmt = (iso) => new Date(`${iso}T12:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

/** YouTube facade: a local thumbnail until the visitor presses play. */
function Player({ video, playlist, autoplay }) {
  if (autoplay) {
    const src = playlist
      ? `https://www.youtube-nocookie.com/embed/videoseries?list=${embeds.youtubeUploads}&autoplay=1`
      : `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`;
    return (
      <iframe
        key={src}
        src={src}
        title={playlist ? "Latest uploads from New Birth Baptist Church" : video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }
  return <img src={video.thumb} alt="" className="absolute inset-0 h-full w-full object-cover" />;
}

export default function Media() {
  usePageMeta({ title: "Watch & listen", description: "Watch recent Sunday, midweek and special services from New Birth Baptist Church Ikorodu, listen to NBBCI Radio, and see church life in pictures.", path: "/media" });
  const [params, setParams] = useSearchParams();
  const initial = recordings.find((r) => r.id === params.get("v")) ?? recordings[0];
  const [current, setCurrent] = useState(initial);
  const [playing, setPlaying] = useState(Boolean(params.get("v")));
  const [playlist, setPlaylist] = useState(false);
  const [kind, setKind] = useState("all");
  const [query, setQuery] = useState("");
  const playerRef = useRef(null);
  useReveal(`media-${kind}`);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recordings.filter((r) => (kind === "all" || r.kind === kind) && (!q || r.title.toLowerCase().includes(q) || fmt(r.date).toLowerCase().includes(q)));
  }, [kind, query]);

  const play = (r) => {
    setCurrent(r);
    setPlaylist(false);
    setPlaying(true);
    setParams({ v: r.id }, { replace: true });
    playerRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <PageHeader eyebrow="Watch & listen" title={<>Worship with us, <em>wherever</em> you are.</>} lede="Services stream live on Sundays at 9:30 AM and Wednesdays at 5:30 PM. Catch up on recent recordings below." />

      {/* Featured player */}
      <section aria-label="Video player" className="container-site" ref={playerRef}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
              <Player video={current} playlist={playlist} autoplay={playing} />
              {!playing && (
                <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 grid place-items-center bg-black/25 transition-colors hover:bg-black/10" aria-label={`Play ${current.title}, ${fmt(current.date)}`}>
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-cream text-[rgb(30_20_25)] transition-transform duration-500 ease-soft group-hover:scale-110">
                    <PiPlayFill aria-hidden className="ml-1 h-7 w-7" />
                  </span>
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div aria-live="polite">
              <p className="eyebrow mb-4">{playlist ? "Channel uploads" : "Now showing"}</p>
              <h2 className="text-display-m">{playlist ? "Latest from our YouTube channel" : current.title}</h2>
              {!playlist && <p className="mt-3 text-ink-2">{fmt(current.date)}</p>}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button type="button" className="btn-outline justify-start" onClick={() => { setPlaylist(true); setPlaying(true); }}>
                <PiPlaylist aria-hidden className="h-5 w-5" /> Play newest uploads
              </button>
              <ButtonLink href={socials[0].href} variant="primary" className="justify-start">
                <PiYoutubeLogo aria-hidden className="h-5 w-5" /> Subscribe on YouTube
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section aria-labelledby="archive-title" className="py-section">
        <div className="container-site">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Recent services" title={<span id="archive-title">Service archive</span>} />
            <div className="flex flex-col gap-4 lg:items-end">
              <label className="relative block w-full lg:w-80">
                <span className="sr-only">Search services</span>
                <PiMagnifyingGlass aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-2" />
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title or month" className="field rounded-full pl-11" />
              </label>
              <div role="group" aria-label="Filter by service type" className="flex flex-wrap gap-2">
                {recordingKinds.map((k) => (
                  <button
                    key={k.id}
                    type="button"
                    aria-pressed={kind === k.id}
                    onClick={() => setKind(k.id)}
                    className={`min-h-[40px] rounded-full border px-4 text-sm font-semibold transition-colors ${kind === k.id ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink"}`}
                  >
                    {k.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="sr-only" aria-live="polite">{list.length} services shown</p>
          {list.length ? (
            <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((r) => {
                const active = r.id === current.id && playing && !playlist;
                return (
                  <li key={r.id} data-reveal>
                    <button type="button" onClick={() => play(r)} className="group block w-full text-left" aria-label={`Play ${r.title}, ${fmt(r.date)}`}>
                      <div className="relative aspect-video overflow-hidden rounded-sm bg-paper-2">
                        <img src={r.thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-soft group-hover:scale-[1.04]" />
                        {active && <span className="absolute left-3 top-3 rounded-full bg-plum px-3 py-1 text-xs font-semibold text-plum-ink">Now playing</span>}
                      </div>
                      <p className="mt-4 text-sm text-ink-2">{fmt(r.date)} · {recordingKinds.find((k) => k.id === r.kind)?.label}</p>
                      <p className="mt-1 font-display text-[1.375rem] leading-snug transition-colors group-hover:text-plum">{r.title}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mt-12 border-t hairline pt-10">
              <p className="font-display text-display-s">No services match that search.</p>
              <button type="button" className="link-arrow mt-4" onClick={() => { setQuery(""); setKind("all"); }}>Clear filters</button>
            </div>
          )}
          <p className="mt-14 text-ink-2">Looking for something older? <a className="font-semibold text-plum underline decoration-plum/30 underline-offset-4 hover:decoration-plum" href={`${socials[0].href}/videos`} target="_blank" rel="noopener noreferrer">See every video on YouTube<span className="sr-only"> (opens in a new tab)</span></a>.</p>
        </div>
      </section>

      {/* Radio */}
      <section aria-labelledby="radio-title" className="bg-aubergine py-section text-cream">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <PiBroadcast aria-hidden className="mb-6 h-10 w-10 text-ochre" />
            <SectionHeading tone="light" eyebrow="NBBCI Radio" title={<span id="radio-title">Listen live.</span>} lede="Our church radio station streams online. Listen here, or open the station in its own tab." />
            <div className="mt-8" data-reveal><ButtonLink href={embeds.radio} variant="light">Open the radio</ButtonLink></div>
          </div>
          <div className="lg:col-span-8">
            <Embed src={embeds.radio} title="NBBCI Radio player" height={560} deferred loadLabel="Play NBBCI Radio here" buttonClass="btn-light" className="!border-cream/15 !bg-cream/5 text-cream" />
          </div>
        </div>
      </section>

      {/* Pictures */}
      <section aria-labelledby="pics-title" className="py-section">
        <div className="container-site">
          <SectionHeading eyebrow="In pictures" title={<span id="pics-title">Church life at New Birth</span>} className="mb-12" />
          <ul className="grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] md:grid-cols-4 md:gap-4 lg:auto-rows-[13rem]">
            {gallery.map((g, i) => (
              <li key={g.src} className={g.span} data-reveal="image" style={{ "--reveal-delay": `${(i % 4) * 70}ms` }}>
                <Picture src={g.src} widths={g.widths} alt={g.alt} sizes="(min-width:768px) 50vw, 100vw" className="img-zoom h-full rounded-sm" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Facebook – direct link first; widgets load on request (they depend on SociableKit syncing) */}
      <section aria-labelledby="fb-title" className="border-t hairline bg-paper-2 py-section">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Facebook" title={<span id="fb-title">News, photos and live streams</span>} lede="Our Facebook page carries announcements, service live streams and photo albums from church life." />
            <div data-reveal><ButtonLink href="https://facebook.com/nbbcil">Open our Facebook page</ButtonLink></div>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Embed src={embeds.facebookPosts} title="Facebook page posts" height={720} deferred loadLabel="Show latest posts here" />
            <Embed src={embeds.facebookAlbums} title="Facebook photo albums" height={720} deferred loadLabel="Show photo albums here" />
          </div>
        </div>
      </section>
    </>
  );
}
