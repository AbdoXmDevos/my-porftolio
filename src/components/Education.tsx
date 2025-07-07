"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GraduationCap, Briefcase, Calendar, MapPin, Building, Code, ExternalLink } from "lucide-react"

const Education = () => {
  const educationItems = [
    {
      title: "Master's in Distributed Systems and Artificial Intelligence",
      institution: "ENSET Mohammedia",
      location: "Mohammedia, Morocco",
      period: "Sep 2023 - Present",
      description: "Advanced studies in Distributed Systems and Artificial Intelligence, focusing on machine learning, neural networks, and scalable system architecture.",
      color: "from-blue-500 to-blue-600",
      link: "https://www.enset-media.ac.ma/"
    },
    {
      title: "Bachelor's in Mathematical Sciences and Computer Science",
      institution: "Faculty of Sciences Ain Chock",
      location: "Casablanca, Morocco",
      period: "Oct 2022 - Jun 2023",
      description: "Fundamental degree in Mathematical Sciences and Computer Science, building strong foundation in mathematics, algorithms, and programming.",
      color: "from-blue-500 to-blue-600",
      link: "https://fsac.univh2c.ma/front/index.html"
    },
    {
      title: "Higher Technician Certificate (BTS) - Computer Systems and Networks",
      institution: "BTS - Brevet de Technicien Supérieur",
      location: "Casablanca, Morocco",
      period: "Oct 2020 - Jul 2022",
      description: "Higher Technician Certificate specializing in Computer Systems and Networks, covering network administration, system management, and IT infrastructure.",
      color: "from-blue-500 to-blue-600",
      link: "https://www.linkedin.com/school/brevet-du-technicien-sup%C3%A9rieur/"
    }
  ]

  const experienceItems = [
    {
      title: "Fullstack Developer Internship",
      company: "Xelops Technology (Ex Neoxia Maroc)",
      type: "Internship",
      location: "Casablanca-Settat, Morocco · On-site",
      period: "Feb 2025 - Present · 6 mos",
      description: "Working on full-stack development projects using modern technologies including React Native and React.js for mobile and web applications.",
      skills: ["React Native", "React.js","Spring Boot","Java","Redis", "Full-stack Development"],
      color: "from-green-500 to-green-600",
      link: "https://xelops.com"
    },
    {
      title: "Full-stack Developer Internship",
      company: "Xelops Technology (Ex Neoxia Maroc)",
      type: "Internship",
      location: "Casablanca-Settat, Morocco · Hybrid",
      period: "Jul 2024 - Aug 2024 · 2 mos",
      description: "Created an IntelliJ plugin that generates unit tests using AI technology, enhancing developer productivity and code quality.",
      skills: ["Unit Testing", "Artificial Intelligence (AI)", "IntelliJ Plugin Development", "Java", "Kotlin"],
      color: "from-green-500 to-green-600",
      link: "https://xelops.com"
    },
    {
      title: "System Administrator Internship",
      company: "TEAMWILL",
      type: "Internship",
      location: "Casablanca-Settat, Morocco · On-site",
      period: "Jun 2022 - Jul 2022 · 2 mos",
      description: "System administration role focusing on CI/CD implementation, Jenkins configuration, and infrastructure management.",
      skills: ["CI/CD", "Jenkins", "System Administration", "DevOps", "Linux"],
      color: "from-green-500 to-green-600",
      link: "https://www.teamwillgroup.com/fr/"
    }
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-amber-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experience in technology
          </p>
        </motion.div>

        {/* Section Headers */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3">
              <Briefcase className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl md:text-3xl font-bold">Experience</h3>
            </div>
          </motion.div>
        </div>

        {/* Parallel Timeline Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500 rounded-full hidden md:block"></div>

          <div className="space-y-16">
            {[0, 1, 2].map((index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Education Item (Left Side) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="md:text-left"
                >
                  <div className="relative h-60 w-full">
                    <InteractiveCard className="h-full">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full bg-gradient-to-r ${educationItems[index].color} text-white flex-shrink-0`}>
                              <GraduationCap className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <CardTitle className="text-lg leading-tight line-clamp-2">{educationItems[index].title}</CardTitle>
                              <a
                                href={educationItems[index].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-semibold hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group"
                              >
                                <span className="truncate">{educationItems[index].institution}</span>
                                <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 h-full flex flex-col">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{educationItems[index].period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{educationItems[index].location}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4 flex-1">
                            {educationItems[index].description}
                          </p>
                        </div>
                      </CardContent>
                    </InteractiveCard>
                  </div>
                </motion.div>

                {/* Experience Item (Right Side) */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="md:text-left"
                >
                  <div className="relative h-60 w-full">
                    <InteractiveCard className="h-full">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full bg-gradient-to-r ${experienceItems[index].color} text-white flex-shrink-0`}>
                              <Briefcase className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <CardTitle className="text-lg leading-tight line-clamp-2">{experienceItems[index].title}</CardTitle>
                              <a
                                href={experienceItems[index].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 font-semibold hover:text-green-800 dark:hover:text-green-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group"
                              >
                                <span className="truncate">{experienceItems[index].company}</span>
                                <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                              </a>
                              <p className="text-sm text-muted-foreground truncate">{experienceItems[index].type}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 h-full flex flex-col">
                        <div className="space-y-3 flex-1 flex flex-col">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{experienceItems[index].period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{experienceItems[index].location}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 flex-1">
                            {experienceItems[index].description}
                          </p>
                          {experienceItems[index].skills && (
                            <div className="flex flex-wrap gap-1 mt-auto">
                              {experienceItems[index].skills.slice(0, 6).map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-xs rounded-full whitespace-nowrap"
                                >
                                  {skill}
                                </span>
                              ))}
                              {experienceItems[index].skills.length > 6 && (
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                                  +{experienceItems[index].skills.length - 6}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </InteractiveCard>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Education
