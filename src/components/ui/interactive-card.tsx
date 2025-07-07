"use client"

import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { useMousePosition } from '@/hooks/useMousePosition'

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
}

export const InteractiveCard = ({ children, className = '' }: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { mousePosition, isHovered } = useMousePosition(cardRef)

  const calculateSkew = () => {
    if (!cardRef.current || !isHovered) return { rotateX: 0, rotateY: 0 }
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (mousePosition.y - centerY) / centerY * -10 // Max 10 degrees
    const rotateY = (mousePosition.x - centerX) / centerX * 10   // Max 10 degrees
    
    return { rotateX, rotateY }
  }

  const { rotateX, rotateY } = calculateSkew()

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ease-out ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transformStyle: 'preserve-3d'
      }}
    >

      
      <Card className={`relative z-10 transition-all duration-300 h-full flex flex-col ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}>
        {children}
      </Card>
    </div>
  )
}
