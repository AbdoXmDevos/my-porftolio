import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdessamad Karimi - Portfolio",
  description: "A passionate developer who loves coffee and clean code. Full-stack developer specializing in modern web technologies, mobile development, and AI integration.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "typescript", "kotlin", "java", "python"],
  authors: [{ name: "Abdessamad Karimi" }],
  creator: "Abdessamad Karimi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdessamad-karimi.dev",
    title: "Abdessamad Karimi - Portfolio",
    description: "A passionate developer who loves coffee and clean code.",
    siteName: "Abdessamad Karimi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdessamad Karimi - Portfolio",
    description: "A passionate developer who loves coffee and clean code.",
    creator: "@abdessamadkarimi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CustomCursor />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
