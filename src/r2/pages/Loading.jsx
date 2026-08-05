import { useEffect, useState } from 'react'
import './Loading.css'

/**
 * Retro intro — Figma 2499:3946 (1440×810).
 * A wall of styled covers and stills behind the torn WORLD WITHIN PRODUCTIONS
 * card. Plays on every visit to the home page — it used to be gated to once
 * per session, which the client asked to drop — and auto-dismisses; click or
 * key to skip. Reduced motion still skips it outright.
 */
export default function Loading({ hold = 2400 }) {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') return 'done'
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return 'done'
    return 'in'
  })

  useEffect(() => {
    if (state === 'done') return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [state])

  useEffect(() => {
    if (state !== 'in') return
    const t = setTimeout(() => setState('out'), hold)
    return () => clearTimeout(t)
  }, [state, hold])

  useEffect(() => {
    if (state !== 'out') return
    const t = setTimeout(() => setState('done'), 520)
    return () => clearTimeout(t)
  }, [state])

  if (state === 'done') return null

  const skip = () => setState('out')

  return (
    <div
      className={`r2loading${state === 'out' ? ' is-leaving' : ''}`}
      onClick={skip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') skip() }}
      aria-label="Enter World Within Productions"
    >
      <img className="r2loading__wall" src="/assets/r2/pages/loading-intro.webp" alt="World Within Productions" />
    </div>
  )
}
