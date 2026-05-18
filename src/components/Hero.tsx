import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react'
import logo from '../assets/logo.png'
import { serviceTickerItems, siteConfig } from '../lib/site'
import TypeWriter from './animations/TypeWriter'

export default function Hero() {
  const tickerItems = [...serviceTickerItems, ...serviceTickerItems]

  return (
    <section
      id="top"
      className="roof-grid relative flex min-h-svh snap-start overflow-hidden bg-(--color-surface) pt-28 text-white"
    >
      <div className="absolute inset-0 bg-(image:--hero-overlay)" />
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-(--color-accent)/25 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-[28rem] w-[28rem] rounded-full bg-(--color-secondary)/35 blur-3xl" />

      <div className="section-shell relative grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <MapPin size={16} />
            Sunbury, Victoria
          </div>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Roofing at its peak for{' '}
            <span className="text-(--color-accent-light)">
              <TypeWriter phrases={siteConfig.heroHeadline} />
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {siteConfig.descriptor}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:brightness-110"
            >
              Request a Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-white/16"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-(--color-accent)/40 blur-3xl" />
          <div className="relative rounded-[2.2rem] border border-white/14 bg-black/32 p-5 shadow-2xl shadow-black/35 backdrop-blur">
            <img
              src={logo}
              alt={siteConfig.name}
              className="aspect-square w-full rounded-[1.7rem] object-cover logo-shadow"
            />
            <div className="mt-5 flex items-center gap-3 rounded-3xl border border-white/12 bg-white/10 p-4">
              <ShieldCheck className="text-(--color-accent-light)" />
              <p className="text-sm font-semibold leading-6 text-white/82">
                Trade roofing solutions with a sharp finish, clear communication
                and durable weather protection.
              </p>
            </div>
          </div>
        </div>

        <div className="service-ticker col-span-full overflow-hidden border-y border-white/14 py-4">
          <div className="service-ticker__track flex w-max gap-3">
            {tickerItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-white/14 bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/76"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
