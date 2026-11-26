import { useState } from "react";
import { PiCopy, PiCheck } from "react-icons/pi";
import { accounts, church } from "../data/church";
import { usePageMeta, useReveal } from "../lib/hooks";
import { ButtonLink, PageHeader } from "../components/ui";

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(value);
      ok = true;
    } catch {
      // Older browsers / insecure contexts: fall back to a hidden textarea
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { ok = document.execCommand("copy"); } catch { ok = false; }
      ta.remove();
    }
    setCopied(ok ? "yes" : "no");
    setTimeout(() => setCopied(false), 2600);
  };
  return (
    <button type="button" onClick={copy} className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink/20 px-4 text-sm font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-paper">
      {copied === "yes" ? <PiCheck aria-hidden className="h-4 w-4" /> : <PiCopy aria-hidden className="h-4 w-4" />}
      <span aria-live="polite">{copied === "yes" ? "Copied" : copied === "no" ? "Select and copy manually" : `Copy ${label}`}</span>
    </button>
  );
}

export default function Give() {
  usePageMeta({ title: "Give", description: `Give your tithes, offerings and project support to ${church.name}, ${church.town} by bank transfer or in person.`, path: "/give" });
  useReveal("give");

  return (
    <>
      <PageHeader eyebrow="Give" title={<>Generosity that <em>bears fruit</em>.</>} lede="Support the mission and community by giving your tithes and offerings. Your generosity makes a difference." />

      <section aria-label="Bank accounts" className="pb-section">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {accounts.map((a, i) => (
            <article key={a.number} className={`flex min-w-0 flex-col justify-between rounded-sm p-6 xs:p-8 sm:p-10 ${i === 0 ? "bg-aubergine text-cream" : "border hairline bg-paper-2"}`} data-reveal style={{ "--reveal-delay": `${i * 100}ms` }}>
              <div>
                <p className={`text-eyebrow font-semibold uppercase ${i === 0 ? "text-ochre" : "text-plum"}`}>{a.purpose}</p>
                <h2 className={`mt-3 text-display-m ${i === 0 ? "text-cream" : ""}`}>{a.label}</h2>
              </div>
              <dl className="mt-12 space-y-6">
                <div>
                  <dt className={`text-sm ${i === 0 ? "text-cream/65" : "text-ink-2"}`}>Bank</dt>
                  <dd className="mt-1 text-xl font-semibold">{a.bank}</dd>
                </div>
                <div>
                  <dt className={`text-sm ${i === 0 ? "text-cream/65" : "text-ink-2"}`}>Account number</dt>
                  <dd className="mt-1 flex flex-wrap items-center gap-4">
                    <span className="font-display text-[2rem] leading-none tabular-nums tracking-[0.02em] xs:text-[2.5rem] sm:text-[3rem]">{a.number}</span>
                    <span className={i === 0 ? "[&_button]:border-cream/30 [&_button:hover]:bg-cream [&_button:hover]:text-[rgb(30_20_25)]" : ""}>
                      <CopyButton value={a.number} label="number" />
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className={`text-sm ${i === 0 ? "text-cream/65" : "text-ink-2"}`}>Account name</dt>
                  <dd className="mt-1 text-lg">{a.name}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="ways-title" className="border-t hairline py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5" data-reveal>Other ways to give</p>
            <h2 id="ways-title" className="text-display-l" data-reveal>Give in person at any service.</h2>
          </div>
          <div className="space-y-6 text-lede text-ink-2 lg:col-span-6 lg:col-start-7" data-reveal>
            <p>You are welcome to bring your tithes and offerings to any of our Sunday or midweek services in the Church Auditorium.</p>
            <p>
              For questions about giving, call{" "}
              <a href={church.phones[0].href} className="font-semibold text-plum underline decoration-plum/30 underline-offset-4 hover:decoration-plum">{church.phones[0].display}</a>{" "}
              or email{" "}
              <a href={`mailto:${church.email}`} className="[overflow-wrap:anywhere] font-semibold text-plum underline decoration-plum/30 underline-offset-4 hover:decoration-plum">{church.email}</a>.
            </p>
            <p className="text-base">Before you send, check that the account name reads <strong className="text-ink">New Birth Baptist Church Ikorodu</strong>.</p>
            <div className="pt-2"><ButtonLink to="/prayer" variant="outline">Need prayer instead?</ButtonLink></div>
          </div>
        </div>
      </section>
    </>
  );
}
