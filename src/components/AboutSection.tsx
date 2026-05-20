import GoogleMap from './GoogleMap'
import { siteConfig } from '../lib/site'
import RevealSection from './animations/RevealSection'

const aboutImage = new URL('../assets/NRSImage1.webp', import.meta.url).href

export default function AboutSection() {
  return (
    <section
      id="about"
      className="roof-lines flex min-h-svh snap-start items-center py-28"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <RevealSection className="h-full">
          <div className="h-full rounded-4xl border border-(--color-line) bg-white/78 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur">
            <div className="flex h-full flex-col justify-center rounded-3xl bg-(--color-surface) p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-(--color-accent-light)">
                Based in {siteConfig.location}
              </p>
              <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                LOCAL ROOFING SOLUTIONS FOR SUNBURY AND THE NORTH-WEST.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/74">
                National Roofing Solutions is a Sunbury-based roofing trade
                business providing roof repairs, restorations, replacements and
                gutter work across Melbourne’s north-west. We focus on clear
                advice, reliable workmanship and roofing systems built to handle
                Victorian weather.
              </p>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="h-full" delay={0.12}>
          <div className="flex h-full flex-col">
            <div className="grid min-h-0 flex-1 gap-3 overflow-hidden rounded-4xl border border-(--color-line) bg-white/80 p-3 shadow-2xl shadow-blue-950/10">
              <div className="relative min-h-72 overflow-hidden rounded-[1.45rem] bg-(--color-surface)">
                <GoogleMap />
              </div>
              <img
                src={aboutImage}
                alt="National Roofing Solutions roofing work"
                className="h-72 w-full rounded-[1.45rem] object-cover"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
