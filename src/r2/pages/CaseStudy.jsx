import { useParams, Navigate, Link } from 'react-router-dom'
import Nav from '../Nav.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import { projectBySlug, FILM_PROJECTS } from '../siteData.js'
import './CaseStudy.css'

/** Case study — Figma 2330:1497 (Shuffle template). */
export default function CaseStudy() {
  const { slug } = useParams()
  const project = projectBySlug(slug)
  if (!project) return <Navigate to="/404" replace />

  const { title, category, desc, poster, blockBg, heroStill, details, trailer, trailerLocal } = project
  // Films only — the podcast shares the HTCTW cover art and would read as a dupe.
  const more = FILM_PROJECTS.filter((p) => p.slug !== slug).slice(0, 5)

  return (
    <div className="r2-page">
      <Nav tone="green" />
      <main>
        <section className="r2cs__hero">
          <img src={heroStill || blockBg} alt="" aria-hidden="true" />
        </section>

        <section className="r2-wrap r2cs__intro">
          <div className="r2cs__copy">
            <h1 className="r2cs__title">{title}</h1>
            <p className="r2cs__cat">{category}</p>
            <p className="r2-body-copy r2cs__desc">{desc}</p>

            {details ? (
              <dl className="r2cs__facts">
                {Object.entries(details).map(([k, v]) => (
                  <div key={k}>
                    <dt className="r2-label">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {trailer ? (
              <p className="r2cs__trailer-link">
                {trailerLocal ? (
                  <a href={trailer} target="_blank" rel="noopener noreferrer">WATCH TRAILER <span aria-hidden="true">↗</span></a>
                ) : (
                  <a href={`https://www.youtube.com/watch?v=${trailer}`} target="_blank" rel="noopener noreferrer">
                    WATCH TRAILER <span aria-hidden="true">↗</span>
                  </a>
                )}
              </p>
            ) : null}
          </div>

          {poster ? (
            <div className="r2cs__poster">
              <img src={poster} alt={`${title} poster`} loading="lazy" />
            </div>
          ) : null}
        </section>

        <section className="r2-wrap r2cs__more">
          <span className="r2cs__chip">MORE PROJECTS</span>
          <ul className="r2cs__rail">
            {more.map((p) => (
              <li key={p.slug}>
                <Link to={`/${p.slug}`} className="r2cs__rail-card">
                  <img src={p.cover} alt="" aria-hidden="true" loading="lazy" />
                  <span className="r2cs__rail-meta">
                    <span className="r2cs__rail-cat">{p.category}</span>
                    <span className="r2cs__rail-title">{p.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <Ticker />
      </main>
      <Footer />
    </div>
  )
}
