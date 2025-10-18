import { Desktop } from "@/components/desktop/desktop"
import type { Project } from "@/components/apps/projects-app"

const projects: Project[] = [
  {
    title: "AI Powered Email Assistant",
    date: "Sep 2025",
    description:
      "Automates triage for large volumes of support emails: sentiment analysis, priority assignment, key detail extraction, and LLM-powered replies.",
    skills: ["Python", "Machine Learning", "API Integration", "React"],
    href: "https://github.com/LiteralKrishu/AI-Powered-Email-Assistant",
    image: "/ai-email-assistant-dashboard-ui.jpg",
  },
  {
    title: "WeatherSphere",
    date: "Aug 2025",
    description:
      "Professional weather web app integrating real-time APIs with a polished, responsive UI for clarity and engagement.",
    skills: ["HTML", "CSS", "JavaScript", "Web APIs"],
    href: "https://github.com/LiteralKrishu/WeatherSphere",
    image: "/weather-application-ui-with-map-and-charts.jpg",
  },
  {
    title: "Product Price Sorter",
    date: "May–Jun 2025",
    description:
      "Aggregates prices from major Indian e-commerce platforms to find the cheapest price for a given item.",
    skills: ["Python", "Data Processing"],
    href: "https://github.com/LiteralKrishu/Products-Price-Sorter",
    image: "/ecommerce-price-comparison-interface.jpg",
  },
]

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Desktop projects={projects} />
    </main>
  )
}
