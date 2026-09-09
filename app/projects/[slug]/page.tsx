import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, FileCheck2, Github, Globe2 } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import ProjectCover from '@/components/ui/ProjectCover';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { getProject, projects, SITE_URL } from '@/app/data/portfolio';

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found', robots: { index: false, follow: false } };

  return {
    title: project.shortTitle,
    description: project.seoDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/projects/${project.slug}`,
      title: `${project.title} | Sousnigdho Das`,
      description: project.seoDescription,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const primaryUrl = project.liveUrl ?? project.repositoryUrl;
  const PrimaryIcon = project.liveUrl ? Globe2 : Github;
  const primaryLabel = project.liveUrl ? 'Open live website' : 'View GitHub repository';

  const sourceCodeSchema = project.repositoryUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        '@id': `${SITE_URL}/projects/${project.slug}#source-code`,
        name: project.title,
        url: `${SITE_URL}/projects/${project.slug}`,
        description: project.seoDescription,
        codeRepository: project.repositoryUrl,
        programmingLanguage: project.programmingLanguages,
        contributor: {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: 'Sousnigdho Das',
          url: `${SITE_URL}/`,
        },
      }
    : null;

  return (
    <div className="relative flex min-h-full flex-col px-5 pb-14 pt-10 sm:px-8 md:px-12">
      {sourceCodeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sourceCodeSchema).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <AnimatedContent className="mb-7">
        <Link href="/archive" className="font-mono text-[10px] uppercase tracking-[0.16em] text-on-surface-variant transition-colors duration-150 hover:text-accent">
          ← All projects
        </Link>
      </AnimatedContent>

      <AnimatedContent delay={0.05}>
        <header className="border-b border-outline-variant/20 pb-9">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em]">
            <span className="text-accent">{project.category}</span>
            <span className="text-outline">/</span>
            <span className="text-on-surface-variant">{project.status}</span>
            <span className="text-outline">/</span>
            <span className="text-on-surface-variant">{project.year}</span>
          </div>
          <h1 className="mt-5 max-w-5xl text-balance font-syne text-4xl font-black tracking-[-0.04em] text-primary md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-on-surface-variant md:text-lg">{project.summary}</p>
          {primaryUrl && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black transition-colors duration-150 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <PrimaryIcon className="size-4" />
              {primaryLabel}
              <ExternalLink className="size-3.5" />
            </a>
          )}
        </header>
      </AnimatedContent>

      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail-preview mt-8" aria-label={`Open ${project.shortTitle} live website`}><ProjectCover title={project.shortTitle} url={project.liveUrl} /></a>}

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <AnimatedContent delay={0.1}>
          <SpotlightCard className="h-full">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">What we built</h2>
            <div className="mt-6 space-y-5">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3">
                  <FileCheck2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-pretty text-sm leading-7 text-on-surface-variant">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-outline-variant/20 pt-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-outline">My part</span>
              <p className="mt-2 text-pretty text-sm leading-7 text-primary">{project.role}</p>
            </div>
          </SpotlightCard>
        </AnimatedContent>

        <AnimatedContent delay={0.16}>
          <SpotlightCard className="h-full">
            <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">Evidence and links</h2>
            <div className="mt-5 space-y-3">
              {project.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center justify-between gap-4 rounded-md border border-outline-variant/20 bg-background/30 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-150 hover:border-accent hover:text-accent"
                >
                  {source.label}
                  <ExternalLink className="size-3.5 shrink-0" />
                </a>
              ))}
            </div>
            <div className="mt-6 border-l-2 border-accent/60 pl-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">Source note</span>
              <p className="mt-2 text-pretty text-xs leading-6 text-outline">{project.sourceNote}</p>
            </div>
          </SpotlightCard>
        </AnimatedContent>
      </div>
    </div>
  );
}
