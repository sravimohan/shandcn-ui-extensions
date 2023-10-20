"use client"

import { useId, useState } from "react"

import Editor from "@/components/ui/editor/editor"

export default function Home() {
  const postTextAreaId = useId()
  const [value, setValue] = useState("hello world ")

  const sample = `<Editor
  content={value}
  onChange={setValue}
  placeholder="Write your post here..."
  readOnly={false} />`

  return (
    <div className="prose dark:prose-invert flex flex-col items-center mt-12 space-y-6">
      <div className="flex flex-col items-start space-y-2 my-6">
        <label className="prose-lg font-bold" htmlFor={postTextAreaId}>
          Try typing a long message
        </label>
        <Editor
          content={value}
          onChange={setValue}
          placeholder="Write your post here..."
          readOnly={false}
        />
      </div>
      <div className="mt-12">
        <div className="relative rounded-lg w-full bg-muted px-6 py-4 font-mono text-sm font-semibold">
          <h3 className="text-lg font-bold">Usage</h3>
          <p>
            Copy the
            <a
              className="mx-2 text-blue-500 hover:underline"
              target="_blank"
              href="https://github.com/sravimohan/shandcn-ui-extensions/blob/main/components/ui/editor"
              rel="noreferrer">
              component source files
            </a>
            into your project.
          </p>
          <p>
            Check out{" "}
            <a className="mx-1" href="https://tiptap.dev/editor">
              Tiptap
            </a>{" "}
            documentation for more details.
          </p>
          <p>
            Also note, some of the shandcn/ui components used have been slightly modified to suit
            the needs of this editor.
          </p>
          <pre>{sample}</pre>
        </div>
      </div>
    </div>
  )
}
