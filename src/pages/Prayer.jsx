import { church, weekly } from "../data/church";
import { usePageMeta, useReveal } from "../lib/hooks";
import { PageHeader, SectionHeading } from "../components/ui";
import { CounsellingForm, PrayerForm } from "../components/forms";

export default function Prayer() {
  usePageMeta({ title: "Prayer & care", description: `Send a prayer request or ask for confidential pastoral counselling at ${church.name}, ${church.town}.`, path: "/prayer" });
  useReveal("prayer");
  const virtual = weekly.filter((w) => w.virtual);

  return (
    <>
      <PageHeader eyebrow="Prayer & care" title={<>You are <em>not alone</em>.</>} lede="No matter what you are going through, we would count it a privilege to pray with you and walk with you." />

      <section aria-labelledby="prayer-title" className="pb-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Prayer request" title={<span id="prayer-title">Let us pray with you.</span>} lede="Share your prayer needs and our team will join you in prayer, lifting your requests to God with faith and compassion." />
          </div>
          <div className="lg:col-span-7" data-reveal><PrayerForm /></div>
        </div>
      </section>

      <section aria-labelledby="counsel-title" className="bg-paper-2 py-section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Pastoral counselling" title={<span id="counsel-title">Need a listening ear?</span>} lede="Our pastoral counselling team is here to support you through life's challenges. Ask for a confidential conversation and we will reach out." />
          </div>
          <div className="lg:col-span-7" data-reveal><CounsellingForm /></div>
        </div>
      </section>

      <section aria-labelledby="pray-together-title" className="bg-aubergine py-section text-cream">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading tone="light" eyebrow="Pray together" title={<span id="pray-together-title">Join our prayer line.</span>} lede="Our early-morning prayer meetings are held online, so you can join from anywhere." />
          </div>
          <ul className="border-t border-cream/20 lg:col-span-6 lg:col-start-7">
            {virtual.map((w) => (
              <li key={w.title} className="border-b border-cream/20 py-6" data-reveal>
                <p className="text-eyebrow font-semibold uppercase text-ochre">{w.day}s · {w.time}</p>
                <p className="mt-2 font-display text-display-s text-cream">{w.title}</p>
                {w.subtitle && <p className="text-cream/70">{w.subtitle}</p>}
              </li>
            ))}
            <li className="pt-8" data-reveal>
              <a href={church.virtualPrayerLine} target="_blank" rel="noopener noreferrer" className="btn-light">
                Join the prayer line<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
