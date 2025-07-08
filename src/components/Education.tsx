"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GraduationCap, Briefcase, Calendar, MapPin, Building, Code, ExternalLink } from "lucide-react"
import { useTranslation } from "@/contexts/LanguageContext"

const Education = () => {
  const { t } = useTranslation()

  const educationItems = [
    {
      title: t.education.items.masters.title,
      institution: t.education.items.masters.institution,
      location: t.education.items.masters.location,
      period: t.education.items.masters.period,
      description: t.education.items.masters.description,
      color: "from-orange-400 to-orange-500",
      link: "https://www.enset-media.ac.ma/"
    },
    {
      title: t.education.items.bachelor.title,
      institution: t.education.items.bachelor.institution,
      location: t.education.items.bachelor.location,
      period: t.education.items.bachelor.period,
      description: t.education.items.bachelor.description,
      color: "from-orange-400 to-orange-500",
      link: "https://fsac.univh2c.ma/front/index.html"
    },
    {
      title: t.education.items.bts.title,
      institution: t.education.items.bts.institution,
      location: t.education.items.bts.location,
      period: t.education.items.bts.period,
      description: t.education.items.bts.description,
      color: "from-orange-400 to-orange-500",
      link: "https://www.linkedin.com/school/brevet-du-technicien-sup%C3%A9rieur/"
    }
  ]

  const experienceItems = [
    {
      title: t.education.experience.xelops1.title,
      company: t.education.experience.xelops1.company,
      type: t.education.experience.xelops1.type,
      location: t.education.experience.xelops1.location,
      period: t.education.experience.xelops1.period,
      description: t.education.experience.xelops1.description,
      skills: t.education.experience.xelops1.skills,
      color: "from-orange-400 to-orange-500",
      link: "https://xelops.com"
    },
    {
      title: t.education.experience.xelops2.title,
      company: t.education.experience.xelops2.company,
      type: t.education.experience.xelops2.type,
      location: t.education.experience.xelops2.location,
      period: t.education.experience.xelops2.period,
      description: t.education.experience.xelops2.description,
      skills: t.education.experience.xelops2.skills,
      color: "from-orange-400 to-orange-500",
      link: "https://xelops.com"
    },
    {
      title: t.education.experience.teamwill.title,
      company: t.education.experience.teamwill.company,
      type: t.education.experience.teamwill.type,
      location: t.education.experience.teamwill.location,
      period: t.education.experience.teamwill.period,
      description: t.education.experience.teamwill.description,
      skills: t.education.experience.teamwill.skills,
      color: "from-orange-400 to-orange-500",
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
            {t.education.title}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.education.subtitle}
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
              <GraduationCap className="h-8 w-8 text-amber-600" />
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
              <Briefcase className="h-8 w-8 text-amber-600" />
              <h3 className="text-2xl md:text-3xl font-bold">Experience</h3>
            </div>
          </motion.div>
        </div>

        {/* Parallel Timeline Layout */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-500 rounded-full hidden md:block"></div>

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
                                className="text-amber-500 font-semibold hover:text-orange-700 dark:hover:text-orange-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group"
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
                                className="text-amber-500 font-semibold hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group"
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
                                  className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs rounded-full whitespace-nowrap"
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
