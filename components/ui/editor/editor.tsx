import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import EditorToolbar from "./toolbar/editor-toolbar"

interface EditorProps {
  content: string
  readOnly: boolean
  placeholder?: string
  onChange: (value: string) => void
}

const Editor = ({ content, readOnly, placeholder, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) return <></>

  return (
    <article className="prose-mt-0 prose max-w-none border border-input bg-background dark:prose-invert">
      {!readOnly && <EditorToolbar editor={editor} />}
      <div className="editor">
        <EditorContent
          editor={editor}
          readOnly={readOnly}
          placeholder={placeholder}
          className="h-full w-full"
        />
      </div>
    </article>
  )
}

export default Editor
