import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { siteConfig } from '../lib/site'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  )
}

export default function PillNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-4 z-40 px-4">
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-white/20 bg-(--color-surface)/88 px-3 py-2 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt={siteConfig.name}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.16em] sm:text-xs sm:tracking-[0.2em]">
            NATIONAL ROOFING SOLUTIONS
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
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
          <a
            href={siteConfig.facebookUrl}
            aria-label={`${siteConfig.name} on Facebook`}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg shadow-blue-950/20 transition hover:brightness-110"
          >
            <FacebookIcon />
          </a>
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call ${siteConfig.phone}`}
            className="grid h-11 w-11 place-items-center rounded-full bg-(--color-accent) text-white shadow-lg shadow-blue-950/20 transition hover:brightness-110"
          >
            <Phone size={18} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/16 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] rounded-3xl border border-white/14 bg-(--color-surface)/96 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl md:hidden">
            <div className="grid gap-1 text-xs font-black uppercase tracking-[0.14em]">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 transition hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#1877F2] px-4 py-3 text-white transition hover:brightness-110"
                onClick={() => setMenuOpen(false)}
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-4 py-3 text-white transition hover:brightness-110"
                onClick={() => setMenuOpen(false)}
              >
                <Phone size={17} />
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
