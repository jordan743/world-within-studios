import { useRef, useState } from 'react'
import './TrailerHero.css'

/**
 * Case study hero.
 *
 * Every trailer, local or YouTube, sits behind the same poster + play button
 * and nothing autoplays — a hero that starts moving on its own was the client's
 * objection. Once started, both give the viewer real transport controls: the
 * local file gets the browser's native `controls`, YouTube gets its own chrome.
 *
 * The local file also stays unmuted and doesn't loop. It only plays on a click,
 * so there's no autoplay policy to satisfy and no reason to silence it.
 */
export default function TrailerHero({ project }) {
  const { title, trailer, trailerLocal, heroStill, blockBg } = project
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const poster = heroStill || blockBg

  // No trailer on file (HTCTW, the podcast) — fall back to the still.
  if (!trailer) {
    return (
      <section className="r2trailer">
        <img className="r2trailer__media" src={poster} alt="" aria-hidden="true" />
      </section>
    )
  }

  const start = () => {
    setPlaying(true)
    if (!trailerLocal) return
    requestAnimationFrame(() => {
      /* Unmuted playback can still be refused if the browser doesn't count the
         click as user activation. Swallow it: the element already has native
         controls, so a refusal just leaves a paused video the viewer can start
         themselves, rather than an unhandled rejection. */
      videoRef.current?.play().catch(() => {})
    })
  }

  if (playing) {
    return (
      <section className="r2trailer">
        {trailerLocal ? (
          <video
            ref={videoRef}
            className="r2trailer__media"
            src={trailer}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            aria-label={`${title} trailer`}
          />
        ) : (
          <iframe
            className="r2trailer__media r2trailer__frame"
            src={`https://www.youtube-nocookie.com/embed/${trailer}?autoplay=1&rel=0&modestbranding=1`}
            title={`${title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </section>
    )
  }

  return (
    <section className="r2trailer">
      <button
        type="button"
        className="r2trailer__poster"
        onClick={start}
        aria-label={`Play the ${title} trailer`}
      >
        <img className="r2trailer__media" src={poster} alt="" aria-hidden="true" />
        <span className="r2trailer__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6L19 12z" /></svg>
        </span>
        <span className="r2trailer__label" aria-hidden="true">WATCH TRAILER</span>
      </button>
    </section>
  )
}
