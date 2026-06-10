import { profile } from '../data'
import SystemMap from './SystemMap'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="num">›</span> {profile.role} · {profile.years} years
          </span>
          <h1 className="hero-name">
            {profile.firstName}
            <span className="sub">{profile.lastName}</span>
          </h1>
          <p className="hero-lead">
            I build <b>production backends</b>, ship clean <b>React &amp; Next.js</b>{' '}
            frontends, and wire the services in between — APIs, data, and AI.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#work">
              View work <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
          </div>
        </div>
        <SystemMap />
      </div>
    </header>
  )
}
