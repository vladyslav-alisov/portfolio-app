import { ArrowUpRight, Braces, Radio, Smartphone, Workflow } from 'lucide-react';

const capabilities = [
  { number: '01', icon: Smartphone, title: 'Mobile apps.', subtitle: 'FLUTTER & REACT NATIVE', description: 'Building mobile applications from requirements and design through testing and store release.', skills: ['Flutter & Dart', 'React Native', 'TypeScript & JavaScript', 'App Store & Google Play'] },
  { number: '02', icon: Braces, title: 'Backend & APIs.', subtitle: 'SERVICES & INTEGRATIONS', description: 'Developing APIs and backend features that support mobile applications and enterprise workflows.', skills: ['Node.js & NestJS', 'REST APIs', 'WebSockets', 'FHIR & Medplum'] },
  { number: '03', icon: Workflow, title: 'App architecture.', subtitle: 'STRUCTURE & MAINTAINABILITY', description: 'Keeping applications organized with clear responsibilities and reusable, testable code.', skills: ['Clean Architecture', 'SOLID principles', 'Design patterns', 'Dependency injection'] },
  { number: '04', icon: Radio, title: 'Device integrations.', subtitle: 'CONNECTED MOBILE EXPERIENCES', description: 'Connecting applications to medical hardware, messaging services, and production monitoring.', skills: ['Bluetooth Low Energy', 'Custom BLE protocols', 'Firebase & push notifications', 'Analytics & crash reporting'] },
];

const tools = [
  { title: 'DEVELOPMENT TOOLS', items: ['Git', 'Docker', 'CI/CD', 'Postman', 'Figma'] },
  { title: 'AI-ASSISTED WORKFLOW', items: ['Claude Code', 'Codex', 'Cursor', 'Bolt'] },
  { title: 'WAYS OF WORKING', items: ['Agile & Scrum', 'Cross-team collaboration', 'Technical communication', 'Ownership'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading" data-reveal><div><p className="eyebrow"><span className="section-number">04 /</span> SKILLS & TOOLS</p><h2>What I<br /><span className="serif">work with.</span></h2></div><p className="section-description">The languages, frameworks, and tools<br />I use across mobile and backend projects.</p></div>
        <div className="capabilities-grid">
          {capabilities.map(item => <article className="capability" key={item.number} data-reveal><div className="capability-top"><item.icon size={26} strokeWidth={1.3} /><span className="mono">{item.number}</span></div><p className="eyebrow">{item.subtitle}</p><h3>{item.title}</h3><p className="capability-description">{item.description}</p><div className="capability-skills">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div><ArrowUpRight className="capability-arrow" size={25} strokeWidth={1.2} /></article>)}
        </div>
        <div className="tool-groups" data-reveal>{tools.map(group => <div className="tool-group" key={group.title}><p className="eyebrow">{group.title}</p><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </div>
    </section>
  );
}
