import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import EditorToolbar from "./toolbar/editor-toolbar"

interface EditorProps {
  content: string
  placeholder?: string
  onChange: (value: string) => void
}

const Editor = ({ content, placeholder, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) return <></>

  return (
    <div className="prose max-w-none w-full border border-input bg-background dark:prose-invert">
      <EditorToolbar editor={editor} />
      <div className="editor">
        <EditorContent
          editor={editor}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default Editor
