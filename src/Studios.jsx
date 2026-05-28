import { Link } from 'react-router-dom'
import { PROJECTS, HERO_VIDEO } from './projectsData.js'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import './Studios.css'

// ── Side Film Strips ────────────────────────────────────────────
function SideStrips() {
  return (
    <>
      <div className="strip strip--left" aria-hidden="true">
        <span className="strip__mark">X</span>
        <span className="strip__num">00</span>
        <span className="strip__text">WORLD WITHIN STUDIOS</span>
        <span className="strip__mark">XA</span>
        <span className="strip__mark strip__mark--bot">X</span>
      </div>
      <div className="strip strip--right" aria-hidden="true">
        <span className="strip__mark">X</span>
        <span className="strip__num">00</span>
        <span className="strip__text">WORLD WITHIN STUDIOS</span>
        <span className="strip__mark">XA</span>
        <span className="strip__mark strip__mark--bot">X</span>
      </div>
    </>
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
