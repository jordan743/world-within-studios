import { useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from './projectsData.js'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
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
      <div className="cs-trailer__text">
        TRAILER COMING SOON
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

function MoreProjects({ currentSlug }) {
  const others = PROJECTS.filter(p => p.slug !== currentSlug)
  const trackRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const origin = useRef(0)
  const scrollStart = useRef(0)

  const onDown = (e) => {
    setDragging(true)
    origin.current = e.pageX
    scrollStart.current = trackRef.current.scrollLeft
  }
  const onMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    trackRef.current.scrollLeft = scrollStart.current - (e.pageX - origin.current)
  }
  const onUp = () => setDragging(false)

  return (
    <section className="cs-more">
      <div className="cs-more__header">
        <span className="cs-more__label">MORE PROJECTS</span>
      </div>
      <div
        className={`cs-more__track${dragging ? ' cs-more__track--grabbing' : ''}`}
        ref={trackRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        {others.map(p => {
          const img = p.layout === 'dual' ? p.bgLeft : (p.poster || p.bg)
          const imgPos = p.layout === 'dual' ? 'left top' : 'center top'
          return (
            <Link key={p.slug} to={`/${p.slug}`} className="cs-more__card" draggable={false}>
              {img && <img src={img} alt="" className="cs-more__card-img" style={{ objectPosition: imgPos }} draggable={false} />}
              <div className="cs-more__card-overlay" />
              <div className="cs-more__card-info">
                <div className="cs-more__card-category">{p.category}</div>
                <h3 className="cs-more__card-title">
                  {p.title.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </h3>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
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
            {project.slug === 'how-to-change-the-world-podcast' && (
              <div className="cs-film-hero__platforms">
                <a href="https://www.youtube.com/@worldwithinstudios" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000"/></svg>
                </a>
                <a href="https://open.spotify.com/show/1HMv0Jl0sl6rbzlyPPNjbi" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 14.5c2.5-1 5.5-1 8 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M7 11.5c3-1.2 6.5-1.2 10 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M6.5 8.5c3.5-1.3 7.5-1.3 11 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>
                </a>
                <a href="https://podcasts.apple.com/us/podcast/how-to-change-the-world-podcast/id1839301352" target="_blank" rel="noopener noreferrer" aria-label="Apple Podcasts">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor"><path d="M7.12 0c-3.937-0.011-7.131 3.183-7.12 7.12v17.76c-0.011 3.937 3.183 7.131 7.12 7.12h17.76c3.937 0.011 7.131-3.183 7.12-7.12v-17.76c0.011-3.937-3.183-7.131-7.12-7.12zM15.817 3.421c3.115 0 5.932 1.204 8.079 3.453 1.631 1.693 2.547 3.489 3.016 5.855 0.161 0.787 0.161 2.932 0.009 3.817-0.5 2.817-2.041 5.339-4.317 7.063-0.812 0.615-2.797 1.683-3.115 1.683-0.12 0-0.129-0.12-0.077-0.615 0.099-0.792 0.192-0.953 0.64-1.141 0.713-0.296 1.932-1.167 2.677-1.911 1.301-1.303 2.229-2.932 2.677-4.719 0.281-1.1 0.244-3.543-0.063-4.672-0.969-3.595-3.907-6.385-7.5-7.136-1.041-0.213-2.943-0.213-4 0-3.636 0.751-6.647 3.683-7.563 7.371-0.245 1.004-0.245 3.448 0 4.448 0.609 2.443 2.188 4.681 4.255 6.015 0.407 0.271 0.896 0.547 1.1 0.631 0.447 0.192 0.547 0.355 0.629 1.14 0.052 0.485 0.041 0.62-0.072 0.62-0.073 0-0.62-0.235-1.199-0.511l-0.052-0.041c-3.297-1.62-5.407-4.364-6.177-8.016-0.187-0.943-0.224-3.187-0.036-4.052 0.479-2.323 1.396-4.135 2.921-5.739 2.199-2.319 5.027-3.543 8.172-3.543zM16 7.172c0.541 0.005 1.068 0.052 1.473 0.14 3.715 0.828 6.344 4.543 5.833 8.229-0.203 1.489-0.713 2.709-1.619 3.844-0.448 0.573-1.537 1.532-1.729 1.532-0.032 0-0.063-0.365-0.063-0.803v-0.808l0.552-0.661c2.093-2.505 1.943-6.005-0.339-8.296-0.885-0.896-1.912-1.423-3.235-1.661-0.853-0.161-1.031-0.161-1.927-0.011-1.364 0.219-2.417 0.744-3.355 1.672-2.291 2.271-2.443 5.791-0.348 8.296l0.552 0.661v0.813c0 0.448-0.037 0.807-0.084 0.807-0.036 0-0.349-0.213-0.683-0.479l-0.047-0.016c-1.109-0.885-2.088-2.453-2.495-3.995-0.244-0.932-0.244-2.697 0.011-3.625 0.672-2.505 2.521-4.448 5.079-5.359 0.547-0.193 1.509-0.297 2.416-0.281zM15.823 11.156c0.417 0 0.828 0.084 1.131 0.24 0.645 0.339 1.183 0.989 1.385 1.677 0.62 2.104-1.609 3.948-3.631 3.005h-0.015c-0.953-0.443-1.464-1.276-1.475-2.36 0-0.979 0.541-1.828 1.484-2.328 0.297-0.156 0.709-0.235 1.125-0.235zM15.812 17.464c1.319-0.005 2.271 0.463 2.625 1.291 0.265 0.62 0.167 2.573-0.292 5.735-0.307 2.208-0.479 2.765-0.905 3.141-0.589 0.52-1.417 0.667-2.209 0.385h-0.004c-0.953-0.344-1.157-0.808-1.553-3.527-0.452-3.161-0.552-5.115-0.285-5.735 0.348-0.823 1.296-1.285 2.624-1.291z"/></svg>
                </a>
              </div>
            )}
          </div>
          <div className="cs-film-hero__right">
            <img
              className="cs-film-hero__poster"
              src={project.poster}
              alt={project.titleCase}
              style={project.slug === 'how-to-change-the-world-podcast' ? { maxWidth: '431px' } : undefined}
            />
          </div>
        </section>
      ) : (
        /* Standard hero: full-bleed bg image */
        <section className="cs-hero">
          {project.layout === 'dual' ? (
            <>
              <img className="cs-hero__bg cs-hero__bg--left" src={project.bgLeft} alt="" />
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

      {/* More Projects slider */}
      <MoreProjects currentSlug={slug} />

      {/* Footer sections */}
      <WorldWithinDisplay />
      <QuoteSection />
      <Footer />
    </div>
  )
}
