import { useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'

interface Props {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: Props) {
  useEffect(() => {
    const timeout = window.setTimeout(onComplete, 1650)
    return () => window.clearTimeout(timeout)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-(--color-surface)"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <motion.img
        src={logo}
        alt="National Roofing Solutions"
        className="h-44 w-44 rounded-full object-cover logo-shadow sm:h-56 sm:w-56"
        initial={{ opacity: 0, scale: 0.84, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}
