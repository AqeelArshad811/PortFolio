import { experience } from '../data'
import SectionHead from './SectionHead'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead num="03" label="experience" title="Where I’ve shipped." />
        {experience.map((job) => (
          <div className="exp reveal" data-reveal key={job.role + job.when}>
            <div className="exp-meta">
              <div className="role-co">{job.role}</div>
              <div className="when">{job.when}</div>
              <div className="place">{job.place}</div>
            </div>
            <div>
              <ul>{job.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
