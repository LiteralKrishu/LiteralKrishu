'use client';

import React from 'react';
import Link from 'next/link';
import { Settings, Info } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import DecryptedText from '@/components/animations/DecryptedText';
import Magnet from '@/components/animations/Magnet';
import SpotlightCard from '@/components/animations/SpotlightCard';

export default function Vault() {
  const colorsList = [
    { name: 'Void Background', hex: '#050505', usage: 'Deepest layer, infinite contrast canvas' },
    { name: 'Console Surface', hex: '#131313', usage: 'Component background, structural containers' },
    { name: 'Electric Cyan', hex: '#00dddd', usage: 'Primary action color, interactive states' },
    { name: 'Neon Magenta', hex: '#ff00ff', usage: 'Secondary categories, alert signals' },
    { name: 'Neon Green', hex: '#00ff00', usage: 'Status indicator, successful syncs' },
    { name: 'Charcoal Accent', hex: '#1c1b1b', usage: 'Grid line separators, outline borders' }
  ];

  return (
    <div className="pt-8 pb-12 px-6 md:px-12 relative flex flex-col min-h-full">
      {/* Header Section */}
      <AnimatedContent className="mb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant/20 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-4 h-4 text-magenta animate-spin-slow" />
            <span className="font-mono text-[9px] text-magenta tracking-widest uppercase">INTERFACE_NOTES // BEHIND THE BUILD</span>
          </div>
          <h1 className="font-syne text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight neon-text-glow">
            <DecryptedText text="Behind the Interface" delay={120} />
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            I wanted this portfolio to feel like a working console: a little playful, quick to move through, and close to the tools I spend my time in.
          </p>
        </div>
        <div className="font-mono text-[10px] text-on-surface-variant flex flex-col items-end">
          <span>THEME: SOUSNIGDHO.OS</span>
          <span>MODE: PERSONAL CONSOLE</span>
        </div>
      </header>
      </AnimatedContent>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">
        {/* Colors Table (Left Column) */}
        <AnimatedContent delay={0.06} className="col-span-1 lg:col-span-7">
        <SpotlightCard className="h-full" spotlightColor="rgba(0, 221, 221, 0.1)">
          <div className="hud-corner hud-corner-tl"></div>
          <div className="hud-corner hud-corner-br"></div>
          <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-6 font-bold flex items-center gap-2">
            <Info className="w-4 h-4" />
            The palette
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">The original console palette is preserved below. The current interface adds purple dark mode and a vibrant light mode.</p>
          <div className="flex flex-col gap-4">
            {colorsList.map((c, index) => (
              <AnimatedContent key={c.name} delay={0.08 + index * 0.04} y={12} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-outline-variant/10 pb-3 gap-2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 border border-outline-variant/30 rounded-sm" style={{ backgroundColor: c.hex }}></div>
                  <div className="flex flex-col">
                    <span className="font-syne text-sm font-bold text-primary uppercase tracking-tight">{c.name}</span>
                    <span className="font-sans text-[11px] text-on-surface-variant">{c.usage}</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-accent bg-accent/5 border border-accent/15 px-2 py-1 select-all">{c.hex}</span>
              </AnimatedContent>
            ))}
          </div>
        </SpotlightCard>
        </AnimatedContent>

        {/* UI Primitive Showcases (Right Column) */}
        <section className="col-span-1 lg:col-span-5 flex flex-col gap-6">
          {/* Interface rationale */}
          <AnimatedContent delay={0.12}>
          <SpotlightCard spotlightColor="rgba(255, 0, 255, 0.1)">
            <h3 className="font-mono text-xs text-magenta uppercase tracking-widest mb-4 font-bold">Why a console?</h3>
            <div className="space-y-4 text-sm leading-relaxed text-on-surface-variant">
              <p>
                Most of my work lives somewhere between a terminal, a product discussion, and a half-finished experiment. The visual language here brings those worlds together.
              </p>
              <p>
                The neon HUD is the playful part. The practical part is simpler: clear routes, visible context, and a fast path to the projects themselves.
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-green">
                BUILD THE USEFUL VERSION FIRST // THEN MAKE IT MEMORABLE
              </p>
            </div>
          </SpotlightCard>
          </AnimatedContent>

          {/* Useful shortcuts */}
          <AnimatedContent delay={0.18}>
          <SpotlightCard spotlightColor="rgba(0, 255, 0, 0.08)">
            <h3 className="font-mono text-xs text-green uppercase tracking-widest mb-6 font-bold">Keep exploring</h3>
            <div className="flex flex-col gap-4">
              <Magnet>
                <Link href="/archive" className="block w-full border border-accent bg-background/50 px-4 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-accent transition-colors btn-cut hover:bg-accent hover:text-black">
                  SEE MY WORK
                </Link>
              </Magnet>
              <Magnet>
                <Link href="/terminal" className="block w-full bg-magenta px-4 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-white transition-colors btn-cut hover:bg-fuchsia-600">
                  OPEN TERMINAL
                </Link>
              </Magnet>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="rounded-sm border border-green/20 bg-green/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-green">CURIOUS</span>
                <span className="rounded-sm border border-magenta/20 bg-magenta/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-magenta">HANDS-ON</span>
                <span className="rounded-sm border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-accent">STILL BUILDING</span>
              </div>
            </div>
          </SpotlightCard>
          </AnimatedContent>
        </section>
      </div>

      <style jsx global>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
