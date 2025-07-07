import { useCallback } from 'react'

interface SmoothScrollOptions {
  duration?: number
  offset?: number
  easing?: (t: number) => number
}

// Easing functions for smooth animation
const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuart: (t: number): number => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
}

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    target: string | HTMLElement,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 800,
      offset = 80, // Account for fixed header
      easing = easingFunctions.easeInOutCubic
    } = options

    const targetElement = typeof target === 'string' 
      ? document.querySelector(target) as HTMLElement
      : target

    if (!targetElement) return

    const startPosition = window.pageYOffset
    const targetPosition = targetElement.offsetTop - offset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      const easedProgress = easing(progress)
      const currentPosition = startPosition + (distance * easedProgress)
      
      window.scrollTo(0, currentPosition)
      
      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  const scrollToTop = useCallback((options: SmoothScrollOptions = {}) => {
    const {
      duration = 600,
      easing = easingFunctions.easeOutQuart
    } = options

    const startPosition = window.pageYOffset
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      const easedProgress = easing(progress)
      const currentPosition = startPosition * (1 - easedProgress)
      
      window.scrollTo(0, currentPosition)
      
      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  return { scrollToElement, scrollToTop }
}
