import { Link } from 'react-router-dom'
import './CtaBand.css'

/**
 * Yellow "GOT A STORY THAT DESERVES AN AUDIENCE?" band — Figma 2353:300.
 */
export default function CtaBand({
  heading = 'GOT A STORY THAT\nDESERVES AN AUDIENCE?',
  action = 'START A CONVERSATION',
  to = '/contact',
}) {
  return (
    <section className="r2cta">
      <img className="r2cta__bg" src="/assets/r2/pages/filmtv-hero.webp" alt="" aria-hidden="true" loading="lazy" />
      <span className="r2-grain" aria-hidden="true" />
      <div className="r2-wrap r2cta__inner">
        <h2 className="r2cta__heading">
          {heading.split('\n').map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <Link to={to} className="r2cta__action">
          {action} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
