import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ExternalLink } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { achievements, SITE_URL } from '@/app/data/portfolio';

export const metadata: Metadata = {
  title: 'Wins & Milestones',
  description: 'Hackathon results, project milestones, and collaborative recognition from the work of Sousnigdho Das and Team StackOverHack.',
  alternates: { canonical: '/achievements' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/achievements`,
    title: 'Wins & Milestones | Sousnigdho Das',
    description: 'Hackathon results, project milestones, and collaborative recognition from the work of Sousnigdho Das and Team StackOverHack.',
  },
};

export default function AchievementsPage() {
  return (
    <div className="pt-8 pb-12 px-6 md:px-12 relative flex flex-col min-h-full">
      <AnimatedContent className="mb-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant/20 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-magenta" />
              <span className="font-mono text-[9px] text-magenta tracking-widest uppercase">TEAM WINS // SHARED CREDIT</span>
            </div>
            <h1 className="font-syne text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight neon-text-glow">
              Wins &amp; Milestones
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
              Hackathons are where I learn fastest: short timelines, ambitious ideas, and teammates who make the difficult parts possible. These are a few moments I&apos;m proud of.
            </p>
          </div>
          <Link href="/archive" className="font-mono text-[10px] uppercase tracking-widest text-accent hover:text-primary">
            See the projects →
          </Link>
        </header>
      </AnimatedContent>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <AnimatedContent key={achievement.title} delay={index * 0.07} className="h-full">
            <SpotlightCard className="h-full flex flex-col" spotlightColor="rgba(255, 0, 255, 0.1)">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-[9px] text-outline-variant">MILESTONE-{String(index + 1).padStart(2, '0')}</span>
                <span className="font-mono text-[9px] text-green uppercase">{achievement.date}</span>
              </div>
              <h2 className="mt-5 font-syne text-xl font-bold text-primary uppercase">{achievement.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{achievement.summary}</p>
              <div className="mt-5 border-l-2 border-magenta/60 pl-4">
                <span className="font-mono text-[9px] uppercase tracking-widest text-magenta">Context</span>
                <p className="mt-2 text-xs leading-relaxed text-outline">{achievement.note}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {achievement.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent hover:text-primary"
                  >
                    {source.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
}
