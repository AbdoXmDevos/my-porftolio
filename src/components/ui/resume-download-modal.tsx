"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Download, FileText, X } from "lucide-react"
import { useTranslation } from "@/contexts/LanguageContext"
import { languages } from "@/translations"

interface ResumeDownloadModalProps {
  children: React.ReactNode
}

export function ResumeDownloadModal({ children }: ResumeDownloadModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const handleDownload = (language: 'en' | 'fr') => {
    const resumeFile = language === 'en' ? '/Resume english 2025.pdf' : '/Cv francais 2025.pdf'
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = `Abdessamad_Karimi_Resume_${language.toUpperCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Close the modal after download
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 bg-background dark:bg-background border p-6 shadow-2xl duration-200 rounded-lg">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <FileText className="h-5 w-5" />
              {t.resumeModal.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t.resumeModal.description}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 mt-4">
            {languages.map((language) => (
              <motion.div
                key={language.code}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleDownload(language.code)}
                  className="w-full justify-start gap-3 h-12 bg-amber-600 hover:bg-amber-700 text-white"
                  variant="default"
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-xs opacity-90">
                      {t.resumeModal.downloadIn} {language.name}
                    </span>
                  </div>
                  <Download className="h-4 w-4 ml-auto" />
                </Button>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
