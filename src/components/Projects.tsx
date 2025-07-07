"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe, Bot, Zap, Eye, AppWindow, Ticket, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: "Cleverbot Ai",
      description: "An intelligent Android application powered by OpenAI API that provides conversational AI capabilities with a beautiful, intuitive interface.",
      image: "🤖",
      technologies: ["Kotlin", "Android", "OpenAI API", "Firebase", "Material Design"],
      githubUrl: "#",
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      color: "from-blue-500 to-blue-600",
      imagesLink: []
    },
    {
      title: "ConnectAI",
      description: "A platform that connects you with AI tool creators, where you can share insights, react to innovations, learn about emerging technologies, and grow your network.",
      image: "👨‍💻",
      technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn UI"],
      githubUrl: "https://github.com/AbdoXmDevos/ai-social-app-front",
      category: "Website",
      icon: <AppWindow className="h-5 w-5" />,
      color: "from-orange-500 to-orange-600",
      imagesLink: []
    },
    {
      title: "Evently",
      description: "A simple platform to create, join, and manage events, built to streamline organization and connect participants with ease.",
      image: "🎫",
      technologies: ["NextJS", "TypeScript","Java", "Spring Boot", "Cloudinary", "Redis"],
      githubUrl: "https://github.com/AbdoXmDevos/event-manager-front",
      category: "Website",
      icon: <Ticket className="h-5 w-5" />,
      color: "from-green-500 to-green-600",
      imagesLink: []
    }
  ]

  const openModal = (project: any) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.imagesLink.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.imagesLink.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.imagesLink.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.imagesLink.length - 1 : prev - 1
      )
    }
  }

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
                        onClick={() => openModal(project)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
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

        {/* Custom Image Preview Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative bg-white dark:bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title} - Project Images
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {selectedProject.imagesLink && selectedProject.imagesLink.length > 0 ? (
                  <div className="relative">
                    {/* Image Display */}
                    <div className="flex justify-center items-center mb-4">
                      <Image
                        src={selectedProject.imagesLink[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        width={800}
                        height={600}
                        className="rounded-lg object-contain max-h-[60vh] w-auto"
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {selectedProject.imagesLink.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-colors"
                        >
                          <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-colors"
                        >
                          <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {selectedProject.imagesLink.length > 1 && (
                      <div className="text-center mt-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {currentImageIndex + 1} of {selectedProject.imagesLink.length}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="text-6xl mb-4">{selectedProject.image}</div>
                    <p className="text-gray-500 dark:text-gray-400">
                      No images available for this project yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
