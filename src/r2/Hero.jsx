import { useEffect, useState } from 'react'
import { HERO_SLIDES, HERO_INTERVAL_MS } from './siteData.js'
import './Hero.css'

/**
 * Home hero — Figma 2330:1329.
 *
 * The composite is a stack, bottom to top:
 *   cream base → B&W still in `multiply` → dark gradient → paper grain in
 *   `lighten` → vertical scrim. Only the still swaps, on a loop, which is why
 *   the crossfade reads as one continuous halftone print rather than a
 *   slideshow. The green "WE MAKE GOOD COOL" plate stays put.
 */
export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || HERO_SLIDES.length < 2) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % HERO_SLIDES.length),
      HERO_INTERVAL_MS,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="r2hero">
      <div className="r2hero__paper">
        <div className="r2hero__stills">
          {HERO_SLIDES.map((slide, i) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              aria-hidden={i !== index}
              className={`r2hero__still${i === index ? ' is-active' : ''}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
        </div>

        <div className="r2hero__gradient" />
        <span className="r2-grain" aria-hidden="true" />
      </div>

      <div className="r2hero__scrim" aria-hidden="true" />

      {/* Sits outside the clipped paper so its offsets resolve against the
          hero frame, matching the Figma coordinates. */}
      <div className="r2hero__plate">
        <img
          src="/assets/r2/headline-we-make-good-cool.svg"
          alt="We make good cool"
        />
      </div>
    </section>
  )
}
