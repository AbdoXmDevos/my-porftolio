"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe, Bot, Zap, AppWindow, Ticket } from "lucide-react"
import { useTranslation } from "@/contexts/LanguageContext"

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t.projects.items.cleverbotAi.title,
      description: t.projects.items.cleverbotAi.description,
      image: "🤖",
      technologies: ["Kotlin", "Android", "OpenAI API", "Firebase", "Material Design"],
      githubUrl: "https://github.com/AbdoXmDevos/Cleverbot-Android-App",
      category: t.projects.items.cleverbotAi.category,
      icon: <Smartphone className="h-5 w-5" />,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: t.projects.items.connectAi.title,
      description: t.projects.items.connectAi.description,
      image: "👨‍💻",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn UI"],
      githubUrl: "https://github.com/AbdoXmDevos/ai-social-app-front",
      category: t.projects.items.connectAi.category,
      icon: <AppWindow className="h-5 w-5" />,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: t.projects.items.evently.title,
      description: t.projects.items.evently.description,
      image: "🎫",
      technologies: ["NextJS", "TypeScript","Java", "Spring Boot", "Cloudinary", "Redis"],
      githubUrl: "https://github.com/AbdoXmDevos/event-manager-front",
      category: t.projects.items.evently.category,
      icon: <Ticket className="h-5 w-5" />,
      color: "from-amber-500 to-amber-600",
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950/50 dark:to-gray-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardHeader className="relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.image}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:border-orange-400 group-hover:text-orange-400 hover:text-orange-300 transition-colors"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {t.projects.buttons.viewCode}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-700/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t.projects.github.title}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t.projects.github.description}
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => window.open("https://github.com/AbdoXmDevos", '_blank')}>
                <Github className="h-4 w-4 mr-2" />
                {t.projects.github.button}
              </Button>
            </CardContent>
          </Card>
        </motion.div>


      </div>
    </section>
  )
}

export default Projects
