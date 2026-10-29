'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Code2, Compass, Layers3 } from 'lucide-react';
import ProjectShowcase from '@/components/ui/ProjectShowcase';
import { LINKEDIN_URL, PROFILE_LAST_REVIEWED } from '@/app/data/portfolio';

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

export default function FestivalHome() {
  const journey = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = journey.current;
    if (!element) return;
    const title = element.querySelector<HTMLElement>('.festival-title');
    const gates = element.querySelector<HTMLElement>('.festival-gates');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reduced.matches) {
        element.style.setProperty('--title-opacity', '0');
        element.style.setProperty('--gate-opacity', '1');
        element.style.setProperty('--gate-shift', '0px');
        element.style.setProperty('--arrival-shade', '.7');
        element.style.setProperty('--flight-opacity', '0');
        element.style.setProperty('--cue-opacity', '0');
        if (title) title.inert = true;
        if (gates) gates.inert = false;
        return;
      }
      const range = Math.max(1, element.offsetHeight - innerHeight);
      const p = Math.max(0, Math.min(1, -element.getBoundingClientRect().top / range));
      const ease = (start: number, end: number) => {
        const t = Math.max(0, Math.min(1, (p - start) / (end - start)));
        return t * t * (3 - 2 * t);
      };
      const arrival = ease(0.57, 0.78);
      element.style.setProperty('--sky-x', `${-p * innerWidth * 0.045}px`);
      element.style.setProperty('--sky-y', `${-p * innerHeight * 0.025}px`);
      element.style.setProperty('--citadel-x', `${-p * innerWidth * 0.16}px`);
      element.style.setProperty('--citadel-y', `${p * innerHeight * 0.065}px`);
      element.style.setProperty('--citadel-scale', String(1 + p * 0.13));
      element.style.setProperty('--cliff-x', `${p * innerWidth * 0.13}px`);
      element.style.setProperty('--cliff-y', `${p * innerHeight * 0.11}px`);
      element.style.setProperty('--cliff-scale', String(1 + p * 0.07));
      element.style.setProperty('--fog-near-x', `${-p * innerWidth * 0.26}px`);
      element.style.setProperty('--fog-far-x', `${p * innerWidth * 0.11}px`);
      element.style.setProperty('--title-opacity', String(1 - ease(0.12, 0.29)));
      element.style.setProperty('--gate-opacity', String(arrival));
      element.style.setProperty('--gate-shift', `${(1 - arrival) * 45}px`);
      element.style.setProperty('--arrival-shade', String(arrival * 0.7));
      element.style.setProperty('--flight-opacity', String(ease(0.2, 0.4) * (1 - ease(0.62, 0.78))));
      element.style.setProperty('--cue-opacity', String(1 - ease(0.28, 0.48)));
      if (title) title.inert = p > 0.29;
      if (gates) gates.inert = p < 0.72;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    reduced.addEventListener('change', update);
    update();
    return () => { cancelAnimationFrame(frame); removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); reduced.removeEventListener('change', update); };
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
        <div className="festival-edition">A portfolio of things built and learned <span>2026</span></div>
        <div className="festival-title">
          <span className="festival-overline">Engineer · builder · team lead</span>
          <h1>Sousnigdho <em>Das</em><span className="festival-spark">✦</span></h1>
          <p>I write code and help teams bring ideas into the world.</p>
          <Link href="#selected-work" className="festival-intro-link">Explore the work <ArrowUpRight size={17} /></Link>
        </div>
        <div className="festival-gates" aria-label="Explore the portfolio">
          <div className="festival-gates-copy"><span className="festival-gates-kicker">The journey continues / 2026</span><h2 className="festival-gates-heading">Choose a<br /><em> path.</em></h2><p>Explore the projects, the person, and the practice behind the work.</p><span className="festival-gates-count">THREE DIRECTIONS · ONE STORY</span></div>
          <nav className="festival-gates-grid" aria-label="Portfolio paths">{gateways.map(({ title, description, path, icon: Icon }, index) =>
            <Link key={path} href={path} className="festival-gate"><span className="festival-gate-number">0{index + 1}</span><Icon className="festival-gate-icon" size={25} strokeWidth={1.35} /><span className="festival-gate-text"><strong>{title}</strong><small>{description}</small></span><ArrowUpRight className="festival-gate-arrow" size={20} /></Link>
          )}</nav>
        </div>
        <div className="festival-scroll-cue"><span>Scroll to discover</span><i /><ArrowDown size={13} /></div>
        <span className="festival-coordinate">18°31′N / 73°51′E</span>
      </div>
    </section>

    <div className="festival-content">
      <section className="festival-introduction">
        <div className="festival-section-index"><span>01</span><i />The story so far</div>
        <div><h2>Curiosity is the<br />starting point.</h2><p>I&apos;m Sousnigdho, a developer and COO at Vedonyx. I work across AI, web, and product operations. With StackOverHack, I lead SafeCity and help turn rough ideas into working projects.</p><Link href="/identity" className="festival-text-link">More about me <ArrowUpRight size={17} /></Link></div>
      </section>

      <section id="selected-work" className="festival-work">
        <div className="festival-section-heading"><div><div className="festival-section-index"><span>02</span><i />Selected work</div><h2>Built to be used.</h2></div><Link href="/archive" className="festival-text-link">All projects <ArrowUpRight size={17} /></Link></div>
        <ProjectShowcase />
      </section>

      <section className="festival-practice">
        <div className="festival-section-index"><span>03</span><i />The practice</div>
        <div className="festival-practice-grid"><h2>Between an idea<br />and a release.</h2><div><p>I enjoy the work that connects the two: choosing the right problem, building a useful first version, and helping a team finish it.</p><div className="festival-practice-tags"><span>Applied AI</span><span>Full-stack development</span><span>Product delivery</span></div><Link href="/arsenal" className="festival-text-link">Explore my skills <ArrowUpRight size={17} /></Link></div></div>
      </section>

      <section className="festival-contact"><div className="festival-section-index"><span>04</span><i />A new chapter</div><h2>Have something<br />in mind?</h2><p>I&apos;m open to thoughtful projects and conversations.</p><a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="festival-contact-link">Connect on LinkedIn <ArrowUpRight size={20} /></a></section>
      <p className="festival-review">Project details link to public code, live work, or source records. Last reviewed {PROFILE_LAST_REVIEWED}.</p>
    </div>
  </div>;
}
