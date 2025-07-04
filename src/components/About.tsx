"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Code, Heart } from "lucide-react"

const About = () => {
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed mb-6">
                  Hello! I&apos;m Abdessamad, a passionate software developer with a love for creating
                  elegant solutions to complex problems. My journey in technology is fueled by 
                  curiosity and powered by coffee.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I specialize in full-stack development, with expertise in modern web technologies, 
                  mobile development, and AI integration. I believe that great code is not just 
                  functional, but also clean, maintainable, and scalable.
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                  open-source projects, or enjoying a perfectly brewed cup of coffee while 
                  brainstorming the next big idea.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Content - Animated Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
              >
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable and scalable solutions
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
              >
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Driven by curiosity and love for technology
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 col-span-2"
              >
                <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Coffee Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Every great idea starts with a great cup of coffee
                </p>
              </motion.div>
            </div>

            {/* Floating Coffee Beans Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 text-2xl opacity-30"
            >
              🫘
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-4 -left-4 text-xl opacity-30"
            >
              🫘
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
