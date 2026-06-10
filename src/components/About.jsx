import { about, facts } from '../data'
import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead
          num="01"
          label="about"
          title="A backend-leaning full-stack engineer who likes the messy parts."
        />
        <div className="about-grid">
          <div data-reveal className="reveal">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div data-reveal className="reveal facts">
            {facts.map((f) => (
              <div className="fact" key={f.k}>
                <span className="k">{f.k}</span>
                <span className="v">
                  {f.big ? <span className="big">3+</span> : null}
                  {f.big ? ' years' : f.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
