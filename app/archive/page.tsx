import React from 'react';
import { ArrowUpRight, Database, Github, Globe2 } from 'lucide-react';
import Link from 'next/link';
import AnimatedContent from '@/components/animations/AnimatedContent';
import SpotlightCard from '@/components/animations/SpotlightCard';
import { projects } from '@/app/data/portfolio';

export default function Archive() {
  return (
    <div className="relative flex min-h-full flex-col px-5 pb-14 pt-10 sm:px-8 md:px-12">
      <AnimatedContent className="mb-10">
        <header className="flex flex-col items-start justify-between gap-5 border-b border-outline-variant/20 pb-7 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Database className="size-4 text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Selected work</span>
            </div>
            <h1 className="max-w-3xl text-balance font-syne text-4xl font-black tracking-[-0.04em] text-primary md:text-5xl">
              Projects I&apos;ve helped bring to life
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-on-surface-variant">
              Multimodal safety infrastructure, open-source civic technology, and an ecommerce experience. Each entry links to the evidence, code, or live product available for it.
            </p>
          </div>
          <div className="rounded-md border border-outline-variant/20 bg-surface px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-on-surface-variant">
            {projects.length} documented projects
          </div>
        </header>
      </AnimatedContent>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const destinationUrl = project.repositoryUrl ?? project.liveUrl;
          const DestinationIcon = project.repositoryUrl ? Github : Globe2;
          const destinationLabel = project.repositoryUrl ? 'View GitHub' : 'Visit website';

          return (
            <AnimatedContent key={project.slug} delay={index * 0.06} className="h-full">
              <SpotlightCard className="group flex h-full flex-col p-0 transition-colors duration-150 hover:border-accent/40">
                <div className="flex items-center justify-between border-b border-outline-variant/15 px-5 py-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-outline">
                    Project {String(index + 1).padStart(2, '0')} / {project.year}
                  </span>
                  <span className="rounded-sm border border-accent/20 bg-accent/5 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-accent">
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-grow flex-col p-5 sm:p-6">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-on-surface-variant">
                    {project.category}
                  </span>
                  <h2 className="mt-4 text-balance font-syne text-2xl font-bold tracking-[-0.025em] text-primary transition-colors duration-150 group-hover:text-accent">
                    {project.shortTitle}
                  </h2>
                  <p className="mt-4 flex-grow text-pretty text-sm leading-7 text-on-surface-variant">
                    {project.summary}
                  </p>

                  <div className="mt-7 flex flex-col gap-2 border-t border-outline-variant/15 pt-5 sm:flex-row">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-outline-variant/30 px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-primary transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Case study
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                    {destinationUrl && (
                      <a
                        href={destinationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-accent px-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-black transition-colors duration-150 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        <DestinationIcon className="size-3.5" />
                        {destinationLabel}
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          );
        })}
      </div>
    </div>
  );
}
