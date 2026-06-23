import { work } from '../data'
import SectionHead from './SectionHead'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead num="04" label="work" title="Selected work." />
        <div className="work-grid">
          {work.map((p) => (
            <div className="card reveal" data-reveal key={p.idx}>
              <span className="idx">{p.idx}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="at">{p.at}</span>
              <div className="cstack">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
