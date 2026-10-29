'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Award, BadgeCheck, BriefcaseBusiness, Github, Home, Linkedin, Menu, Network, ShieldCheck, Terminal, X } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, UNSTOP_URL } from '@/app/data/portfolio';

const pages = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'About', path: '/identity', icon: ShieldCheck },
  { label: 'Projects', path: '/archive', icon: BriefcaseBusiness },
  { label: 'Skills', path: '/arsenal', icon: Network },
  { label: 'Wins', path: '/achievements', icon: Award },
  { label: 'Credentials', path: '/credentials', icon: BadgeCheck },
  { label: 'Terminal', path: '/terminal', icon: Terminal },
];

export default function HUDLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const isHome = pathname === '/';

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = 'scaleX(' + (total > 0 ? window.scrollY / total : 0) + ')';
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuPanel.current?.querySelector<HTMLElement>('a')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
      if (event.key !== 'Tab') return;
      const items = Array.from(menuPanel.current?.querySelectorAll<HTMLElement>('a,button') || []);
      if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items[items.length - 1]?.focus(); }
      else if (!event.shiftKey && document.activeElement === items[items.length - 1]) { event.preventDefault(); items[0]?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); };
  }, [menuOpen]);

  const active = (path: string) => path === '/' ? isHome : pathname === path || (path === '/archive' && pathname.startsWith('/projects/'));

  return (
    <div className={'expedition-shell ' + (isHome ? 'expedition-home' : 'expedition-interior')}>
      <a className="expedition-skip" href="#main-content">Skip to content</a>
      <header className="expedition-header">
        <Link href="/" className="expedition-mark" aria-label="Sousnigdho Das, home">SD<span>✦</span></Link>
        <nav className="expedition-topnav" aria-label="Featured navigation">
          {isHome ? <><Link href="#about">About</Link><Link href="#selected-work">Work</Link><Link href="#approach">Approach</Link><Link href="#contact">Contact</Link></> : <><Link href="/archive" aria-current={active('/archive') ? 'page' : undefined}>Projects</Link><Link href="/identity" aria-current={active('/identity') ? 'page' : undefined}>About</Link><Link href="/arsenal" aria-current={active('/arsenal') ? 'page' : undefined}>Skills</Link><Link href="/achievements" aria-current={active('/achievements') ? 'page' : undefined}>Milestones</Link></>}
        </nav>
        <a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="expedition-contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
        <button ref={menuButton} className="expedition-menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="expedition-menu" onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        <div ref={progress} className="expedition-progress" aria-hidden="true" />
      </header>

      <nav className="expedition-rail expedition-rail-left" aria-label="Primary navigation">
        {pages.map(({ label, path, icon: Icon }) => <Link key={path} href={path} aria-label={label} title={label} aria-current={active(path) ? 'page' : undefined}><Icon size={21} strokeWidth={1.65} /><span>{label}</span></Link>)}
      </nav>
      <aside className="expedition-rail expedition-rail-right" aria-label="Social links">
        <a href={GITHUB_URL} target="_blank" rel="me noreferrer" aria-label="GitHub" title="GitHub"><Github size={23} /></a>
        <a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={23} /></a>
        <a href={UNSTOP_URL} target="_blank" rel="me noreferrer" aria-label="Unstop" title="Unstop"><span className="expedition-unstop">U</span></a>
      </aside>

      {menuOpen && <div ref={menuPanel} id="expedition-menu" className="expedition-mobile-menu"><nav aria-label="Mobile navigation">{pages.map(({ label, path, icon: Icon }) => <Link key={path} href={path} aria-current={active(path) ? 'page' : undefined} onClick={() => setMenuOpen(false)}><Icon size={20} />{label}<ArrowUpRight size={16} /></Link>)}</nav><a href={LINKEDIN_URL} target="_blank" rel="me noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a></div>}

      <div className="expedition-main-wrap"><main id="main-content" tabIndex={-1}>{children}</main>
        <footer className="expedition-footer"><Link href="/" className="expedition-footer-mark">Sousnigdho Das<span>✦</span></Link><p>Code, people, and ideas in motion.</p><div><a href={GITHUB_URL} target="_blank" rel="me noreferrer">GitHub</a><a href={LINKEDIN_URL} target="_blank" rel="me noreferrer">LinkedIn</a><Link href="/vault">Behind the site</Link></div><small>© 2026 Sousnigdho Das</small></footer>
      </div>
    </div>
  );
}
