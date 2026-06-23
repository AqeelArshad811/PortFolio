import { stack } from '../data'
import SectionHead from './SectionHead'

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <SectionHead num="02" label="stack" title="The toolkit, by layer." />
        <div data-reveal className="reveal stack-grid">
          {stack.map((group) => (
            <div className="stack-cell" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
