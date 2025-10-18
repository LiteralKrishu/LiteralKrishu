import { Button } from "@/components/ui/button"
import { HeroCanvas } from "@/components/three/hero-canvas"

type Props = {
  name: string
  tagline: string
  location: string
  email: string
  linkedin: string
  github: string
  quote: string
}

export function Hero({ name, tagline, location, email, linkedin, github, quote }: Props) {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>

      <header className="sticky top-0 z-20 w-full border-b bg-background/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-semibold tracking-tight">
            {name}
          </a>
          <nav className="hidden gap-4 sm:flex">
            {[
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Education", "#education"],
              ["Certificates", "#certificates"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="flex flex-col justify-center">
          <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl">{name}</h1>
          <p className="mt-3 text-pretty text-muted-foreground">{tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground">{location}</p>
          <p className="mt-4 italic text-muted-foreground">“{quote}”</p>
          <div className="mt-6 flex items-center gap-3">
            <a href={`mailto:${email}`}>
              <Button variant="default">Contact Me</Button>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">LinkedIn</Button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">GitHub</Button>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-xl border bg-card/30 backdrop-blur" />
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-card">
            {/* The 3D scene is behind via absolute in the section; this card provides depth framing */}
          </div>
        </div>
      </div>
    </section>
  )
}
