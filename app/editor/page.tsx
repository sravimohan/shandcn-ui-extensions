"use client"

import { useId, useState } from "react"
import dynamic from "next/dynamic"
import { ThemeToggle } from "@/components/theme-toggle"

const TextareaAutoHeight = dynamic(
  () => import("../../components/ui/textarea-auto-height").then((mod) => mod.TextareaAutoHeight),
  { ssr: false }
)

export default function Home() {
  const postTextAreaId = useId()
  const [value, setValue] = useState("hello world ")

  const sample = `<TextareaAutoHeight
    id={postTextAreaId}
    name="sample"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className="w-96"
    placeholder="Write your post here..." />`

  return (
    <main className="flex min-h-screen flex-col items-center prose justify-start p-6">
      <div className="flex w-full justify-end">
        <ThemeToggle/>
      </div>
      <div className="flex flex-col space-y-6">
        <label htmlFor={postTextAreaId}>Try typing a long message</label>
        <TextareaAutoHeight
          id={postTextAreaId}
          name="sample"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-96"
          placeholder="Write your post here..."
        />
        <div className="mt-12">
          <blockquote>
            <p>
              Usage: Copy{" "}
              <a href="https://github.com/sravimohan/shandcn-ui-extensions/blob/9b4ea630abac18695bd56c87a141dbf13b4fbf1d/components/ui/textarea-auto-height.tsx#L1C14-L1C14">
                component source
              </a>{" "}
              to your project.
            </p>
          </blockquote>
          <div className="relative rounded-lg w-full bg-muted px-6 py-4 font-mono text-sm font-semibold">
            <pre>{sample}</pre>
          </div>
        </div>
      </div>
    </main>
  )
}
