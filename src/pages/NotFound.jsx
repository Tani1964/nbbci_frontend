import { usePageMeta } from "../lib/hooks";
import { ButtonLink } from "../components/ui";

export default function NotFound() {
  usePageMeta({ title: "Page not found", path: "/404" });
  return (
    <section className="container-site flex min-h-[70vh] flex-col justify-center py-section">
      <p className="eyebrow mb-6">404</p>
      <h1 className="max-w-3xl text-display-xl">This page has wandered off.</h1>
      <p className="mt-6 max-w-prose text-lede text-ink-2">The link may be old, or the page may have moved. Let us take you somewhere useful.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink to="/">Go home</ButtonLink>
        <ButtonLink to="/visit" variant="outline">Plan a visit</ButtonLink>
      </div>
    </section>
  );
}
