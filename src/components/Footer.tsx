import logo from '../assets/logo.png'
import { siteConfig } from '../lib/site'
import { motion, useReducedMotion } from 'framer-motion'
import aperixLogo from '../assets/aperix-logo.svg'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const prefersReduced = useReducedMotion()

  return (
    <footer className="snap-start bg-transparent px-4 pb-10 pt-6 text-white">
      <div className="mx-auto mb-4 flex max-w-6xl justify-center">
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white/80 backdrop-blur transition hover:bg-white/18 hover:text-white"
        >
          <ArrowUp size={13} />
          Back to Top
        </a>
      </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-4xl border border-white/12 bg-white/5 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt={siteConfig.name}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="font-black uppercase tracking-[0.16em]">
              {siteConfig.name}
            </p>
            {/*<p className="mt-1 text-sm text-white/58">{siteConfig.tagline}</p>*/}
                <p className="mt-1 text-sm font-semibold text-white/58">
              {siteConfig.serviceArea}
            </p>
          </div>
        </div>

        <a
          href="https://aperixstudio.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Built by Aperix"
          className="flex w-24 flex-col items-center justify-center gap-1 self-center text-center text-white/55 transition hover:text-white"
        >
          <motion.span
            className="grid h-7 w-7 place-items-center"
            animate={prefersReduced ? undefined : { rotate: 360 }}
            transition={
              prefersReduced
                ? undefined
                : { duration: 5, ease: 'linear', repeat: Infinity }
            }
          >
            <img
              src={aperixLogo}
              alt=""
              aria-hidden="true"
              className="h-7 w-7"
            />
          </motion.span>
          <span className="block w-full text-center text-[10px] font-bold uppercase leading-none tracking-[0.08em] text-white">
            Built by Aperix
          </span>
        </a>
      </div>
    </footer>
  )
}
