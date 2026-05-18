# Website Starting Template

This document serves as a blueprint for creating new websites using the same architecture, patterns, and conventions as the Complete Trade Solutions project. Give this file to the AI along with your company details (logo, colors, business type) to generate a new website.

---

## 1. Project Overview

**Tech Stack:**
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify

**Project Type:** Single-page application (SPA) with scroll-snap section navigation

---

## 2. Folder Structure Template

```
project-name/
├── index.html                    # Entry HTML file
├── package.json                  # Dependencies (see section 3)
├── vite.config.ts                # Vite + Tailwind config
├── netlify.toml                  # Netlify deployment config
├── tsconfig.app.json             # TypeScript app config
├── tsconfig.node.json            # TypeScript node config
├── eslint.config.js              # ESLint configuration
├── public/                       # Static assets (favicon, etc.)
└── src/
    ├── main.tsx                  # App entry point
    ├── App.tsx                   # Root component with intro logic
    ├── App.css                   # Legacy/global CSS (minimal)
    ├── index.css                 # Global styles, CSS variables, Tailwind
    ├── assets/                   # Images, videos, logos
    │   ├── hero-video.webm       # Desktop hero video
    │   ├── hero-video-mobile.webm # Mobile hero video
    │   ├── logo.png              # Company logo
    │   └── ...                   # Other images
    ├── components/               # UI Components (modular sections)
    │   ├── Hero.tsx              # Video background hero section
    │   ├── PillNav.tsx           # Fixed navigation bar
    │   ├── AboutSection.tsx      # About company section
    │   ├── ServicesOverview.tsx  # Services showcase
    │   ├── ContactUs.tsx         # Contact information
    │   ├── Footer.tsx            # Site footer
    │   └── animations/           # Reusable animation components
    │       ├── IntroAnimation.tsx
    │       ├── TypeWriter.tsx
    │       ├── RevealSection.tsx
    │       ├── RevealLine.tsx
    │       └── RevealImage.tsx
    ├── pages/                    # Page components
    │   └── HomePage.tsx          # Main landing page
    └── lib/                      # Utilities & configuration
        ├── site.ts               # Site content config
        └── colors.ts             # Color system
```

---

## 3. Package.json Dependencies

```json
{
  "name": "your-project-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "framer-motion": "^12.38.0",
    "lucide-react": "^1.14.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "tailwindcss": "^4.3.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12"
  }
}
```

---

## 4. Configuration Files

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### netlify.toml
```toml
[build]
command = "npm run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Your site description here" />
    <title>Your Company Name | Tagline</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 5. Styling Protocol

### Tailwind CSS v4 Setup

Tailwind v4 uses CSS-first configuration. Import in `index.css`:

```css
@import 'tailwindcss';
```

### CSS Variables System (index.css)

```css
@import 'tailwindcss';

