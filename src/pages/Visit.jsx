import { church } from "../data/church";
import { usePageMeta, useReveal } from "../lib/hooks";
import { ButtonLink, PageHeader, Picture, SectionHeading } from "../components/ui";
import { FindUs, SundayTimeline, WeeklyRhythm } from "../components/sections";
import { ContactForm } from "../components/forms";

const expectations = [
  { title: "Where to go", text: `All Sunday gatherings hold in the Church Auditorium at ${church.address.line1}, ${church.address.line2}, ${church.address.city}.` },
  { title: "For your children", text: "Children Church provides a safe, engaging space where young children learn Bible stories in ways they understand." },
  { title: "Can't make it in person?", text: "Sunday and midweek services stream live on our YouTube channel and Facebook page." },
  { title: "Questions before you come?", text: "Call, WhatsApp or send us a message. We are glad to help you plan your first visit." },
];

export default function Visit() {
  usePageMeta({ title: "Plan your visit", description: `Service times, directions and what to expect at ${church.name}, ${church.address.line1}, off Haruna Bus-stop, Ikorodu, Lagos. Sunday worship at 9:30 AM.`, path: "/visit" });
  useReveal("visit");

  return (
    <>
      <PageHeader eyebrow="Plan your visit" title={<>We saved you <em>a seat</em>.</>} lede="Everything you need for your first Sunday at New Birth: when to come, where to find us, and what to expect." />

      <section aria-labelledby="times-title" className="pb-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="Sunday mornings" title={<span id="times-title">Service times</span>} />
              <Picture src="/assets/church/services/minister-preaching-at-pulpit" widths={[480, 800]} sizes="(min-width:1024px) 35vw, 100vw" alt="A minister preaching from the pulpit during a service" focus="40% 22%" className="mt-8 aspect-[16/10] rounded-sm lg:arch lg:mt-10 lg:aspect-[4/5]" reveal />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SundayTimeline />
            <div className="mt-6 flex flex-wrap gap-3" data-reveal>
              <ButtonLink to="#find-us">Get directions</ButtonLink>
              <ButtonLink to="/media" variant="outline">Watch online</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="expect-title" className="bg-aubergine py-section text-cream">
        <div className="container-site">
          <SectionHeading tone="light" eyebrow="What to expect" title={<span id="expect-title">A warm welcome, and room to simply be.</span>} />
          <dl className="mt-14 grid gap-x-12 border-t border-cream/20 md:grid-cols-2">
            {expectations.map((e, i) => (
              <div key={e.title} className="border-b border-cream/20 py-8" data-reveal style={{ "--reveal-delay": `${(i % 2) * 90}ms` }}>
                <dt className="font-display text-display-s text-cream">{e.title}</dt>
                <dd className="mt-3 max-w-prose text-cream/80">{e.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="find-us" aria-labelledby="find-title" className="py-section">
        <div className="container-site">
          <SectionHeading eyebrow="Getting here" title={<span id="find-title">Find us in Ikorodu</span>} className="mb-12" />
          <FindUs />
        </div>
      </section>

      <section aria-labelledby="week-title" className="border-t hairline py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="During the week" title={<span id="week-title">More ways to gather</span>} />
          </div>
          <div className="lg:col-span-8"><WeeklyRhythm /></div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="bg-paper-2 py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Contact" title={<span id="contact-title">Let’s talk.</span>} lede="Have a question or need more information? Send us a message and we will get back to you as soon as possible." />
          </div>
          <div className="lg:col-span-7" data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
