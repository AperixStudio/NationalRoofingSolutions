import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import heroBg from './assets/HeroBackground.mp4'
import Footer from './components/Footer'
import IntroAnimation from './components/animations/IntroAnimation'
import { applyColorVariables } from './lib/colors'
import { siteConfig } from './lib/site'
import HomePage from './pages/HomePage'

function shouldShowIntro(): boolean {
  const hasSeenIntro = sessionStorage.getItem('introPlayed')

  return !hasSeenIntro
}

function App() {
  const [introActive, setIntroActive] = useState<boolean>(() => shouldShowIntro())

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem('introPlayed', 'true')
    setIntroActive(false)
  }, [])

  useEffect(() => {
    applyColorVariables()
    document.title = `${siteConfig.name} | ${siteConfig.tagline}`

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      name: siteConfig.name,
      description: siteConfig.descriptor,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      areaServed: siteConfig.serviceArea,
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <video
          src={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <HomePage />
      <Footer />
      <AnimatePresence>
        {introActive && (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
