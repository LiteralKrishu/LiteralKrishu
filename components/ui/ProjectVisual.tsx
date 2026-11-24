'use client';

import Image from 'next/image';
import type { PointerEvent } from 'react';
import { ArrowRight, Bot, Check, FileText, GitPullRequest, ScanFace, Terminal } from 'lucide-react';

const screenshots: Record<string, string> = {
  safecity: '/images/safecity-preview.png',
  transparai: '/images/transparai-vendor-analysis.jpg',
  'namma-space': '/images/nammaspace-route.jpg',
};

function ProjectArtwork({ slug }: { slug: string }) {
  if (screenshots[slug]) {
    return <Image src={screenshots[slug]} alt="" fill sizes="(max-width: 700px) 90vw, 660px" className="project-art-screenshot" />;
  }
  switch (slug) {
    case 'agent-extension':
      return <div className="project-art-window">
        <div className="project-art-heading"><Bot size={18} /> AgentExtension <GitPullRequest size={16} /></div>
        <div className="project-art-editor"><span>src / totals.ts</span><code>function total(items: number[]) {'{'}</code></div>
        <div className="project-art-diff"><code>− return items.reduce(add);</code><code>+ return items.reduce(add, 0);</code></div>
      </div>;
    case 'scopecheck':
      return <div className="project-art-window">
        <div className="project-art-heading"><FileText size={18} /> ScopeCheck · Review desk</div>
        <dl className="project-art-clauses"><dt>Agreement</dt><dd>Two revision rounds</dd><dt>Request</dt><dd>Add a third round</dd></dl>
        <div className="project-art-row"><FileText size={15} /> Draft change request</div>
      </div>;
    case 'saathi':
      return <div className="project-art-window">
        <div className="project-art-heading"><FileText size={18} /> Case coordination</div>
        <div className="project-art-workflow"><span>Intake</span><ArrowRight size={14} /><span>Review</span><ArrowRight size={14} /><span>Follow-up</span></div>
        <div className="project-art-row"><Check size={15} /> Role-scoped access</div>
      </div>;
    case 'nykaa-copilot':
      return <div className="project-art-window project-art-makeup">
        <div><ScanFace size={64} strokeWidth={1} /><span>2D try-on</span></div>
        <div><span>Shade palette</span><div className="project-art-swatches"><i /><i /><i /><i /></div></div>
      </div>;
    case 'wobble':
      return <div className="project-art-window project-art-terminal">
        <div className="project-art-heading"><Terminal size={18} /> Pytest order check</div>
        <span>01 <i>›</i> Shuffle the tests</span>
        <span>02 <i>›</i> Reproduce the failure</span>
        <span>03 <i>›</i> Verify the patch</span>
      </div>;
    default:
      return null;
  }
}

const descriptions: Record<string, string> = {
  safecity: 'SafeCity website screenshot',
  transparai: 'TransparAI vendor analysis dashboard showing market share and flagged contracts for a sample dataset',
  'agent-extension': 'Illustration of the editor and a proposed code change',
  scopecheck: 'Illustrated ScopeCheck review comparing a request for a third revision with a two-round agreement',
  'namma-space': 'NammaSpace floor map with walking directions from Classroom 504 to Room 401',
  saathi: 'Illustration of the case intake, review, and follow-up workflow',
  'nykaa-copilot': 'Illustration of a face preview and color swatches',
  wobble: 'Illustration of the test shuffle, failure reproduction, and patch verification steps',
};

export default function ProjectVisual({ slug, title, className = '' }: { slug: string; title: string; className?: string }) {
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    element.style.setProperty('--art-x', `${(x - 0.5) * 24}px`);
    element.style.setProperty('--art-y', `${(y - 0.5) * 18}px`);
    element.style.setProperty('--art-light-x', `${x * 100}%`);
    element.style.setProperty('--art-light-y', `${y * 100}%`);
  };

  const reset = (event: PointerEvent<HTMLDivElement>) => {
    for (const property of ['--art-x', '--art-y', '--art-light-x', '--art-light-y']) {
      event.currentTarget.style.removeProperty(property);
    }
  };

  return (
    <div className={`project-visual project-art visual-${slug} ${className}`} onPointerMove={move} onPointerLeave={reset} role="img" aria-label={descriptions[slug] ?? title}>
      <div className={screenshots[slug] ? 'project-art-stage project-art-screen' : 'project-art-stage'} aria-hidden="true"><ProjectArtwork slug={slug} /></div>
    </div>
  );
}
