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

  // Removed skew calculation - keeping only scale effect

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ease-out ${className}`}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)'
      }}
    >

      
      <Card className={`relative z-10 transition-all duration-300 h-full flex flex-col ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`}>
        {children}
      </Card>
    </div>
  )
}
