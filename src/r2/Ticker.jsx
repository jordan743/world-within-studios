import './Ticker.css'

/**
 * Black marquee strip — separates the home-page project blocks and closes out
 * every page above the footer. Figma 2499:4062: black bar carrying the WORLD
 * WITHIN PRODUCTIONS wordmark (259.9×16.4) repeated at a 58px gap.
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
              <img key={i} src="/assets/r2/ticker-wwp.svg" alt="" className="r2ticker__word" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
