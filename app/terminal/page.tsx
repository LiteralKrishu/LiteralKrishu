'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronRight,
  CornerDownLeft,
  Copy,
  ExternalLink,
  Folder,
  History,
  Maximize2,
  Minus,
  Terminal as TermIcon,
  X
} from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import DecryptedText from '@/components/animations/DecryptedText';
import Magnet from '@/components/animations/Magnet';
import { GITHUB_URL, LINKEDIN_URL, SITE_URL, UNSTOP_URL } from '@/app/data/portfolio';

type LineType = 'system' | 'input' | 'output' | 'error' | 'success' | 'muted';

interface TerminalLine {
  text: string;
  type: LineType;
}

const quickCommands = ['help', 'profile', 'projects', 'achievements', 'credentials', 'links', 'clear'];

const fileSystem = {
  'about.txt': [
    'Sousnigdho Das',
    'AI/ML developer, full-stack engineer, and COO at Vedonyx.',
    'I build intelligent systems that speak, see, and scale.',
    'I lead SafeCity with StackOverHack and publish code as @LiteralKrishu.'
  ],
  'skills.json': [
    '{',
    '  "build_with": ["TypeScript", "Python", "Next.js / React", "Streamlit"],',
    '  "care_about": ["useful AI", "clear ownership", "shared credit"],',
    '  "current": ["SafeCity", "Vedonyx", "StackOverHack"]',
    '}'
  ],
  'routes.md': ['/identity', '/arsenal', '/archive', '/achievements', '/credentials', '/terminal']
};

const routes: Record<string, string> = {
  home: '/',
  identity: '/identity',
  arsenal: '/arsenal',
  archive: '/archive',
  achievements: '/achievements',
  credentials: '/credentials',
  terminal: '/terminal'
};

const bootLines: TerminalLine[] = [
  { text: 'Hey, I’m Sousnigdho. Welcome to the slightly nerdier way around my portfolio.', type: 'muted' },
  { text: 'Portfolio OS 1.0.0', type: 'system' },
  { text: 'Loading projects, experiments, and build notes ...', type: 'system' },
  { text: 'Type "help", or start with "profile".', type: 'success' },
  { text: '', type: 'output' }
];

