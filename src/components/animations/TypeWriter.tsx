import { useEffect, useMemo, useState } from 'react'

interface Props {
  phrases: string[]
  typingSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export default function TypeWriter({
  phrases,
  typingSpeed = 70,
  deleteSpeed = 36,
  pauseDuration = 1800,
}: Props) {
  const safePhrases = useMemo(
    () => (phrases.length > 0 ? phrases : ['Roofing']),
    [phrases],
  )
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visibleText, setVisibleText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = safePhrases[phraseIndex]
    const isComplete = visibleText === currentPhrase
    const isEmpty = visibleText === ''

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && isComplete) {
          setIsDeleting(true)
          return
        }

        if (isDeleting && isEmpty) {
          setIsDeleting(false)
          setPhraseIndex((current) => (current + 1) % safePhrases.length)
          return
        }

        const nextLength = visibleText.length + (isDeleting ? -1 : 1)
        setVisibleText(currentPhrase.slice(0, nextLength))
      },
      isComplete && !isDeleting ? pauseDuration : isDeleting ? deleteSpeed : typingSpeed,
    )

    return () => window.clearTimeout(timeout)
  }, [
    deleteSpeed,
    isDeleting,
    pauseDuration,
    phraseIndex,
    safePhrases,
    typingSpeed,
    visibleText,
  ])

  return (
    <span aria-label={safePhrases[phraseIndex]}>
      {visibleText}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-(--color-accent-light)" />
    </span>
  )
}
