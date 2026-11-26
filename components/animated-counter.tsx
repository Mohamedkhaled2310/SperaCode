'use client'

import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: string
  duration?: number
}

export function AnimatedCounter({ value, duration = 1600 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0')
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // If value contains non-numeric like "24/7", display directly
    const numericMatch = value.match(/\d+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNumber = parseInt(numericMatch[0], 10)
    const suffix = value.replace(/\d+/, '') // e.g. "+" or "%"

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          const startTime = performance.now()

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)
            // Ease out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3)
            const currentCount = Math.floor(easeOutProgress * targetNumber)

            setDisplayValue(`${currentCount}${suffix}`)

            if (progress < 1) {
              requestAnimationFrame(updateCounter)
            } else {
              setDisplayValue(value)
            }
          }

          requestAnimationFrame(updateCounter)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={elementRef}>{displayValue}</span>
}
