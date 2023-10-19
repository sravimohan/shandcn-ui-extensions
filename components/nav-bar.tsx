"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Github } from "lucide-react"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const isActive = (pathname: string | null, menuPathname: string) =>
  pathname?.toLowerCase().startsWith(menuPathname)
    ? ["bg-secondary border"]
    : ["hover:bg-secondary/30  border-0"]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="prose dark:prose-invert max-w-none bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">shandcn/ui extensions</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/textarea-autoheight"
                  className={cn(
                    "hover:bg-muted px-3 py-2 rounded-md text-sm font-medium no-underline",
                    isActive(pathname, "/textarea-autoheight")
                  )}>
                  Auto Height Textarea
                </Link>
                <Link
                  href="/editor"
                  className={cn(
                    "hover:bg-muted px-3 py-2 rounded-md text-sm font-medium no-underline",
                    isActive(pathname, "/editor")
                  )}>
                  Editor
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              className="hover:bg-muted px-3 py-2 rounded-lg text-sm font-medium no-underline"
              href="https://ui.shadcn.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-[1.2rem] w-[1.2rem]">
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"></line>
              </svg>
            </a>
            <a
              className="hover:bg-muted px-3 py-2 rounded-lg text-sm font-medium no-underline"
              href="https://github.com/sravimohan/shandcn-ui-extensions">
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
