'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import type { TechCloudControls } from './tech-cloud-scene';
import { technologies } from './technologies';
import './skill-playground.css';

export default function SkillPlayground({ className = '' }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const scene = useRef<TechCloudControls | null>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'fallback'>('loading');
  const hintId = useId();

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update(); query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const element = host.current;
    if (!element || reduced) return;
    let disposed = false, started = false;
    setStatus('loading');
    // Load the renderer only as the tech stack approaches the viewport.
    const observer = new IntersectionObserver(([entry]) => {
      if (disposed || started || !entry?.isIntersecting) return;
      started = true; observer.disconnect();
      import('./tech-cloud-scene').then(({ createTechCloud }) => {
        if (disposed) return;
        scene.current = createTechCloud(element, () => {}, () => {
          if (!disposed) { scene.current = null; setStatus('fallback'); }
        });
        scene.current.pause(pausedRef.current);
        setStatus('ready');
      }).catch(error => {
        if (disposed) return;
        console.warn('The 3D tech stack is unavailable; showing the technology list.', error);
        setStatus('fallback');
      });
    }, { rootMargin: '240px' });
    observer.observe(element);
    return () => { disposed = true; observer.disconnect(); scene.current?.dispose(); scene.current = null; };
  }, [reduced]);

  const ready = status === 'ready' && !reduced;
  const togglePause = () => {
    const value = !pausedRef.current;
    pausedRef.current = value; setPaused(value); scene.current?.pause(value);
  };

  return <section className={`skill-playground tech-cloud ${className}`} aria-label="Interactive technology balls" aria-describedby={hintId} tabIndex={0}
    onKeyDown={event => {
      if (event.key === ' ') { event.preventDefault(); togglePause(); }
      const moves: Record<string, [number, number]> = { ArrowLeft: [-.8, 0], ArrowRight: [.8, 0], ArrowUp: [0, .8], ArrowDown: [0, -.8] };
      if (moves[event.key]) { event.preventDefault(); scene.current?.nudge(0, ...moves[event.key]); }
    }} onBlur={() => scene.current?.release()}>
    <p id={hintId} className="cloud-sr-only">Drag and throw the technology balls. Keyboard: Space pauses or resumes motion; arrow keys move the TypeScript ball.</p>
    <span className="cloud-sr-only" role="status">{reduced ? 'Reduced motion enabled' : paused ? 'Animation paused' : ''}</span>
    <div className={`cloud-stage ${ready ? 'is-ready' : ''}`}>
      <div ref={host} className="cloud-canvas-host" />
      {!ready && <div className="cloud-fallback" aria-label="Technologies">{technologies.map(technology => <div className="cloud-fallback-ball" key={technology.name} style={{ '--ball-color': technology.color } as React.CSSProperties}><Image src={technology.logo} alt="" width={48} height={48} /><span>{technology.name}</span></div>)}</div>}
      {ready && <p className="cloud-sr-only">{technologies.map(technology => technology.name).join(', ')}</p>}
    </div>
  </section>;
}
