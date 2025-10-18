"use client"

import {
  Clock,
  Github,
  Linkedin,
  Mail,
  AppWindow,
  User2,
  FolderGit2,
  BadgeCheck,
  FileText,
  Terminal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Task = {
  id: string
  title: string
  active: boolean
  onClick: () => void
}

export function Taskbar({ tasks, onLaunch }: { tasks: Task[]; onLaunch?: (id: string) => void }) {
  const [now, setNow] = useState<Date>(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

  const pinned = [
    { id: "about", Icon: User2, label: "About" },
    { id: "projects", Icon: FolderGit2, label: "Projects" },
    { id: "skills", Icon: BadgeCheck, label: "Skills" },
    { id: "resume", Icon: FileText, label: "Resume" },
    { id: "terminal", Icon: Terminal, label: "Terminal" },
  ] as const

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3">
          {/* Start / Launcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-md border px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground">
              <AppWindow className="h-4 w-4" />
              Start
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-48">
              <DropdownMenuItem onClick={() => onLaunch?.("about")}>
                <User2 className="mr-2 h-4 w-4" /> About
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLaunch?.("projects")}>
                <FolderGit2 className="mr-2 h-4 w-4" /> Projects
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLaunch?.("skills")}>
                <BadgeCheck className="mr-2 h-4 w-4" /> Skills
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLaunch?.("resume")}>
                <FileText className="mr-2 h-4 w-4" /> Resume
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLaunch?.("terminal")}>
                <Terminal className="mr-2 h-4 w-4" /> Terminal
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="ml-1 flex items-center gap-2">
            {pinned.map(({ id, Icon, label }) => (
              <motion.button
                key={id}
                title={label}
                aria-label={label}
                onClick={() => onLaunch?.(id)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                className="grid h-8 w-8 place-items-center rounded-md border bg-card text-card-foreground shadow hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </motion.button>
            ))}
          </div>

          {/* Open tasks */}
          <div className="ml-2 flex items-center gap-2">
            {tasks.map((t) => (
              <motion.button
                key={t.id}
                onClick={t.onClick}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-md border px-3 py-1 text-sm ring-1 ring-border/50 transition ${
                  t.active
                    ? "bg-primary text-primary-foreground shadow"
                    : "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {t.title}
                {t.active && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-primary/80" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* System tray + clock */}
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="mailto:sousnigdhodas@gmail.com" aria-label="Email" className="hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sousnigdho-das-b1740b371"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/LiteralKrishu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <span className="flex items-center gap-1 text-xs">
            <Clock className="h-4 w-4" />
            {time}
          </span>
        </div>
      </div>
    </div>
  )
}
