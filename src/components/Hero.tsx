"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle } from "@/components/ui/language-toggle"
import { Instagram, Twitter, Github, Linkedin, Mouse, Download } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/contexts/LanguageContext"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <TooltipProvider delayDuration={100}>
      <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Starry Night Sky Effect */}
      <div className="stars-container">
        {/* Large Stars */}
        <div className="star star-large top-20 right-20" style={{ animationDelay: '0s' }}></div>
        <div className="star star-large bottom-32 left-16" style={{ animationDelay: '2s' }}></div>
        <div className="star star-large top-1/2 right-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="star star-large top-1/3 left-1/3" style={{ animationDelay: '1s' }}></div>
        <div className="star star-large bottom-1/4 right-1/3" style={{ animationDelay: '3s' }}></div>

        {/* Medium Stars */}
        <div className="star star-medium top-16 left-1/4" style={{ animationDelay: '0.5s' }}></div>
        <div className="star star-medium bottom-20 right-1/2" style={{ animationDelay: '2.5s' }}></div>
        <div className="star star-medium top-3/4 left-20" style={{ animationDelay: '1.5s' }}></div>
        <div className="star star-medium top-40 right-16" style={{ animationDelay: '3.5s' }}></div>
        <div className="star star-medium bottom-1/3 left-1/2" style={{ animationDelay: '4.5s' }}></div>
        <div className="star star-medium top-1/4 right-1/5" style={{ animationDelay: '0.8s' }}></div>

        {/* Small Stars */}
        <div className="star star-small top-24 left-1/5" style={{ animationDelay: '1.2s' }}></div>
        <div className="star star-small bottom-40 right-1/4" style={{ animationDelay: '2.8s' }}></div>
        <div className="star star-small top-1/2 left-1/6" style={{ animationDelay: '0.3s' }}></div>
        <div className="star star-small bottom-1/5 left-1/3" style={{ animationDelay: '3.2s' }}></div>
        <div className="star star-small top-2/3 right-1/6" style={{ animationDelay: '1.8s' }}></div>
        <div className="star star-small top-12 right-1/3" style={{ animationDelay: '4.2s' }}></div>
        <div className="star star-small bottom-16 left-1/4" style={{ animationDelay: '0.7s' }}></div>
        <div className="star star-small top-3/5 right-1/2" style={{ animationDelay: '2.3s' }}></div>
      </div>

      {/* Main Content Container with Orange Border */}
      <div className="absolute inset-2 md:inset-4 lg:inset-6 xl:inset-8 orange-border bg-card/50 backdrop-blur-md shadow-2xl">
        <div className="h-full flex">
          {/* Left Sidebar */}
          <div className="w-16 lg:w-20 flex flex-col items-center justify-between py-6 lg:py-8 border-r" style={{ borderColor: 'hsl(var(--orange))' }}>
            {/* Social Media Icons */}
            <div className="flex flex-col space-y-3 lg:space-y-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/AbdoXmDevos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 lg:p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Github className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/abdessamad-karimi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 lg:p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/abdo_karimii/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 lg:p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Instagram className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/AbdoXm23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 lg:p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Twitter className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary" />
              </motion.a>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex flex-col items-center space-y-2">
              <div className="w-px h-12 lg:h-16 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 lg:py-0 gap-8 lg:gap-32 xl:gap-40 2xl:gap-48 max-w-7xl mx-auto">
            {/* Profile Image Section - Shows first on mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative order-1 lg:order-2 flex-shrink-0"
            >
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 flex items-center justify-center profile-container">
                {/* Enhanced Glow Effect - Behind the image */}
                <div className="absolute inset-0 profile-glow -z-10"></div>

                {/* Main Profile Image */}
                <div className="relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden orange-border bg-gradient-to-br from-card to-muted shadow-2xl z-10">

                  {/* Your Profile Image - Replace with your actual image */}
                  <Image
                    src="/profile-image.jpeg"
                    alt="Abdessamad Karimi"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Fallback content */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl lg:text-8xl bg-gradient-to-br from-card to-muted" style={{ display: 'none' }}>
                    👨‍💻
                  </div>
                </div>

                {/* Floating Coffee Cup */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-12 h-12 lg:w-16 lg:h-16 glass-card rounded-lg flex items-center justify-center text-xl lg:text-2xl shadow-lg floating-element cursor-pointer"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      ☕
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.hero.tooltips.coffeeLover}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Floating Laptop */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        rotate: [0, -8, 8, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute -bottom-4 -left-6 lg:-bottom-6 lg:-left-8 w-12 h-12 lg:w-16 lg:h-16 glass-card rounded-lg flex items-center justify-center text-xl lg:text-2xl shadow-lg floating-element cursor-pointer"
                      whileHover={{ scale: 1.2, rotate: -15 }}
                    >
                      💻
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.hero.tooltips.technologyPassionate}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Floating Robot Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{
                        y: [0, -18, 0],
                        x: [0, 8, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute top-12 -left-8 lg:top-16 lg:-left-12 w-10 h-10 lg:w-14 lg:h-14 glass-card rounded-lg flex items-center justify-center text-lg lg:text-xl shadow-lg floating-element cursor-pointer"
                      whileHover={{ scale: 1.2, x: 10 }}
                    >
                      🤖
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.hero.tooltips.aiEnthusiast}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Floating Code Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 15, -15, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="absolute bottom-16 -right-8 lg:bottom-20 lg:-right-12 w-10 h-10 lg:w-12 lg:h-12 glass-card rounded-lg flex items-center justify-center text-sm lg:text-lg shadow-lg floating-element cursor-pointer"
                      whileHover={{ scale: 1.3, rotate: 25 }}
                    >
                      💡
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.hero.tooltips.creativeThinker}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Floating Gear Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        y: [0, -8, 0],
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                      }}
                      className="absolute top-24 -right-12 lg:top-32 lg:-right-16 w-8 h-8 lg:w-10 lg:h-10 glass-card rounded-lg flex items-center justify-center text-xs lg:text-sm shadow-lg floating-element cursor-pointer"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                    >
                      ⚙️
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.hero.tooltips.problemSolver}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Floating Cat Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        x: [0, -5, 0],
                        rotate: [0, -8, 8, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3,
                      }}
                      className="absolute top-40 -left-2 lg:top-48 lg:-left-6 w-10 h-10 lg:w-12 lg:h-12 glass-card rounded-lg flex items-center justify-center text-sm lg:text-lg shadow-lg floating-element cursor-pointer"
                      whileHover={{ scale: 1.2, rotate: 20 }}
                    >
                      🐱
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.hero.tooltips.catPerson}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-amber-600 opacity-20 blur-3xl rounded-full scale-110 -z-10"></div>
              </div>
            </motion.div>

            {/* Text Content Section - Shows second on mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-lg order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <span className="text-sm text-muted-foreground">— {t.hero.greeting}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {t.hero.name} <span className="text-amber-600">{t.hero.nameHighlight}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg text-muted-foreground mb-8"
              >
                {t.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                className="cursor-pointer bg-amber-600 hover:opacity-90 px-6 md:px-8 py-2 md:py-3 text-white font-medium"
                onClick={() => {
                  const aboutSection = document.querySelector('#about')
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                  {t.hero.buttons.whoAmI}
                </Button>

                <Button
                variant="outline"
                className="cursor-pointer bg-transparent border-2 text-white font-medium transition-all duration-300 flex items-center gap-2 px-6 md:px-8 py-2 md:py-3"
                style={{
                  borderColor: 'var(--color-amber-600)',
                  color: 'var(--color-amber-600)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-amber-600)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--color-amber-600)'
                }}
                onClick={() => {
                  // Add your resume download logic here
                  // For example: window.open('/resume.pdf', '_blank')
                  console.log('Download resume clicked')
                }}>
                  <Download className="h-4 w-4" />
                  {t.hero.buttons.downloadResume}
                </Button>
              </motion.div>
            </motion.div>


          </div>

          {/* Top Right Controls */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 flex items-center space-x-2">
            {/* Language Toggle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="glass-card hover:bg-primary/10 transition-colors"
            >
              <LanguageToggle variant="hero" />
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 md:p-2.5 lg:p-3 glass-card hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <ThemeToggle variant="icon-only" />
            </motion.div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={() => {
                const aboutSection = document.querySelector('#about')
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <Mouse className="h-6 w-6 text-primary/80 hover:text-primary transition-colors" />
              <div className="text-xs text-muted-foreground font-medium tracking-wider">
                SCROLL
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </TooltipProvider>
  )
}

export default Hero
