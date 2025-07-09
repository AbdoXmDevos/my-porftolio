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
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Description Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800 h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    👋 {t.about.greeting}
                  </h3>
                  <p className="text-center text-muted-foreground mb-6 text-lg">
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
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-center mb-4">{t.about.sections.qualities}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {professionalQualities.map((quality, index) => (
                        <motion.div
                          key={quality.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-black/30 hover:bg-white/80 dark:hover:bg-black/40 transition-colors"
                        >
                          <div className="flex-shrink-0 mt-1">
                            {quality.icon}
                          </div>
                          <div>
                            <h5 className="font-semibold mb-1 text-sm">{quality.title}</h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">{quality.description}</p>
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
              <Card className="p-8 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200 dark:border-gray-800 h-full">
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold mb-6 text-center">{t.about.sections.skills}</h4>

                  <div className="grid grid-cols-1 gap-6">
                    {skillCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-lg bg-white/60 dark:bg-black/30 hover:bg-white/80 dark:hover:bg-black/40 transition-colors"
                      >
                        <h5 className="font-semibold mb-3 text-center">{category.title}</h5>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {category.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs bg-background border border-border rounded-md text-foreground hover:bg-muted transition-colors"
                            >
                              {skill}
                            </span>
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
