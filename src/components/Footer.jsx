import { profile, whatsappLink } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <span>© {new Date().getFullYear()} Muhammad Aqeel Arshad</span>
        <div className="foot-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="/resume.pdf" target="_blank" rel="noopener">Résumé</a>
        </div>
      </div>
    </footer>
  )
}
