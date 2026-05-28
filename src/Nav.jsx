import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="wws-nav">
        <a
          href="https://worldwithin.org"
          target="_blank"
          rel="noopener noreferrer"
          className="wws-nav__link wws-nav__link--desktop"
        >
          CHECK OUT WORLD WITHIN ↗
</a>
        <Link to="/" className="wws-nav__logo" aria-label="World Within Studios">
          <img src="/assets/logo-studios.svg" alt="World Within Studios" />
        </Link>
        <div className="wws-nav__right">
          <a href="mailto:info@worldwithin.org" className="wws-nav__link wws-nav__link--desktop">
            CONTACT
          </a>
          <button
            className="wws-nav__burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`wws-menu${open ? ' wws-menu--open' : ''}`} aria-hidden={!open}>
        <button className="wws-menu__close" onClick={() => setOpen(false)} aria-label="Close menu">
          ✕
        </button>
        <Link to="/" className="wws-menu__logo" onClick={() => setOpen(false)}>
          <img src="/assets/logo-studios.svg" alt="World Within Studios" />
        </Link>
        <nav className="wws-menu__links">
          <a
            href="https://worldwithin.org"
            target="_blank"
            rel="noopener noreferrer"
            className="wws-menu__link"
            onClick={() => setOpen(false)}
          >
            CHECK OUT WORLD WITHIN ↗
          </a>
          <a
            href="mailto:info@worldwithin.org"
            className="wws-menu__link"
            onClick={() => setOpen(false)}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </>
  )
}
