"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["Welcome", "Bienvenue", "مرحبا"]

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 2000) // Show for 2 seconds

    return () => clearTimeout(timer)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 650) // Change word every 650ms (2000ms / 3 words ≈ 650ms each)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="floating-cube top-20 right-20 opacity-30"></div>
        <div className="floating-cube bottom-32 left-16 opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-cube top-1/2 right-1/4 opacity-15" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="text-center">
        {/* Welcome Text with Waving Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            key={currentWordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-8xl font-bold loading-text-gradient mb-4"
          >
            {words[currentWordIndex]}
          </motion.h1>
          
          {/* Waving Hand */}
          <motion.div
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="text-6xl md:text-8xl inline-block"
          >
            👋
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          I'm Abdessamad Karimi
        </motion.p>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-3 h-3 bg-primary rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-orange-500"
      />
    </motion.div>
  )
}

export default LoadingScreen
