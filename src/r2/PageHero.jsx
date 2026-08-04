import './PageHero.css'

/**
 * Inner-page hero — Figma "hero-left" (e.g. Film/TV 2356:703).
 * A tinted halftone banner with scattered magenta dots, then the big
 * Switzer title beneath it.
 */
export default function PageHero({
  title,
  image,
  tint = 'yellow',
  dots = true,
  compact = false,
}) {
  return (
    <section className={`r2phero${compact ? ' is-compact' : ''}`}>
      {image ? (
        <div className={`r2phero__banner r2phero__banner--${tint}`}>
          <img src={image} alt="" aria-hidden="true" />
          <span className="r2-grain" aria-hidden="true" />
          {dots ? (
            <div className="r2phero__dots" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <img key={i} src="/assets/r2/pages/pink-dot.webp" alt="" className={`r2phero__dot r2phero__dot--${i}`} />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="r2-wrap">
        <h1 className="r2-display r2phero__title">{title}</h1>
      </div>
    </section>
  )
}
