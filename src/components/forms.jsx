import { useForm, ValidationError } from "@formspree/react";
import { PiCheckCircle } from "react-icons/pi";
import { church, forms } from "../data/church";

/* ---------------- Forms (Formspree – IDs unchanged) ---------------- */

function Success({ title, children }) {
  return (
    <div role="status" className="flex gap-4 border-l-2 border-plum bg-paper-2 p-6">
      <PiCheckCircle aria-hidden className="mt-1 h-6 w-6 shrink-0 text-plum" />
      <div>
        <p className="font-display text-display-s">{title}</p>
        <p className="mt-1 text-ink-2">{children}</p>
      </div>
    </div>
  );
}

function FormError({ state }) {
  if (!state.errors || state.succeeded) return null;
  const list = typeof state.errors.getFormErrors === "function" ? state.errors.getFormErrors() : [];
  if (!list.length && !state.errors.getAllFieldErrors?.().length) return null;
  return (
    <p role="alert" className="text-sm font-semibold text-[#b42318] dark:text-[#ff9b8f]">
      Sorry, your message could not be sent. Please check the fields and try again, or call {church.phones[0].display}.
    </p>
  );
}

export function ContactForm() {
  const [state, handleSubmit] = useForm(forms.contact);
  if (state.succeeded) return <Success title="Thank you for reaching out.">We have received your message and will get back to you soon.</Success>;
  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="field-label">Full name</label>
          <input id="c-name" name="fullName" autoComplete="name" required className="field" />
        </div>
        <div>
          <label htmlFor="c-email" className="field-label">Email</label>
          <input id="c-email" type="email" name="email" autoComplete="email" required className="field" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-[#b42318] dark:text-[#ff9b8f]" />
        </div>
      </div>
      <div>
        <label htmlFor="c-msg" className="field-label">How can we help?</label>
        <textarea id="c-msg" name="message" rows={5} required className="field resize-y" />
      </div>
      <FormError state={state} />
      <div>
        <button type="submit" className="btn-primary" disabled={state.submitting}>
          {state.submitting ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

export function PrayerForm() {
  const [state, handleSubmit] = useForm(forms.prayer);
  if (state.succeeded) return <Success title="We are praying with you.">Thank you for sharing. Your request has reached our prayer team.</Success>;
  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="p-msg" className="field-label">Your prayer request</label>
        <textarea id="p-msg" name="message" rows={7} required className="field resize-y" placeholder="Share as much or as little as you like." />
      </div>
      <FormError state={state} />
      <div>
        <button type="submit" className="btn-primary" disabled={state.submitting}>
          {state.submitting ? "Sending…" : "Send prayer request"}
        </button>
      </div>
    </form>
  );
}

export function CounsellingForm() {
  const [state, handleSubmit] = useForm(forms.counselling);
  if (state.succeeded) return <Success title="Your message is with us.">A member of our pastoral counselling team will reach out to you.</Success>;
  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label htmlFor="h-email" className="field-label">Email</label>
        <input id="h-email" type="email" name="email" autoComplete="email" required className="field" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-[#b42318] dark:text-[#ff9b8f]" />
      </div>
      <div>
        <label htmlFor="h-msg" className="field-label">What would you like to talk about?</label>
        <textarea id="h-msg" name="message" rows={6} required className="field resize-y" />
      </div>
      <FormError state={state} />
      <div>
        <button type="submit" className="btn-primary" disabled={state.submitting}>
          {state.submitting ? "Sending…" : "Request a conversation"}
        </button>
      </div>
    </form>
  );
}
