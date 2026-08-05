import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './NotFound.css'

/* The SPA rewrite makes Vercel answer every unknown path with index.html at
   200, so a crawler sees a soft 404. Tag the page noindex while it's mounted
   so parked and mistyped URLs stay out of search results. */
function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])
}

export default function NotFound() {
  useNoIndex()

  return (
    <div className="nf-page">
      <div className="nf-body">
        <div className="nf-num">404</div>
        <p className="nf-msg">Page not found.</p>
        <Link to="/" className="nf-link">← Back to Studios</Link>
      </div>
    </div>
  )
}
