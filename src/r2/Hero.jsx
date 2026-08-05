import { useEffect, useState } from 'react'
import { HERO_SLIDES, HERO_INTERVAL_MS } from './siteData.js'
import './Hero.css'

/**
 * Home hero — Figma 2330:1329.
 *
 * The stills are finished artwork: the halftone, the paper tone and the
 * top/bottom gradients are all baked into the file. Nothing is layered over
 * them — no multiply blend, no scrim, no grain — so what ships is exactly what
 * came out of the export. They sit full bleed and anchored to their top edge,
 * which is where the dark band that keeps the nav legible lives. Only the still
 * swaps, on a loop; the green "WE MAKE GOOD COOL" plate stays put.
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
      <div className="r2hero__stills">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.src}
            srcSet={slide.srcSet}
            sizes="100vw"
            alt={i === index ? slide.alt : ''}
            aria-hidden={i !== index}
            className={`r2hero__still${i === index ? ' is-active' : ''}`}
            /* Every slide occupies the initial viewport, so `lazy` never
               resolves for slides 2-6 and they stay blank through the whole
               cycle. They load eagerly at low priority instead: slide 1 still
               wins the race for LCP, the rest arrive well before their turn. */
            loading="eager"
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
        ))}
      </div>

      <div className="r2hero__plate">
        <img
          src="/assets/r2/headline-we-make-good-cool.svg"
          alt="We make good cool"
        />
      </div>
    </section>
  )
}
