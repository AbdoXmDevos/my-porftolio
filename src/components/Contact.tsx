"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Copy, Check } from "lucide-react"
import { useTranslation } from "@/contexts/LanguageContext"

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)
  const { t } = useTranslation()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abdessamadkarimi.ak@gmail.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t.contact.info.email,
      value: "abdessamadkarimi.ak@gmail.com",
      action: copyEmail,
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t.contact.info.phone,
      value: "+212 766 477 939",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t.contact.info.location,
      value: "Casablanca, Morocco",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "https://github.com/AbdoXmDevos",
      color: "hover:text-amber-600"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/abdessamad-karimi/",
      color: "hover:text-amber-600"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      url: "https://x.com/AbdoXm23",
      color: "hover:text-amber-600"
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950/50 dark:to-gray-950/50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-orange-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${info.color} text-white flex-shrink-0`}>
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base">{info.label}</h3>
                          <p className="text-muted-foreground text-sm sm:text-base break-all sm:break-normal">{info.value}</p>
                        </div>
                        {info.action && (
                          <motion.div whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={info.action}
                              className="ml-auto flex-shrink-0"
                            >
                              {emailCopied ? (
                                <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                              ) : (
                                <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                              )}
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">{t.contact.socialTitle}</h3>
                  <div className="flex justify-center space-x-4 sm:space-x-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 sm:p-3 rounded-full bg-background shadow-md transition-colors ${social.color}`}
                        title={social.label}
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5">
                          {social.icon}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Coffee Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">☕</div>
                  <p className="text-muted-foreground italic">
                    &ldquo;{t.contact.coffeeQuote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
