import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
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
