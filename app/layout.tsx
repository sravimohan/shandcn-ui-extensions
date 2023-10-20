import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import "./prose-mirror.css"
import NavBar from "@/components/nav-bar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "shadcn extenstions",
  description: "Additions to the shadcn/ui",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <main>
              <NavBar />
              <div className="flex flex-col items-center">{children}</div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
