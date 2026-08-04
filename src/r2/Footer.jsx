import { Link } from 'react-router-dom'
import DotTrail from './DotTrail.jsx'
import { LEGAL_LINKS, SOCIALS } from './siteData.js'
import './Footer.css'

const ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.9 15 15.4 12 9.9 9" fill="var(--r2-cream)" />
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M7.6 14.7c2.6-1 5.9-1 8.5.1" stroke="var(--r2-cream)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M6.8 11.6c3.2-1.25 7-1.25 10.3.1" stroke="var(--r2-cream)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M6.2 8.5c3.7-1.35 8-1.35 11.6.1" stroke="var(--r2-cream)" strokeWidth="1.7" strokeLinecap="round" fill="none" />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="9.4" r="2.1" fill="var(--r2-cream)" />
      <path d="M12 12.6c1.15 0 1.98.42 2.28 1.16.24.55.1 2.15-.28 4.7-.22 1.5-.4 1.9-.79 2.2-.5.36-1.2.46-1.86.26-.65-.24-.8-.6-1.1-2.46-.4-2.55-.5-4.15-.28-4.7.3-.74 1.13-1.16 2.03-1.16z" fill="var(--r2-cream)" />
      <path d="M12 4.6a7.4 7.4 0 0 1 4.4 13.35c-.1.08-.2 0-.16-.13l.16-.68a.4.4 0 0 1 .14-.22 5.9 5.9 0 1 0-9.08 0 .4.4 0 0 1 .14.22l.16.68c.03.13-.06.2-.16.13A7.4 7.4 0 0 1 12 4.6z" fill="var(--r2-cream)" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  ),
}

/**
 * Shared footer — Figma component 2425:1199 (1440×933):
 * cream playbill lockup, B&W film-set strip, then the legal / social bar.
 */
export default function Footer() {
  return (
    <footer className="r2footer">
      <DotTrail />

      <div className="r2footer__playbill">
        <img
          className="r2footer__lockup"
          src="/assets/r2/footer/playbill-lockup.svg"
          alt="World Within Studios presents"
        />
        <span className="r2-grain" aria-hidden="true" />
      </div>

      <div className="r2footer__strip">
        <img src="/assets/r2/footer/filmset.webp" alt="" aria-hidden="true" />
      </div>

      <div className="r2footer__bar">
        <nav className="r2footer__legal" aria-label="Legal">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <ul className="r2footer__socials">
          {SOCIALS.map((s) => (
            <li key={s.id}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {ICONS[s.id]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
