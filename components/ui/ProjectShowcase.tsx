import Link from 'next/link';
import { ArrowUpRight, Github, Globe2 } from 'lucide-react';
import { projects } from '@/app/data/portfolio';
import AnimatedContent from '@/components/animations/AnimatedContent';
import ProjectCover from './ProjectCover';

export default function ProjectShowcase() {
  return <div className="project-showcase">{projects.map((project, index) => {
    return <AnimatedContent key={project.slug} variant="scroll-card" direction={index % 2 === 0 ? 1 : -1} className={`project-card ${index === 0 ? 'project-featured' : ''}`}>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-visual-link" aria-label={`Open ${project.shortTitle} live website`}><ProjectCover title={project.shortTitle} url={project.liveUrl!} /></a>
      <div className="project-card-body"><div className="project-meta"><span>{String(index + 1).padStart(2, '0')} / {project.year}</span><span className="project-status">{project.status}</span></div><p className="eyebrow project-category">{project.category}</p><h2><Link href={`/projects/${project.slug}`}>{project.shortTitle}<ArrowUpRight size={24} /></Link></h2><p className="project-summary">{project.summary}</p>
        <details className="project-role"><summary>My contribution</summary><p>{project.role}</p></details>
        <div className="project-actions"><Link href={`/projects/${project.slug}`} className="primary-button">Read case study <ArrowUpRight size={16} /></Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-external"><Globe2 size={16} />Open website<ArrowUpRight size={14} /></a>}{project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="project-external"><Github size={16} />GitHub</a>}</div>
      </div>
    </AnimatedContent>;
  })}</div>;
}
