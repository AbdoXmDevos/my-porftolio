"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react"

const Education = () => {
  const timelineItems = [
    {
      type: "education",
      title: "Master's in AI & Distributed Systems",
      institution: "ENSET Mohammedia",
      location: "Mohammedia, Morocco",
      period: "2022 - 2024",
      description: "Specialized in Artificial Intelligence and Distributed Systems with focus on machine learning, neural networks, and scalable system architecture.",
      icon: "🎓",
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "experience",
      title: "Full Stack Developer Intern",
      institution: "Tech Company",
      location: "Casablanca, Morocco",
      period: "Summer 2023",
      description: "Developed web applications using React, Node.js, and MongoDB. Implemented RESTful APIs and worked on mobile app development with React Native.",
      icon: "💼",
      color: "from-green-500 to-green-600"
    },
    {
      type: "education",
      title: "Bachelor's in Computer Science",
      institution: "University of Technology",
      location: "Morocco",
      period: "2019 - 2022",
      description: "Foundation in computer science fundamentals including algorithms, data structures, software engineering, and database systems.",
      icon: "🎓",
      color: "from-purple-500 to-purple-600"
    },
    {
      type: "experience",
      title: "Freelance Developer",
      institution: "Various Clients",
      location: "Remote",
      period: "2021 - Present",
      description: "Developed custom web applications, mobile apps, and automation tools for small businesses and startups.",
      icon: "💼",
      color: "from-orange-500 to-orange-600"
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

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                            {item.type === 'education' ? (
                              <GraduationCap className="h-5 w-5" />
                            ) : (
                              <Briefcase className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <p className="text-amber-600 font-semibold">{item.institution}</p>
                          </div>
                        </div>
                        <div className="text-4xl">{item.icon}</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-background shadow-lg z-10`}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">Key Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">3+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
