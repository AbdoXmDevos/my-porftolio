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
      const heroSection = document.querySelector('section') as HTMLElement // First section (Hero)
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + 100 // Show when scrolled 100px past hero
        setIsVisible(scrollPosition >= heroBottom)
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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md transition-transform duration-300 hidden md:block ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BriefcaseBusiness
            className="cursor-pointer h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-amber-600 hover:scale-110 transition-transform"
            onClick={() => scrollToTop({ duration: 800 })}
          />
          <span className="hidden sm:block text-lg font-semibold text-amber-600">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative text-sm xl:text-base font-medium hover:text-amber-600 transition-colors px-2 py-1 rounded-md ${
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

        {/* Desktop Theme Toggle and Language Toggle */}
        <div className="hidden lg:flex items-center space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Tablet Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Tablet Theme and Language toggles */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Tablet Menu Button */}
          <motion.div
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>



      {/* Tablet Navigation - Dropdown from header */}
      <AnimatePresence>
        {isMenuOpen && isVisible && (
          <motion.div
            className="hidden md:block lg:hidden bg-background border-t shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-base font-medium hover:text-amber-600 transition-colors py-3 px-4 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/20 ${
                      activeSection === item.href ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/20' : ''
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {activeSection === item.href && (
                        <motion.div
                          className="w-2 h-2 bg-amber-600 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