export default function Terminal() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>(bootLines);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const prompt = useMemo(() => 'sousnigdho@portfolio-os ~ %', []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const focusInput = () => inputRef.current?.focus();

  const appendLines = (nextLines: TerminalLine[]) => {
    setLines(current => [...current, ...nextLines]);
  };

  const copyContact = async () => {
    try {
      await navigator.clipboard.writeText(LINKEDIN_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
      return true;
    } catch {
      return false;
    }
  };

  const runCommand = async (rawCommand: string) => {
    const command = rawCommand.trim();
    const normalized = command.toLowerCase();
    const [action, ...args] = normalized.split(/\s+/);
    const argument = args.join(' ');
    const inputLine: TerminalLine = { text: `${prompt} ${rawCommand}`, type: 'input' };

    if (!command) {
      appendLines([inputLine]);
      return;
    }

    setCommandHistory(current => [command, ...current.filter(item => item !== command)].slice(0, 24));
    setHistoryIndex(null);

    if (action === 'clear') {
      setLines([]);
      return;
    }

    if (action === 'open') {
      const target = routes[argument];

      if (!target) {
        appendLines([
          inputLine,
          { text: `open: route "${argument || '[empty]'}" not found`, type: 'error' },
          { text: 'Available routes: home, identity, arsenal, archive, achievements, credentials, terminal', type: 'muted' }
        ]);
        return;
      }

      appendLines([
        inputLine,
        { text: `Opening ${target} ...`, type: 'success' }
      ]);
      window.setTimeout(() => router.push(target), 250);
      return;
    }

    if (action === 'cat') {
      const fileName = argument as keyof typeof fileSystem;
      const file = fileSystem[fileName];

      appendLines([
        inputLine,
        ...(file
          ? file.map(text => ({ text, type: 'output' as const }))
          : [
              { text: `cat: ${argument || '[empty]'}: No such file`, type: 'error' as const },
              { text: 'Try: cat about.txt, cat skills.json, cat routes.md', type: 'muted' as const }
            ])
      ]);
      return;
    }

    if (action === 'copy' && ['contact', 'linkedin'].includes(argument)) {
      const didCopy = await copyContact();
      appendLines([
        inputLine,
        didCopy
          ? { text: `Copied ${LINKEDIN_URL} to clipboard.`, type: 'success' }
          : { text: `Clipboard unavailable. Contact: ${LINKEDIN_URL}`, type: 'error' }
      ]);
      return;
    }

    switch (normalized) {
      case 'help':
        appendLines([
          inputLine,
          { text: 'Useful commands', type: 'system' },
          { text: '  profile            The short version of who I am.', type: 'output' },
          { text: '  focus              What I build and how I work.', type: 'output' },
          { text: '  projects           Things I have built with good people.', type: 'output' },
          { text: '  achievements       Milestones I am proud of.', type: 'output' },
          { text: '  credentials        Hackathons and challenges I have taken part in.', type: 'output' },
          { text: '  approach           How I like to run projects.', type: 'output' },
          { text: '  links              Show contact and route shortcuts.', type: 'output' },
          { text: '  open <route>       Navigate: home, identity, arsenal, archive, achievements, credentials, terminal.', type: 'output' },
          { text: '  cat <file>         Read about.txt, skills.json, or routes.md.', type: 'output' },
          { text: '  copy contact       Copy LinkedIn contact URL.', type: 'output' },
          { text: '  pwd / ls / date    Familiar shell utilities.', type: 'output' },
          { text: '  clear              Clear the terminal.', type: 'output' }
        ]);
        break;
      case 'about':
      case 'profile':
      case 'whoami':
        appendLines([
          inputLine,
          { text: 'I’m Sousnigdho Das.', type: 'system' },
          { text: 'AI/ML developer, full-stack engineer, and COO at Vedonyx.', type: 'output' },
          { text: 'I lead SafeCity with StackOverHack and keep my public code at @LiteralKrishu.', type: 'output' },
          { text: 'I have also worked on TransparAI and shared Glow Glitter’s design direction with Harshit Gupta.', type: 'success' }
        ]);
        break;
      case 'skills':
      case 'focus':
        appendLines([
          inputLine,
          { text: 'What I work on', type: 'system' },
          { text: '  Engineering      Full-stack products and applied AI', type: 'output' },
          { text: '  Operations       Teams, priorities, and delivery at Vedonyx', type: 'output' },
          { text: '  Current build    SafeCity with StackOverHack', type: 'output' },
          { text: '  Design           Shared direction for Glow Glitter', type: 'output' }
        ]);
        break;
      case 'projects':
        appendLines([
          inputLine,
          { text: 'Things I have helped build', type: 'system' },
          { text: '  SafeCity       Production-grade multimodal safety system I lead with StackOverHack', type: 'output' },
          { text: '  TransparAI     Open-source procurement-transparency prototype', type: 'output' },
          { text: '  Glow Glitter   Ecommerce design direction shared with Harshit Gupta', type: 'success' },
          { text: 'Run "open archive" for the build stories and project links.', type: 'muted' }
        ]);
        break;
      case 'achievements':
        appendLines([
          inputLine,
          { text: 'A few milestones I’m proud of', type: 'system' },
          { text: '  2025  Our StackOverHack team finished third at SFLC.in', type: 'output' },
          { text: '  2025  Our SafeCity team finished third at TIH–IIT Mandi', type: 'output' },
          { text: '  2026  The SmallAI programme named me as SafeCity team leader', type: 'output' },
          { text: '  2026  Harshit and I shared Glow Glitter’s design direction', type: 'success' },
          { text: 'Run "open achievements" for the original announcements.', type: 'muted' }
        ]);
        break;
      case 'credentials':
      case 'certificates':
        appendLines([
          inputLine,
          { text: 'Hackathons and challenges I have shown up for', type: 'system' },
          { text: '  Seven certificates are collected under /credentials.', type: 'output' },
          { text: '  IIT Mandi, IIT Madras, ATLAS SkillTech, CodeTantra2K25, and more.', type: 'output' },
          { text: '  I keep participation separate from placements because they tell different stories.', type: 'success' },
          { text: 'Run "open credentials" for certificates and event links.', type: 'muted' }
        ]);
        break;
      case 'architecture':
      case 'system design':
      case 'approach':
        appendLines([
          inputLine,
          { text: 'How I like to work', type: 'system' },
          { text: '  1. Give every task a clear owner.', type: 'output' },
          { text: '  2. Make the next priority obvious.', type: 'output' },
          { text: '  3. Ship in small, visible steps.', type: 'output' },
          { text: '  4. Close the loop.', type: 'success' }
        ]);
        break;
      case 'links':
      case 'contact':
        appendLines([
          inputLine,
          { text: 'Contact and navigation', type: 'system' },
          { text: `  LinkedIn: ${LINKEDIN_URL}`, type: 'output' },
          { text: `  GitHub:   ${GITHUB_URL}`, type: 'output' },
          { text: `  Unstop:   ${UNSTOP_URL}`, type: 'output' },
          { text: `  Portfolio: ${SITE_URL}`, type: 'output' },
          { text: '  Routes: /identity /arsenal /archive /achievements /credentials /terminal', type: 'output' },
          { text: 'Run "copy contact" to copy the LinkedIn URL.', type: 'muted' }
        ]);
        break;
      case 'pwd':
        appendLines([inputLine, { text: 'sousnigdhodas.vedonyx.in', type: 'output' }]);
        break;
      case 'ls':
        appendLines([
          inputLine,
          { text: 'about.txt   skills.json   routes.md   projects/   achievements/   credentials/', type: 'output' }
        ]);
        break;
      case 'date':
        appendLines([inputLine, { text: new Date().toString(), type: 'output' }]);
        break;
      case 'unlock':
        appendLines([
          inputLine,
          { text: 'Hidden artwork index unlocked.', type: 'success' },
          { text: 'Hint: the strongest interfaces feel like tools first, posters second.', type: 'output' }
        ]);
        break;
      default:
        appendLines([
          inputLine,
          { text: `zsh: command not found: ${rawCommand}`, type: 'error' },
          { text: 'Type "help" to see available portfolio commands.', type: 'muted' }
        ]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const command = input;
    setInput('');
    await runCommand(command);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commandHistory.length) return;
      const nextIndex = historyIndex === null ? 0 : Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex - 1;
      if (nextIndex < 0) {
        setHistoryIndex(null);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    }
  };

  const runQuickCommand = (command: string) => {
    setInput('');
    void runCommand(command);
  };

  const lineClass: Record<LineType, string> = {
    system: 'text-accent',
    input: 'text-white font-semibold',
    output: 'text-on-surface-variant',
    error: 'text-error font-semibold',
    success: 'text-green font-semibold',
    muted: 'text-outline-variant'
  };

  return (
    <div className="min-h-full w-full max-w-full flex flex-col overflow-x-hidden px-4 py-6 md:px-10 md:py-8 relative">
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent opacity-50"></div>

      <header className="mb-5 flex min-w-0 flex-col gap-3 border-b border-outline-variant/20 pb-5 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <TermIcon className="w-5 h-5 text-accent" />
            <h1 className="font-syne text-2xl md:text-3xl font-extrabold text-primary uppercase tracking-tight">
              <DecryptedText text="Command Terminal" delay={120} />
            </h1>
          </div>
          <p className="mt-2 max-w-full break-words font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
            <span className="sm:hidden">My work // one command at a time</span>
            <span className="hidden sm:inline">A more playful way through my work, projects, milestones, and links</span>
          </p>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-outline-variant">
          TTY: SECURE_ZSH_01
        </div>
      </header>

      <section className="grid min-h-[640px] w-full min-w-0 flex-1 grid-cols-1 gap-4 overflow-hidden lg:grid-cols-[minmax(0,1fr)_260px] lg:overflow-visible">
        <AnimatedContent className="min-w-0" y={22}>
        <div
          onClick={focusInput}
          className="group flex min-h-[560px] w-full min-w-0 max-w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#151515]/85 shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl"
        >
          <div className="flex min-h-11 items-center justify-between border-b border-white/10 bg-[#262626]/90 px-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
                <X className="m-auto h-2.5 w-2.5 text-black/0 group-hover:text-black/50" />
              </span>
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
                <Minus className="m-auto h-2.5 w-2.5 text-black/0 group-hover:text-black/50" />
              </span>
              <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
                <Maximize2 className="m-auto h-2 w-2 text-black/0 group-hover:text-black/50" />
              </span>
            </div>

            <div className="hidden items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 font-mono text-[11px] text-white/70 sm:flex">
              <Folder className="h-3.5 w-3.5 text-accent" />
              zsh - portfolio-os
            </div>

            <button
              type="button"
              onClick={event => {
                event.stopPropagation();
                void copyContact();
              }}
              className="flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-outline-variant transition-colors hover:border-accent/40 hover:text-accent"
              title="Copy LinkedIn profile"
            >
              <Copy className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Contact'}</span>
            </button>
          </div>

          <div className="technical-grid relative min-w-0 flex-1 overflow-y-auto bg-[#0b0b0b] px-4 py-5 font-mono text-[12px] leading-relaxed md:px-6 md:text-[13px]">
            <div className="pointer-events-none absolute inset-0 scanlines opacity-40"></div>
            <div className="relative z-10 space-y-1.5">
              {lines.map((line, index) => (
                <div key={`${line.text}-${index}`} className="min-h-[1.35em] animate-terminal-line whitespace-pre-wrap break-all sm:break-words [overflow-wrap:anywhere]">
                  <span className={lineClass[line.type]}>{line.text}</span>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="min-w-0 border-t border-white/10 bg-[#101010] px-4 py-3 md:px-5">
            <div className="flex min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-black/45 px-3 shadow-[inset_0_0_18px_rgba(0,0,0,0.45)]">
              <ChevronRight className="h-4 w-4 shrink-0 text-accent" />
              <span className="hidden shrink-0 font-mono text-[11px] text-outline-variant sm:inline">{prompt}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={event => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                className="min-w-0 flex-1 border-none bg-transparent p-0 font-mono text-[13px] text-primary outline-none placeholder:text-outline-variant/70 focus:ring-0"
                placeholder="type help, open achievements, cat about.txt..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="rounded-md p-1.5 text-accent transition-colors hover:bg-accent hover:text-black"
                title="Run command"
              >
                <CornerDownLeft className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
        </AnimatedContent>

        <aside className="grid min-w-0 gap-4 lg:grid-rows-[auto_1fr]">
          <AnimatedContent delay={0.1}>
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container/70 p-4">
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
              <History className="h-4 w-4" />
              Quick Run
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              {quickCommands.map(command => (
                <Magnet key={command} strength={0.16}>
                  <button
                    type="button"
                    onClick={() => runQuickCommand(command)}
                    className="w-full rounded-md border border-outline-variant/20 bg-background/45 px-3 py-2 text-left font-mono text-[11px] uppercase tracking-widest text-on-surface-variant transition-colors hover:border-accent hover:text-accent"
                  >
                    {command}
                  </button>
                </Magnet>
              ))}
            </div>
          </div>
          </AnimatedContent>

          <AnimatedContent delay={0.16}>
          <div className="rounded-lg border border-outline-variant/20 bg-surface-container/70 p-4">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-magenta">Route Shortcuts</div>
            <div className="space-y-2">
              {Object.entries(routes).map(([name, path]) => (
                <Magnet key={name} strength={0.14}>
                  <button
                    type="button"
                    onClick={() => runQuickCommand(`open ${name}`)}
                    className="flex w-full items-center justify-between rounded-md border border-transparent px-2 py-2 font-mono text-[11px] uppercase tracking-widest text-on-surface-variant transition-colors hover:border-magenta/40 hover:text-magenta"
                  >
                    {name}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </Magnet>
              ))}
            </div>
          </div>
          </AnimatedContent>
        </aside>
      </section>
    </div>
  );
}
