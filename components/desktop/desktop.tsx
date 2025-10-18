"use client"

import { useState } from "react"
import { DesktopWindow } from "@/components/desktop/window"
import { DesktopIcon } from "@/components/desktop/icon"
import { Taskbar } from "@/components/desktop/taskbar"
import { BadgeCheck, FolderGit2, FileText, User, Terminal } from "lucide-react"
import { AboutApp } from "@/components/apps/about-app"
import { ProjectsApp, type Project } from "@/components/apps/projects-app"
import { PDFViewerApp } from "@/components/apps/pdf-viewer-app"

type WindowKey = "about" | "projects" | "resume" | "skills" | "terminal"

const titles: Record<WindowKey, string> = {
  about: "About Me",
  projects: "Projects",
  resume: "Resume",
  skills: "Skills",
  terminal: "Terminal",
}

export function Desktop({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<WindowKey[]>(["about"])
  const [active, setActive] = useState<WindowKey>("about")
  const [minimized, setMinimized] = useState<Record<WindowKey, boolean>>({})

  const toggle = (k: WindowKey) => {
    if (open.includes(k)) {
      if (minimized[k]) {
        setMinimized((m) => ({ ...m, [k]: false }))
      }
      setActive(k)
    } else {
      setOpen((o) => [...o, k])
      setMinimized((m) => ({ ...m, [k]: false }))
      setActive(k)
    }
  }

  const close = (k: WindowKey) => {
    setOpen((o) => o.filter((x) => x !== k))
    setMinimized((m) => {
      const { [k]: _, ...rest } = m
      return rest
    })
    if (active === k && open.length > 1) {
      setActive(open.find((x) => x !== k) as WindowKey)
    }
  }

  const minimize = (k: WindowKey) => {
    setMinimized((m) => ({ ...m, [k]: true }))
    if (active === k) setActive(k)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Wallpaper */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-center"
        style={{
          backgroundImage: "url('/images/arc-linux-wallpaper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* subtle vignette for contrast */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-black/20" />

      {/* Desktop Icons */}
      <div className="relative mx-auto grid max-w-6xl grid-cols-4 gap-6 px-4 py-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
        <DesktopIcon label="About" onOpen={() => toggle("about")}>
          <User className="h-7 w-7" />
        </DesktopIcon>
        <DesktopIcon label="Projects" onOpen={() => toggle("projects")}>
          <FolderGit2 className="h-7 w-7" />
        </DesktopIcon>
        <DesktopIcon label="Skills" onOpen={() => toggle("skills")}>
          <BadgeCheck className="h-7 w-7" />
        </DesktopIcon>
        <DesktopIcon label="Resume" onOpen={() => toggle("resume")}>
          <FileText className="h-7 w-7" />
        </DesktopIcon>
        <DesktopIcon label="Terminal" onOpen={() => toggle("terminal")}>
          <Terminal className="h-7 w-7" />
        </DesktopIcon>
      </div>

      {/* Windows */}
      {open.includes("about") && !minimized["about"] && (
        <DesktopWindow
          id="about"
          title={titles.about}
          active={active === "about"}
          onFocus={() => setActive("about")}
          onClose={() => close("about")}
          onMinimize={() => minimize("about")}
          initialPos={{ x: 80, y: 120 }}
        >
          <AboutApp />
        </DesktopWindow>
      )}

      {open.includes("projects") && !minimized["projects"] && (
        <DesktopWindow
          id="projects"
          title={titles.projects}
          active={active === "projects"}
          onFocus={() => setActive("projects")}
          onClose={() => close("projects")}
          onMinimize={() => minimize("projects")}
          initialPos={{ x: 240, y: 180 }}
        >
          <ProjectsApp projects={projects} />
        </DesktopWindow>
      )}

      {open.includes("skills") && !minimized["skills"] && (
        <DesktopWindow
          id="skills"
          title={titles.skills}
          active={active === "skills"}
          onFocus={() => setActive("skills")}
          onClose={() => close("skills")}
          onMinimize={() => minimize("skills")}
          initialPos={{ x: 420, y: 120 }}
        >
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "Artificial Intelligence (AI)",
              "Machine Learning",
              "Web Development (React, HTML, CSS, JS)",
              "Python (Flask, API Design, Data Processing)",
              "Software Infrastructure & System Design",
              "Computer Vision (OpenCV, TensorFlow)",
            ].map((s) => (
              <li key={s} className="rounded border bg-secondary px-3 py-2 text-sm text-secondary-foreground">
                {s}
              </li>
            ))}
          </ul>
        </DesktopWindow>
      )}

      {open.includes("resume") && !minimized["resume"] && (
        <DesktopWindow
          id="resume"
          title={titles.resume}
          active={active === "resume"}
          onFocus={() => setActive("resume")}
          onClose={() => close("resume")}
          onMinimize={() => minimize("resume")}
          initialPos={{ x: 100, y: 100 }}
          className="max-h-96 w-full max-w-2xl"
        >
          <PDFViewerApp />
        </DesktopWindow>
      )}

      {open.includes("terminal") && !minimized["terminal"] && (
        <DesktopWindow
          id="terminal"
          title={titles.terminal}
          active={active === "terminal"}
          onFocus={() => setActive("terminal")}
          onClose={() => close("terminal")}
          onMinimize={() => minimize("terminal")}
          initialPos={{ x: 160, y: 320 }}
          className="bg-black text-green-400"
        >
          <pre className="text-xs leading-6">
            {`$ whoami
sousnigdho

$ skills --top
AI, ML, Python, React, Web

$ projects --list
AI Email Assistant, WeatherSphere, Product Price Sorter`}
          </pre>
        </DesktopWindow>
      )}

      {/* Taskbar */}
      <Taskbar
        tasks={open.map((k) => ({
          id: k,
          title: titles[k],
          active: active === k && !minimized[k],
          onClick: () => {
            if (minimized[k]) {
              setMinimized((m) => ({ ...m, [k]: false }))
              setActive(k)
            } else if (active === k) {
              setMinimized((m) => ({ ...m, [k]: true }))
            } else {
              setActive(k)
            }
          },
        }))}
        onLaunch={(id) => toggle(id as WindowKey)}
      />
    </div>
  )
}
