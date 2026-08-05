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
  /* Apple's own Podcasts (iOS) mark. One compound path — the rounded square is
     filled and the mic knocked out of it — so it must inherit `currentColor`
     like the rest and must not have per-shape fills painted back in. The
     hand-drawn stand-in it replaces had the concentric rings in the wrong
     proportions and read as a smudge at 22px. */
  apple: (
    <svg viewBox="0 0 300 300" fill="currentColor" aria-hidden="true">
      <path d="M294.1,40c-2.9-7.4-9.7-17.9-19.2-25.2-5.5-4.3-12.1-8.3-21.1-11-9.7-2.8-21.5-3.8-36.3-3.8H82.5c-14.8,0-26.6,1-36.3,3.8-9,2.7-15.6,6.8-21.1,11-9.6,7.4-16.3,17.8-19.2,25.2C0,54.9,0,71.8,0,82.5v135c0,10.7,0,27.6,5.9,42.5,2.9,7.4,9.7,17.9,19.2,25.2,5.5,4.3,12.1,8.3,21.1,11,9.7,2.8,21.5,3.8,36.3,3.8h135c14.8,0,26.7-.9,36.3-3.8,9-2.7,15.6-6.8,21.1-11,9.6-7.4,16.3-17.8,19.2-25.2,5.8-14.9,5.9-31.8,5.9-42.5V82.5c0-10.6,0-27.6-5.9-42.5ZM175.2,203.8c-.8,9.2-2.3,21.4-4.2,33.9-1.4,8.9-2.5,13.7-3.5,17.1-1.6,5.5-7.8,10.4-17.5,10.4s-15.8-4.8-17.5-10.4c-1-3.4-2.1-8.2-3.5-17.1-1.9-12.4-3.4-24.7-4.2-33.9-.8-9.7-1.3-15.7-.5-22.7.4-3.6,1.7-6.1,4-8.6,4.5-4.8,12.4-7.8,21.7-7.8s17.2,3.1,21.7,7.8c2.4,2.4,3.6,5,4,8.6.8,7,.4,13-.5,22.7ZM111,180.5c1,.9,1.5,2.1,1.4,3.4-.2,4-.2,7.8,0,12.1,0,1.1-1.3,1.8-2.2,1.2-18.9-12.9-31.2-34.7-30.9-59.3.5-37.4,30.5-68.3,67.9-69.7,40.2-1.6,73.5,30.7,73.4,70.5,0,24.2-12.3,45.7-30.9,58.4-1,.7-2.3,0-2.2-1.2.2-4.3.3-8.1,0-12,0-1.3.5-2.5,1.4-3.4,11.1-10.5,18.1-25.3,18.1-41.7,0-32.2-26.8-58.4-59.4-57.1-30,1.2-54.1,25.6-54.9,55.6-.4,17,6.6,32.4,18.1,43.2ZM174.6,130.1c0,13.6-11,24.6-24.6,24.6s-24.6-11-24.6-24.6,11-24.6,24.6-24.6,24.6,11.1,24.6,24.6ZM185.1,238.3c-1,.4-2.1-.4-1.9-1.5.5-3.6,1-7.2,1.5-10.8,0-1.3.9-2.4,2.1-2.9,32.5-14.3,55.3-46.7,55.3-84.4s-41.7-92.4-92.8-92c-49.9.4-90.7,41.1-91.2,91.1-.4,38.1,22.5,71,55.3,85.3,1.1.6,1.9,1.6,2.1,2.9.4,3.6,1,7.2,1.5,10.8,0,1-.9,1.9-1.9,1.5-41.5-14.6-71.2-54.4-70.6-100.9.8-57.4,47.8-104,105.2-104.2,58.3-.1,105.8,47.3,106,105.5,0,46-29.5,85.2-70.6,99.6Z" />
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
        {/* `data-dots="avoid"` keeps the trail from stamping a dot over these —
            see DotTrail.jsx. */}
        <nav className="r2footer__legal" aria-label="Legal" data-dots="avoid">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <ul className="r2footer__socials" data-dots="avoid">
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
