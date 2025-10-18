"use client"

import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  id?: string
  title?: string
  className?: string
}>

export function Section({ id, title, className, children }: Props) {
  return (
    <section id={id} className={className}>
      {title ? (
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            className="text-balance text-2xl font-semibold tracking-tight md:text-3xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h2>
        </div>
      ) : null}
      <motion.div
        className="mx-auto max-w-6xl px-4 py-10 md:py-14"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
