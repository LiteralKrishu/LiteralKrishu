'use client';

import React, { useRef } from 'react';
import { HeartHandshake, ScanFace, ServerCog, Layers3 } from 'lucide-react';

const visuals = {
  saathi: { icon: HeartHandshake, label: 'CASE COORDINATION', note: 'People → support' },
  'saathi-backend': { icon: ServerCog, label: 'COORDINATION API', note: 'Records → action' },
  'nykaa-copilot': { icon: ScanFace, label: 'MAKEUP LOOK EXPLORER', note: 'Inspiration → preview' },
} as const;

export default function ProjectVisual({ slug, title, className = '' }: { slug: string; title: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visual = visuals[slug as keyof typeof visuals];
  const Icon = visual?.icon ?? Layers3;

  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty('--tilt-x', `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 12}deg`);
    ref.current?.style.setProperty('--tilt-y', `${(event.clientX - rect.left - rect.width / 2) / rect.width * 16}deg`);
  };

  return (
    <div ref={ref} className={`project-visual visual-${slug} ${className}`} onPointerMove={move} onPointerLeave={() => { ref.current?.style.setProperty('--tilt-x', '0deg'); ref.current?.style.setProperty('--tilt-y', '0deg'); }} role="img" aria-label={`Concept illustration for ${title}`}>
      <div className="visual-grid" />
      <span className="visual-caption">{visual?.note ?? 'Idea → implementation'}</span>
      <div className="visual-object">
        <div className="concept-panel">
          <span className="concept-icon"><Icon size={52} strokeWidth={1.2} /></span>
          <strong>{title}</strong>
          <small>{visual?.label ?? 'PUBLIC PROJECT'}</small>
        </div>
        <span className="concept-orbit concept-orbit-one" />
        <span className="concept-orbit concept-orbit-two" />
      </div>
      <span className="visual-footnote">Concept illustration</span><span className="visual-plus" aria-hidden="true">+</span>
    </div>
  );
}
