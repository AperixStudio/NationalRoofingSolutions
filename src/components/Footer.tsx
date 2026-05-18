import logo from '../assets/logo.png'
import { siteConfig } from '../lib/site'

export default function Footer() {
  return (
    <footer className="snap-start bg-(--color-surface) px-4 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] border border-white/12 bg-white/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
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
            <p className="mt-1 text-sm text-white/58">{siteConfig.tagline}</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-white/58">
          {siteConfig.location} • {siteConfig.serviceArea}
        </p>
      </div>
    </footer>
  )
}
