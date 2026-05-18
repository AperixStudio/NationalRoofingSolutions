import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
  threshold?: number
}

export default function RevealSection({
  children,
  className,
  delay = 0,
  distance = 42,
  threshold = 0.18,
}: Props) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
