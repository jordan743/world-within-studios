import { useEffect, useRef, useState } from 'react'
import Nav from '../Nav.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import { AWARDS } from '../siteData.js'
import './Awards.css'

function GridIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <rect x="0" y="0" width="8.5" height="8.5" rx="1.5" />
      <rect x="11.5" y="0" width="8.5" height="8.5" rx="1.5" />
      <rect x="0" y="11.5" width="8.5" height="8.5" rx="1.5" />
      <rect x="11.5" y="11.5" width="8.5" height="8.5" rx="1.5" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <rect x="0" y="1" width="20" height="2.6" rx="1.3" />
      <rect x="0" y="8.7" width="20" height="2.6" rx="1.3" />
      <rect x="0" y="16.4" width="20" height="2.6" rx="1.3" />
    </svg>
  )
}

/**
 * Each laurel stays put but tilts toward the cursor — the tilt falls off with
 * distance, so the grid reads as a field of cards catching the light rather
 * than everything swinging in unison.
 *
 * Written straight to CSS custom properties inside a rAF instead of through
 * React state: this fires on every mousemove, and re-rendering 24 nodes at
 * that rate would drop frames.
 */
function useLaurelParallax(active) {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!active || !grid) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia?.('(hover: none)').matches) return

    const MAX_TILT = 13      // degrees at the cursor
    const FALLOFF = 460      // px — influence radius around the pointer
    let frame = 0
    let pointer = null

    const apply = () => {
      frame = 0
      if (!pointer) return
      for (const el of grid.children) {
        const r = el.getBoundingClientRect()
        const dx = pointer.x - (r.left + r.width / 2)
        const dy = pointer.y - (r.top + r.height / 2)
        const dist = Math.hypot(dx, dy)
        const strength = Math.max(0, 1 - dist / FALLOFF)
        if (!strength) {
          el.style.setProperty('--rx', '0deg')
          el.style.setProperty('--ry', '0deg')
          el.style.setProperty('--lift', '0px')
          continue
        }
        const norm = Math.min(1, dist / FALLOFF) || 1
        el.style.setProperty('--ry', `${(dx / (r.width || 1)) * MAX_TILT * strength / norm}deg`)
        el.style.setProperty('--rx', `${(-dy / (r.height || 1)) * MAX_TILT * strength / norm}deg`)
        el.style.setProperty('--lift', `${strength * 10}px`)
      }
    }

    const onMove = (e) => {
      pointer = { x: e.clientX, y: e.clientY }
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      pointer = null
      for (const el of grid.children) {
        el.style.setProperty('--rx', '0deg')
        el.style.setProperty('--ry', '0deg')
        el.style.setProperty('--lift', '0px')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [active])

  return gridRef
}

/** Awards / Press — Figma 2425:1635, with a laurel/list view toggle. */
export default function Awards() {
  const [view, setView] = useState('grid')
  const gridRef = useLaurelParallax(view === 'grid')

  return (
    <div className="r2-page r2awards">
      <Nav tone="green" />
      <main>
        <section className="r2-wrap r2awards__head">
          <h1 className="r2-display">Awards / Press</h1>
        </section>

        <section className="r2-wrap r2awards__body">
          <div className="r2awards__bar">
            <p className="r2-label">{AWARDS.length} AWARDS &amp; SELECTIONS</p>
            <div className="r2awards__views" role="group" aria-label="Awards layout">
              <button
                type="button"
                className={view === 'grid' ? 'is-active' : ''}
                aria-pressed={view === 'grid'}
                onClick={() => setView('grid')}
              >
                <GridIcon />
                <span className="r2-sr">Laurel view</span>
              </button>
              <button
                type="button"
                className={view === 'list' ? 'is-active' : ''}
                aria-pressed={view === 'list'}
                onClick={() => setView('list')}
              >
                <ListIcon />
                <span className="r2-sr">List view</span>
              </button>
            </div>
          </div>

          {view === 'grid' ? (
            <ul className="r2awards__grid" ref={gridRef}>
              {AWARDS.map((a) => (
                <li key={a.id}>
                  <img src={a.src} alt={a.alt} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="r2awards__list">
              {AWARDS.map((a) => {
                const [festival, distinction] = splitAlt(a.alt)
                return (
                  <li key={a.id}>
                    <span className="r2awards__festival">{festival}</span>
                    <span className="r2awards__distinction">{distinction}</span>
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <Ticker />
      </main>
      <Footer />
    </div>
  )
}

/** Alt strings read "Festival Name — Distinction"; fall back to one column. */
function splitAlt(alt) {
  const i = alt.indexOf(' — ')
  return i === -1 ? [alt, ''] : [alt.slice(0, i), alt.slice(i + 3)]
}
