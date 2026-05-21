import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import Footer from './components/Footer'
import IntroAnimation from './components/animations/IntroAnimation'
import { applyColorVariables } from './lib/colors'
import { siteConfig } from './lib/site'
import HomePage from './pages/HomePage'

function shouldShowIntro(): boolean {
  const navEntry = performance.getEntriesByType(
    'navigation',
  )[0] as PerformanceNavigationTiming | undefined
  const navType = navEntry?.type
  const hasSeenIntro = sessionStorage.getItem('introPlayed')

  return navType === 'reload' || !hasSeenIntro
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
