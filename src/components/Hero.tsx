import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk } from 'lucide-react';
import ParticleField, { type Shape } from './ParticleField';
import ResumeLink from './ResumeLink';
import TechnologyMarquee from './TechnologyMarquee';

export default function Hero({ motion }: { motion: boolean }) {
  const [shape, setShape] = useState<Shape>('Orbit');
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-topline mono"><span><i className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span><span>ANTALYA, TR · WORLDWIDE</span></div>
        <div className="hero-body">
          <div className="hero-copy">
            <p className="eyebrow hero-intro">HEY, I’M VLADYSLAV ALISOV <span>↗</span></p>
            <h1><span className="title-line"><span>Mobile apps.</span></span><span className="title-line"><span>From idea</span></span><span className="title-line"><span className="serif accent">to release.</span></span></h1>
            <div className="hero-description"><ArrowDownRight className="hero-description-arrow" size={32} strokeWidth={1.3} /><p>Five years building mobile apps<br className="desktop-break" /> with Flutter and React Native.<br /><span>Currently a Flutter Developer at MST Agency.</span></p></div>
            <div className="hero-actions"><a href="#work" className="button button-primary">View projects <ArrowUpRight size={20} /></a><ResumeLink /></div>
          </div>
          <div className="hero-art">
            <div className="art-coordinate mono"><span>FIG. 01</span><span>ORDER IN THE COMPLEXITY</span></div>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            <ParticleField motion={motion} shape={shape} />
            <div className="art-bottom"><span className="mono art-hint">{motion ? 'MOVE YOUR CURSOR. FIND YOUR FLOW.' : 'STILL HAS A CERTAIN BEAUTY.'}</span><div className="shape-switcher" role="group" aria-label="Particle sculpture shape">{(['Orbit', 'Sphere', 'Wave'] as const).map(value => <button key={value} aria-pressed={shape === value} onClick={() => setShape(value)}>{value}</button>)}</div></div>
          </div>
        </div>
        <div className="hero-bottom"><div><Asterisk size={24} className="slow-spin accent" /><span>Thoughtfully built.<br /><span className="muted">Made to make a difference.</span></span></div><a href="#work" className="scroll-link mono">SCROLL TO EXPLORE <ArrowDown size={18} /></a><span className="hero-index mono">PORTFOLIO — 2026</span></div>
      </div>
      <TechnologyMarquee />
    </section>
  );
}
