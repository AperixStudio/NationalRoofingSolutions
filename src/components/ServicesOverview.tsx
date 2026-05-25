import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { services, serviceTags } from '../lib/site'
import RevealSection from './animations/RevealSection'

const pressureWashingBefore = new URL('../assets/NRSBefore.webp', import.meta.url).href
const pressureWashingAfter = new URL('../assets/NRSImage3.webp', import.meta.url).href
const serviceImageOne = new URL('../assets/NRSImage1.webp', import.meta.url).href
const serviceImageTwo = new URL('../assets/NRSImage2.webp', import.meta.url).href

const servicePhotoSets = [
  [pressureWashingBefore, pressureWashingAfter, serviceImageOne],
  [serviceImageOne, serviceImageTwo, pressureWashingAfter],
  [pressureWashingAfter, serviceImageTwo, pressureWashingBefore],
  [serviceImageTwo, serviceImageOne, pressureWashingAfter],
  [pressureWashingBefore, serviceImageTwo, serviceImageOne],
]

const servicePhotoClasses = [
  'group-hover:translate-x-[calc(-50%-30vw)] group-hover:-translate-y-[38vw] group-hover:-rotate-5 group-focus-visible:translate-x-[calc(-50%-30vw)] group-focus-visible:-translate-y-[38vw] group-focus-visible:-rotate-5 sm:group-hover:translate-x-[calc(-50%-10rem)] sm:group-hover:-translate-y-36 sm:group-hover:-rotate-6 sm:group-focus-visible:translate-x-[calc(-50%-10rem)] sm:group-focus-visible:-translate-y-36 sm:group-focus-visible:-rotate-6 lg:group-hover:translate-x-[calc(-50%-13rem)] lg:group-focus-visible:translate-x-[calc(-50%-13rem)] xl:group-hover:translate-x-[calc(-50%-15rem)] xl:group-focus-visible:translate-x-[calc(-50%-15rem)]',
  'group-hover:-translate-x-1/2 group-hover:-translate-y-[48vw] group-hover:rotate-1 group-focus-visible:-translate-x-1/2 group-focus-visible:-translate-y-[48vw] group-focus-visible:rotate-1 sm:group-hover:-translate-y-44 sm:group-focus-visible:-translate-y-44 lg:group-hover:-translate-y-48 lg:group-focus-visible:-translate-y-48',
  'group-hover:translate-x-[calc(-50%+30vw)] group-hover:-translate-y-[38vw] group-hover:rotate-5 group-focus-visible:translate-x-[calc(-50%+30vw)] group-focus-visible:-translate-y-[38vw] group-focus-visible:rotate-5 sm:group-hover:translate-x-[calc(-50%+10rem)] sm:group-hover:-translate-y-36 sm:group-hover:rotate-6 sm:group-focus-visible:translate-x-[calc(-50%+10rem)] sm:group-focus-visible:-translate-y-36 sm:group-focus-visible:rotate-6 lg:group-hover:translate-x-[calc(-50%+13rem)] lg:group-focus-visible:translate-x-[calc(-50%+13rem)] xl:group-hover:translate-x-[calc(-50%+15rem)] xl:group-focus-visible:translate-x-[calc(-50%+15rem)]',
]

const mobileServicePhotoTransforms = [
  'translateX(calc(-50% - 15vw)) translateY(-32vw) rotate(-5deg) scale(1)',
  'translateX(calc(-50% + 5vw)) translateY(-66vw) rotate(1deg) scale(1)',
  'translateX(calc(-50% + 18vw)) translateY(-32vw) rotate(5deg) scale(1)',
]

const isMobileServicesViewport = () => window.matchMedia('(max-width: 639px)').matches

