import './CaptionBar.css'

/**
 * The exported title/category caption bar, from Figma rather than live text:
 * the lettering is optically stretched to fill its panels and no web type
 * setting reproduces it.
 *
 * Wide, it renders as the single 1440×238 plate. On a phone it splits into its
 * two panels stacked full width — the geometry of that crop lives in
 * CaptionBar.css. Both are in the DOM at once and swapped with CSS, which
 * costs one request either way since they are the same asset.
 *
 * `alt` carries the wording for the visible copy; the stacked version is
 * decorative, so it never repeats it to a screen reader.
 */
export default function CaptionBar({ src, alt, eager = false, className = '' }) {
  return (
    <>
      <img
        className={`r2bar__full ${className}`.trim()}
        src={src}
        alt={alt}
        {...(eager ? { fetchPriority: 'high' } : { loading: 'lazy' })}
        decoding="async"
      />
      <div className={`r2bar__stack ${className}`.trim()} aria-hidden="true" style={{ '--bar': `url(${src})` }}>
        <div className="r2bar__panel r2bar__panel--title" />
        <div className="r2bar__panel r2bar__panel--tag" />
      </div>
    </>
  )
}
