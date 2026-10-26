import { ArrowUpRight, Asterisk, Globe2, GraduationCap } from 'lucide-react';
import { certificates, languages } from '../data/profile';
import ResumeLink from './ResumeLink';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div data-reveal>
            <p className="eyebrow"><span className="section-number">03 /</span> ABOUT ME</p>
            <h2>A little<br /><span className="serif accent">about me.</span></h2>
            <div className="about-location"><Globe2 size={18} strokeWidth={1.3} /><span>Antalya, Türkiye<br /><span className="muted">Working remotely with MST Agency.</span></span></div>
          </div>
          <div className="about-copy" data-reveal>
            <Asterisk size={46} strokeWidth={1.2} className="accent slow-spin" />
            <p className="about-lead">I’m a software developer<br className="desktop-break" /> with a focus on <span className="serif">mobile apps.</span></p>
            <p>Over the past five years, I’ve worked with Flutter and React Native on mobile apps, healthcare integrations, and enterprise software. I currently work as a Flutter Developer at MST Agency, helping deliver applications and games from design to release.</p>
            <p>I enjoy working through requirements with a team, keeping code understandable, and following a product through testing and release. My backend experience includes Node.js, REST APIs, WebSockets, and FHIR services.</p>
            <p>Alongside that work, I’m developing and publishing casual games through Novidoc Games. I’ve also built a multilingual vacation rental website for Villa Leom.</p>
            <div className="about-actions"><ResumeLink /><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={18} /></a></div>
          </div>
        </div>

        <div className="background-grid" data-reveal>
          <div className="education-block">
            <p className="eyebrow"><GraduationCap size={18} /> EDUCATION</p>
            <h3>B.Sc. in Computer Engineering</h3>
            <p>Antalya Bilim University <span className="mono">2021</span></p>
          </div>
          <div className="languages-block">
            <p className="eyebrow">LANGUAGES</p>
            <div className="language-list">{languages.map(language => <p key={language.name}><span>{language.name}</span><span className="muted">{language.level}</span></p>)}</div>
          </div>
        </div>
        <div className="certificates-block" data-reveal><p className="eyebrow">COURSES & CERTIFICATES</p><ul>{certificates.map(certificate => <li key={certificate}>{certificate}</li>)}</ul></div>
      </div>
    </section>
  );
}
