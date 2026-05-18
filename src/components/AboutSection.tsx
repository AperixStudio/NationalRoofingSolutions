import { Award, Hammer, MapPin } from 'lucide-react'
import { siteConfig } from '../lib/site'
import RevealSection from './animations/RevealSection'

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
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <RevealSection>
          <div className="rounded-[2rem] border border-(--color-line) bg-white/78 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur">
            <div className="rounded-[1.5rem] bg-(--color-surface) p-7 text-white">
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

        <RevealSection delay={0.12}>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent)">
                About National Roofing Solutions
              </p>
              <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.04em] text-(--color-ink) sm:text-5xl">
                Roofing work that looks sharp and holds strong.
              </h3>
            </div>
            <p className="text-lg leading-8 text-(--color-muted)">
              From targeted repairs to full roof restorations, every job is
              approached with practical trade knowledge and an eye for detail.
              Blue and black brand colours carry through the site to mirror the
              strength and clean contrast of the National Roofing Solutions logo.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-3xl border border-(--color-line) bg-white/75 p-5"
                >
                  <p className="text-2xl font-black uppercase text-(--color-secondary)">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-(--color-muted)">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[Hammer, Award, MapPin].map((Icon, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-(--color-line) bg-white/80 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink)"
                >
                  <Icon size={18} className="text-(--color-accent)" />
                  {['Repairs', 'Restorations', 'Sunbury'][index]}
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
