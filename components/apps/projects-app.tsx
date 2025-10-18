"use client"

import Image from "next/image"
import { useState } from "react"

export type Project = {
  title: string
  date: string
  description: string
  skills: string[]
  href?: string
  image: string
}

export function ProjectsApp({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <button
            key={p.title}
            onClick={() => setSelectedProject(p)}
            className="group overflow-hidden rounded-md border bg-card text-card-foreground text-left transition-all hover:border-primary hover:shadow-md"
          >
            <div className="relative aspect-video">
              <Image
                src={p.image || "/placeholder.svg"}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {p.skills.map((s) => (
                  <span key={s} className="rounded bg-secondary px-2 py-0.5 text-[10px] text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <p className="text-sm text-muted-foreground">{selectedProject.date}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl font-bold text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>

            <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-md">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-4 text-sm">{selectedProject.description}</p>

            <div className="mt-4">
              <h3 className="mb-2 text-sm font-semibold">Skills Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((s) => (
                  <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.href && (
              <a
                href={selectedProject.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                View on GitHub →
              </a>
            )}

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 w-full rounded-md border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
