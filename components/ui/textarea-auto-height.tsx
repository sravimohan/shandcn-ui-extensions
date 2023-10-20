"use client"

import * as React from "react"
import { useId } from "react"

import { cn } from "@/lib/utils"

export interface TextareaAutoHeightProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextareaAutoHeight = React.forwardRef<HTMLTextAreaElement, TextareaAutoHeightProps>(
  ({ className, ...props }, ref) => {
    const mirrorId = useId()
    const [height, setHeight] = React.useState<number>()
    const scrollTolerance = 6

    React.useEffect(() => {
      const clientHeight = document?.getElementById(mirrorId)?.clientHeight ?? 0
      setHeight(clientHeight + scrollTolerance)
    }, [mirrorId, props.value])

    return (
      <div className="relative w-full">
        <textarea
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          style={{
            height: `${height}px`,
          }}
          {...props}
        />
        <div
          id={mirrorId}
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
            "pointer-events-none invisible absolute left-0 top-0 pb-6"
          )}>
          {props.value}
        </div>
      </div>
    )
  }
)
TextareaAutoHeight.displayName = "TextareaAutoHeight"

export { TextareaAutoHeight }
