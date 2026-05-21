import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { siteConfig } from '../lib/site'
import RevealSection from './animations/RevealSection'

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  )
}

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="roof-lines flex min-h-svh snap-start items-center py-24"
    >
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <RevealSection>
          <p className="text-lg font-black uppercase tracking-[0.18em] text-(--color-accent)">
            CONTACT US TODAY FOR A FREE QUOTE
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-tighter text-(--color-ink) sm:text-6xl">
           Do you need a Roofing Solution?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-(--color-muted) sm:text-lg">
            Tell National Roofing Solutions what your roof needs and arrange a clear next step.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-4">
            <div className="rounded-3xl border border-(--color-line) bg-white/82 p-4 sm:col-span-2">
              <Phone className="text-(--color-accent)" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-(--color-muted)">
                Phone
              </p>
              <p className="mt-2 font-black text-(--color-ink)">{siteConfig.phone}</p>
            </div>
            <div className="rounded-3xl border border-(--color-line) bg-white/82 p-4 sm:col-span-2">
              <MapPin className="text-(--color-accent)" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-(--color-muted)">
                Location
              </p>
              <p className="mt-2 font-black text-(--color-ink)">{siteConfig.location}</p>
            </div>
            <div className="rounded-3xl border border-(--color-line) bg-white/82 p-4 sm:col-span-3">
              <Mail className="text-(--color-accent)" />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-(--color-muted)">
                Email
              </p>
              <p className="mt-2 break-all font-black text-(--color-ink)">
                {siteConfig.email}
              </p>
            </div>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-[#1877F2]/20 bg-[#1877F2] p-4 text-white transition hover:brightness-110"
            >
              <FacebookIcon />
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-white/75">
                Facebook
              </p>
              <p className="mt-2 font-black">Follow On Facebook</p>
            </a>
          </div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <form
            className="rounded-4xl border border-(--color-line) bg-white/88 p-5 shadow-2xl shadow-blue-950/10 backdrop-blur"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <div className="grid gap-3">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </p>
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink)">
                Name
                <input
                  className="rounded-2xl border border-(--color-line) bg-white px-4 py-2.5 font-medium normal-case tracking-normal outline-none transition focus:border-(--color-accent)"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink)">
                Phone or Email
                <input
                  className="rounded-2xl border border-(--color-line) bg-white px-4 py-2.5 font-medium normal-case tracking-normal outline-none transition focus:border-(--color-accent)"
                  name="contact"
                  placeholder="How should we reach you?"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink)">
                Job Details
                <textarea
                  className="min-h-28 rounded-2xl border border-(--color-line) bg-white px-4 py-2.5 font-medium normal-case tracking-normal outline-none transition focus:border-(--color-accent)"
                  name="message"
                  placeholder="Tell us about the roof, leak, gutter issue or restoration."
                  required
                />
              </label>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-3.5 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:brightness-110"
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
