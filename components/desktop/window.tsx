"use client"

import type React from "react"

import { motion } from "framer-motion"
import { X, Minus, Maximize2 } from "lucide-react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

export type DesktopWindowProps = {
  id: string
  title: string
  active?: boolean
  onClose: () => void
  onMinimize?: () => void
  onFocus?: () => void
  initialPos?: { x: number; y: number }
  children: React.ReactNode
  className?: string
}

export function DesktopWindow({
  id,
  title,
  active,
  onClose,
  onMinimize,
  onFocus,
  initialPos = { x: 80, y: 80 },
  children,
  className,
}: DesktopWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={containerRef}
      layoutId={`win-${id}`}
      onMouseDown={onFocus}
      className={cn(
        "absolute select-none overflow-hidden rounded-lg border bg-card text-card-foreground shadow-lg",
        active ? "ring-2 ring-primary" : "opacity-95 hover:opacity-100",
        className,
      )}
      initial={{ opacity: 0, scale: 0.96, x: initialPos.x, y: initialPos.y }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      dragConstraints={{
        left: 0,
        top: 0,
        right: typeof window !== "undefined" ? window.innerWidth : 1200,
        bottom: typeof window !== "undefined" ? window.innerHeight - 48 : 800,
      }}
      style={{ width: 560 }}
    >
      <div className="flex items-center justify-between border-b bg-muted/60 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button aria-label="Minimize" className="rounded p-1 hover:bg-muted" onClick={onMinimize}>
            <Minus className="h-4 w-4" />
          </button>
          <button aria-label="Maximize" className="rounded p-1 hover:bg-muted">
            <Maximize2 className="h-4 w-4" />
          </button>
          <button aria-label="Close" className="rounded p-1 hover:bg-muted" onClick={onClose}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="max-h-[60vh] overflow-auto p-4">{children}</div>
    </motion.div>
  )
}
