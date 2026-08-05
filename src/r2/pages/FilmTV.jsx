import Nav from '../Nav.jsx'
import PageHero from '../PageHero.jsx'
import ProjectCard from '../ProjectCard.jsx'
import CtaBand from '../CtaBand.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import { FILM_PROJECTS } from '../siteData.js'
import './ProjectGrid.css'

/** Film & Television — Figma 2330:1664 (+ hover state 2353:299). */
export default function FilmTV() {
  return (
    <div className="r2-page">
      {/* Ink over the yellow the banner now runs under, flush to its edges. */}
      <Nav tone="ink" flush />
      <main>
        <PageHero
          title="Film & Television"
          image="/assets/r2/pages/filmtv-hero.webp"
          bleed
          aspect="1999 / 872"
        />

        <section className="r2-wrap r2grid-section">
          <div className="r2grid">
            {FILM_PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} eager={i < 4} />
            ))}
          </div>
        </section>

        <CtaBand />
        <Ticker />
      </main>
      <Footer />
    </div>
  )
}
