"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Technologies = () => {
  const techZones = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",dark:false },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",dark:true },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",dark:false },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",dark:false },
        { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg",dark:false },
        { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",dark:true },  
        { name: "Angular", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/angular/angular-original.svg",dark:false }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",dark:false },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",dark:false },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",dark:false },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",dark:false },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",dark:false },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",dark:false },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",dark:false }
      ]
    },
    {
      title: "Mobile",
      technologies: [
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",dark:false },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",dark:false },
        { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",dark:false },
        { name: "Jetpack Compose", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/jetpackcompose/jetpackcompose-original.svg",dark:false },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",dark:false }
      ]
    },
    {
      title: "AI & ML",
      technologies: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",dark:false },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",dark:false },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",dark:true },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",dark:false },
        { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",dark:false }
      ]
    },
    {
      title: "Tools & Others",
      technologies: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",dark:false },  
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",dark:true },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",dark:false },
        { name: "Azure", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/azure/azure-original.svg",dark:false },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",dark:false },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",dark:false }
      ]
    }
  ]

  return (
    <section id="technologies" className="py-20 bg-background">
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

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {techZones.map((zone, zoneIndex) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: zoneIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Clean background with subtle border */}
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-10 h-[22rem] border border-gray-200/50 dark:border-gray-700/50 hover:border-amber-300/50 dark:hover:border-amber-600/50 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">
                  {zone.title}
                </h3>

                {/* Technology Icons Grid */}
                <div className="grid grid-cols-4 gap-8 justify-items-center pb-12">
                  {zone.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: (zoneIndex * 0.1) + (techIndex * 0.05)
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                      viewport={{ once: true }}
                      className="group/tech relative mb-6"
                    >
                      {/* Icon container */}
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center cursor-pointer hover:shadow-md transition-all duration-200 group-hover/tech:border-amber-300 dark:group-hover/tech:border-amber-600">
                        {tech.dark ? (
                          <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={28}
                              height={28}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        )}
                      </div>

                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
