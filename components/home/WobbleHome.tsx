import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Github, Layers3, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import ProjectShowcase from '@/components/ui/ProjectShowcase';
import { GITHUB_URL, LINKEDIN_URL, PROFILE_LAST_REVIEWED } from '@/app/data/portfolio';
import WobbleOrbit from './WobbleOrbit';

const capabilities = [
  { icon: BrainCircuit, title: 'Applied AI', copy: 'Models and systems shaped around a real use case.' },
  { icon: Code2, title: 'Full-stack engineering', copy: 'Interfaces, APIs, and the work between them.' },
  { icon: Layers3, title: 'Product delivery', copy: 'From a rough idea to a version people can use.' },
];

export default function WobbleHome() {
  return <div className="wobble-page">
    <section id="hero" className="wobble-hero" aria-labelledby="wobble-heading">
      <div className="wobble-hero-glow" aria-hidden="true" />
      <div className="wobble-hero-inner">
        <div className="wobble-hero-copy">
          <div className="wobble-badge"><span className="wobble-live-dot" /><strong>Sousnigdho Das</strong><span className="wobble-badge-divider">/</span><span>Engineer · builder · team lead</span></div>
          <h1 id="wobble-heading">Ideas are better<br /><span>when they work.</span></h1>
          <p>I build useful products across AI, web, and operations. I care about the details that turn an idea into something people can use.</p>
          <div className="wobble-hero-actions">
            <Link href="#selected-work" className="wobble-button wobble-button-primary">Explore my work <ArrowRight size={17} /></Link>
            <a href={GITHUB_URL} target="_blank" rel="me noreferrer" className="wobble-button wobble-button-secondary"><Github size={17} />Explore GitHub</a>
          </div>
          <div className="wobble-hero-details"><span><Terminal size={15} /> Full-stack development</span><i /><span><ShieldCheck size={15} /> Team leadership</span><i /><span><Sparkles size={15} /> Applied AI</span></div>
        </div>
        <WobbleOrbit />
      </div>
      <a className="wobble-scroll" href="#about" aria-label="Scroll to learn about me"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>

    <section id="about" className="wobble-section wobble-about">
      <div className="wobble-section-label"><span>01</span><i />THE PERSON</div>
      <div className="wobble-about-grid"><div><p className="wobble-kicker">Curiosity in practice</p><h2>Build with intent.<br /><em>Learn in public.</em></h2></div><div><p>I&apos;m Sousnigdho, a developer and COO at Vedonyx. I work across AI, web, and product operations. With StackOverHack, I lead SafeCity and help turn rough ideas into working projects.</p><Link href="/identity" className="wobble-text-link">More about me <ArrowUpRight size={17} /></Link></div></div>
    </section>

    <section id="selected-work" className="wobble-section wobble-work">
      <div className="wobble-section-label"><span>02</span><i />SELECTED WORK</div>
      <div className="wobble-heading-row"><div><p className="wobble-kicker">Evidence over claims</p><h2>Work made to be used.</h2></div><Link href="/archive" className="wobble-text-link">All projects <ArrowUpRight size={17} /></Link></div>
      <ProjectShowcase />
    </section>

    <section id="approach" className="wobble-section wobble-approach">
      <div className="wobble-section-label"><span>03</span><i />HOW I WORK</div>
      <div className="wobble-heading-row"><div><p className="wobble-kicker">From question to release</p><h2>Good work crosses disciplines.</h2></div></div>
      <div className="wobble-capabilities">{capabilities.map(({ icon: Icon, title, copy }, index) => <article key={title} className="wobble-capability"><div className="wobble-capability-top"><span>0{index + 1} / 03</span><Icon size={24} strokeWidth={1.4} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <Link href="/arsenal" className="wobble-text-link">Explore the toolkit <ArrowUpRight size={17} /></Link>
    </section>

    <section id="contact" className="wobble-section wobble-contact">
      <div className="wobble-section-label"><span>04</span><i />LET&apos;S TALK</div>
      <div className="wobble-contact-grid"><div><p className="wobble-kicker">A new chapter</p><h2>Have something<br /><em>in mind?</em></h2></div><div><p>I&apos;m open to thoughtful projects and conversations.</p><a href={LINKEDIN_URL} target="_blank" rel="me noreferrer" className="wobble-button wobble-button-primary">Connect on LinkedIn <ArrowUpRight size={17} /></a></div></div>
    </section>
    <p className="wobble-review">Project details link to public code, live work, or source records. Last reviewed {PROFILE_LAST_REVIEWED}.</p>
  </div>;
}
