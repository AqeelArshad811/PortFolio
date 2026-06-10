import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <span className="eyebrow">
          <span className="num">05</span> / contact
        </span>
        <h2 data-reveal className="reveal">
          Got a backend that needs building?{' '}
          <a href={`mailto:${profile.email}`}>Let’s talk.</a>
        </h2>
        <div data-reveal className="reveal contact-rows">
          <div className="crow">
            <span className="k">EMAIL</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="crow">
            <span className="k">LINKEDIN</span>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              {profile.linkedin}
            </a>
          </div>
          <div className="crow">
            <span className="k">PHONE</span>
            <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
          </div>
          <div className="crow">
            <span className="k">LOCATION</span>
            <span>
              {profile.location} · works EST hours
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
