'use client';

import React from 'react';
import SkillPlayground from '@/components/interactive/SkillPlayground';
import { Cpu } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import DecryptedText from '@/components/animations/DecryptedText';
import SpotlightCard from '@/components/animations/SpotlightCard';

export default function Arsenal() {
  const toolkit = [
    {
      name: 'Code & Web',
      detail: 'I use these for most of my web and app work.',
      items: ['TypeScript', 'Python', 'Next.js / React', 'Streamlit']
    },
    {
      name: 'Applied AI',
      detail: 'I work on projects where sensor data or model output needs careful human review.',
      items: ['Multimodal systems', 'Signal-driven safety', 'Human-in-the-loop tools']
    },
    {
      name: 'Product Delivery',
      detail: 'I help teams choose the next task, assign it clearly, and finish it.',
      items: ['Planning', 'Clear ownership', 'Cross-functional delivery']
    }
  ];

  const selectedBuilds = [
    {
      name: 'SafeCity',
      detail: 'An on-device multimodal safety prototype I lead with StackOverHack.'
    },
    {
      name: 'TransparAI',
      detail: 'A Streamlit dashboard for reviewing public procurement data.'
    },
    {
      name: 'SAATHI',
      detail: 'A React and Django case-coordination prototype.'
    },
    {
      name: 'NykaaCopilot',
      detail: 'A makeup look demo with color matching and 2D try-on.'
    },
    {
      name: 'Wobble',
      detail: 'A Python CLI that finds order-dependent pytest failures.'
    }
  ];

  const workingStyle = [
    'Ask what needs solving first',
    'Make ownership clear',
    'Show working versions early',
    'Keep the team in the loop',
    'Give people credit'
  ];

  return (
    <div className="pt-8 pb-12 px-6 md:px-12 relative flex flex-col min-h-full">
      {/* Header Section */}
      <AnimatedContent className="mb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant/20 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="h-4 w-4 text-green" />
            <span className="font-mono text-[9px] text-green tracking-widest uppercase">BUILD_STACK // HOW I WORK</span>
          </div>
          <h1 className="font-syne text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight neon-text-glow">
            <DecryptedText text="What I Work With" delay={120} />
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            I write code and help teams decide what to build next. These are the tools I use, the projects they&apos;re part of, and a few habits that keep the work moving.
          </p>
        </div>
        <div className="font-mono text-[10px] text-on-surface-variant flex flex-col items-end">
          <span>MODE: HANDS-ON</span>
          <span>CURRENT: SAFECITY</span>
        </div>
      </header>
      </AnimatedContent>

      <div className="mb-10"><SkillPlayground /></div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
        {/* Toolkit */}
        <AnimatedContent delay={0.06} className="col-span-1 md:col-span-8">
        <SpotlightCard className="arsenal-toolkit h-full md:p-8 flex flex-col group overflow-hidden" spotlightColor="rgba(0, 255, 0, 0.08)">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent"></div>

          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent uppercase tracking-widest font-bold">The mix I use</span>
            </div>
            <span className="font-mono text-[9px] text-outline-variant">CODE + PRODUCT + PEOPLE</span>
          </div>

          <div className="space-y-6 flex-1 justify-center flex flex-col">
            {toolkit.map(area => (
              <div key={area.name} className="relative border-l-2 border-accent/60 bg-surface-container-high/30 px-4 py-3">
                <span className="font-mono text-xs text-on-surface uppercase tracking-wider">{area.name}</span>
                <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">{area.detail}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {area.items.map(item => (
                    <span key={item} className="border border-accent/20 bg-accent/5 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>
        </AnimatedContent>

        {/* Current focus */}
        <AnimatedContent delay={0.12} className="col-span-1 md:col-span-4">
        <SpotlightCard className="arsenal-focus h-full group flex flex-col" spotlightColor="rgba(255, 0, 255, 0.1)">
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-magenta"></div>
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-mono text-xs text-magenta uppercase tracking-widest font-bold">Right now</h2>
            <span className="font-mono text-[9px] text-outline-variant">IN MOTION</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="bg-surface-container-high/40 p-3 border-l-2 border-magenta">
              <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider">SafeCity</p>
              <p className="font-sans text-xs text-on-surface-variant mt-1">Leading the SafeCity prototype with StackOverHack and working on the app and backend.</p>
            </div>
            <div className="bg-surface-container-high/40 p-3 border-l-2 border-magenta">
              <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider">Vedonyx</p>
              <p className="font-sans text-xs text-on-surface-variant mt-1">Working with the team on product decisions and delivery.</p>
            </div>
            <div className="bg-surface-container-high/40 p-3 border-l-2 border-magenta">
              <p className="font-mono text-xs text-primary font-bold uppercase tracking-wider">Next</p>
              <p className="font-sans text-xs text-on-surface-variant mt-1">Making more of the work available to try and inspect.</p>
            </div>
          </div>
        </SpotlightCard>
        </AnimatedContent>

        {/* Selected builds */}
        <AnimatedContent delay={0.18} className="col-span-1 md:col-span-6">
        <SpotlightCard className="arsenal-builds h-full group">
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-mono text-xs text-accent uppercase tracking-widest font-bold">Selected builds</h2>
            <span className="font-mono text-[9px] text-outline-variant">05 BUILDS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selectedBuilds.map(item => (
              <div key={item.name} className="flex flex-col gap-2 border border-outline-variant/15 bg-background/30 p-3">
                <span className="font-mono text-[10px] text-accent uppercase tracking-wider">{item.name}</span>
                <p className="text-xs leading-relaxed text-on-surface-variant">{item.detail}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>
        </AnimatedContent>

        {/* Working style */}
        <AnimatedContent delay={0.24} className="col-span-1 md:col-span-6">
        <SpotlightCard className="arsenal-working-style h-full clip-card group" spotlightColor="rgba(0, 255, 0, 0.08)">
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-green"></div>
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-mono text-xs text-green uppercase tracking-widest font-bold">How I like to work</h2>
            <span className="font-mono text-[9px] text-outline-variant">TEAM MODE</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center content-center flex-grow py-3">
            {workingStyle.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1.5 bg-surface-container-high border border-outline-variant/20 font-mono text-[10px] text-on-surface uppercase hover:bg-green hover:text-black transition-colors cursor-crosshair rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </SpotlightCard>
        </AnimatedContent>
      </div>

      {/* Marquee Data strip */}
      <AnimatedContent delay={0.28} className="col-span-12 mt-8 border-t border-b border-outline-variant/20 py-2 flex items-center justify-between font-mono text-[9px] text-on-surface-variant overflow-hidden whitespace-nowrap">
        <div className="flex gap-16 animate-marquee-loop">
          <span>// COO AT VEDONYX</span>
          <span>// BUILD THE USEFUL VERSION FIRST</span>
          <span>// KEEP MY HANDS IN THE CODE</span>
          <span>// LEAD SAFECITY WITH STACKOVERHACK</span>
          <span>// STACKOVERHACK</span>
          <span>// SHARE CREDIT CLEARLY</span>
        </div>
      </AnimatedContent>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
