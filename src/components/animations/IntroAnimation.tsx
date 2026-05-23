import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'
import stormVideo from '../../assets/Storm.mp4'
import lightningVideo from '../../assets/LotsOfLightning.mp4'

interface Props {
  onComplete: () => void
}

// Phases:
//  0 = storm only
//  1 = logo fading in
//  2 = logo holding
//  3 = lightning burst (brightens screen)
//  4 = white flash → reveal main page
export default function IntroAnimation({ onComplete }: Props) {
  const [phase, setPhase] = useState(0)
  const lightningRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const timers: number[] = []

    timers.push(window.setTimeout(() => setPhase(1), 600))   // logo fades in
    timers.push(window.setTimeout(() => setPhase(2), 1800))  // hold
    timers.push(window.setTimeout(() => {                    // lightning
      setPhase(3)
      lightningRef.current?.play().catch(() => {})
    }, 3800))
    timers.push(window.setTimeout(() => setPhase(4), 5300))  // white flash
    timers.push(window.setTimeout(onComplete,       6100))   // done

    return () => { timers.forEach((t) => window.clearTimeout(t)) }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Storm background ─────────────────────────────────────────── */}
      <video
        src={stormVideo}
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ── Logo ─────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 grid place-items-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{
          opacity: phase >= 1 ? 1 : 0,
          scale:   phase >= 1 ? 1 : 0.92,
        }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={logo}
          alt="National Roofing Solutions"
          className="logo-shadow h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56 md:h-72 md:w-72"
        />
      </motion.div>

      {/* ── Lightning burst (covers everything when active) ──────────── */}
      {phase >= 2 && (
        <motion.video
          ref={lightningRef}
          src={lightningVideo}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 3 ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeIn' }}
        />
      )}

      {/* ── White flash → fades to reveal main page ──────────────────── */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 4 ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </motion.div>
  )
}
