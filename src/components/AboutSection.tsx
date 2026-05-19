import { Award, Hammer, MapPin } from 'lucide-react'
import { siteConfig } from '../lib/site'
import RevealSection from './animations/RevealSection'

const aboutImage = new URL('../assets/NRSImage1.JPG', import.meta.url).href

const stats = [
  { value: 'Sunbury', label: 'Local roofing trade company' },
  { value: 'VIC', label: 'Built for Victorian weather' },
  { value: 'Peak', label: 'Clean finishes and durable results' },
]

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
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Local roofers who know what your roof is up against.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/74">
                National Roofing Solutions provides straightforward roofing
                trade services for homes and properties across Sunbury and the
                surrounding north-west. The focus is simple: diagnose the issue,
                explain the work clearly and leave the roof ready for the next
                season.
              </p>
            </div>
          </div>
        </RevealSection>

        <RevealSection className="h-full" delay={0.12}>
          <div className="flex h-full flex-col gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
                About National Roofing Solutions
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-(--color-ink) sm:text-4xl">
                Roofing work that looks sharp and holds strong.
              </h3>
            </div>
            {/*
            <p className="text-lg leading-8 text-(--color-muted)">
              From targeted repairs to full roof restorations, every job is
              approached with practical trade knowledge and an eye for detail.
              Blue and black brand colours carry through the site to mirror the
              strength and clean contrast of the National Roofing Solutions logo.
            </p>
            */}
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-3xl border border-(--color-line) bg-white/75 p-4"
                >
                  <p className="text-xl font-black uppercase text-(--color-secondary)">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-(--color-muted)">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[Hammer, Award, MapPin].map((Icon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-(--color-line) bg-white/80 px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-(--color-ink)"
                >
                  <Icon size={18} className="text-(--color-accent)" />
                  {['Repairs', 'Restorations', 'Sunbury'][index]}
                </div>
              ))}
            </div>

            <div className="min-h-0 flex-1 overflow-hidden rounded-4xl border border-(--color-line) bg-white/80 p-3 shadow-2xl shadow-blue-950/10">
              <img
                src={aboutImage}
                alt="National Roofing Solutions roofing work"
                className="h-56 w-full rounded-[1.45rem] object-cover sm:h-full"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
