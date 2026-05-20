import { ArrowRight, MapPin } from 'lucide-react'
import heroBg from '../assets/HeroBackground.mp4'
import { serviceTickerItems, siteConfig } from '../lib/site'
import TypeWriter from './animations/TypeWriter'

const heroVideo = new URL('../assets/202605192007 (2).mov', import.meta.url).href

export default function Hero() {
  return (
    <section
      id="top"
      className="roof-grid relative flex min-h-svh snap-start overflow-hidden pt-20 text-white sm:pt-28"
    >
      <video
        src={heroBg}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-(--color-accent)/25 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-112 w-md rounded-full bg-(--color-secondary)/35 blur-3xl" />

      <div className="section-shell relative grid flex-1 items-start gap-8 py-8 sm:items-center sm:gap-10 sm:py-14 lg:grid-cols-2">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <MapPin size={16} />
            Sunbury, Victoria
          </div>

          <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="block whitespace-nowrap">ROOFING BUILT FOR</span>
            <span className="block whitespace-nowrap">VICTORIAN CONDITIONS</span>
            <span className="block min-h-[0.95em] overflow-hidden text-(--color-accent-light)">
              <span className="inline-block whitespace-nowrap">
                <TypeWriter phrases={siteConfig.heroHeadline} />
              </span>
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

        <div className="flex items-center justify-center">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={siteConfig.name}
            className="aspect-rectangle w-full max-w-[min(100%,50rem)] rounded-[1.7rem] border border-white/20 object-cover logo-shadow"
          />
        </div>

        <div className="service-ticker col-span-full mx-auto w-3/4 overflow-hidden border-y border-white/14 py-4">
          <div className="service-ticker__track flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 gap-3 pr-3"
              >
                {serviceTickerItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="rounded-full border border-white/14 bg-white/8 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/76"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
