import { useState } from 'react'
import { sections, profile } from '../data'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrollProgress } from '../hooks/useScrollProgress'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sections.map((s) => s.id))
  const progress = useScrollProgress()

  const close = () => setOpen(false)

  return (
    <nav>
      <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close}>
          aqeel<span>.</span>arshad
        </a>

        <div className="nav-links">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
            >
              {s.num} / {s.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <span className="nav-status">
            <span className="dot" />
            {profile.status.toLowerCase()}
          </span>
          <button
            className={`burger ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'show' : ''}`}>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={active === s.id ? 'active' : ''}
            onClick={close}
          >
            <span className="mm-num">{s.num}</span>
            {s.label}
          </a>
        ))}
        <a className="mm-cta" href={`mailto:${profile.email}`} onClick={close}>
          Get in touch →
        </a>
      </div>
    </nav>
  )
}
