import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

interface ViewerProps {
  content: string
  style?: "default" | "prose"
}

const Viewer = ({ content, style }: ViewerProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editable: false,
  })

  if (!editor) return <></>

  const className: string = style === "prose" ? "prose-mt-0 prose max-w-none dark:prose-invert" : ""

  return (
    <article className={className}>
      <EditorContent editor={editor} readOnly={true} />
    </article>
  )
}

export default Viewer
