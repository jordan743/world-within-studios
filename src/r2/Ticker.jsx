import './Ticker.css'

/**
 * Black marquee strip that separates the home-page project blocks.
 * Figma: "ticker" frames, 1684×37, black bar with the WORLD WITHIN STUDIOS
 * wordmark repeated at a 58px gap.
 */
export default function Ticker({ repeat = 8 }) {
  const items = Array.from({ length: repeat })
  return (
    <div className="r2ticker" aria-hidden="true">
      <div className="r2ticker__track">
        {/* Two identical runs so the -50% translate loops seamlessly. */}
        {[0, 1].map((run) => (
          <div className="r2ticker__run" key={run}>
            {items.map((_, i) => (
              <img key={i} src="/assets/r2/ticker-wws.svg" alt="" className="r2ticker__word" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
