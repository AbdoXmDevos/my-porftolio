"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle({ variant = "default" }: { variant?: "default" | "icon-only" }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    if (variant === "icon-only") {
      return <Sun className="h-4 w-4 md:h-4 md:w-4  lg:h-5 lg:w-5 text-muted-foreground" />
    }
    return (
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  if (variant === "icon-only") {
    return (
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 md:p-2.5 lg:p-3 bg-transparent border-none hover:bg-primary/10 transition-colors rounded-lg"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary transition-colors" />
        ) : (
          <Sun className="h-4 w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-muted-foreground hover:text-primary transition-colors" />
        )}
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
