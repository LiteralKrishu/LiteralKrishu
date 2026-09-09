import React from 'react';
import { Database } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import ProjectShowcase from '@/components/ui/ProjectShowcase';
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

      <ProjectShowcase />
    </div>
  );
}
