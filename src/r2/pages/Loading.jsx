import { useEffect, useState } from 'react'
import './Loading.css'

const SEEN_KEY = 'wws-intro-seen'

/**
 * Retro intro — Figma 2420:12 (1440×810).
 * A wall of styled covers and stills behind the torn WORLD WITHIN STUDIOS card.
 * Shown over the home page once per session; auto-dismisses, click/key to skip.
 */
export default function Loading({ hold = 2400 }) {
  // Skip entirely if this session has already seen it, or motion is reduced.
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') return 'done'
    if (sessionStorage.getItem(SEEN_KEY)) return 'done'
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
    const t = setTimeout(() => {
      sessionStorage.setItem(SEEN_KEY, '1')
      setState('done')
    }, 520)
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
      aria-label="Enter World Within Studios"
    >
      <img className="r2loading__wall" src="/assets/r2/pages/loading-intro.webp" alt="World Within Studios" />
    </div>
  )
}
