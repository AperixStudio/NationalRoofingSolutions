import { ArrowRight, MapPin } from 'lucide-react'
import { serviceTickerItems, siteConfig } from '../lib/site'
import TypeWriter from './animations/TypeWriter'

const heroVideo = new URL('../assets/NRSHeroVidV3.optimized.mp4', import.meta.url).href

export default function Hero() {
  return (
    <section
      id="top"
      className="roof-grid relative flex min-h-svh snap-start overflow-hidden pt-20 text-white sm:pt-28"
    >

      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-(--color-accent)/25 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-112 w-md rounded-full bg-(--color-secondary)/35 blur-3xl" />

      <div className="section-shell relative grid flex-1 items-start gap-8 py-8 sm:items-center sm:gap-10 sm:py-14 lg:grid-cols-2">
        <div className="max-w-2xl pl-4 sm:pl-8">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white/80 backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
            <MapPin size={12} className="sm:hidden" />
            <MapPin size={16} className="hidden sm:block" />
            Metro Melbourne & Macedon Ranges
          </div>

          <h1 className="text-3xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="block">PROVIDING THE BEST</span>
            <span className="block min-h-[0.95em] overflow-hidden text-(--color-accent-light)">
              <span className="inline-block whitespace-nowrap">
                <TypeWriter phrases={siteConfig.heroHeadline} />
              </span>
            </span>
            <span className="block">SOLUTIONS AND SERVICES</span>
            
          </h1>

          {/*<p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {siteConfig.descriptor}
          </p>*/}

          <div className="mt-8 flex flex-row flex-wrap gap-3 sm:mt-40">
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
            preload="metadata"
            aria-label={siteConfig.name}
            className="aspect-video w-full max-h-[40vh] max-w-[min(100%,50rem)] rounded-2xl border border-white/20 object-cover logo-shadow sm:aspect-rectangle sm:max-h-none sm:rounded-[1.7rem]"
          />
        </div>

        <div className="service-ticker col-span-full mx-auto w-full overflow-hidden border-y border-white/14 py-4 sm:w-3/4">
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
