import './PageHero.css'

/**
 * Inner-page hero — Figma "hero-left" (e.g. Film/TV 2356:703).
 * A tinted halftone banner with scattered magenta dots, then the big
 * Switzer title beneath it.
 *
 * `bleed` runs the banner edge to edge and up under the nav, for artwork that
 * already carries its own colour field — the tint, multiply blend and grain
 * that build the look for framed banners are all dropped, since the file has
 * them baked in. Pair it with a `flush`, dark-toned <Nav> so the nav reads
 * against the artwork it now sits on. `aspect` sets the banner's shape;
 * a bleeding banner should be given its image's own ratio.
 */
export default function PageHero({
  title,
  image,
  tint = 'yellow',
  dots = true,
  compact = false,
  bleed = false,
  aspect,
}) {
  const cls = [
    'r2phero',
    compact && !bleed ? 'is-compact' : '',
    bleed ? 'is-bleed' : '',
  ].filter(Boolean).join(' ')

  return (
    <section className={cls}>
      {image ? (
        <div
          className={`r2phero__banner${bleed ? '' : ` r2phero__banner--${tint}`}`}
          style={aspect ? { '--ar': aspect } : undefined}
        >
          <img src={image} alt="" aria-hidden="true" />
          {bleed ? null : <span className="r2-grain" aria-hidden="true" />}
          {dots ? (
            <div className="r2phero__dots" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src="/assets/r2/pages/pink-dot.webp"
                  alt=""
                  className={`r2phero__dot r2phero__dot--${i}`}
                  /* Drives the stagger — each dot stamps down in turn on load,
                     then holds. See PageHero.css. */
                  style={{ '--i': i }}
                />
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
