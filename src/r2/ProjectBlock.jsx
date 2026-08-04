import { Link } from 'react-router-dom'
import './ProjectBlock.css'

/**
 * Full-bleed home stack entry — Figma "02 — How to Change the World" (1440×750):
 * media on top, then a split caption bar: title in ink on cream, category in
 * cream on ink.
 */
export default function ProjectBlock({ project, eager = false }) {
  const { slug, titleLines, category, blockBg, title, badges } = project

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

      <div className="r2block__bar">
        <h2 className="r2block__title">
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="r2block__cat"><span>{category}</span></p>
      </div>
    </Link>
  )
}
