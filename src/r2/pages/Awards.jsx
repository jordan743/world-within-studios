import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Nav from '../Nav.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import { AWARDS, AWARD_NOMINATIONS, NOMINATIONS_PROJECT } from '../siteData.js'
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

/**
 * Parks a label on the cursor while a laurel or a nomination logo is hovered.
 *
 * Position is written straight to the node's transform inside a rAF, same as
 * the tilt above — only the *text* goes through React state, and that changes
 * on enter/leave rather than on every mousemove.
 *
 * `content` is that text. It is a dependency because the clamp below measures
 * the label, and the label only reaches its new size after React has committed
 * the new text — placing on mousemove alone would clamp against the *previous*
 * label's width and let a wider one hang off the edge.
 */
function useCursorLabel(content) {
  const labelRef = useRef(null)
  const pointerRef = useRef(null)

  const place = useCallback(() => {
    const el = labelRef.current
    const pointer = pointerRef.current
    if (!el || !pointer) return
    /* The label trails below-right of the cursor, so against the right or
       bottom edge — a nomination logo, the last laurel in a row — it would
       otherwise hang off the page. EDGE is clearance past its own margin. */
    const EDGE = 10
    const x = Math.min(pointer.x, window.innerWidth - el.offsetWidth - EDGE - 18)
    const y = Math.min(pointer.y, window.innerHeight - el.offsetHeight - EDGE - 16)
    el.style.transform = `translate3d(${Math.max(0, x)}px, ${Math.max(0, y)}px, 0)`
  }, [])

  useEffect(() => {
    if (window.matchMedia?.('(hover: none)').matches) return

    let frame = 0
    const run = () => { frame = 0; place() }
    const onMove = (e) => {
      pointerRef.current = { x: e.clientX, y: e.clientY }
      if (!frame) frame = requestAnimationFrame(run)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [place])

  // Re-clamp against the new label's measured size, before it paints.
  useLayoutEffect(() => { place() }, [content, place])

  return labelRef
}

/** Awards / Press — Figma 2425:1635, with a laurel/list view toggle. */
export default function Awards() {
  const [view, setView] = useState('grid')
  const [hovered, setHovered] = useState(null)
  const gridRef = useLaurelParallax(view === 'grid')
  // Both views show the nominations, so the label is always live.
  const labelRef = useCursorLabel(hovered)

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
                onClick={() => { setView('grid'); setHovered(null) }}
              >
                <GridIcon />
                <span className="r2-sr">Laurel view</span>
              </button>
              <button
                type="button"
                className={view === 'list' ? 'is-active' : ''}
                aria-pressed={view === 'list'}
                onClick={() => { setView('list'); setHovered(null) }}
              >
                <ListIcon />
                <span className="r2-sr">List view</span>
              </button>
            </div>
          </div>

          {/* Headline nominations — Figma 2489:1360. Below the count rule and
              directly above the laurels, and held across both views since it
              reads as a standing claim about the slate rather than another row
              of the collection. The awarding bodies' own logos now, in place of
              the set-in-type version; what that type said moves to the cursor
              label on hover and to each logo's alt text. */}
          <section className="r2awards__nominations" aria-label="Headline nominations">
            {AWARD_NOMINATIONS.map((n) => (
              <div
                key={n.id}
                className="r2awards__nom"
                style={{ '--w': n.width, '--mw': n.mobileWidth, '--ratio': n.ratio }}
                onMouseEnter={() => setHovered({ lines: n.category, note: NOMINATIONS_PROJECT })}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={n.logo}
                  alt={`${n.body} nominee — ${n.category.join(' ')}, ${NOMINATIONS_PROJECT}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </section>

          {view === 'grid' ? (
            <ul className="r2awards__grid" ref={gridRef}>
              {AWARDS.map((a) => (
                <li
                  key={a.id}
                  onMouseEnter={a.project ? () => setHovered({ lines: [a.project] }) : undefined}
                  onMouseLeave={a.project ? () => setHovered(null) : undefined}
                >
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
                    {/* Omitted entirely when unattributed — an empty span would
                        still take a row once the columns stack on mobile. */}
                    {a.project ? <span className="r2awards__project">{a.project}</span> : null}
                  </li>
                )
              })}
            </ul>
          )}

          {/* Cursor label — the winning project over a laurel, the award
              category over a nomination logo. Rendered in both views because
              the nominations are, and outside the grid so the laurels' 3D
              transforms don't drag it into their perspective. Hidden outright
              on touch, where there is no hover to drive it. */}
          <div
            ref={labelRef}
            className={`r2awards__cursor${hovered ? ' is-on' : ''}`}
            aria-hidden="true"
          >
            {hovered?.lines.map((line) => (
              <span key={line} className="r2awards__cursor-line">{line}</span>
            ))}
            {hovered?.note ? (
              <span className="r2awards__cursor-note">{hovered.note}</span>
            ) : null}
          </div>
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
