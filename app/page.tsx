"use client"

import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col space-y-6">
      <article className="prose dark:prose-invert container bg-secondary/40 rounded-md p-6 mt-12">
        <p>
          Additional components on top of the amazing
          <a className="mx-1" href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
            shandcn/ui
          </a>
        </p>
        <ul>
          <li>
            <Link href={"/textarea-autoheight"}>Textarea</Link> which grows in height as the user
            types
          </li>
          <li>
            <Link className="mx-1" href={"/editor"}>
              Rich text editor
            </Link>{" "}
            built on top of
            <a className="mx-1" href="https://tiptap.dev/editor">
              Tiptap
            </a>{" "}
            and
            <a className="mx-1" href="https://prosemirror.net/">
              Prose Mirror
            </a>
          </li>
        </ul>
        <p className="italic">Please note this is a work in progress and feedback is welcome.</p>
      </article>
    </div>
  )
}
