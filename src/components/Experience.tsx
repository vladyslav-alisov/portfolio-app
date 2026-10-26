import { useEffect, useRef, useState } from 'react';
import { Activity, ArrowDownRight, ArrowUpRight, Bluetooth, CalendarDays, Check, Code2, Gamepad2, Heart, Languages, Layers3, MessageSquare, Radio, Server, Smartphone, X } from 'lucide-react';
import Career from './Career';

const projects = [
  {
    id: 'novidoc', kind: 'personal', number: '01', title: 'Novidoc Games', category: 'INDEPENDENT MOBILE GAMES', years: 'OCT 2026',
    subtitle: 'Puzzle & arcade games.', company: 'Novidoc Games', role: 'Game development & publishing',
    description: 'Developing and publishing casual mobile games, from gameplay design to App Store submission.',
    tags: ['Flutter', 'Flame', 'App Store'],
    website: 'https://www.novidoc.com/',
    challenge: 'The work spans the full lifecycle of a casual mobile game: designing the gameplay, implementing it, testing it, and preparing it for publication.',
    approach: 'I develop puzzle and arcade games using Flutter and Flame, with AI-assisted tools supporting the development workflow. I also handle testing and App Store submission, and experiment with monetization, analytics, and player retention.',
    contributions: ['Gameplay design and implementation for puzzle and arcade games', 'Flutter and Flame development with AI-assisted tools', 'Testing and App Store submission', 'Experiments with monetization, analytics, and retention'],
    note: 'An independent project where I work through the whole process of developing and publishing mobile games.',
  },
  {
    id: 'villa', kind: 'personal', number: '02', title: 'Villa Leom', category: 'VACATION RENTAL WEBSITE', years: 'NOV 2025',
    subtitle: 'A place to plan a stay.', company: 'Villa Leom', role: 'Website development',
    description: 'A multilingual vacation rental website with an availability calendar and booking inquiries.',
    tags: ['Multilingual', 'Availability calendar', 'Responsive web'],
    website: 'https://www.villaleom.com/en',
    challenge: 'The website needed to introduce a vacation rental property and give visitors a way to check availability and ask about a booking across desktop and mobile devices.',
    approach: 'I developed a multilingual website with a responsive interface, an interactive availability calendar, and booking inquiry functionality.',
    contributions: ['Multilingual website development', 'Interactive availability calendar', 'Booking inquiry functionality', 'Responsive layouts for desktop and mobile devices'],
    note: 'A website built around the practical steps of exploring a property and making a booking inquiry.',
  },
  {
    id: 'dannie', kind: 'career', number: '03', title: 'DANNIE', category: 'ERP & MOBILE DEVELOPMENT', years: '2024 — 2025',
    subtitle: 'From ERP to mobile.', company: 'DANNIE CC', role: 'Software Developer (Backend & Mobile)',
    description: 'ERP features, custom APIs, and a React Native mobile application released on Google Play.',
    tags: ['React Native', 'Node.js', 'WebSockets'],
    website: 'https://www.dannie.cc/',
    challenge: 'The work involved translating business requirements into ERP features and making ERP functionality available through APIs and a mobile application.',
    approach: 'I gathered requirements with business analysts, developed and maintained features in a custom Node.js and WebSocket-based framework, and built REST APIs. I also designed, developed, and released a React Native ERP application to Google Play.',
    contributions: ['Requirements gathering with business analysts', 'ERP feature development using Node.js and WebSockets', 'Custom REST APIs for ERP features and mobile integrations', 'Design, development, and Google Play release of a React Native ERP app'],
    note: 'Backend and mobile work covering requirements, implementation, and release.',
  },
  {
    id: 'goecofit', kind: 'career', number: '04', title: 'GoEcoFit', category: 'CORPORATE HEALTH', years: '2022 — 2024',
    subtitle: 'A mobile health platform.', company: 'GoEcoFit GmbH', role: 'Flutter Developer',
    description: 'A Flutter application for corporate health, connected to FHIR services and automated backend workflows.',
    tags: ['Flutter', 'FHIR', 'Medplum'],
    website: 'https://www.goecofit.com/en',
    challenge: 'The project brought together a corporate health application, healthcare data services, and backend workflows driven by business requirements.',
    approach: 'I developed a scalable Flutter application, integrated FHIR-based healthcare services through Medplum, and built REST APIs and automated backend workflows. I worked on translating business requirements into production-ready features.',
    contributions: ['Flutter development for a corporate health platform', 'FHIR healthcare integrations using Medplum', 'REST APIs and automated backend workflows', 'Production features based on business requirements'],
    note: 'Mobile development alongside the APIs and workflows that supported the application.',
  },
  {
    id: 'actimi', kind: 'career', number: '05', title: 'Actimi', category: 'BLE & MEDICAL DEVICES', years: '2021 — 2022',
    subtitle: 'Connecting medical devices.', company: 'Actimi GmbH', role: 'Flutter & React Native Developer',
    description: 'A React Native BLE SDK and mobile prototypes for integrating medical devices and custom protocols.',
    tags: ['React Native', 'Bluetooth LE', 'TypeScript'],
    website: 'https://actimi.com/en',
    challenge: 'Different medical devices use different communication protocols. The work focused on supporting those devices through a reusable SDK and demonstrating the integrations in mobile applications.',
    approach: 'I led development of a React Native BLE SDK supporting multiple devices and protocols, built reusable TypeScript modules for proprietary data transmission, and developed Flutter and React Native prototypes.',
    contributions: ['React Native BLE SDK development for multiple device protocols', 'Integrations for ECG, blood pressure, temperature, oximeter, and other devices', 'Reusable TypeScript modules for proprietary BLE data transmission', 'Flutter and React Native prototypes demonstrating device integrations'],
    note: 'Work at the boundary between medical hardware, Bluetooth protocols, and mobile applications.',
  },
];