:root {
  /* ── Brand colours ──────────────────────────────────────────────── */
  --color-primary:     #111111;   /* black - main text */
  --color-primary-rgb: 17, 17, 17;
  --color-secondary:   #3a3a3a;   /* dark grey */
  --color-accent:      #e85d04;   /* brand accent - CTAs, highlights */
  --color-background:  #f2f2f0;   /* light grey bg */
  --color-ink:         #111111;   /* body text */
  --color-muted:       #5c5c5c;   /* mid grey - secondary text */
  --color-line:        #dcdcda;   /* subtle borders */
  --color-surface:     #1c1c1c;   /* dark surfaces - nav bg */

  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
  color: var(--color-ink);
  background: var(--color-background);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

body {
  min-width: 320px;
  margin: 0;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

/* ── Custom utility classes ─────────────────────────────────────── */

.section-shell {
  width: min(1160px, calc(100% - 32px));
  margin-inline: auto;
}

.trade-grid {
  background-image:
    linear-gradient(
      rgba(var(--color-primary-rgb), 0.09) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(var(--color-primary-rgb), 0.09) 1px,
      transparent 1px
    );
  background-size: 44px 44px;
}

.logo-shadow {
  box-shadow: 0 18px 60px rgba(var(--color-primary-rgb), 0.18);
}

.service-ticker {
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 8%,
    #000 92%,
    transparent
  );
}

.service-ticker__track {
  animation: service-ticker-scroll 35s linear infinite;
}

.service-ticker:hover .service-ticker__track {
  animation-play-state: paused;
}

@keyframes service-ticker-scroll {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .service-ticker {
    overflow-x: auto;
    mask-image: none;
  }
  .service-ticker__track {
    animation: none;
  }
}
```

### Tailwind Usage Patterns

Use CSS variable syntax with Tailwind v4:

```tsx
// Background colors
className="bg-(--color-background)"
className="bg-(--color-accent)"

// Text colors
className="text-(--color-ink)"
className="text-(--color-muted)"

// Border colors
className="border-(--color-line)"
```

---

## 6. Color System (lib/colors.ts)

```typescript
export const colors = {
  primary: '#111111',
  primaryRgb: '17, 17, 17',
  secondary: '#3a3a3a',
  accent: '#e85d04',        // CHANGE THIS to brand accent
  ink: '#111111',
  muted: '#5c5c5c',
  background: '#f2f2f0',    // CHANGE THIS to brand bg
  surface: '#1c1c1c',
  line: '#dcdcda',
  yellow: '#FFDA03',
}

export const gradients = {
  heroOverlay: `linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12),
    rgba(58, 58, 58, 0.2) 48%,
    rgba(17, 17, 17, 0.72)
  )`,
}

export const colorVariables = {
  '--color-primary': colors.primary,
  '--color-primary-rgb': colors.primaryRgb,
  '--color-secondary': colors.secondary,
  '--color-accent': colors.accent,
  '--color-ink': colors.ink,
  '--color-muted': colors.muted,
  '--color-background': colors.background,
  '--color-surface': colors.surface,
  '--color-line': colors.line,
  '--hero-overlay': gradients.heroOverlay,
}

export function applyColorVariables() {
  Object.entries(colorVariables).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value)
  })
}
```

---

## 7. Site Configuration (lib/site.ts)

Centralize all content here:

```typescript
export const siteConfig = {
  name: 'Your Company Name',
  descriptor: 'Brief description of what you do',
  phone: '04XX XXX XXX',
  phoneHref: 'tel:+614XXXXXXXX',
  email: 'info@yourcompany.com',
  location: 'City, State, Country',
  serviceArea: 'Your service area description',
  facebookUrl: 'https://facebook.com/yourpage',
  
  // For typewriter effect in hero
  heroHeadline: [
    'Service One',
    'Service Two',
    'Service Three',
    'Service Four',
  ],
  
  tagline: 'Your compelling tagline here.',
}

export const serviceTickerItems = siteConfig.heroHeadline

export const services = [
  {
    title: 'Service One',
    text: 'Description of service one.',
  },
  {
    title: 'Service Two',
    text: 'Description of service two.',
  },
  {
    title: 'Service Three',
    text: 'Description of service three.',
  },
]

export const serviceTags = [
  'Tag one',
  'Tag two',
  'Tag three',
  'Tag four',
  'Tag five',
]
```

---

## 8. Component Architecture Patterns

### Page Structure (pages/HomePage.tsx)

Components are imported and composed in the page, NOT implemented inline:

```tsx
import AboutSection from '../components/AboutSection'
import ContactUs from '../components/ContactUs'
import Hero from '../components/Hero'
import PillNav from '../components/PillNav'
import ServicesOverview from '../components/ServicesOverview'

export default function HomePage() {
  return (
    <main id="top" className="bg-(--color-background)">
      <PillNav />
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <ContactUs />
    </main>
  )
}
```

### Section Component Pattern

Each section is a self-contained component with:
- Full viewport height: `h-svh` or `min-h-svh`
- Scroll snap: `snap-start`
- Section shell container: `section-shell`
- Background utilities as needed

Example structure:
```tsx
export default function Hero() {
  return (
    <section className="trade-grid relative h-svh snap-start pt-28">
      {/* Background layer */}
      <div className="absolute inset-0 ...">
        {/* Video or image */}
      </div>
      
      {/* Content layer */}
      <div className="section-shell relative ...">
        {/* Content here */}
      </div>
    </section>
  )
}
```

---

## 9. Animation Patterns (Framer Motion)

### RevealSection - Fade in on scroll
```tsx
import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  distance?: number      // Default: 48px
  delay?: number         // Default: 0
  threshold?: number     // Default: 0.12
}

export default function RevealSection({
  children, className, distance = 48, delay = 0, threshold = 0.12
}: Props) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { 
        opacity: 0, 
        y: distance, 
        clipPath: `inset(${distance}px 0 0 0)` 
      }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0px 0 0 0)' }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1], // easeOutQuart
      }}
    >
      {children}
    </motion.div>
  )
}
```

### TypeWriter - Rotating text effect
```tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  phrases: string[]
  typingSpeed?: number      // Default: 60ms
  deleteSpeed?: number      // Default: 30ms
  pauseDuration?: number    // Default: 2200ms
}

// Implementation: Type out text, pause, delete, move to next phrase
```

### Standard Animation Easing
```typescript
const easeOutQuart = [0.22, 1, 0.36, 1]
```

---

## 10. App.tsx Structure

Handles intro animation, meta tags, and schema:

```tsx
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import IntroAnimation from './components/animations/IntroAnimation'
import { siteConfig } from './lib/site'

