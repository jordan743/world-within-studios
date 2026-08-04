import { useState } from 'react'
import './TrailerHero.css'

/**
 * Case study hero.
 *
 * Plays the project's trailer rather than a still. YouTube trailers stay as a
 * poster + play button until clicked — embedding six autoplaying iframes on
 * load would cost far more than it's worth, and YouTube blocks autoplay with
 * sound anyway. Local MP4s can loop muted behind the fold for free.
 */
export default function TrailerHero({ project }) {
  const { title, trailer, trailerLocal, heroStill, blockBg } = project
  const [playing, setPlaying] = useState(false)
  const poster = heroStill || blockBg

  // No trailer on file (HTCTW, the podcast) — fall back to the still.
  if (!trailer) {
    return (
      <section className="r2trailer">
        <img className="r2trailer__media" src={poster} alt="" aria-hidden="true" />
      </section>
    )
  }

  if (trailerLocal) {
    return (
      <section className="r2trailer">
        <video
          className="r2trailer__media"
          src={trailer}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${title} trailer`}
        />
      </section>
    )
  }

  return (
    <section className="r2trailer">
      {playing ? (
        <iframe
          className="r2trailer__media r2trailer__frame"
          src={`https://www.youtube-nocookie.com/embed/${trailer}?autoplay=1&rel=0&modestbranding=1`}
          title={`${title} trailer`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="r2trailer__poster"
          onClick={() => setPlaying(true)}
          aria-label={`Play the ${title} trailer`}
        >
          <img className="r2trailer__media" src={poster} alt="" aria-hidden="true" />
          <span className="r2trailer__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.2v13.6L19 12z" /></svg>
          </span>
          <span className="r2trailer__label" aria-hidden="true">WATCH TRAILER</span>
        </button>
      )}
    </section>
  )
}
