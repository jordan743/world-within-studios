import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from './projectsData.js'
import Nav from './Nav.jsx'
import PodcastContent from './PodcastContent.jsx'
import FilmContent from './FilmContent.jsx'
import './Studios.css'
import './CaseStudy.css'

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

function TrailerSection() {
  return (
    <section className="cs-trailer">
      <div className="cs-trailer__blob">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="cs-trailer__blob-svg">
          <path
            d="M80,150 C60,80 120,20 200,30 C280,40 360,80 340,160 C320,240 240,280 160,270 C80,260 100,220 80,150 Z"
            fill="none"
            stroke="rgba(255,244,226,0.15)"
            strokeWidth="1.5"
          />
          <path
            d="M100,150 C85,95 135,45 205,52 C275,59 345,98 325,165 C305,232 235,265 160,255 C85,245 115,205 100,150 Z"
            fill="rgba(255,244,226,0.06)"
            stroke="rgba(255,244,226,0.12)"
            strokeWidth="1"
          />
          <path
            d="M120,148 C108,105 148,68 208,74 C268,80 328,116 310,168 C292,220 232,248 165,240 C98,232 132,191 120,148 Z"
            fill="rgba(255,244,226,0.04)"
          />
        </svg>
        <div className="cs-trailer__text">
          TRAILER<br />COMING<br />SOON
        </div>
      </div>
    </section>
  )
}

function PrevNext({ prev, next }) {
  return (
    <nav className="cs-prevnext">
      {prev ? (
        <Link to={`/${prev.slug}`} className="cs-prevnext__link cs-prevnext__link--prev">
          <span className="cs-prevnext__arrow">↖</span>
          <span className="cs-prevnext__label">PREVIOUS PROJECT</span>
        </Link>
      ) : <div />}
      {next ? (
        <Link to={`/${next.slug}`} className="cs-prevnext__link cs-prevnext__link--next">
          <span className="cs-prevnext__label">NEXT PROJECT</span>
          <span className="cs-prevnext__arrow">↗</span>
        </Link>
      ) : <div />}
    </nav>
  )
}


function WorldWithinDisplay() {
  return (
    <div className="ww-display" aria-hidden="true">
      <img src="/assets/logo-studios.svg" alt="" />
    </div>
  )
}

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

function Footer() {
  return (
    <footer className="wws-footer">
      <div className="wws-footer__links">
        <a href="/terms-and-privacy">TERMS &amp; PRIVACY</a>
        <a href="/disclaimer">DISCLAIMER</a>
        <a href="/cookies-policy">COOKIES POLICY</a>
      </div>
      <div className="wws-footer__socials">
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

export default function CaseStudy() {
  const { slug } = useParams()
  const idx = PROJECTS.findIndex(p => p.slug === slug)
  const project = PROJECTS[idx]

  if (!project) {
    return (
      <div style={{ minHeight:'100vh', background:'#000', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <Link to="/" style={{ color:'rgba(255,244,226,0.6)', fontFamily:'var(--font-b)', fontSize:13, letterSpacing:'0.1em', textTransform:'uppercase' }}>
          ← Back to Studios
        </Link>
      </div>
    )
  }

  const prev = idx > 0 ? PROJECTS[idx - 1] : null
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null

  return (
    <div className="cs-page">
      <SideStrips />
      <Nav />

      {/* Hero */}
      {project.poster ? (
        /* Film hero: black bg, left text + right poster */
        <section className="cs-film-hero">
          <div className="cs-film-hero__left">
            <h1 className="cs-film-hero__title">
              {project.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < project.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h1>
            <div className="cs-film-hero__category">{project.category}</div>
            <p className="cs-film-hero__desc">{project.desc}</p>
            {project.trailer && (
              <a
                href={`https://youtu.be/${project.trailer}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-film-hero__cta"
              >
                WATCH TRAILER ↗
              </a>
            )}
          </div>
          <div className="cs-film-hero__right">
            <img className="cs-film-hero__poster" src={project.poster} alt={project.titleCase} />
          </div>
        </section>
      ) : (
        /* Standard hero: full-bleed bg image */
        <section className="cs-hero">
          {project.layout === 'dual' ? (
            <>
              <img className="cs-hero__bg" src={project.bgLeft} alt="" />
              <img className="cs-hero__bg cs-hero__bg--right" src={project.bgRight} alt="" />
            </>
          ) : project.bg ? (
            <img className="cs-hero__bg" src={project.bg} alt="" />
          ) : (
            <div className="cs-hero__bg cs-hero__bg--dark" />
          )}
          <div className="cs-hero__overlay" />
          <div className="cs-hero__body">
            <div className="cs-hero__left">
              <h1 className="cs-hero__title">
                {project.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < project.title.split('\n').length - 1 && <br />}</span>
                ))}
              </h1>
              <div className="cs-hero__category">{project.category}</div>
              <p className="cs-hero__desc">{project.desc}</p>
            </div>
            <div className="cs-hero__right">
              {project.badge && (
                <img src={project.badge} alt="Award" className="cs-hero__badge" />
              )}
              {project.badges && (
                <div className="cs-hero__badges">
                  {project.badges.map((b, i) => (
                    <img key={i} src={b} alt="Award" className="cs-hero__badge" />
                  ))}
                </div>
              )}
            </div>
          </div>
          <Ticker text={project.ticker} />
        </section>
      )}

      {/* Content below hero */}
      {project.slug === 'how-to-change-the-world-podcast' ? (
        <PodcastContent />
      ) : project.poster ? (
        <FilmContent project={project} />
      ) : (
        <TrailerSection />
      )}

      {/* Prev / Next */}
      <PrevNext prev={prev} next={next} />

      {/* Footer sections */}
      <WorldWithinDisplay />
      <QuoteSection />
      <Footer />
    </div>
  )
}
