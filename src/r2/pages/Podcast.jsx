import { useState } from 'react'
import Nav from '../Nav.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import { PODCAST, PODCAST_FEATURED, PODCAST_EPISODES } from '../siteData.js'
import './Podcast.css'

function GridIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <rect x="0" y="0" width="8.5" height="8.5" rx="1.5" />
      <rect x="11.5" y="0" width="8.5" height="8.5" rx="1.5" />
      <rect x="0" y="11.5" width="8.5" height="8.5" rx="1.5" />
      <rect x="11.5" y="11.5" width="8.5" height="8.5" rx="1.5" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <rect x="0" y="1" width="20" height="2.6" rx="1.3" />
      <rect x="0" y="8.7" width="20" height="2.6" rx="1.3" />
      <rect x="0" y="16.4" width="20" height="2.6" rx="1.3" />
    </svg>
  )
}

/** Podcast — Figma 2356:733, with the List View from 2430:5634. */
export default function Podcast() {
  const [view, setView] = useState('grid')

  return (
    <div className="r2-page">
      <Nav tone="cream" />
      <main>
        {/* Hero banner is a composed graphic in Figma (2430:2759) */}
        <section className="r2pod__hero">
          <img src={PODCAST.hero} alt="How to Change the World" />
        </section>

        <section className="r2-wrap r2pod__meta">
          <div className="r2pod__meta-copy">
            <h1 className="r2pod__title">
              {PODCAST.titleLines.map((l) => <span key={l}>{l}</span>)}
              <em>{PODCAST.subtitle}</em>
            </h1>
            <p className="r2-body-copy">{PODCAST.desc}</p>

            <dl className="r2pod__facts">
              {PODCAST.meta.map((m) => (
                <div key={m.label}>
                  <dt className="r2-label">{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
            </dl>

            <ul className="r2pod__links">
              {PODCAST.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="r2pod__art">
            <img src={PODCAST.cover} alt="How to Change the World cover art" loading="lazy" />
          </div>
        </section>

        <section className="r2-wrap r2pod__episodes">
          <div className="r2pod__bar">
            <span className="r2pod__chip">LATEST EPISODES</span>
            <div className="r2pod__views" role="group" aria-label="Episode layout">
              <button
                type="button"
                className={view === 'grid' ? 'is-active' : ''}
                aria-pressed={view === 'grid'}
                onClick={() => setView('grid')}
              >
                <GridIcon />
                <span className="r2-sr">Grid view</span>
              </button>
              <button
                type="button"
                className={view === 'list' ? 'is-active' : ''}
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
              >
                <ListIcon />
                <span className="r2-sr">List view</span>
              </button>
            </div>
          </div>

          {view === 'grid' ? (
            <div className="r2pod__grid">
              {PODCAST_FEATURED.map((e) => (
                <a key={e.id} href={e.href} target="_blank" rel="noopener noreferrer" className="r2pod__card">
                  <img src={e.img} alt={`${e.title} — featuring ${e.guest}`} loading="lazy" />
                </a>
              ))}
            </div>
          ) : (
            <div className="r2pod__list">
              <p className="r2-label r2pod__list-head">EPISODE GUIDE</p>
              <ul>
                {PODCAST_EPISODES.map((e) => (
                  <li key={e.ep}>
                    <span className="r2pod__ep">S1 EP. {e.ep}</span>
                    <span className="r2pod__guest">{e.guest}</span>
                    <span className="r2pod__blurb">{e.blurb}</span>
                    <a href={e.href} target="_blank" rel="noopener noreferrer" className="r2pod__watch">
                      WATCH NOW <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <Ticker />
      </main>
      <Footer />
    </div>
  )
}
