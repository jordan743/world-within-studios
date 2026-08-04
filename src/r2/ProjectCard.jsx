import { Link } from 'react-router-dom'
import './ProjectCard.css'

/**
 * Grid card — Figma "pg-card" (321×475 art + caption).
 *
 * Default state is the WORLD WITHIN STUDIOS "PRESENTS" styled cover; hovering
 * (or focusing) cross-fades to the real poster. Touch devices get the poster
 * revealed on tap-through instead — see ProjectCard.css.
 */
export default function ProjectCard({ project, eager = false }) {
  const { slug, title, category, cover, poster } = project

  return (
    <Link to={`/${slug}`} className="r2card">
      <div className="r2card__art">
        <img
          className="r2card__cover"
          src={cover}
          alt={`${title} — World Within Studios cover`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        {poster ? (
          <img
            className="r2card__poster"
            src={poster}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>
      <div className="r2card__caption">
        <h3 className="r2card__title">{title}</h3>
        <p className="r2card__cat">{category}</p>
      </div>
    </Link>
  )
}
