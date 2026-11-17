'use client';

import React from 'react';
import { BadgeCheck, Cpu, Github, Linkedin, User, Network } from 'lucide-react';
import Link from 'next/link';
import AnimatedContent from '@/components/animations/AnimatedContent';
import DecryptedText from '@/components/animations/DecryptedText';
import Magnet from '@/components/animations/Magnet';
import SpotlightCard from '@/components/animations/SpotlightCard';
import {
  EDUCATION_SUMMARY,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  STACKOVERHACK_GITHUB_URL,
  UNSTOP_URL,
} from '@/app/data/portfolio';

export default function Identity() {
  return (
    <div className="pt-8 pb-12 px-6 md:px-12 grid grid-cols-12 gap-6 relative">
      {/* HUD Header Accent */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent opacity-50"></div>
      
      {/* Page Header */}
      <AnimatedContent className="col-span-12 mb-4 pl-4">
        <h1 className="font-syne text-3xl md:text-4xl font-extrabold text-primary uppercase tracking-tight neon-text-glow">
          <DecryptedText text="SOUSNIGDHO DAS" delay={120} />
        </h1>
        <p className="font-mono text-xs text-secondary tracking-widest mt-1 uppercase">
          SOFTWARE ENGINEERING MANAGEMENT // B.TECH CSE (AI/ML) @ NST // STACKOVERHACK™ // COO @ VEDONYX &amp; ODT
        </p>
      </AnimatedContent>

      {/* Bio & Details (Left Column) */}
      <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
        {/* Bio Card */}
        <AnimatedContent delay={0.06}>
        <SpotlightCard className="bg-surface-container border-outline-variant/20 shadow-[0_0_15px_rgba(0,221,221,0.02)]">
          <div className="hud-corner hud-corner-tl"></div>
          <div className="hud-corner hud-corner-tr"></div>
          <div className="hud-corner hud-corner-bl"></div>
          <div className="hud-corner hud-corner-br"></div>
          
          <div className="flex justify-between items-start mb-4 border-b border-outline-variant/20 pb-2">
            <h3 className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">ABOUT_ME</h3>
            <span className="font-mono text-[9px] text-outline">@LITERALKRISHU</span>
          </div>
          
          <div className="mb-6 space-y-5 text-sm leading-relaxed text-text-primary md:text-base">
            <div>
              <h4 className="mb-1 font-mono text-[10px] uppercase tracking-wider text-accent">About</h4>
              <p>I am Sousnigdho Das. Pursuing B.Tech in CSE (AI/ML) at Newton School of Technology (NST). Working as Chief Operating Officer at Vedonyx &amp; ODT, I plan multi-stage software projects and coordinate cross-functional teams.</p>
            </div>
            <div>
              <h4 className="mb-1 font-mono text-[10px] uppercase tracking-wider text-accent">How I work</h4>
              <p>Guiding software architecture across the full project lifecycle. I help teams keep technical decisions aligned with long-term roadmaps and turn algorithmic research into practical, production-ready systems. I also build with <Link href={STACKOVERHACK_GITHUB_URL} target="_blank" rel="noreferrer" className="text-accent underline underline-offset-4">StackOverHack™</Link>.</p>
            </div>
          </div>

          <div className="mb-6 border border-accent/25 bg-accent/5 p-4">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">Open for collaboration</h4>
            <p className="mt-2 text-sm leading-relaxed text-text-primary">I am open to working with teams and individuals to plan, build, and deliver projects from research through production. <a href={EMAIL_URL} className="text-accent underline underline-offset-4">Get in touch</a>.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/10 pt-4">
            <div>
              <span className="block font-mono text-[9px] text-outline tracking-wider uppercase mb-1">LOCATION</span>
              <span className="font-mono text-xs text-accent font-bold tracking-wider">PUNE DISTRICT, INDIA</span>
            </div>
            <div>
              <span className="block font-mono text-[9px] text-outline tracking-wider uppercase mb-1">GITHUB</span>
              <span className="bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider inline-block rounded-sm">
                @LITERALKRISHU
              </span>
            </div>
          </div>
        </SpotlightCard>
        </AnimatedContent>

        {/* Training Log Timeline */}
        <AnimatedContent delay={0.12}>
        <SpotlightCard className="bg-surface-container border-outline-variant/20" spotlightColor="rgba(255, 0, 255, 0.1)">
          <div className="hud-corner hud-corner-tl border-magenta"></div>
          <div className="hud-corner hud-corner-br border-magenta"></div>
          
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-mono text-xs text-magenta uppercase tracking-widest font-bold">A_FEW_CHAPTERS</h3>
            <Cpu className="w-4 h-4 text-magenta" />
          </div>
          
          <div className="relative pl-4 border-l border-outline-variant/30 space-y-6">
            <div className="relative">
              <div className="absolute w-2 h-2 bg-magenta rounded-full -left-[21px] top-1.5 shadow-[0_0_8px_rgba(255,0,255,0.8)]"></div>
              <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider">{EDUCATION_SUMMARY}</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-0.5">Taking what I learn into projects and hackathons</p>
            </div>
            <div className="relative">
              <div className="absolute w-2 h-2 bg-outline rounded-full -left-[21px] top-1.5"></div>
              <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider">Chief Operating Officer — Vedonyx and ODT</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-0.5">Guiding architecture, teams, and delivery</p>
            </div>
            <div className="relative">
              <div className="absolute w-2 h-2 bg-outline rounded-full -left-[21px] top-1.5"></div>
              <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider">Team Leader — StackOverHack / SafeCity</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-0.5">Building the safety prototype with StackOverHack</p>
            </div>
            <div className="relative">
              <div className="absolute w-2 h-2 bg-outline rounded-full -left-[21px] top-1.5"></div>
              <h4 className="font-mono text-xs text-primary font-bold uppercase tracking-wider">Third Prize — TIH–IIT Mandi Multimodal AI Hackathon</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-0.5">Our SafeCity team placed third · ₹25,000 team prize</p>
            </div>
          </div>
        </SpotlightCard>
        </AnimatedContent>
      </div>

      {/* Stats & Current Vector (Right Column) */}
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
        {/* Current Vector */}
        <AnimatedContent delay={0.16}>
        <SpotlightCard className="bg-surface-container border-outline-variant/20 border-l-2 border-l-accent">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">RIGHT_NOW</h3>
            <span className="w-2 h-2 rounded-full bg-green animate-pulse shadow-[0_0_8px_rgba(0,255,0,0.8)]"></span>
          </div>
          <p className="font-mono text-xs text-accent border border-outline-variant/20 p-4 bg-background/50 leading-relaxed">
            &gt; Planning multi-stage software projects and coordinating cross-functional teams at Vedonyx &amp; ODT.
          </p>
        </SpotlightCard>
        </AnimatedContent>

        {/* Operational Metrics Cards */}
        <div className="grid grid-cols-2 gap-6">
          <AnimatedContent delay={0.22}>
          <SpotlightCard className="bg-surface-container border-outline-variant/20 p-4 relative flex flex-col items-center justify-center text-center group hover:border-accent transition-colors duration-300">
            <User className="w-6 h-6 text-accent mb-2 group-hover:scale-115 transition-transform" />
            <span className="font-mono text-[9px] text-outline mb-1 block tracking-wider">CHIEF OPERATING OFFICER</span>
            <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">VEDONYX + ODT</span>
          </SpotlightCard>
          </AnimatedContent>
          <AnimatedContent delay={0.26}>
          <SpotlightCard className="bg-surface-container border-outline-variant/20 p-4 relative flex flex-col items-center justify-center text-center group hover:border-magenta transition-colors duration-300" spotlightColor="rgba(255, 0, 255, 0.1)">
            <Network className="w-6 h-6 text-magenta mb-2 group-hover:scale-115 transition-transform" />
            <span className="font-mono text-[9px] text-outline mb-1 block tracking-wider">COLLABORATION</span>
            <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">STACKOVERHACK</span>
          </SpotlightCard>
          </AnimatedContent>
        </div>

        {/* Action area */}
        <AnimatedContent delay={0.3} className="mt-auto flex w-full flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap lg:justify-end">
          <Magnet className="w-full sm:w-auto">
            <Link href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="flex w-full items-center justify-center gap-2 border border-accent bg-background/30 px-5 py-3 font-mono text-xs tracking-widest text-accent backdrop-blur-sm transition-all duration-300 btn-cut glitch-hover sm:w-auto">
              <Linkedin className="w-4 h-4" />
              LINKEDIN
            </Link>
          </Magnet>
          <Magnet className="w-full sm:w-auto">
            <Link href={GITHUB_URL} target="_blank" rel="me noreferrer" className="flex w-full items-center justify-center gap-2 border border-accent bg-background/30 px-5 py-3 font-mono text-xs tracking-widest text-accent backdrop-blur-sm transition-all duration-300 btn-cut glitch-hover sm:w-auto">
              <Github className="w-4 h-4" />
              GITHUB @LITERALKRISHU
            </Link>
          </Magnet>
          <Magnet className="w-full sm:w-auto">
            <Link href={STACKOVERHACK_GITHUB_URL} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 border border-green bg-background/30 px-5 py-3 font-mono text-xs tracking-widest text-green backdrop-blur-sm transition-all duration-300 btn-cut glitch-hover sm:w-auto">
              <Github className="w-4 h-4" />
              STACKOVERHACK GITHUB
            </Link>
          </Magnet>
          <Magnet className="w-full sm:w-auto">
            <Link href={UNSTOP_URL} target="_blank" rel="me noreferrer" className="flex w-full items-center justify-center gap-2 border border-magenta bg-background/30 px-5 py-3 font-mono text-xs tracking-widest text-magenta backdrop-blur-sm transition-all duration-300 btn-cut glitch-hover sm:w-auto">
              <BadgeCheck className="w-4 h-4" />
              UNSTOP CREDENTIALS
            </Link>
          </Magnet>
        </AnimatedContent>
      </div>
    </div>
  );
}
