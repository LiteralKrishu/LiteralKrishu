import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Layers3 } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import DecryptedText from '@/components/animations/DecryptedText';
import {
  EDUCATION_SUMMARY,
  GITHUB_URL,
  LINKEDIN_URL,
  PROFILE_DESCRIPTION,
  PROFILE_LAST_REVIEWED,
  SITE_URL,
  STACKOVERHACK_LINKEDIN_URL,
  UNSTOP_URL,
  VEDONYX_PROFILE_URL,
  VEDONYX_URL,
} from '@/app/data/portfolio';

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profile-page`,
  url: `${SITE_URL}/`,
  name: 'Sousnigdho Das — Professional Portfolio',
  description: PROFILE_DESCRIPTION,
  dateModified: PROFILE_LAST_REVIEWED,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Sousnigdho Das',
    alternateName: 'LiteralKrishu',
    url: `${SITE_URL}/`,
    description: PROFILE_DESCRIPTION,
    jobTitle: 'Chief Operating Officer',
    worksFor: {
      '@type': 'Organization',
      '@id': `${VEDONYX_URL}#organization`,
      name: 'Vedonyx',
      url: VEDONYX_URL,
    },
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'Newton School of Technology',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'StackOverHack',
      sameAs: STACKOVERHACK_LINKEDIN_URL,
    },
    knowsAbout: [
      'Artificial intelligence',
      'Machine learning',
      'Full-stack web development',
      'Software engineering',
      'Product operations',
    ],
    sameAs: [LINKEDIN_URL, GITHUB_URL, UNSTOP_URL, VEDONYX_PROFILE_URL],
  },
};

const currentFocus = [
  {
    label: 'Work',
    value: 'COO at Vedonyx',
    note: 'Operations, product direction, and delivery',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Building',
    value: 'SafeCity',
    note: 'A production-grade multimodal safety system',
    icon: Layers3,
  },
  {
    label: 'Education',
    value: EDUCATION_SUMMARY,
    note: 'Learning while shipping real products',
    icon: GraduationCap,
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-grow items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, '\\u003c'),
        }}
      />

      <AnimatedContent
        y={20}
        className="tech-border relative mx-auto w-full max-w-7xl overflow-hidden rounded-xl bg-surface-container-low/90 shadow-lg"
      >
        <div className="hud-corner hud-corner-tl" />
        <div className="hud-corner hud-corner-tr" />
        <div className="hud-corner hud-corner-bl" />
        <div className="hud-corner hud-corner-br" />

        <div className="flex items-center justify-between border-b border-outline-variant/20 px-5 py-4 sm:px-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            Profile / 2026
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">
            <span className="size-1.5 rounded-full bg-green" />
            Open to meaningful work
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          <div className="flex flex-col justify-center border-b border-outline-variant/20 px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[600px] lg:border-b-0 lg:border-r lg:px-12 lg:py-16">
            <AnimatedContent delay={0.05}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                Hello, I&apos;m
              </p>
              <h1 className="mt-4 max-w-4xl text-balance font-syne text-5xl font-black tracking-[-0.05em] text-primary sm:text-6xl lg:text-7xl xl:text-8xl">
                <DecryptedText text="Sousnigdho Das" delay={120} />
              </h1>
              <p className="mt-5 max-w-3xl text-balance font-syne text-xl font-semibold leading-snug text-accent sm:text-2xl lg:text-3xl">
                I build intelligent systems that speak, see, and scale.
              </p>
              <p className="mt-6 max-w-2xl text-pretty text-sm leading-7 text-on-surface-variant sm:text-base">
                I move between engineering, product decisions, and the people needed to ship. My work currently spans a production-grade multimodal safety system, open-source civic technology, and operations at Vedonyx.
              </p>
            </AnimatedContent>

            <AnimatedContent delay={0.12} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/archive"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors duration-150 hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View selected work
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/identity"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-outline-variant/40 bg-background/30 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors duration-150 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                About me
              </Link>
            </AnimatedContent>

            <AnimatedContent delay={0.17} className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
              <a className="transition-colors duration-150 hover:text-accent" href={GITHUB_URL} target="_blank" rel="me noreferrer">
                GitHub / LiteralKrishu
              </a>
              <a className="transition-colors duration-150 hover:text-accent" href={LINKEDIN_URL} target="_blank" rel="me noreferrer">
                LinkedIn
              </a>
              <a className="transition-colors duration-150 hover:text-accent" href={UNSTOP_URL} target="_blank" rel="me noreferrer">
                Certificates / Unstop
              </a>
            </AnimatedContent>
          </div>

          <aside className="flex flex-col bg-background/20 px-5 py-8 sm:px-8 lg:px-10 lg:py-12" aria-label="Current focus">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Current coordinates
              </h2>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-outline">Live profile</span>
            </div>

            <div className="divide-y divide-outline-variant/15">
              {currentFocus.map(({ label, value, note, icon: Icon }) => (
                <div key={label} className="grid grid-cols-[36px_1fr] gap-4 py-6">
                  <span className="flex size-9 items-center justify-center rounded-md border border-accent/25 bg-accent/5 text-accent">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-outline">{label}</span>
                    <p className="mt-1 text-pretty text-sm font-semibold leading-6 text-primary">{value}</p>
                    <p className="mt-1 text-pretty text-xs leading-5 text-on-surface-variant">{note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto border-l-2 border-accent/60 pl-4 pt-1">
              <p className="text-pretty text-xs leading-6 text-on-surface-variant">
                The work here is tied to public repositories, organiser records, certificates, or first-party project sources.
              </p>
            </div>
          </aside>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant/20 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-outline sm:px-8">
          <span>Applied AI / Full-stack products / Product operations</span>
          <span>Last reviewed {PROFILE_LAST_REVIEWED}</span>
        </div>
      </AnimatedContent>
    </div>
  );
}
