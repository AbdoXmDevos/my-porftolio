"use client"

import { AnimatePresence } from "framer-motion"
import { useFirstVisit } from "@/hooks/useFirstVisit"
import LoadingScreen from "@/components/LoadingScreen"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Technologies from "@/components/Technologies"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

const ClientWrapper = () => {
  const { isFirstVisit, isLoading, markAsVisited } = useFirstVisit()

  const handleLoadingComplete = () => {
    markAsVisited()
  }

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isFirstVisit && isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <div key="main">
            <Header />
            <main>
              <Hero />
              <About />
              <Technologies />
              <Education />
              <Projects />
              <Contact />
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ClientWrapper
