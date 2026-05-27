import { Link } from 'react-router-dom'
import { PROJECTS, HERO_VIDEO } from './projectsData.js'
import './Studios.css'

// ── Side Film Strips ────────────────────────────────────────────
function SideStrips() {
  return (
    <>
      <div className="strip strip--left" aria-hidden="true">
        <span className="strip__mark">X</span>
        <span className="strip__num">00</span>
        <span className="strip__text">WORLD WITHIN</span>
        <span className="strip__mark">XA</span>
        <span className="strip__mark strip__mark--bot">X</span>
      </div>
      <div className="strip strip--right" aria-hidden="true">
        <span className="strip__mark">X</span>
        <span className="strip__num">00</span>
        <span className="strip__text">WORLD WITHIN</span>
        <span className="strip__mark">XA</span>
        <span className="strip__mark strip__mark--bot">X</span>
      </div>
    </>
  )
}

// ── Nav ─────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="wws-nav">
      <a href="https://worldwithin.org" target="_blank" rel="noopener noreferrer" className="wws-nav__link">CHECK OUT WORLD WITHIN</a>
      <a href="/" className="wws-nav__logo" aria-label="World Within Studios">
        <img src="/assets/logo-studios.svg" alt="World Within Studios" />
      </a>
      <div className="wws-nav__right">
        <a href="mailto:info@worldwithin.org" className="wws-nav__link">CONTACT</a>
      </div>
    </header>
  )
}

// ── Scrolling Ticker ─────────────────────────────────────────────
function Ticker({ text }) {
  const sep = ' '.repeat(12)
  const content = Array(10).fill(text + sep).join('')
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        <span>{content}</span>
        <span aria-hidden="true">{content}</span>
      </div>
    </div>
  )
}

// ── Hero Section ─────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero-section">
      <video
        className="hero-section__video"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-section__overlay" />
      <div className="hero-section__content">
        <h1 className="hero-section__tagline">WE MAKE<br />GOOD COOL.</h1>
      </div>
      <Ticker text="WORLD WITHIN STUDIOS" />
    </section>
  )
}

// ── Full-bleed Project Section ───────────────────────────────────
function ProjectFull({ project, index }) {
  const nextTicker = PROJECTS[index + 1]?.ticker || 'WORLD WITHIN'
  return (
    <section className="proj-section" id={project.slug}>
      {project.bg ? (
        <img
          className="proj-section__bg"
          src={project.bg}
          alt=""
          loading="lazy"
        />
      ) : (
        <div className="proj-section__bg proj-section__bg--dark" />
      )}
      <div className="proj-section__overlay" />
      <div className="proj-section__body">
        <div className="proj-section__left">
          <Link to={`/${project.slug}`} className="proj-section__title-link">
            <h2 className="proj-section__title">
              {project.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < project.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
          </Link>
          <Link to={`/${project.slug}`} className="proj-section__category">
            {project.category} ↗
          </Link>
          <p className="proj-section__desc">{project.desc}</p>
        </div>
        <div className="proj-section__right">
          {project.badge && (
            <img src={project.badge} alt="Award" className="proj-section__badge" />
          )}
          {project.badges && (
            <div className="proj-section__badges">
              {project.badges.map((b, i) => (
                <img key={i} src={b} alt="Award" className="proj-section__badge" />
              ))}
            </div>
          )}
        </div>
      </div>
      <Ticker text={nextTicker} />
    </section>
  )
}

// ── Dual Podcast Section ──────────────────────────────────────────
function ProjectDual({ project, index }) {
  const nextTicker = PROJECTS[index + 1]?.ticker || 'WORLD WITHIN'
  return (
    <section className="proj-dual" id={project.slug}>
      <div className="proj-dual__panel proj-dual__panel--left">
        <img className="proj-dual__bg" src={project.bgLeft} alt="" loading="lazy" />
        <div className="proj-dual__overlay" />
        <div className="proj-dual__content">
          <Link to={`/${project.slug}`} className="proj-section__title-link">
            <h2 className="proj-section__title proj-section__title--sm">
              {project.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < project.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
          </Link>
          <Link to={`/${project.slug}`} className="proj-section__category">
            {project.category} ↗
          </Link>
          <p className="proj-section__desc proj-section__desc--sm">{project.desc}</p>
        </div>
      </div>
      <div className="proj-dual__panel proj-dual__panel--right">
        <img className="proj-dual__bg" src={project.bgRight} alt="" loading="lazy" />
        <div className="proj-dual__overlay" />
      </div>
      <Ticker text={nextTicker} />
    </section>
  )
}

// ── World Within Display ──────────────────────────────────────────
function WorldWithinDisplay() {
  return (
    <div className="ww-display" aria-hidden="true">
      <img src="/assets/logo-studios.svg" alt="" />
    </div>
  )
}

// ── Quote ─────────────────────────────────────────────────────────
function QuoteSection() {
  return (
    <section className="quote-section">
      <blockquote className="quote-section__text">
        "THE ONE PERFECTLY DIVINE THING, THE ONE GLIMPSE OF GOD'S PARADISE GIVEN ON EARTH,
        IS TO FIGHT A LOSING BATTLE — AND NOT LOSE IT."
      </blockquote>
      <cite className="quote-section__attr">— G.K. CHESTERTON</cite>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="wws-footer">
      <div className="wws-footer__links">
        <a href="/terms-and-privacy">TERMS &amp; PRIVACY</a>
        <a href="/disclaimer">DISCLAIMER</a>
        <a href="/cookies-policy">COOKIES POLICY</a>
      </div>
      <div className="wws-footer__socials">
        <a href="https://linkedin.com/company/worldwithin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://youtube.com/@worldwithin" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
      </div>
    </footer>
  )
}

// ── Page ──────────────────────────────────────────────────────────
export default function Studios() {
  return (
    <div className="studios-page">
      <SideStrips />
      <Nav />
      <HeroSection />
      {PROJECTS.map((project, i) =>
        project.layout === 'dual'
          ? <ProjectDual key={project.slug} project={project} index={i} />
          : <ProjectFull  key={project.slug} project={project} index={i} />
      )}
      <WorldWithinDisplay />
      <QuoteSection />
      <Footer />
    </div>
  )
}
