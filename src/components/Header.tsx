"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { Menu, X, BriefcaseBusiness } from "lucide-react"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { useTranslation } from "@/contexts/LanguageContext"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollToElement, scrollToTop } = useSmoothScroll()
  const { t } = useTranslation()

  const navItems = [
    { name: t.header.navigation.aboutMe, href: "#about" },
    { name: t.header.navigation.educationExperience, href: "#education" },
    { name: t.header.navigation.projects, href: "#projects" },
    { name: t.header.navigation.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about') as HTMLElement
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop
        const scrollPosition = window.scrollY + window.innerHeight * 0.3 // Show when 30% into the about section
        setIsVisible(scrollPosition >= aboutTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ['about', 'education', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200 // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`)
          return
        }
      }

      // If we're at the top, no section is active
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener('scroll', handleActiveSection)
    handleActiveSection() // Check initial position

    return () => window.removeEventListener('scroll', handleActiveSection)
  }, [])

  const scrollToSection = (href: string) => {
    scrollToElement(href, { duration: 10, offset: 80 })
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BriefcaseBusiness
            className="cursor-pointer h-8 w-8 text-amber-600"
            onClick={() => scrollToTop({ duration: 800 })}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative text-sm font-medium hover:text-amber-600 transition-colors ${
                activeSection === item.href ? 'text-amber-600' : ''
              }`}
              animate={{
                scale: activeSection === item.href ? 1.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {item.name}

              {/* Individual Animated Underline */}
              <AnimatePresence>
                {activeSection === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                    style={{ originX: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </nav>

        {/* Theme Toggle and Language Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isVisible && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-left text-sm font-medium hover:text-amber-600 transition-colors ${
                  activeSection === item.href ? 'text-amber-600' : ''
                }`}
                animate={{
                  scale: activeSection === item.href ? 1.05 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {item.name}

                {/* Individual Animated Underline for Mobile */}
                <AnimatePresence>
                  {activeSection === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-600 rounded-full"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }}
                      style={{ originX: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
            <div className="self-start flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
