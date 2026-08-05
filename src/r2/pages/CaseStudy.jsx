import { useParams, Navigate, Link } from 'react-router-dom'
import Nav from '../Nav.jsx'
import TrailerHero from '../TrailerHero.jsx'
import CaptionBar from '../CaptionBar.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import { projectBySlug, FILM_PROJECTS, v } from '../siteData.js'
import './CaseStudy.css'

/** Case study — Figma 2330:1497 (Shuffle template). */
export default function CaseStudy() {
  const { slug } = useParams()
  const project = projectBySlug(slug)
  if (!project) return <Navigate to="/404" replace />

  const { title, category, desc, poster, details, trailer, trailerLocal, bar } = project
  // Films only — the podcast shares the HTCTW cover art and would read as a dupe.
  const more = FILM_PROJECTS.filter((p) => p.slug !== slug).slice(0, 5)

  return (
    <div className="r2-page">
      <Nav tone="green" />
      <main>
        {/* Keyed by slug so the rail at the bottom of the page remounts it.
            Router keeps this component mounted when you move between case
            studies, and without the key a trailer you started on one page
            arrived already playing on the next. */}
        <TrailerHero key={project.slug} project={project} />

        {/* The same exported caption bar the home stack uses, carrying the
            title and category as artwork instead of live text — the lettering
            is optically stretched to fill its panels and no web type setting
            matches it. It stays the page's <h1>: the alt text is the heading's
            accessible name, so the document outline is unchanged. */}
        <h1 className="r2cs__bar">
          <CaptionBar src={bar} alt={`${title} — ${category}`} eager />
        </h1>

        <section className="r2-wrap r2cs__intro">
          <div className="r2cs__copy">
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

            {/* The hero plays the trailer inline; this is just the direct link out. */}
            {trailer && !trailerLocal ? (
              <p className="r2cs__trailer-link">
                <a href={`https://www.youtube.com/watch?v=${trailer}`} target="_blank" rel="noopener noreferrer">
                  WATCH ON YOUTUBE <span aria-hidden="true">↗</span>
                </a>
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
          <img className="r2cs__chip" src={v("/assets/r2/chips/more-projects.webp")} alt="More projects" />
          <ul className="r2cs__rail">
            {more.map((p) => (
              <li key={p.slug}>
                <Link to={`/${p.slug}`} className="r2cs__rail-card">
                  {/* Styled cover by default, real poster on hover — the same
                      swap the film grid does; see ProjectCard.jsx. */}
                  <img className="r2cs__rail-cover" src={p.cover} alt="" aria-hidden="true" loading="lazy" />
                  {p.poster ? (
                    <img className="r2cs__rail-poster" src={p.poster} alt="" aria-hidden="true" loading="lazy" />
                  ) : null}
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
