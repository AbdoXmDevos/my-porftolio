"use client"

import { motion } from "framer-motion"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
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
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950/50 dark:to-gray-950/50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t.education.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t.education.subtitle}
          </p>
        </motion.div>

        {/* Section Headers - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
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

        {/* Mobile Layout - 2 columns with subsection headers */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Education Column */}
          <div className="space-y-4">
            {/* Education Subsection Header - Mobile only */}
            <h3 className="md:hidden text-lg font-semibold text-orange-500 border-b border-orange-200 dark:border-orange-800 pb-2">
              Education
            </h3>

            {/* Education Items */}
            <div className="space-y-4">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <InteractiveCard className="h-[240px]">
                    <CardHeader className="pb-2">
                      <div className="flex items-start space-x-2">
                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${item.color} text-white flex-shrink-0`}>
                          <GraduationCap className="h-3 w-3" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-sm leading-tight line-clamp-2">{item.title}</CardTitle>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-500 font-semibold hover:text-orange-700 dark:hover:text-orange-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group text-xs"
                          >
                            <span className="truncate">{item.institution}</span>
                            <ExternalLink className="h-2.5 w-2.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 h-full flex flex-col">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-col space-y-0.5 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-2.5 w-2.5 flex-shrink-0" />
                            <span className="truncate">{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-2.5 w-2.5 flex-shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-xs line-clamp-3 flex-1">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-4">
            {/* Experience Subsection Header - Mobile only */}
            <h3 className="md:hidden text-lg font-semibold text-green-500 border-b border-green-200 dark:border-green-800 pb-2">
              Experience
            </h3>

            {/* Experience Items */}
            <div className="space-y-4">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <InteractiveCard className="h-[240px]">
                    <CardHeader className="pb-2">
                      <div className="flex items-start space-x-2">
                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${item.color} text-white flex-shrink-0`}>
                          <Briefcase className="h-3 w-3" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-sm leading-tight line-clamp-2">{item.title}</CardTitle>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-500 font-semibold hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group text-xs"
                          >
                            <span className="truncate">{item.company}</span>
                            <ExternalLink className="h-2.5 w-2.5 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                          </a>
                          <p className="text-xs text-muted-foreground truncate">{item.type}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 h-full flex flex-col">
                      <div className="space-y-1.5 flex-1 flex flex-col">
                        <div className="flex flex-col space-y-0.5 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-2.5 w-2.5 flex-shrink-0" />
                            <span className="truncate">{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-2.5 w-2.5 flex-shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-xs line-clamp-2 flex-1">
                          {item.description}
                        </p>
                        {item.skills && (
                          <div className="flex flex-wrap gap-0.5 mt-auto">
                            {item.skills.slice(0, 4).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-1.5 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-sm"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>

          <div className="space-y-16">
            {[0, 1, 2].map((index) => (
              <div key={index} className="grid grid-cols-2 gap-8 items-center">
                {/* Education Item (Left Side) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <div className="relative min-h-[260px] w-full">
                    <InteractiveCard className="h-full">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className={`p-1.5 sm:p-2 rounded-full bg-gradient-to-r ${educationItems[index].color} text-white flex-shrink-0`}>
                              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <CardTitle className="text-base sm:text-lg leading-tight line-clamp-2">{educationItems[index].title}</CardTitle>
                              <a
                                href={educationItems[index].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-500 font-semibold hover:text-orange-700 dark:hover:text-orange-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group text-sm sm:text-base"
                              >
                                <span className="truncate">{educationItems[index].institution}</span>
                                <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 h-full flex flex-col">
                        <div className="space-y-2 sm:space-y-3 flex-1">
                          <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 space-y-1 xs:space-y-0 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span className="truncate">{educationItems[index].period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span className="truncate">{educationItems[index].location}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm line-clamp-4 flex-1">
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
                  className="text-left"
                >
                  <div className="relative min-h-[280px] w-full">
                    <InteractiveCard className="h-full">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className={`p-1.5 sm:p-2 rounded-full bg-gradient-to-r ${experienceItems[index].color} text-white flex-shrink-0`}>
                              <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <CardTitle className="text-base sm:text-lg leading-tight line-clamp-2">{experienceItems[index].title}</CardTitle>
                              <a
                                href={experienceItems[index].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-500 font-semibold hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 cursor-pointer flex items-center gap-1 group text-sm sm:text-base"
                              >
                                <span className="truncate">{experienceItems[index].company}</span>
                                <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                              </a>
                              <p className="text-xs sm:text-sm text-muted-foreground truncate">{experienceItems[index].type}</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 h-full flex flex-col">
                        <div className="space-y-2 sm:space-y-3 flex-1 flex flex-col">
                          <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 space-y-1 xs:space-y-0 text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span className="truncate">{experienceItems[index].period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                              <span className="truncate">{experienceItems[index].location}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm line-clamp-3 flex-1">
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
