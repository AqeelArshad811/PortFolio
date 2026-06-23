import { useState } from 'react'
import { sections, profile } from '../data'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useScrollProgress } from '../hooks/useScrollProgress'

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sections.map((s) => s.id))
  const progress = useScrollProgress()
  const close = () => setOpen(false)

  return (
    <nav>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close}>aqeel<span>.</span>arshad</a>

        <div className="nav-links">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''}>
              {s.num} / {s.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <span className="nav-status"><span className="dot" />open to roles</span>
          <button className="theme-toggle" aria-label="Toggle dark / light mode" title="Toggle theme" onClick={onToggleTheme}>
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            )}
          </button>
          <button className={`burger ${open ? 'open' : ''}`} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'show' : ''}`}>
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''} onClick={close}>
            <span className="mm-num">{s.num}</span>{s.label}
          </a>
        ))}
        <a className="mm-cta" href="/resume.pdf" target="_blank" rel="noopener" onClick={close}>Download résumé ↓</a>
      </div>
    </nav>
  )
}
