'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getProject, type PortfolioProject } from '@/app/data/portfolio';
import ProjectVisual from '@/components/ui/ProjectVisual';

const featured = ['namma-space', 'agent-extension', 'scopecheck', 'safecity', 'transparai', 'wobble']
  .map(getProject)
  .filter((project): project is PortfolioProject => Boolean(project));

export default function FeaturedProjects() {
  const [selected, setSelected] = useState(featured[0]);
  const href = `/projects/${selected.slug}`;

  return (
    <>
      <fieldset className="festival-project-picker">
        <legend className="sr-only">Choose a featured project</legend>
        {featured.map(project => (
          <label key={project.slug}>
            <input
              type="radio"
              name="featured-project"
              className="sr-only"
              checked={selected.slug === project.slug}
              onChange={() => setSelected(project)}
              aria-controls="featured-project-preview"
            />
            <span>{project.shortTitle}</span>
          </label>
        ))}
      </fieldset>
      <div id="featured-project-preview">
        <article key={selected.slug} className="festival-featured-card festival-featured-primary" aria-label={selected.shortTitle}>
          <Link href={href} className="festival-featured-visual" aria-label={`Read about ${selected.shortTitle}`}>
            <ProjectVisual slug={selected.slug} title={selected.shortTitle} />
          </Link>
          <div className="festival-featured-body">
            <div className="festival-featured-meta"><span>{selected.category}</span><span>{selected.year}</span></div>
            <h3><Link href={href}>{selected.shortTitle}</Link></h3>
            <p>{selected.summary}</p>
            <Link href={href} className="festival-featured-link">Explore project <ArrowUpRight size={16} /></Link>
          </div>
        </article>
      </div>
    </>
  );
}
