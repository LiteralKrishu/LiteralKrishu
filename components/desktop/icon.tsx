"use client"

import type React from "react"

import { motion } from "framer-motion"

type IconProps = {
  label: string
  onOpen: () => void
  children: React.ReactNode
}

export function DesktopIcon({ label, onOpen, children }: IconProps) {
  return (
    <motion.button
      onDoubleClick={onOpen}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex w-24 flex-col items-center gap-2 rounded-md p-2 text-center hover:bg-muted/40 focus:outline-none"
    >
      <div className="grid h-14 w-14 place-items-center rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-primary/40 hover:border-primary/40 bg-sidebar">
        {children}
      </div>
      <span className="text-xs font-medium drop-shadow-sm text-background">{label}</span>
    </motion.button>
  )
}
