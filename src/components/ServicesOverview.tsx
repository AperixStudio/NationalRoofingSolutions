import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { services, serviceTags } from '../lib/site'
import RevealSection from './animations/RevealSection'

const pressureWashingBefore = new URL('../assets/NRSBefore.webp', import.meta.url).href
const pressureWashingAfter = new URL('../assets/NRSImage3.webp', import.meta.url).href

export default function ServicesOverview() {
  return (
    <section
      id="services"
      className="flex min-h-svh snap-start items-center bg-(--color-surface) py-28 text-white"
    >
      <div className="section-shell">
        <RevealSection className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent-light)">
            Services
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter sm:text-7xl">
            PRESSURE WASHING, RE-BEDDING AND PAINTING DONE RIGHT
          </h2>
        </RevealSection>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <RevealSection key={service.title} delay={index * 0.08}>
              <article className="group h-full rounded-4xl border border-white/12 bg-white/6 p-6 transition hover:-translate-y-1 hover:bg-white/9">
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

        <RevealSection delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-4xl border border-white/12 bg-white/6 p-3">
            <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-center rounded-[1.45rem] bg-(--color-primary)/60 p-6 sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent-light)">
                  Pressure Washing Results
                </p>
                <h3 className="mt-4 text-3xl font-black uppercase leading-[0.92] tracking-tighter sm:text-5xl">
                  See the difference a clean roof makes.
                </h3>
                <p className="mt-5 max-w-2xl leading-7 text-white/68">
                  Built-up dirt, moss and lichen can make a roof look older than it
                  is. Our pressure washing work strips back the grime before
                  restoration, painting or maintenance.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <figure className="relative overflow-hidden rounded-[1.45rem] bg-black">
                  <img
                    src={pressureWashingBefore}
                    alt="Roof before pressure washing"
                    className="h-72 w-full object-cover sm:h-full"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    Before
                  </figcaption>
                </figure>

                <figure className="relative overflow-hidden rounded-[1.45rem] bg-black">
                  <img
                    src={pressureWashingAfter}
                    alt="Roof after pressure washing"
                    className="h-72 w-full scale-125 object-cover sm:h-full -translate-x-6"
                  />
                  <figcaption className="absolute left-3 top-3 rounded-full bg-(--color-accent)/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    After
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </RevealSection>

        {/*<RevealSection delay={0.12}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/76"
              >
                <CheckCircle2 size={16} className="text-(--color-accent-light)" />
                {tag}
              </span>
            ))}
          </div>
        </RevealSection>*/}
      </div>
    </section>
  )
}
