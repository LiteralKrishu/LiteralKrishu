'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import AnimatedMobileMenu, { menuItemMotion } from './AnimatedMobileMenu';
import ScrollEffects from '@/components/animations/ScrollEffects';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Award, BadgeCheck, BriefcaseBusiness, Github, Linkedin, Menu, Network, Power, ShieldCheck, Terminal, X, Sun, Moon, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, UNSTOP_URL } from '@/app/data/portfolio';

const sections = [
  { label: 'Home', path: '/', icon: Power },
  { label: 'About', path: '/identity', icon: ShieldCheck },
  { label: 'Work', path: '/archive', icon: BriefcaseBusiness },
  { label: 'Skills', path: '/arsenal', icon: Network },
  { label: 'Wins', path: '/achievements', icon: Award },
  { label: 'Certificates', path: '/credentials', icon: BadgeCheck },
  { label: 'Terminal', path: '/terminal', icon: Terminal },
];

export default function HUDLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => { setTheme(document.documentElement.dataset.theme || 'dark'); }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    let pending = 0;
    const update = () => {
      pending = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    const onScroll = () => { if (!pending) pending = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => { cancelAnimationFrame(pending); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLElement>('button')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus(); }
      if (event.key !== 'Tab') return;
      const items = Array.from(menu.current?.querySelectorAll<HTMLElement>('a, button') || []) as HTMLElement[];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try { localStorage.setItem('portfolio-theme', next); } catch { /* Theme still works when storage is unavailable. */ }
    setTheme(next);
  };
  const current = (path: string) => path === '/' ? pathname === '/' : pathname === path || (path === '/archive' && pathname.startsWith('/projects/'));
  const navigation = (mobile = false) => sections.map(({ label, path, icon: Icon }, index) => {
    const link = <Link key={path} href={path} aria-label={label} title={collapsed && !mobile ? label : undefined} aria-current={current(path) ? 'page' : undefined} onClick={() => setMenuOpen(false)} className={`shell-nav-link ${current(path) ? 'is-active' : ''}`}>
      <Icon size={18} /><span>{label}</span><small>{String(index + 1).padStart(2, '0')}</small>
    </Link>;
    return mobile ? <motion.div key={path} variants={reducedMotion ? undefined : menuItemMotion}>{link}</motion.div> : (
      <div key={path} className="sidebar-nav-item" style={{ '--nav-order': index } as React.CSSProperties}>{link}</div>
    );
  });

  return (
    <div className={`site-shell ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="ambient-glow" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />
      <header className="shell-header">
        <Link href="/" className="shell-brand">SOUSNIGDHO<span>.OS</span><span className="brand-dot" /></Link>
        <span className="header-caption">A little code. A lot of curiosity.</span>
        <div className="header-actions">
          <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><Sun size={16} className={theme === 'light' ? 'selected' : ''} /><Moon size={16} className={theme === 'dark' ? 'selected' : ''} /></button>
          <a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="contact-button">Let&apos;s talk <ArrowUpRight size={16} /></a>
          <button ref={menuButton} className="mobile-menu-button icon-button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        <div ref={progress} className="reading-progress" aria-hidden="true" />
      </header>
      <aside className="shell-sidebar">
        <Link href="/identity" className="sidebar-profile" aria-label="About Sousnigdho Das"><Image src="/images/sousnigdho-das.png" alt="" width={42} height={42} className="profile-photo sidebar-profile-photo" /><span className="sidebar-profile-copy"><strong>Sousnigdho Das</strong><small><i /> COO at Vedonyx</small></span></Link>
        <p className="sidebar-label">Explore</p>
        <nav id="sidebar-navigation" aria-label="Primary navigation">{navigation()}</nav>
        <div className="sidebar-bottom"><div className="sidebar-note"><span className="status-dot" /> Open to meaningful work</div><button className="collapse-button" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!collapsed} aria-controls="sidebar-navigation" onClick={() => setCollapsed(!collapsed)}>{collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}<span>Collapse panel</span></button></div>
      </aside>
      <AnimatePresence>{menuOpen && <AnimatedMobileMenu key="mobile-menu" menuRef={menu}><div className="mobile-navigation-heading"><p className="eyebrow">Explore the portfolio</p><button className="icon-button" aria-label="Close menu" onClick={() => { setMenuOpen(false); menuButton.current?.focus(); }}><X size={22} /></button></div><nav aria-label="Mobile navigation">{navigation(true)}</nav><a className="mobile-contact" href={LINKEDIN_URL} target="_blank" rel="me noreferrer">Let&apos;s talk on LinkedIn <ArrowUpRight size={18} /></a></AnimatedMobileMenu>}</AnimatePresence>
      <ScrollEffects /><div className="shell-content"><main id="main-content" tabIndex={-1}>{children}</main>
        <footer className="shell-footer"><div><Link href="/" className="footer-signature">Sousnigdho<span> ↗</span></Link><p>© 2026 Sousnigdho Das <span className="footer-status">· Still building</span></p></div><div className="footer-links"><a href={LINKEDIN_URL} target="_blank" rel="me noreferrer"><Linkedin size={15} />LinkedIn</a><a href={GITHUB_URL} target="_blank" rel="me noreferrer"><Github size={15} />GitHub</a><a href={UNSTOP_URL} target="_blank" rel="me noreferrer">Unstop <ArrowUpRight size={14} /></a><Link href="/vault">Behind the interface <ArrowUpRight size={14} /></Link></div></footer>
      </div>
    </div>
  );
}
