'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Code2, Compass, Layers3 } from 'lucide-react';
import FeaturedProjects from './FeaturedProjects';
import { EMAIL_URL, PROFILE_LAST_REVIEWED, STACKOVERHACK_GITHUB_URL } from '@/app/data/portfolio';

const gateways = [
  { title: 'The work', description: 'Projects built with purpose and people.', path: '/archive', icon: Layers3 },
  { title: 'The person', description: 'What I do, and how I got here.', path: '/identity', icon: Compass },
  { title: 'The toolkit', description: 'Code, AI, and product practice.', path: '/arsenal', icon: Code2 },
];

const motes = Array.from({ length: 28 }, (_, index) => ({
  left: `${(index * 37 + 11) % 96}%`,
  top: `${(index * 23 + 14) % 84}%`,
  animationDelay: `${-((index * 7) % 19) / 3}s`,
  animationDuration: `${4 + (index % 5)}s`,
}));

const practiceSteps = [
  { number: '01', title: 'Set the direction', description: 'Define the problem, constraints, and long-term roadmap.', output: 'A problem statement, success criteria, and a roadmap the team can agree on.' },
  { number: '02', title: 'Architect with the team', description: 'Connect research, software design, and cross-functional work.', output: 'A design with clear interfaces, responsibilities, and the risks to test first.' },
  { number: '03', title: 'Deliver and learn', description: 'Deploy a useful system, review the result, and improve it.', output: 'A working release, evidence from real use, and a prioritized list of improvements.' },
];

const homeSections = [
  { id: 'about', label: 'About' },
  { id: 'selected-work', label: 'Projects' },
  { id: 'practice', label: 'Practice' },
  { id: 'contact', label: 'Contact' },
];

function NextChapter({ id, children }: { id: string; children: string }) {
  return <a className="festival-next-chapter" href={`#${id}`}><ArrowDown size={15} aria-hidden="true" />{children}</a>;
}

