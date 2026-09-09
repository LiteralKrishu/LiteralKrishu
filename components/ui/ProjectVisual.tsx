'use client';
import React, { useRef } from 'react';
import { Activity, AudioLines, Eye, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';

export default function ProjectVisual({ slug, className = '' }: { slug: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty('--tilt-x', `${-(event.clientY - rect.top - rect.height / 2) / rect.height * 12}deg`);
    ref.current?.style.setProperty('--tilt-y', `${(event.clientX - rect.left - rect.width / 2) / rect.width * 16}deg`);
  };
  return (
    <div ref={ref} className={`project-visual visual-${slug} ${className}`} onPointerMove={move} onPointerLeave={() => { ref.current?.style.setProperty('--tilt-x', '0deg'); ref.current?.style.setProperty('--tilt-y', '0deg'); }} role="img" aria-label={slug === 'safecity' ? 'Conceptual SafeCity illustration: sound, motion and vision around a safety shield' : slug === 'transparai' ? 'Conceptual TransparAI illustration: layered data and analysis' : 'Conceptual Glow Glitter illustration: a sculptural brand monogram'}>
      <div className="visual-grid" /><span className="visual-caption">{slug === 'safecity' ? 'Signals → understanding' : slug === 'transparai' ? 'Data → clarity' : 'Direction → experience'}</span>
      <div className="visual-object">
        {slug === 'safecity' ? <><div className="orbital-ring ring-one" /><div className="orbital-ring ring-two" /><div className="safety-core"><ShieldCheck size={68} strokeWidth={1} /><span>SafeCity</span><small>MULTIMODAL SYSTEM</small></div><span className="signal-chip chip-a"><AudioLines size={17} />Audio</span><span className="signal-chip chip-b"><Eye size={17} />Vision</span><span className="signal-chip chip-c"><Activity size={17} />Motion</span><span className="satellite" /></> : slug === 'transparai' ? <><div className="data-sheet sheet-back" /><div className="data-sheet sheet-front"><div className="sheet-header"><span>TransparAI</span><ArrowUpRight size={18} /></div><div className="chart-bars">{[35, 65, 45, 88, 58, 76, 48].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div><div className="sheet-lines"><i /><i /></div></div><span className="data-orb" /></> : <><div className="glow-halo" /><div className="glow-monogram">G<span>g</span></div><Sparkles className="glow-spark spark-one" size={30} strokeWidth={1} /><Sparkles className="glow-spark spark-two" size={22} strokeWidth={1} /><div className="glow-name">GLOW GLITTER</div></>}
      </div>
      <span className="visual-footnote">Concept illustration</span><span className="visual-plus" aria-hidden="true">+</span>
    </div>
  );
}
