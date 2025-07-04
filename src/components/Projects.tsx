"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe, Bot, Zap } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot Android App",
      description: "An intelligent Android application powered by OpenAI API that provides conversational AI capabilities with a beautiful, intuitive interface.",
      image: "🤖",
      technologies: ["Kotlin", "Android", "OpenAI API", "Retrofit", "Material Design"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "IntelliJ Plugin Generator",
      description: "A powerful tool that automates the creation of IntelliJ IDEA plugins, complete with templates, configurations, and best practices.",
      image: "🔧",
      technologies: ["Java", "IntelliJ Platform SDK", "Gradle", "Swing"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Development Tool",
      icon: <Zap className="h-5 w-5" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Event Manager Web App",
      description: "A comprehensive event management platform with real-time updates, user authentication, and responsive design for seamless event organization.",
      image: "📅",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web Application",
      icon: <Globe className="h-5 w-5" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "YouTube Spam Detection",
      description: "An NLP-powered machine learning model that automatically detects and filters spam comments on YouTube videos with high accuracy.",
      image: "🛡️",
      technologies: ["Python", "TensorFlow", "NLP", "Scikit-learn", "YouTube API"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Machine Learning",
      icon: <Bot className="h-5 w-5" />,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Coffee Shop Locator",
      description: "A React Native app that helps coffee enthusiasts find the best coffee shops nearby with reviews, ratings, and navigation features.",
      image: "☕",
      technologies: ["React Native", "Expo", "Google Maps API", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Portfolio Dashboard",
      description: "A modern, responsive portfolio website built with Next.js and ShadCN UI, featuring smooth animations and dark mode support.",
      image: "🎨",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Web Application",
      icon: <Globe className="h-5 w-5" />,
      color: "from-indigo-500 to-indigo-600"
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
            Featured <span className="text-amber-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to the tech community
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

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group-hover:border-amber-600 group-hover:text-amber-600 transition-colors"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-amber-600 hover:bg-amber-700"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
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
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These are just a few highlights from my portfolio. Check out my GitHub for more projects, 
                contributions, and open-source work.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700">
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