export default function FestivalHome() {
  const journey = useRef<HTMLElement>(null);
  const chapters = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(homeSections[0].id);
  useEffect(() => {
    const element = journey.current;
    if (!element) return;
    const stage = element.querySelector<HTMLElement>('.festival-stage');
    const title = element.querySelector<HTMLElement>('.festival-title');
    const gates = element.querySelector<HTMLElement>('.festival-gates');
    if (!stage || !title || !gates) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const update = () => {
      frame = 0;
      if (reduced.matches) {
        title.inert = false;
        gates.inert = false;
        return;
      }

      const bounds = element.getBoundingClientRect();
      const range = Math.max(1, bounds.height - stage.clientHeight);
      const progress = Math.max(0, Math.min(1, -bounds.top / range));
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      const ease = (start: number, end: number) => {
        const t = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        return t * t * (3 - 2 * t);
      };
      const arrival = ease(0.4, 0.7);
      const style = element.style;
      style.setProperty('--sky-x', `${-progress * width * 0.045 + pointerX * 9}px`);
      style.setProperty('--sky-y', `${-progress * height * 0.025 + pointerY * 7}px`);
      style.setProperty('--citadel-x', `${-progress * width * 0.16 + pointerX * 18}px`);
      style.setProperty('--citadel-y', `${progress * height * 0.065 + pointerY * 12}px`);
      style.setProperty('--citadel-scale', String(1 + progress * 0.13));
      style.setProperty('--cliff-x', `${progress * width * 0.13 + pointerX * 32}px`);
      style.setProperty('--cliff-y', `${progress * height * 0.11 + pointerY * 20}px`);
      style.setProperty('--cliff-scale', String(1 + progress * 0.07));
      style.setProperty('--fog-near-x', `${-progress * width * 0.26 + pointerX * 42}px`);
      style.setProperty('--fog-far-x', `${progress * width * 0.11 + pointerX * 20}px`);
      style.setProperty('--title-opacity', String(1 - ease(0.15, 0.45)));
      style.setProperty('--gate-opacity', String(arrival));
      style.setProperty('--gate-shift', `${(1 - arrival) * 36}px`);
      style.setProperty('--arrival-shade', String(arrival * 0.7));
      style.setProperty('--flight-opacity', String(ease(0.2, 0.38) * (1 - ease(0.47, 0.67))));
      title.inert = progress > 0.4 && !title.contains(document.activeElement);
      gates.inert = progress < 0.55 && !gates.contains(document.activeElement);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || event.pointerType === 'touch') return;
      const rect = stage.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      scheduleUpdate();
    };
    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      scheduleUpdate();
    };
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    stage.addEventListener('pointermove', move);
    stage.addEventListener('pointerleave', resetPointer);
    stage.addEventListener('focusout', scheduleUpdate);
    reduced.addEventListener('change', scheduleUpdate);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      stage.removeEventListener('pointermove', move);
      stage.removeEventListener('pointerleave', resetPointer);
      stage.removeEventListener('focusout', scheduleUpdate);
      reduced.removeEventListener('change', scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const elements = chapters.current?.querySelectorAll<HTMLElement>('[data-home-reveal]');
    if (!elements) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reveal = new IntersectionObserver(entries => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        reveal.unobserve(target);
        if (reduced.matches) continue;
        target.animate(
          [{ transform: 'translateY(14px)' }, { transform: 'translateY(0)' }],
          { duration: 520, easing: 'cubic-bezier(.2,.75,.25,1)' },
        );
      }
    }, { threshold: 0.12 });
    elements.forEach(element => reveal.observe(element));

    const sections = Array.from(chapters.current?.querySelectorAll<HTMLElement>('section[id]') ?? []);
    let frame = 0;
    const updateCurrentSection = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.4, 220);
      const section = sections.find(section => section.getBoundingClientRect().bottom > readingLine);
      setActiveSection(section?.id ?? homeSections[homeSections.length - 1].id);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(updateCurrentSection);
    };
    updateCurrentSection();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      reveal.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return <div className="festival-page">
    <section ref={journey} className="festival-journey" aria-label="Introduction">
      <div className="festival-stage">
        <div className="festival-sky" aria-hidden="true" />
        <div className="festival-citadel" aria-hidden="true" />
        <div className="festival-fog festival-fog-far" aria-hidden="true" />
        <div className="festival-cliff" aria-hidden="true" />
        <div className="festival-fog festival-fog-near" aria-hidden="true" />
        <div className="festival-motes" aria-hidden="true">{motes.map((style, index) => <i key={index} style={style} />)}</div>
        <div className="festival-flight-lines" aria-hidden="true" />
        <div className="festival-shade" aria-hidden="true" />
        <div className="festival-atmosphere" aria-hidden="true" />
        <div className="festival-title">
          <span className="festival-overline">Software engineering management · StackOverHack™</span>
          <h1 className="festival-wordmark" data-text="SOUSNIGDHO DAS" aria-label="Sousnigdho Das"><span>SOUSNIGDHO DAS</span></h1>
          <p>B.Tech in CSE (AI/ML) at NST · COO at Vedonyx &amp; ODT</p>
          <Link href="#selected-work" className="festival-intro-link">Explore the work <ArrowUpRight size={17} /></Link>
        </div>
        <div className="festival-gates" aria-label="Explore the portfolio">
          <div className="festival-gates-copy"><h2 className="festival-gates-heading">Explore the<br /><em> portfolio.</em></h2></div>
          <nav className="festival-gates-grid" aria-label="Portfolio pages">{gateways.map(({ title, description, path, icon: Icon }) =>
            <Link key={path} href={path} className="festival-gate"><Icon className="festival-gate-icon" size={25} strokeWidth={1.35} /><span className="festival-gate-text"><strong>{title}</strong><small>{description}</small></span><ArrowUpRight className="festival-gate-arrow" size={20} /></Link>
          )}</nav>
        </div>
        <a href="#about" className="festival-scroll-cue"><span>Continue to about</span><ArrowDown size={16} aria-hidden="true" /></a>
      </div>
    </section>

    <div className="festival-content" ref={chapters}>
      <nav className="festival-chapter-nav" aria-label="On this page">
        {homeSections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>
        ))}
      </nav>
      <section id="about" className="festival-introduction" aria-labelledby="home-about-title">
        <div className="festival-story-art" aria-hidden="true"><span className="festival-story-orbit" /><span className="festival-story-art-index">FIELD NOTE / 01</span><span className="festival-story-art-caption">Ideas find their shape through use.</span></div>
        <div className="festival-story-copy" data-home-reveal>
          <div className="festival-section-index"><span>01</span><i />The story so far</div>
          <p className="festival-chapter-kicker">Software engineering management</p>
          <h2 id="home-about-title">From research,<br /><em>to reality.</em></h2>
          <p>I am Sousnigdho Das. Pursuing B.Tech in CSE (AI/ML) at Newton School of Technology (NST). Working as Chief Operating Officer at Vedonyx &amp; ODT, I plan multi-stage software projects and coordinate cross-functional teams.</p>
          <div className="festival-story-facts"><span>Software engineering management</span><span>B.Tech in CSE (AI/ML) · NST</span><span>StackOverHack™</span><span>COO · Vedonyx &amp; ODT</span></div>
          <Link href="/identity" className="festival-text-link">More about me <ArrowUpRight size={17} /></Link>
        </div>
        <NextChapter id="selected-work">Next · Selected work</NextChapter>
      </section>

      <section id="selected-work" className="festival-work" aria-labelledby="home-work-title">
        <div className="festival-section-heading" data-home-reveal><div><div className="festival-section-index"><span>02</span><i />Selected work</div><h2 id="home-work-title">Built to be used.</h2></div><Link href="/archive" className="festival-text-link">All projects <ArrowUpRight size={17} /></Link></div>
        <FeaturedProjects />
        <NextChapter id="practice">Next · How I work</NextChapter>
      </section>

      <section id="practice" className="festival-practice" aria-labelledby="home-practice-title">
        <div className="festival-section-index"><span>03</span><i />The practice</div>
        <div className="festival-practice-head" data-home-reveal><div><p className="festival-chapter-kicker">How the work moves</p><h2 id="home-practice-title">Between an idea<br />and a release.</h2></div><p>Guiding software architecture across the full project lifecycle. I help teams keep technical decisions aligned with long-term roadmaps and turn algorithmic research into practical, production-ready systems. I also build with <Link href={STACKOVERHACK_GITHUB_URL} target="_blank" rel="noreferrer" className="festival-org-link">StackOverHack™</Link>.</p></div>
        <div className="festival-process">{practiceSteps.map(step => <div key={step.number} className="festival-process-step"><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p><details><summary>What this produces</summary><p>{step.output}</p></details></div>)}</div>
        <Link href="/arsenal" className="festival-text-link">Explore my skills <ArrowUpRight size={17} /></Link>
        <NextChapter id="contact">Next · Get in touch</NextChapter>
      </section>

      <section id="contact" className="festival-contact" aria-labelledby="home-contact-title"><div className="festival-contact-panel"><div className="festival-section-index"><span>04</span><i />A new chapter</div><div className="festival-contact-inner" data-home-reveal><div><p className="festival-chapter-kicker">Open for collaboration</p><h2 id="home-contact-title">Have something<br /><em>in mind?</em></h2></div><div><p>I am open to working with teams and individuals to plan, build, and deliver projects from research through production.</p><a href={EMAIL_URL} className="festival-contact-link">Get in touch <ArrowUpRight size={20} /></a></div></div><span className="festival-contact-foot">SOUSNIGDHO DAS / BUILDING WHAT COMES NEXT</span></div></section>
      <p className="festival-review">Project details link to public code, live work, or source records. Last reviewed {PROFILE_LAST_REVIEWED}.</p>
    </div>
  </div>;
}
