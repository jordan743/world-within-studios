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
        TRAILER<br />COMING<br />SOON
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

      {/* More Projects slider */}
      <MoreProjects currentSlug={slug} />

      {/* Footer sections */}
      <WorldWithinDisplay />
      <QuoteSection />
      <Footer />
    </div>
  )
}