function shouldShowIntro(): boolean {
  const navEntry = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming | undefined
  const navType = navEntry?.type
  const hasSeenIntro = sessionStorage.getItem('introPlayed')
  return navType === 'reload' || !hasSeenIntro
}

function App() {
  const [introActive, setIntroActive] = useState<boolean>(() => shouldShowIntro())

  function handleIntroComplete() {
    sessionStorage.setItem('introPlayed', 'true')
    setIntroActive(false)
  }

  useEffect(() => {
    // Set meta tags, Open Graph, canonical URL
    // Inject JSON-LD schema
  }, [])

  return (
    <>
      <AnimatePresence>
        {introActive && (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      {!introActive && (
        <>
          <HomePage />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
```

---

## 11. Required Components Checklist

Every project should have these components:

- [ ] `PillNav.tsx` - Fixed navigation with anchor links
- [ ] `Hero.tsx` - Video/image background hero
- [ ] `AboutSection.tsx` - Company info
- [ ] `ServicesOverview.tsx` - Services showcase
- [ ] `ContactUs.tsx` - Contact information
- [ ] `Footer.tsx` - Site footer
- [ ] `IntroAnimation.tsx` - Logo intro (optional but recommended)
- [ ] `TypeWriter.tsx` - For rotating hero text
- [ ] `RevealSection.tsx` - Scroll animations
- [ ] `RevealLine.tsx` - Text line reveals

---

## 12. Styling Conventions

### Typography
- Headlines: `font-black` with tight line-height `leading-[0.95]`
- Labels: `uppercase tracking-[0.12em]` with `font-black`
- Body: Default weight with `leading-7` or `leading-8`

### Spacing
- Sections: Full viewport `h-svh` with `snap-start`
- Container: `section-shell` (max 1160px, 16px gutters)
- Padding: Use `pt-28` for header clearance

### Borders & Shadows
- Large radius: `rounded-[28px]` for cards
- Medium radius: `rounded-2xl` or `rounded-full` for buttons
- Shadows: `logo-shadow` class for elevated elements

### Buttons
Primary CTA:
```tsx
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:opacity-90">
  Button Text
  <ArrowRight size={18} />
</a>
```

Secondary CTA:
```tsx
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-(--color-line) bg-white/80 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-(--color-ink) backdrop-blur-sm transition hover:bg-white">
  Button Text
</a>
```

---

## 13. What to Provide for a New Project

When requesting a new website, provide the following:

### Required:
1. **Company name** - Full business name
2. **Business type** - What services/products you offer
3. **Logo** - PNG/SVG format (transparent background preferred)
4. **Color scheme** - Primary accent color, background preference (light/dark)
5. **Tagline** - Short compelling description
6. **Services** - List of main services (3-7 items)
7. **Contact info** - Phone, email, location/service area
8. **Social links** - Facebook, Instagram, LinkedIn (if applicable)

### Optional but helpful:
9. **Hero video** - Background video (desktop + mobile versions if possible)
10. **Hero images** - If no video, provide hero background images
11. **Service images** - Photos showcasing your work
12. **About text** - Company description/background
13. **Testimonials** - Customer quotes/reviews
14. **Domain name** - For canonical URLs and SEO

### Example submission:
```
Company: ABC Landscaping
Business Type: Residential and commercial landscaping, garden design, maintenance
Logo: attached abc-logo.png
Colors: Primary green #2d5a27, earthy tones preferred
Tagline: "Transforming outdoor spaces into living art"
Services: Garden Design, Lawn Maintenance, Tree Services, Irrigation, Hardscaping
Phone: 0412 345 678
Email: hello@abclandscaping.com.au
Location: Sydney, NSW
Facebook: https://facebook.com/abclandscaping
```

---

## 14. Deployment Notes

1. **Build output:** `dist/` directory
2. **SPA routing:** Netlify.toml handles client-side routing
3. **Environment variables:** Use `.env` file with `VITE_SITE_URL` for SEO
4. **Images:** Place in `src/assets/` for processing or `public/` for static
5. **Videos:** Use `public/` folder for large video files

---

## Summary

This template creates:
- Single-page React app with scroll-snap navigation
- Tailwind CSS v4 with CSS variable theming
- Component-based architecture (sections imported into HomePage)
- Framer Motion animations with reduced-motion support
- SEO-ready with dynamic meta tags and JSON-LD schema
- Mobile-responsive design
- Professional intro animation
- Contact-focused CTAs
- Netlify deployment ready

**Remember:** Always modify the color scheme in `lib/colors.ts` and content in `lib/site.ts` for each new project.
