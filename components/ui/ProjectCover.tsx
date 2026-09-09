'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Globe2 } from 'lucide-react';

export default function ProjectCover({ title, url, eager = false, poster }: { title: string; url: string; eager?: boolean; poster?: string }) {
  const viewport = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const hostname = new URL(url).hostname;
  const embedUrl = hostname.endsWith('.streamlit.app') ? `${url}?embed=true` : url;

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const resize = new ResizeObserver(() => {
      const scale = element.clientWidth / 1200;
      if (!scale) return;
      element.style.setProperty('--preview-scale', String(scale));
      element.style.setProperty('--preview-height', `${element.clientHeight / scale}px`);
    });
    resize.observe(element);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: '200px' });
    observer.observe(element);
    return () => { resize.disconnect(); observer.disconnect(); };
  }, []);

  return <div className="live-project-preview">
    <div className="live-preview-bar"><span className="preview-window-dots" aria-hidden="true"><i /><i /><i /></span><span className="preview-domain"><Globe2 size={12} />{hostname}</span><ArrowUpRight size={14} aria-hidden="true" /></div>
    <div ref={viewport} className="live-preview-viewport">
      {!loaded && (poster ? <Image src={poster} alt={`${title} website screenshot`} fill sizes="(max-width: 700px) 100vw, 50vw" priority={eager} className="live-preview-poster" /> : <div className="live-preview-loading"><Globe2 size={26} /><strong>{title}</strong><span>{failed ? 'Open the website to explore' : 'Loading website preview…'}</span></div>)}
      {visible && !failed && <iframe src={embedUrl} title={`${title} live website preview`} className={loaded ? 'is-loaded' : ''} tabIndex={-1} aria-hidden="true" loading={eager ? 'eager' : 'lazy'} sandbox="allow-scripts allow-same-origin" referrerPolicy="strict-origin-when-cross-origin" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
    </div>
    <div className="live-preview-footer"><span><i />{poster && !loaded ? 'Website preview' : 'Live website preview'}</span><span>Open website <ArrowUpRight size={13} /></span></div>
  </div>;
}
