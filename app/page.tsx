import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, GraduationCap, Layers3 } from 'lucide-react';
import AnimatedContent from '@/components/animations/AnimatedContent';
import ProjectCover from '@/components/ui/ProjectCover';
import ProjectShowcase from '@/components/ui/ProjectShowcase';
import SkillPlayground from '@/components/interactive/SkillPlayground';
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
  projects,
} from '@/app/data/portfolio';

const safeCity = projects.find(project => project.slug === 'safecity')!;

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
    <div className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema).replace(/</g, '\\u003c') }} />
      <section className="home-hero">
        <AnimatedContent className="hero-copy" y={16}>
          <div className="hero-kicker"><span className="eyebrow">Profile / 2026</span><span className="availability"><i />Open to meaningful work</span></div>
          <div className="hero-introduction"><Image src="/images/sousnigdho-das.png" alt="Sousnigdho Das" width={72} height={72} priority className="profile-photo hero-profile-photo" /><p className="hero-hello">Hello, I&apos;m</p></div>
          <h1>Sousnigdho<br /><span>Das</span><span className="name-period">.</span></h1>
          <p className="hero-statement">I build intelligent systems<br className="desktop-break" /> that speak, see, and scale.</p>
          <div className="hero-actions"><Link href="/archive" className="primary-button">View selected work <ArrowUpRight size={18} /></Link><Link href="/identity" className="secondary-button">About me <ArrowUpRight size={16} /></Link></div>
          <p className="hero-description">I move between engineering, product decisions, and the people needed to ship. My work currently spans a production-grade multimodal safety system, open-source civic technology, and operations at Vedonyx.</p>
        </AnimatedContent>
        <AnimatedContent delay={0.1} className="hero-art">
          <div className="hero-art-top"><span className="eyebrow">Currently building</span><span className="small-star">✳</span></div>
          <a href={safeCity.liveUrl} target="_blank" rel="noopener noreferrer" className="hero-preview-link" aria-label="Open SafeCity live website"><ProjectCover title={safeCity.shortTitle} url={safeCity.liveUrl!} eager poster="/images/safecity-preview.png" /></a>
          <Link href="/projects/safecity" className="hero-art-link"><span><strong>SafeCity</strong><small>A production-grade multimodal safety system</small></span><span className="round-arrow"><ArrowUpRight size={22} /></span></Link>
        </AnimatedContent>
      </section>
      <div className="hero-bottom-strip"><span>Applied AI / Full-stack products / Product operations</span><a href="#selected-work">Scroll to explore <ArrowDown size={14} /></a></div>
      <section className="focus-section" aria-label="Current focus"><div className="section-heading compact"><p className="eyebrow">Current coordinates</p><span className="subtle-label">Live profile</span></div><div className="focus-grid">{currentFocus.map(({ label, value, note, icon: Icon }) => <AnimatedContent key={label} className="focus-card"><span className="focus-icon"><Icon size={20} /></span><div><p className="eyebrow">{label}</p><h2>{value}</h2><p>{note}</p></div></AnimatedContent>)}</div></section>
      <section id="selected-work" className="home-work"><AnimatedContent className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>Ideas, brought to life<span>.</span></h2></div><Link className="text-link" href="/archive">All projects <ArrowUpRight size={18} /></Link></AnimatedContent><ProjectShowcase /></section>
      <section className="home-skills"><AnimatedContent className="section-heading"><div><p className="eyebrow">02 / The toolkit</p><h2>A little room to play<span>.</span></h2></div><Link href="/arsenal" className="text-link">Explore my skills <ArrowUpRight size={18} /></Link></AnimatedContent><SkillPlayground /></section>
      <AnimatedContent className="home-contact"><span className="contact-star" aria-hidden="true">✳</span><p className="eyebrow">Open to meaningful work</p><h2>Let&apos;s build<br />something useful.</h2><a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="primary-button">Let&apos;s talk on LinkedIn <ArrowUpRight size={18} /></a></AnimatedContent>
      <div className="profile-note"><p>The work here is tied to public repositories, organiser records, certificates, or first-party project sources.</p><span>Last reviewed {PROFILE_LAST_REVIEWED}</span></div>
    </div>
  );
}
