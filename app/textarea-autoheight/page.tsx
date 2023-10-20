"use client"

import { useId, useState } from "react"

import { TextareaAutoHeight } from "@/components/ui/textarea-auto-height"

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
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex flex-col items-start space-y-2 my-4 w-full">
        <label className="prose-lg font-bold" htmlFor={postTextAreaId}>
          Try typing a long message
        </label>
        <TextareaAutoHeight
          id={postTextAreaId}
          name="sample"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write your post here..."
        />
      </div>
      <div className="relative rounded-lg w-full bg-muted px-6 py-4 font-mono text-sm font-semibold">
        <blockquote>
          <p>
            Usage: Copy the
            <a
              className="mx-2 text-blue-500 hover:underline"
              target="_blank"
              href="https://github.com/sravimohan/shandcn-ui-extensions/blob/main/components/ui/textarea-auto-height.tsx"
              rel="noreferrer">
              component source file
            </a>
            into your project.
          </p>
        </blockquote>
        <pre>{sample}</pre>
      </div>
    </div>
  )
}
