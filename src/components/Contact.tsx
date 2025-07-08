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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${info.color} text-white`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{info.label}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                        {info.action && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={info.action}
                            className="ml-auto"
                          >
                            {emailCopied ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
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
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-center">{t.contact.socialTitle}</h3>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-full bg-background shadow-md transition-colors ${social.color}`}
                      >
                        {social.icon}
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
