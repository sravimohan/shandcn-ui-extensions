"use client";

import dynamic from "next/dynamic";
import { useId, useState } from "react";
const TextareaAutoHeight = dynamic(
  () =>
    import("../components/ui/textarea-auto-height").then(
      (mod) => mod.TextareaAutoHeight,
    ),
  { ssr: false },
);

export default function Home () {
  const postTextAreaId = useId()
  const [value, setValue] = useState("hello world ");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col space-y-2">
        <label htmlFor={postTextAreaId}>
          Try typing a long message
        </label>
        <TextareaAutoHeight
          id={postTextAreaId}
          name="sample"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-96"
          placeholder="Write your post here..."
        />
      </div>
    </main>
  );
}
