import { Link } from 'react-router-dom'
import './ProjectBlock.css'

/**
 * Full-bleed home stack entry — Figma "02 — How to Change the World" (1440×750).
 *
 * The caption bar is the exported Figma frame rather than live text: the title
 * and category are optically stretched to fill their panels, which no web type
 * setting reproduces. Alt text carries the wording for screen readers and SEO.
 */
export default function ProjectBlock({ project, eager = false }) {
  const { slug, category, blockBg, bar, title, badges } = project

  return (
    <Link to={`/${slug}`} className="r2block" aria-label={`${title} — ${category}`}>
      <div className="r2block__media">
        <img
          src={blockBg}
          alt=""
          aria-hidden="true"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        {badges?.length ? (
          <div className="r2block__badges">
            {badges.map((b) => (
              <img key={b} src={b} alt="" aria-hidden="true" loading="lazy" />
            ))}
          </div>
        ) : null}
      </div>

      <img
        className="r2block__bar"
        src={bar}
        alt={`${title} — ${category}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </Link>
  )
}
