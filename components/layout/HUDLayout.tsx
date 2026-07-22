'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Menu,
  Network,
  Power,
  ShieldCheck,
  Signal,
  Terminal as TerminalIcon,
  X,
} from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, UNSTOP_URL } from '@/app/data/portfolio';

interface HUDLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/identity' },
  { label: 'Work', path: '/archive' },
  { label: 'Skills', path: '/arsenal' },
  { label: 'Wins', path: '/achievements' },
  { label: 'Certificates', path: '/credentials' },
];

const sidebarLinks = [
  { label: 'Home', path: '/', icon: Power },
  { label: 'About', path: '/identity', icon: ShieldCheck },
  { label: 'Work', path: '/archive', icon: BriefcaseBusiness },
  { label: 'Skills', path: '/arsenal', icon: Network },
  { label: 'Wins', path: '/achievements', icon: Award },
  { label: 'Certificates', path: '/credentials', icon: BadgeCheck },
  { label: 'Terminal', path: '/terminal', icon: TerminalIcon },
];

export default function HUDLayout({ children }: HUDLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date().toTimeString().split(' ')[0]);
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isCurrentPath = (path: string) => {
    if (path === '/') return pathname === '/';
    if (path === '/archive') return pathname === '/archive' || pathname.startsWith('/projects/');
    return pathname === path;
  };

  return (
    <div className="relative flex min-h-screen max-w-[100vw] flex-col overflow-x-hidden bg-background font-sans text-on-surface">
      <div className="noise-texture pointer-events-none fixed inset-0 z-0" />

      <header className="fixed top-0 z-50 flex h-14 w-full max-w-[100vw] items-center justify-between border-b border-outline-variant/25 bg-background/95 px-4 backdrop-blur-md sm:px-6">
        <div className="flex min-w-0 items-center gap-8">
          <Link href="/" className="shrink-0 font-syne text-sm font-black tracking-[-0.03em] text-primary transition-colors duration-150 hover:text-accent sm:text-lg">
            SOUSNIGDHO<span className="text-accent">.OS</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = isCurrentPath(item.path);
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-150 ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-on-surface-variant hover:bg-surface-container-high/40 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="me noreferrer"
            className="hidden min-h-9 items-center rounded-md border border-outline-variant/30 px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-on-surface-variant transition-colors duration-150 hover:border-accent hover:text-accent lg:flex"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="me noreferrer"
            className="hidden min-h-9 items-center gap-2 rounded-md border border-outline-variant/30 px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-on-surface-variant transition-colors duration-150 hover:border-accent hover:text-accent lg:flex"
          >
            <Github className="size-3.5" />
            GitHub
          </a>
          <Link
            href="/terminal"
            aria-label="Open interactive terminal"
            className="flex size-9 items-center justify-center rounded-md text-on-surface-variant transition-colors duration-150 hover:bg-surface-container-high/40 hover:text-accent"
          >
            <TerminalIcon className="size-4" />
          </Link>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="flex size-9 items-center justify-center rounded-md text-on-surface-variant transition-colors duration-150 hover:bg-surface-container-high/40 hover:text-accent md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-14 z-40 flex flex-col border-b border-outline-variant/25 bg-background/95 p-6 backdrop-blur-md md:hidden">
          <nav className="mt-6 flex flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = isCurrentPath(item.path);
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-outline-variant/15 py-4 font-syne text-xl font-semibold transition-colors duration-150 ${
                    isActive ? 'text-accent' : 'text-primary hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto space-y-6 border-t border-outline-variant/20 pt-6">
            <div className="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em]">
              <a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="text-on-surface-variant hover:text-accent">LinkedIn</a>
              <a href={GITHUB_URL} target="_blank" rel="me noreferrer" className="text-on-surface-variant hover:text-accent">GitHub</a>
              <a href={UNSTOP_URL} target="_blank" rel="me noreferrer" className="text-on-surface-variant hover:text-accent">Unstop</a>
            </div>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-outline">
              <span>{currentTime} IST</span>
              <span>COO / Vedonyx</span>
            </div>
          </div>
        </div>
      )}

      <aside
        className={`fixed left-0 top-14 z-30 hidden h-[calc(100vh-56px-32px)] flex-col overflow-hidden border-r border-outline-variant/25 bg-surface-container-lowest/80 lg:flex ${
          sidebarOpen ? 'w-60' : 'w-16'
        }`}
      >
        <div className="flex items-center gap-3 border-b border-outline-variant/20 p-4">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/5 font-mono text-[10px] font-bold text-accent">
            SD
          </span>
          {sidebarOpen && (
            <div className="min-w-0">
              <span className="block truncate font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Sousnigdho Das</span>
              <span className="mt-1 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-on-surface-variant">
                <span className="size-1.5 rounded-full bg-green" />
                COO at Vedonyx
              </span>
            </div>
          )}
        </div>

        <nav className="flex flex-1 flex-col gap-1 py-5" aria-label="Section navigation">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = isCurrentPath(link.path);
            return (
              <Link
                key={link.label}
                href={link.path}
                title={sidebarOpen ? undefined : link.label}
                aria-current={isActive ? 'page' : undefined}
                className={`mx-2 flex min-h-10 items-center gap-3 rounded-md px-3 transition-colors duration-150 ${
                  isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-on-surface-variant hover:bg-surface-container-high/40 hover:text-primary'
                }`}
              >
                <Icon className="size-4 shrink-0" />
                {sidebarOpen && <span className="font-mono text-[10px] uppercase tracking-[0.14em]">{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-outline-variant/20 p-3">
          <button
            type="button"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            className="min-h-9 w-full rounded-md border border-outline-variant/30 px-2 font-mono text-[9px] uppercase tracking-[0.12em] text-on-surface-variant transition-colors duration-150 hover:border-accent hover:text-accent"
          >
            {sidebarOpen ? 'Collapse panel' : 'Expand'}
          </button>
        </div>
      </aside>

      <div className={`flex min-w-0 max-w-[100vw] flex-grow flex-col overflow-x-hidden pb-8 pt-14 ${sidebarOpen ? 'lg:pl-60' : 'lg:pl-16'}`}>
        <main className="relative z-10 flex min-w-0 max-w-full flex-1 flex-col overflow-x-hidden">
          {children}
        </main>
      </div>

      <footer className="fixed bottom-0 z-50 hidden h-8 w-full items-center justify-between border-t border-outline-variant/25 bg-background/95 px-6 font-mono text-[9px] uppercase tracking-[0.1em] text-outline sm:flex">
        <span>© 2026 Sousnigdho Das</span>
        <div className="hidden items-center gap-5 sm:flex">
          <a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="flex items-center gap-1.5 transition-colors duration-150 hover:text-accent">
            <Linkedin className="size-3" /> LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="me noreferrer" className="flex items-center gap-1.5 transition-colors duration-150 hover:text-accent">
            <Github className="size-3" /> GitHub
          </a>
          <Link href="/vault" className="hidden transition-colors duration-150 hover:text-accent lg:block">Behind the interface</Link>
          <span className="flex items-center gap-1.5 text-on-surface-variant">
            <Signal className="size-3 text-green" /> Still building
          </span>
        </div>
      </footer>
    </div>
  );
}
