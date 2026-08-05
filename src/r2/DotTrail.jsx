import { useEffect, useRef, useState } from 'react'
import './DotTrail.css'

/**
 * Magenta dots that trail the cursor across the footer and stay where they
 * land. Purely session-lived — nothing is persisted, so a refresh clears them.
 *
 * Dots are laid down on a distance threshold rather than every mousemove, so
 * the trail reads as spaced stamps (like the Figma comps) instead of a smear,
 * and the total is capped so a long hover can't grow the DOM without bound.
 *
 * The listener goes on the parent (the footer) rather than on this layer —
 * the layer stays `pointer-events: none` so it can't swallow clicks on the
 * legal links and social icons underneath.
 */
/* One dot size, with at least EDGE_GAP of clear space between edges so they
   never touch. A random extra on top of that gap makes the cadence irregular
   rather than metronomic. */
const DOT_SIZE = 108
const EDGE_GAP = 300    // px of clear space between dot edges
const GAP_JITTER = 90   // random extra travel, so the frequency varies
const MAX_DOTS = 60     // oldest drop off past this
const SAFE_PAD = 14     // clearance kept around anything marked data-dots="avoid"

export default function DotTrail() {
  const [dots, setDots] = useState([])
  const layerRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    const host = layer?.parentElement
    if (!host) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia?.('(hover: none)').matches) return

    let last = null
    let seq = 0
    let needed = DOT_SIZE + EDGE_GAP + Math.random() * GAP_JITTER

    /* Regions a dot must never cover — the legal links and the social icons,
       which a 108px dot swallows whole. Measured relative to the host, so the
       offsets survive scrolling and only a resize can invalidate them. */
    let blocked = []
    const measure = () => {
      const hostRect = host.getBoundingClientRect()
      blocked = [...host.querySelectorAll('[data-dots="avoid"]')].map((el) => {
        const r = el.getBoundingClientRect()
        return {
          left: r.left - hostRect.left - SAFE_PAD,
          top: r.top - hostRect.top - SAFE_PAD,
          right: r.right - hostRect.left + SAFE_PAD,
          bottom: r.bottom - hostRect.top + SAFE_PAD,
        }
      })
    }
    measure()
    window.addEventListener('resize', measure)

    // Square test against the dot's box — conservative for a circle, which is
    // the right way to be wrong when the point is to keep UI readable.
    const covers = (x, y) => {
      const r = DOT_SIZE / 2
      return blocked.some(
        (b) => x + r > b.left && x - r < b.right && y + r > b.top && y - r < b.bottom,
      )
    }

    const onMove = (e) => {
      const rect = host.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      if (last && Math.hypot(x - last.x, y - last.y) < needed) return

      /* Skip without advancing `last` or re-rolling the threshold: the trail
         then picks up the moment the cursor clears the blocked region, rather
         than owing it another full gap's worth of travel. */
      if (covers(x, y)) return

      const i = seq++
      last = { x, y }
      // Re-roll the threshold so the next dot lands at a different interval.
      needed = DOT_SIZE + EDGE_GAP + Math.random() * GAP_JITTER

      setDots((cur) => {
        const next = [...cur, { id: i, x, y, spin: ((i * 47) % 40) - 20 }]
        return next.length > MAX_DOTS ? next.slice(next.length - MAX_DOTS) : next
      })
    }

    host.addEventListener('mousemove', onMove)
    return () => {
      host.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <div className="r2dots" ref={layerRef} aria-hidden="true">
      {dots.map((d) => (
        <img
          key={d.id}
          className="r2dots__dot"
          src="/assets/r2/pages/pink-dot.webp"
          alt=""
          style={{
            left: `${d.x}px`,
            top: `${d.y}px`,
            width: `${DOT_SIZE}px`,
            rotate: `${d.spin}deg`,
          }}
        />
      ))}
    </div>
  )
}
