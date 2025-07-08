"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/contexts/LanguageContext"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-background border-t-2 border-orange-600 dark:border-orange-500">
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground"
        >
          <p className="text-sm">
            {t.footer.version} • {t.footer.hosting} • {t.footer.developer}{" "}
            <a
              href="https://www.linkedin.com/in/abdessamad-karimi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-medium hover:text-amber-500 transition-colors cursor-pointer"
            >
              Abdessamad Karimi
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
