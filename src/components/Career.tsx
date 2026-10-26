import { ArrowUpRight } from 'lucide-react';
import { workExperience } from '../data/profile';
import ResumeLink from './ResumeLink';

export default function Career({ onExploreRole }: { onExploreRole: (projectId: string) => void }) {
  return (
    <section id="career" className="section career-section" aria-labelledby="career-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow"><span className="section-number">02 /</span> CAREER</p>
            <h2 id="career-title">Where I’ve<br /><span className="serif">worked.</span></h2>
          </div>
          <p className="section-description">My professional roles and the work<br className="desktop-break" /> I’ve contributed to within each team.</p>
        </div>

        <div id="experience" className="experience-list">
          {workExperience.map((job, index) => (
            <article className="experience-row" key={job.company} data-reveal>
              <div className="career-date">
                <span className="experience-date mono">{job.dates}</span>
                {job.dates.endsWith('PRESENT') && <span className="career-current"><i />Current role</span>}
              </div>
              <div className="career-role">
                <h3>{job.role}</h3>
                <a className="experience-company" href={job.website} target="_blank" rel="noopener noreferrer">{job.company}<ArrowUpRight size={13} /></a>
                <p className="experience-summary">{job.summary}</p>
                {job.projectId && <button className="career-detail-link" onClick={() => { if (job.projectId) onExploreRole(job.projectId); }} aria-label={`View work at ${job.company}`}>Work in this role <ArrowUpRight size={15} /></button>}
              </div>
              <span className="experience-focus">{job.location}</span>
              <span className="experience-index mono">0{index + 1}</span>
            </article>
          ))}
        </div>

        <div className="career-footer" data-reveal>
          <p>The full picture, in one document.</p>
          <ResumeLink className="text-link" />
        </div>
      </div>
    </section>
  );
}
