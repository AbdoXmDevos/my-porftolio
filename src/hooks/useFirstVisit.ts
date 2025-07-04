"use client"

import { useState, useEffect } from 'react'

const FIRST_VISIT_KEY = 'portfolio_first_visit'

export const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem(FIRST_VISIT_KEY)
    
    if (hasVisited) {
      // User has visited before, skip loading screen
      setIsFirstVisit(false)
      setIsLoading(false)
    } else {
      // First visit, show loading screen
      setIsFirstVisit(true)
    }
  }, [])

  const markAsVisited = () => {
    // Mark as visited in localStorage
    localStorage.setItem(FIRST_VISIT_KEY, 'true')
    setIsFirstVisit(false)
    setIsLoading(false)
  }

  return {
    isFirstVisit,
    isLoading,
    markAsVisited
  }
}
