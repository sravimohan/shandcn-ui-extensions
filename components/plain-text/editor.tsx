"use client"

import * as React from "react"
import { useId } from "react"

import { cn } from "@/lib/utils"

import { Textarea } from "../ui/textarea"

export interface EditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Editor = React.forwardRef<HTMLTextAreaElement, EditorProps>(
  ({ className, ...props }, ref) => {
    const mirrorId = useId()
    const [height, setHeight] = React.useState<number>()
    const scrollTolerance = 15

    React.useEffect(() => {
      const clientHeight = document?.getElementById(mirrorId)?.clientHeight ?? 0
      setHeight(clientHeight + scrollTolerance)
    }, [mirrorId, props.value])

    const baseClassname = ""

    return (
      <div className="relative w-full">
        <Textarea
          className={cn("overflow-hidden", className)}
          ref={ref}
          style={{
            height: `${height}px`,
          }}
          {...props}
        />
        <div
          id={mirrorId}
          className={cn(
            "whitespace-pre-wrap absolute top-0 left-0 invisible",
            baseClassname,
            className
          )}>
          {props.value}&nbsp;
        </div>
      </div>
    )
  }
)
Editor.displayName = "Editor"

export { Editor }
