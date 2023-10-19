"use client"

export default function Page() {
  return (
    <div className="flex flex-col space-y-6">
      <article className="prose dark:prose-invert container bg-secondary/40 rounded-md p-6 mt-12">
        <p>
          Additional components on top of the amazing the{" "}
          <a className="mx-1" href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
            shandcn/ui
          </a>
          Components
          <ul>
            <li>Textarea which grows in height as the user types</li>
            <li>[TODO] Rich text editor built on top of [Tiptap](https://tiptap.dev/editor)</li>
          </ul>
        </p>
      </article>
    </div>
  )
}
