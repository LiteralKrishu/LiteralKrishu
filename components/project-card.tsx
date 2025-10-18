import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

type Props = {
  title: string
  date: string
  description: string
  skills: string[]
  href: string
  image: string
}

export function ProjectCard({ title, date, description, skills, href, image }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Card className="h-full overflow-hidden transition-transform hover:-translate-y-1">
        <div className="relative h-44 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} preview`}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s} className="rounded-md border bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                {s}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <span className="text-sm text-muted-foreground">View on GitHub →</span>
        </CardFooter>
      </Card>
    </a>
  )
}
