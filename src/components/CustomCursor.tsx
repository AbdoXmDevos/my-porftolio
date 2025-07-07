"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia('(hover: hover)').matches
    if (!hasHover) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isInitialized) {
        setIsInitialized(true)
      }
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Handle hover states for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer, [data-tooltip-trigger]')
      setIsHovering(!!isInteractive)
    }

    // Handle click states
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Hide default cursor
    document.body.style.cursor = 'none'
    document.documentElement.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)

      // Restore default cursor
      document.body.style.cursor = 'auto'
      document.documentElement.style.cursor = 'auto'
    }
  }, [])

  if (!isVisible || !isInitialized) return null

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
            isClicking
              ? 'border-amber-600 bg-amber-600/40 shadow-xl shadow-amber-600/50'
              : isHovering
                ? 'border-amber-600 bg-amber-600/20 shadow-lg shadow-amber-600/30'
                : 'border-gray-800 dark:border-gray-200 bg-gray-800/10 dark:bg-gray-200/10'
          }`}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div
          className={`w-1 h-1 rounded-full transition-all duration-200 ${
            isClicking
              ? 'bg-amber-600 shadow-md shadow-amber-600/60'
              : isHovering
                ? 'bg-amber-600 shadow-sm shadow-amber-600/50'
                : 'bg-gray-800 dark:bg-gray-200'
          }`}
        />
      </motion.div>

      {/* Outer glow ring for hover state */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: isClicking ? 0.9 : 1,
            opacity: 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.3,
          }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/5" />
        </motion.div>
      )}
    </>
  )
}

export default CustomCursor
