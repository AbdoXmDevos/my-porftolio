"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { languages, Language } from "@/translations"
import { useState } from "react"

interface LanguageToggleProps {
  variant?: "default" | "hero"
}

export function LanguageToggle({ variant = "default" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === language)
  const otherLanguages = languages.filter(lang => lang.code !== language)

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant={variant === "hero" ? "ghost" : "outline"}
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative ${
          variant === "hero"
            ? "p-2 md:p-2.5 lg:p-3 bg-transparent border-none hover:bg-primary/10"
            : ""
        }`}
        aria-label="Toggle language"
      >
        <Languages className={variant === "hero" ? "h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" : "h-4 w-4"} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-12 z-50 min-w-[120px] rounded-md border bg-background dark:bg-background p-1 text-foreground shadow-lg backdrop-blur-sm"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex w-full items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                    language === lang.code ? 'bg-accent text-accent-foreground font-medium' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-amber-600 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
