"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Zap, Target, Users } from "lucide-react"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { useTranslation } from "@/contexts/LanguageContext"

const About = () => {
  const { scrollToElement } = useSmoothScroll()
  const { t } = useTranslation()

  const professionalQualities = [
    {
      icon: <Code className="h-5 w-5 text-amber-600" />,
      title: t.about.qualities.cleanCodeAdvocate.title,
      description: t.about.qualities.cleanCodeAdvocate.description
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-600" />,
      title: t.about.qualities.performanceFocused.title,
      description: t.about.qualities.performanceFocused.description
    },
    {
      icon: <Target className="h-5 w-5 text-amber-600" />,
      title: t.about.qualities.problemSolver.title,
      description: t.about.qualities.problemSolver.description
    },
    {
      icon: <Users className="h-5 w-5 text-amber-600" />,
      title: t.about.qualities.teamCollaborator.title,
      description: t.about.qualities.teamCollaborator.description
    }
  ]

  const skillCategories = [
    {
      title: t.about.skillCategories.frontend,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Angular", "Shadcn UI"]
    },
    {
      title: t.about.skillCategories.backend,
      skills: ["Java", "Spring Boot", "Python", "Node.js"]
    },
    {
      title: t.about.skillCategories.mobile,
      skills: ["React Native", "Kotlin", "Swift", "Jetpack Compose"]
    },
    {
      title: t.about.skillCategories.database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase","Firebase"]
    },
    {
      title: t.about.skillCategories.aiMl,
      skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Jupyter","Huggingface","Kaggle"]
    },
    {
      title: t.about.skillCategories.devops,
      skills: ["Docker", "Azure", "Git", "GitHub", "Jenkins", "Vercel"]
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950/50 dark:to-gray-950/50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t.about.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-orange-600 mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Left Side - Description Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800 h-full">
                <CardContent className="p-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                    👋 {t.about.greeting}
                  </h3>
                  <p className="text-center text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg">
                    {t.about.subtitle}
                  </p>

                  <div className="text-center space-y-4 mb-8">
                    <h4 className="text-lg font-semibold mb-4">{t.about.sections.description}</h4>
                    <p className="text-muted-foreground leading-relaxed text-left">
                      {t.about.description.paragraph1}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-left">
                      {t.about.description.paragraph2}
                    </p>
                  </div>

                  {/* Professional Qualities */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4">{t.about.sections.qualities}</h4>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      {professionalQualities.map((quality, index) => (
                        <motion.div
                          key={quality.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-white/60 dark:bg-black/30 hover:bg-white/80 dark:hover:bg-black/40 transition-colors"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {quality.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h5 className="font-semibold mb-1 text-sm sm:text-base">{quality.title}</h5>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{quality.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side - Skills & Technologies Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200 dark:border-gray-800 h-full">
                <CardContent className="p-0">
                  <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-center">{t.about.sections.skills}</h4>

                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    {skillCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-3 sm:p-4 rounded-lg bg-white/60 dark:bg-black/30 hover:bg-white/80 dark:hover:bg-black/40 transition-colors"
                      >
                        <h5 className="font-semibold mb-2 sm:mb-3 text-center text-sm sm:text-base">{category.title}</h5>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                          {category.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-background border border-border rounded-md text-foreground hover:bg-muted transition-colors cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