type Project = typeof projects[number];

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === 'novidoc') return <div className="project-visual visual-games" aria-hidden="true">
    <div className="visual-top"><span className="visual-brand"><Gamepad2 size={24} /> novidoc</span><span className="visual-code">INDEPENDENT GAMES</span></div>
    <div className="games-composition"><div className="games-headline">Made<br /><span>to play.</span></div><div className="game-engine-mark"><Gamepad2 size={80} strokeWidth={1.1} /><span className="mono">FLUTTER + FLAME</span></div><div className="game-genres"><span>Puzzle</span><span>Arcade</span><span>Mobile</span></div></div>
    <span className="visual-footnote">INDEPENDENT STUDIO · DEVELOPMENT & PUBLISHING</span>
  </div>;
  if (project.id === 'villa') return <div className="project-visual visual-villa" aria-hidden="true">
    <div className="visual-top"><span className="visual-brand villa-brand">Villa Leom</span><span className="visual-code">VACATION RENTAL</span></div>
    <div className="villa-composition"><p>A little closer<br /><span>to your next stay.</span></p><div className="villa-flow"><span><Languages size={24} strokeWidth={1.3} />Explore</span><i>→</i><span><CalendarDays size={24} strokeWidth={1.3} />Availability</span><i>→</i><span><MessageSquare size={24} strokeWidth={1.3} />Inquire</span></div></div>
    <span className="visual-footnote">MULTILINGUAL WEBSITE · BOOKING INQUIRIES</span>
  </div>;
  if (project.id === 'actimi') return <div className="project-visual visual-health" aria-hidden="true">
    <div className="visual-top"><span className="visual-brand"><Activity size={22} /> actimi</span><span className="visual-code">HUMAN, BY DESIGN.</span></div>
    <div className="health-composition"><div className="device-chip"><Bluetooth size={17} /><span>Device connected</span><span className="tiny-dot" /></div><div className="signal-card"><div><span className="signal-label">CONNECTED CARE</span><Heart size={16} /></div><svg className="ecg-chart" viewBox="0 0 340 94" fill="none"><path className="ecg-base" d="M0 53H43L53 45L64 60L77 53H102L111 52L122 21L134 83L149 8L163 65L175 52H208L219 44L231 60L244 53H279L288 44L300 60L315 53H340" /><path className="ecg-trace" d="M0 53H43L53 45L64 60L77 53H102L111 52L122 21L134 83L149 8L163 65L175 52H208L219 44L231 60L244 53H279L288 44L300 60L315 53H340" /></svg><div className="signal-footer"><span>Device → SDK → Patient</span><Radio size={16} /></div></div><div className="health-tag"><Check size={13} /> Care beyond the clinic.</div></div>
    <span className="visual-footnote">CONCEPT VISUALIZATION · REMOTE PATIENT MONITORING</span>
  </div>;
  if (project.id === 'goecofit') return <div className="project-visual visual-wellbeing" aria-hidden="true">
    <div className="visual-top"><span className="visual-brand"><span className="eco-symbol">✳</span> goecofit</span><span className="visual-code">WELLBEING IN MOTION.</span></div>
    <div className="eco-composition"><div className="eco-headline">Small steps.<br /><span>Real change.</span></div><div className="activity-rings"><svg viewBox="0 0 180 180"><circle className="ring-track" cx="90" cy="90" r="75" /><circle className="ring-one" cx="90" cy="90" r="75" /><circle className="ring-track" cx="90" cy="90" r="55" /><circle className="ring-two" cx="90" cy="90" r="55" /><circle className="ring-track" cx="90" cy="90" r="35" /><circle className="ring-three" cx="90" cy="90" r="35" /></svg><Heart size={21} /></div><div className="eco-pill"><span className="tiny-dot" /> A healthier kind of teamwork.</div></div>
    <span className="visual-footnote">CONCEPT VISUALIZATION · CORPORATE HEALTH</span>
  </div>;
  return <div className="project-visual visual-systems" aria-hidden="true">
    <div className="visual-top"><span className="visual-brand">DANNIE<span className="brand-square" /></span><span className="visual-code">BUILT TO CONNECT.</span></div>
    <div className="system-diagram"><div className="system-endpoints"><span><Layers3 size={17} /> Applications</span><span><Code2 size={17} /> Framework</span><span><Server size={17} /> Services</span></div><div className="connection-lines"><i /><i /><i /></div><div className="system-core"><span className="core-mark"><Radio size={29} strokeWidth={1.3} /></span><div>One connected system.<span>NODE.JS + WEBSOCKETS</span></div><span className="system-status" /></div></div>
    <span className="visual-footnote">ARCHITECTURE CONCEPT · ERP & MOBILE APIs</span>
  </div>;
}