export default function ServicesOverview() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null)
  const openedCardTop = useRef(0)
  const serviceCardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    if (activeServiceIndex === null) {
      return undefined
    }

    const closeIfScrolledAway = () => {
      if (!isMobileServicesViewport()) {
        setActiveServiceIndex(null)
        return
      }

      const activeCard = serviceCardRefs.current[activeServiceIndex]

      if (!activeCard) {
        setActiveServiceIndex(null)
        return
      }

      if (Math.abs(activeCard.getBoundingClientRect().top - openedCardTop.current) > 200) {
        setActiveServiceIndex(null)
      }
    }

    window.addEventListener('scroll', closeIfScrolledAway, { passive: true })
    window.addEventListener('resize', closeIfScrolledAway)

    return () => {
      window.removeEventListener('scroll', closeIfScrolledAway)
      window.removeEventListener('resize', closeIfScrolledAway)
    }
  }, [activeServiceIndex])

  const openServicePhotos = (index: number) => {
    if (!isMobileServicesViewport()) {
      return
    }

    const selectedCard = serviceCardRefs.current[index]
    openedCardTop.current = selectedCard?.getBoundingClientRect().top ?? 0
    setActiveServiceIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <section
      id="services"
      className="flex min-h-svh snap-start items-center overflow-x-clip py-28 text-white"
    >
      <div className="section-shell">
        <RevealSection>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-(--color-accent-light)">
            Services
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] tracking-tighter sm:text-7xl">
            WE CARE ABOUT DELIVERING ONLY THE BEST ROOFING SOLUTIONS.
          </h2>
          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tighter sm:text-5xl">
            NO SHORTCUTS, NO COMPROMISES.
          </h2>
        </RevealSection>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const isCenteredFinalCard = services.length % 2 === 1 && index === services.length - 1
            const isActiveService = activeServiceIndex === index

            return (
              <RevealSection
                key={service.title}
                delay={index * 0.08}
                className={
                  isCenteredFinalCard
                    ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.5rem)]'
                    : undefined
                }
              >
                <article
                  ref={(element) => {
                    serviceCardRefs.current[index] = element
                  }}
                  className={`group relative isolate h-full cursor-pointer overflow-visible rounded-4xl border border-white/12 bg-white/6 p-6 transition hover:z-20 hover:-translate-y-1 hover:bg-white/9 focus:outline-none focus-visible:z-20 focus-visible:-translate-y-1 focus-visible:bg-white/9 focus-visible:ring-2 focus-visible:ring-(--color-accent-light) ${isActiveService ? 'z-20 bg-white/9' : ''}`}
                  tabIndex={0}
                  aria-expanded={isActiveService}
                  onClick={() => openServicePhotos(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      openServicePhotos(index)
                    }
                  }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-30 block">
                    {servicePhotoSets[index % servicePhotoSets.length].map((photo, photoIndex) => (
                      <figure
                        key={`${service.title}-${photo}`}
                        className={`absolute left-1/2 top-2 h-[42vw] w-[58vw] -translate-x-1/2 translate-y-10 scale-75 overflow-hidden rounded-2xl border border-white/20 bg-black opacity-0 shadow-2xl shadow-black/40 transition duration-1000 ease-out sm:h-[clamp(6.75rem,13vw,10rem)] sm:w-[clamp(9rem,18vw,14rem)] sm:rounded-3xl group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 ${isActiveService ? 'opacity-100' : ''} ${servicePhotoClasses[photoIndex]}`}
                        style={{
                          transitionDelay: `${photoIndex * 55}ms`,
                          opacity: isActiveService ? 1 : undefined,
                          transform: isActiveService ? mobileServicePhotoTransforms[photoIndex] : undefined,
                        }}
                      >
                        <img
                          src={photo}
                          alt={`${service.title} example ${photoIndex + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </figure>
                    ))}
                  </div>

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-(--color-accent) text-lg font-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="pointer-events-none text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/25 sm:hidden">
                      tap me
                    </span>
                  </div>
                  <h3 className="relative z-10 mt-8 text-3xl font-black uppercase tracking-[-0.03em]">
                    {service.title}
                  </h3>
                  <p className="relative z-10 mt-4 leading-7 text-white/68">{service.text}</p>
                </article>
              </RevealSection>
            )
          })}
        </div>
        <RevealSection delay={0.12}>
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
        </RevealSection>
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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
      </div>
    </section>
  )
}
