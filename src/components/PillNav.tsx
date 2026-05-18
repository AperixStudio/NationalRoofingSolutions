import logo from '../assets/logo.png'
import { siteConfig } from '../lib/site'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function PillNav() {
  return (
    <header className="fixed left-0 right-0 top-4 z-40 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-white/20 bg-(--color-surface)/88 px-3 py-2 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt={siteConfig.name}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="hidden text-xs font-black uppercase tracking-[0.2em] sm:inline">
            National Roofing
          </span>
        </a>

        <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] sm:text-xs">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-3 transition hover:bg-white/12 sm:px-4"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