export default function Experience() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = overflow; };
  }, [selected]);

  return (
    <>
    <section id="work" className="section work-section" aria-labelledby="personal-projects-title">
      <div className="container">
        <div className="section-heading" data-reveal><div><p className="eyebrow"><span className="section-number">01 /</span> INDEPENDENT WORK</p><h2 id="personal-projects-title">Personal<br /><span className="serif">projects.</span></h2></div><p className="section-description">Things I’m building outside<br className="desktop-break" /> my professional roles.<ArrowDownRight size={30} strokeWidth={1.2} /></p></div>
        <div className="projects-grid">{projects.filter(project => project.kind === 'personal').map(project => <article key={project.id} className={`project project-${project.id}`} data-reveal>
          <button className="project-open" onClick={() => setSelected(project)} aria-label={`Explore ${project.title} — ${project.subtitle}`}><ProjectVisual project={project} /><span className="project-open-badge"><ArrowUpRight size={22} /></span><span className="project-view-label">Explore project <ArrowUpRight size={16} /></span></button>
          <div className="project-meta mono"><span>{project.number} / {project.category}</span><span>{project.years}</span></div>
          <div className="project-title-row"><h3><button onClick={() => setSelected(project)}>{project.title}<span className="serif"> — {project.subtitle}</span></button></h3><ArrowUpRight size={22} /></div>
          <p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </article>)}</div>
        <div className="work-note"><a href="#career">Professional experience <ArrowDownRight size={16} /></a><a href="https://github.com/vladyslav-alisov" target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={16} /></a></div>
      </div>
    </section>
    <Career onExploreRole={projectId => setSelected(projects.find(project => project.id === projectId && project.kind === 'career') ?? null)} />
      <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
        {selected && <div className="dialog-content"><div className="dialog-top"><span className="eyebrow">{selected.kind === 'personal' ? `PERSONAL PROJECT / ${selected.number}` : 'PROFESSIONAL WORK'}</span><button className="icon-button" autoFocus aria-label="Close project details" onClick={() => setSelected(null)}><X size={20} /></button></div><p className="eyebrow accent">{selected.category} · {selected.years}</p><h2 id="project-dialog-title">{selected.title}<span className="serif">{selected.subtitle}</span></h2><p id="project-dialog-description" className="dialog-description">{selected.description}</p><div className="dialog-facts"><div><span className="eyebrow">MY ROLE</span><p>{selected.role}</p></div><div><span className="eyebrow">{selected.kind === 'personal' ? 'PROJECT' : 'EMPLOYER'}</span><p>{selected.company}</p></div></div><div className="dialog-story"><h3>The challenge</h3><p>{selected.challenge}</p><h3>My contribution</h3><p>{selected.approach}</p><ul>{selected.contributions.map(item => <li key={item}><ArrowUpRight size={16} />{item}</li>)}</ul></div><div className="dialog-note"><Smartphone size={22} /><p>{selected.note}</p></div><div className="dialog-footer"><div className="tag-list">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="dialog-footer-links"><a className="text-link" href={selected.website} target="_blank" rel="noopener noreferrer">{selected.kind === 'personal' ? 'Visit project' : 'Company website'} <ArrowUpRight size={16} /></a><button className="text-link" onClick={() => setSelected(null)}>{selected.kind === 'personal' ? 'Back to projects' : 'Back to career'} <ArrowUpRight size={16} /></button></div></div></div>}
      </dialog>
    </>
  );
}
