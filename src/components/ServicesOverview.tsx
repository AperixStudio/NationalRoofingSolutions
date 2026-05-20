import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { services, serviceTags } from '../lib/site'
import RevealSection from './animations/RevealSection'

export default function ServicesOverview() {
  return (
    <section
      id="services"
      className="flex min-h-svh snap-start items-center bg-(--color-surface) py-28 text-white"
    >
      <div className="section-shell">
        <RevealSection className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent-light)">
            Roofing Services
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-7xl">
            DESIGNED FOR PERFORMANCE AND LONG-TERM PROTECTION
          </h2>
        </RevealSection>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <RevealSection key={service.title} delay={index * 0.08}>
              <article className="group h-full rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-(--color-accent) text-lg font-black">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ArrowUpRight className="text-white/35 transition group-hover:text-(--color-accent-light)" />
                </div>
                <h3 className="mt-8 text-3xl font-black uppercase tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-white/68">{service.text}</p>
              </article>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.12}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/76"
              >
                <CheckCircle2 size={16} className="text-(--color-accent-light)" />
                {tag}
              </span>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
