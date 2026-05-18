import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { siteConfig } from '../lib/site'
import RevealSection from './animations/RevealSection'

export default function ContactUs() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.alert('Thanks for your enquiry. Add the business email or form provider to connect this form.')
  }

  return (
    <section
      id="contact"
      className="roof-lines flex min-h-svh snap-start items-center py-28"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <RevealSection>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
            Contact
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter text-(--color-ink) sm:text-7xl">
            Need a roofer in Sunbury or nearby?
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-(--color-muted)">
            Tell National Roofing Solutions what is happening with your roof and
            arrange a clear next step, from leak checks and maintenance through
            to larger restoration or replacement work.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-(--color-line) bg-white/82 p-5">
              <Phone className="text-(--color-accent)" />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-(--color-muted)">
                Phone
              </p>
              <p className="mt-2 font-black text-(--color-ink)">{siteConfig.phone}</p>
            </div>
            <div className="rounded-3xl border border-(--color-line) bg-white/82 p-5">
              <Mail className="text-(--color-accent)" />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-(--color-muted)">
                Email
              </p>
              <p className="mt-2 font-black text-(--color-ink)">{siteConfig.email}</p>
            </div>
            <div className="rounded-3xl border border-(--color-line) bg-white/82 p-5">
              <MapPin className="text-(--color-accent)" />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-(--color-muted)">
                Location
              </p>
              <p className="mt-2 font-black text-(--color-ink)">{siteConfig.location}</p>
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <form
            className="rounded-4xl border border-(--color-line) bg-white/88 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink)">
                Name
                <input
                  className="rounded-2xl border border-(--color-line) bg-white px-4 py-3 font-medium normal-case tracking-normal outline-none transition focus:border-(--color-accent)"
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink)">
                Phone or Email
                <input
                  className="rounded-2xl border border-(--color-line) bg-white px-4 py-3 font-medium normal-case tracking-normal outline-none transition focus:border-(--color-accent)"
                  name="contact"
                  placeholder="How should we reach you?"
                />
              </label>
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink)">
                Job Details
                <textarea
                  className="min-h-36 rounded-2xl border border-(--color-line) bg-white px-4 py-3 font-medium normal-case tracking-normal outline-none transition focus:border-(--color-accent)"
                  name="message"
                  placeholder="Tell us about the roof, leak, gutter issue or restoration."
                />
              </label>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:brightness-110"
                type="submit"
              >
                Send Enquiry
                <Send size={18} />
              </button>
            </div>
          </form>
        </RevealSection>
      </div>
    </section>
  )
}
