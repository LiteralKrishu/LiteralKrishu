import Link from 'next/link';
import { ArrowUpRight, Compass, Layers3, Sparkles } from 'lucide-react';

const colors = [
  { name: 'Night', hex: '#0d0b13', use: 'The base behind every scene' },
  { name: 'Dusk', hex: '#251f2f', use: 'Readable panels and project cards' },
  { name: 'Ivory', hex: '#f9f0de', use: 'Headlines and key text' },
  { name: 'Gold', hex: '#f2cb7e', use: 'Navigation and actions' },
  { name: 'Cloud', hex: '#c8b9b3', use: 'Supporting copy' },
];

export default function Vault() {
  return <div className="vault-page">
    <header className="vault-heading">
      <p className="vault-kicker">Behind the interface</p>
      <h1>Made to feel like a journey.</h1>
      <p>The site opens with an original sky scene. As you scroll, the view moves closer and three paths appear. The rest of the portfolio keeps that atmosphere while giving the projects room to speak.</p>
    </header>

    <section className="vault-principles" aria-label="Design decisions">
      <article><Compass size={25} /><h2>Find a path</h2><p>The top navigation and side rail lead to work, background, skills, and results.</p></article>
      <article><Layers3 size={25} /><h2>Show the work</h2><p>Project pages explain what each build does, my role, and where to check the source.</p></article>
      <article><Sparkles size={25} /><h2>Motion with purpose</h2><p>The opening scene responds to scrolling. A reduced motion setting shows the paths without the camera move.</p></article>
    </section>

    <section className="vault-palette"><div><p className="vault-kicker">Color system</p><h2>Evening light.</h2></div><div className="vault-colors">{colors.map(color => <div key={color.hex} className="vault-color"><span className="vault-swatch" style={{ backgroundColor: color.hex }} /><strong>{color.name}</strong><span>{color.use}</span><code>{color.hex}</code></div>)}</div></section>
    <div className="vault-end"><p>Want to see what this frame holds?</p><Link href="/archive">Explore the projects <ArrowUpRight size={17} /></Link></div>
  </div>;
}
