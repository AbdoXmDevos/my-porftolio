"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Technologies = () => {
  const techCategories = [
    {
      title: "Languages",
      icon: "💻",
      technologies: [
        { name: "JavaScript", icon: "🟨", level: 90 },
        { name: "TypeScript", icon: "🔷", level: 85 },
        { name: "Kotlin", icon: "🟣", level: 80 },
        { name: "Java", icon: "☕", level: 85 },
        { name: "Python", icon: "🐍", level: 75 },
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "Next.js", icon: "⚫", level: 90 },
        { name: "React", icon: "⚛️", level: 90 },
        { name: "Tailwind CSS", icon: "🎨", level: 85 },
        { name: "ShadCN UI", icon: "🎭", level: 80 },
        { name: "Material UI", icon: "🎯", level: 75 },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Spring Boot", icon: "🍃", level: 85 },
        { name: "Express.js", icon: "🚀", level: 80 },
        { name: "Node.js", icon: "🟢", level: 80 },
      ]
    },
    {
      title: "Mobile",
      icon: "📱",
      technologies: [
        { name: "Android (Kotlin)", icon: "🤖", level: 85 },
        { name: "React Native", icon: "📱", level: 75 },
        { name: "Expo", icon: "⚡", level: 70 },
      ]
    },
    {
      title: "Testing & DevOps",
      icon: "🔧",
      technologies: [
        { name: "JUnit", icon: "✅", level: 80 },
        { name: "Mockito", icon: "🎭", level: 75 },
        { name: "Katalon", icon: "🧪", level: 70 },
        { name: "Docker", icon: "🐳", level: 75 },
        { name: "GitHub Actions", icon: "🔄", level: 70 },
        { name: "Git", icon: "📝", level: 90 },
      ]
    },
    {
      title: "AI & LLMs",
      icon: "🤖",
      technologies: [
        { name: "Gemini", icon: "💎", level: 75 },
        { name: "ChatGPT", icon: "🧠", level: 80 },
        { name: "OpenAI API", icon: "🔮", level: 75 },
      ]
    }
  ]

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950/50 dark:to-gray-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-amber-600">Technologies</span> & Skills
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="font-medium">{tech.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) + 0.2 }}
                              viewport={{ once: true }}
                              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-8">
                            {tech.level}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
