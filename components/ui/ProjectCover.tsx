import { ArrowUpRight, Globe2 } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectCover({ slug, title, url }: { slug: string; title: string; url: string }) {
  return (
    <div className="live-project-preview">
      <div className="live-preview-bar">
        <span className="preview-window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="preview-domain"><Globe2 size={12} />{new URL(url).hostname}</span>
        <ArrowUpRight size={14} aria-hidden="true" />
      </div>
      <div className="live-preview-viewport">
        <ProjectVisual slug={slug} title={title} className="live-preview-art" />
      </div>
    </div>
  );
}
