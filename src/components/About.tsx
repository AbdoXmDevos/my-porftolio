"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coffee, Code, ArrowDown, Cat, Gamepad2, Lightbulb, Shield, Zap, Layers } from "lucide-react"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"

const About = () => {
  const { scrollToElement } = useSmoothScroll()

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-amber-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Section Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Quick facts about me and what makes me tick as a developer 🚀
          </p>
        </motion.div>

        {/* Unified Info & Qualities Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800 relative overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                  👋 Hey there! I'm Abdessamad
                </h3>
                <p className="text-lg text-muted-foreground">
                  Fresh graduate • Full-stack developer • Problem solver
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Personal Info */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-200 dark:border-amber-800 shadow-sm mb-4">
                      📝 About Me
                    </span>
                  </motion.div>

                  {/* Fun Facts Grid */}
                  <div className="grid grid-cols-1 gap-3">
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/60 dark:bg-black/30 border border-white/40 dark:border-gray-700/40"
                    >
                      <Coffee className="h-6 w-6 text-amber-600" />
                      <div>
                        <span className="font-medium text-sm">Coffee Lover</span>
                        <p className="text-xs text-muted-foreground">Every great idea starts with great coffee</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/60 dark:bg-black/30 border border-white/40 dark:border-gray-700/40"
                    >
                      <Gamepad2 className="h-6 w-6 text-purple-600" />
                      <div>
                        <span className="font-medium text-sm">Gaming Enthusiast</span>
                        <p className="text-xs text-muted-foreground">Strategic thinking through gaming</p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/60 dark:bg-black/30 border border-white/40 dark:border-gray-700/40"
                    >
                      <Cat className="h-6 w-6 text-orange-600" />
                      <div>
                        <span className="font-medium text-sm">Cat Person 🐱</span>
                        <p className="text-xs text-muted-foreground">Cats teach patience and debugging skills</p>
                      </div>
                    </motion.div>
                  </div>

                </div>

                {/* Right Side - Qualities */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-right"
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-200 dark:border-amber-800 shadow-sm mb-4">
                      ⚡ Technical Qualities
                    </span>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800"
                    >
                      <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">Full-Stack Developer</h3>
                      <p className="text-xs text-muted-foreground">
                        Frontend to backend mastery
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 rounded-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border border-red-200 dark:border-red-800"
                    >
                      <Shield className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">Security Minded</h3>
                      <p className="text-xs text-muted-foreground">
                        Secure coding practices
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border border-green-200 dark:border-green-800"
                    >
                      <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">Performance Focused</h3>
                      <p className="text-xs text-muted-foreground">
                        Optimized & efficient code
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border border-purple-200 dark:border-purple-800"
                    >
                      <Layers className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">System Architecture</h3>
                      <p className="text-xs text-muted-foreground">
                        Scalable system design
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* What I Specialize In - Full Width Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 pt-8 border-t border-amber-200 dark:border-amber-800"
              >
                <div className="text-center mb-6">
                  <h4 className="font-medium text-amber-700 dark:text-amber-300 flex items-center justify-center gap-2 text-base">
                    <Lightbulb className="h-5 w-5" />
                    What I specialize in
                  </h4>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Web Development',
                    'Mobile Apps',
                    'AI Integration',
                    'Open Source',
                    'System Design',
                    'Secure Solutions',
                    'Team Player'
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </CardContent>

            {/* Fun Floating Elements */}
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
              className="absolute -top-6 -right-6 text-2xl opacity-40"
            >
              ☕
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 -right-8 text-xl opacity-30"
            >
              🐱
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-4 -left-6 text-lg opacity-35"
            >
              🎮
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-1/3 -right-4 text-sm opacity-25"
            >
              💡
            </motion.div>
          </Card>
        </motion.div>

        {/* Discover Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
          variant="outline"
          style={{
            borderColor: 'hsl(var(--orange))',
            color: 'hsl(var(--orange))',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F46223'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = 'hsl(var(--orange))'
          }}
            onClick={() => scrollToElement('#projects', { duration: 1000, offset: 80 })}
            className="bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <ArrowDown className="h-5 w-5 mr-2" />
            Check out my work 🚀
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
