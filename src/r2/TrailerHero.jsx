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
 * Both start muted; sound is the viewer's call, made through those controls.
 * Muting also means the play() below can't be refused, so the click always
 * results in a playing video.
 *
 * CaseStudy.jsx keys this on the slug — Router keeps the page mounted when you
 * move between case studies, so without that a started trailer would carry
 * `playing` into the next one and greet it mid-stream.
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
      /* Muted playback is never refused, but swallow a rejection anyway: the
         element has native controls, so the fallback is a paused video the
         viewer can start themselves rather than an unhandled rejection. */
      videoRef.current?.play().catch(() => {})
    })
  }

  if (playing) {
    return (
      /* `is-playing` drops the poster's cinematic crop for a fitted 16:9 box.
         Covering a 1.92:1 (or 4:3 on mobile) frame scales the player past the
         container and clips its bottom edge — which is exactly where the
         transport controls and the fullscreen button sit. */
      <section className="r2trailer is-playing">
        {trailerLocal ? (
          <video
            ref={videoRef}
            className="r2trailer__media"
            src={trailer}
            poster={poster}
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={`${title} trailer`}
          />
        ) : (
          <iframe
            className="r2trailer__media r2trailer__frame"
            src={`https://www.youtube-nocookie.com/embed/${trailer}?autoplay=1&mute=1&rel=0&modestbranding=1`}
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
