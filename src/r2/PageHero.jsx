import { useState } from 'react'
import { STICKERS } from './siteData.js'
import './PageHero.css'

const DOT_SLOTS = 5

/* One sticker per slot, drawn without replacement so a single banner never
   shows the same one twice, then reshuffled on the next mount. Chosen in a
   state initialiser rather than inline: this runs once per mount, so the
   stamp-down animation isn't handed a new set of images mid-sequence. */
function pickStickers() {
  const pool = [...STICKERS]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return Array.from({ length: DOT_SLOTS }, (_, i) => pool[i % pool.length])
}

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
  const [stickers] = useState(pickStickers)

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
              {stickers.map((sticker, i) => (
                <img
                  key={i}
                  src={sticker.src}
                  alt=""
                  className={`r2phero__dot r2phero__dot--${i}`}
                  /* Drives the stagger — each sticker stamps down in turn on
                     load, then holds. See PageHero.css. */
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
