import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MENU_ITEMS, EXTERNAL_LINK } from './siteData.js'
import './Nav.css'

/**
 * R2 nav — logo left, MENU right (Figma component set 2430:3325).
 * `tone` maps to the three Figma variants: green (Default), cream (off-white),
 * and ink (BLACK) for use over light backgrounds.
 * Every nav sits on a flat 32px gutter measured off the viewport — see
 * `.r2nav` — so there is no per-page inset to opt into.
 */
export default function Nav({ tone = 'green' }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const closeRef = useRef(null)
  const openerRef = useRef(null)

  // Close on route change (including browser back). Adjusting during render
  // rather than in an effect avoids a cascading re-render.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    if (open) setOpen(false)
  }

  // Lock scroll + trap escape while the overlay is up.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Return focus to the MENU button when the overlay closes.
  const handleClose = () => {
    setOpen(false)
    openerRef.current?.focus()
  }

  return (
    <>
      <header className={`r2nav r2nav--${tone}`}>
        <Link to="/" className="r2nav__logo" aria-label="World Within Productions — home">
          <span className="r2logo" role="img" aria-label="World Within Productions" />
        </Link>

        <button
          ref={openerRef}
          type="button"
          className="r2nav__menu-btn"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="r2-menu"
        >
          MENU
        </button>
      </header>

      <div
        id="r2-menu"
        className={`r2menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        {...(!open ? { inert: '' } : {})}
      >
        <div className="r2menu__bar">
          <Link to="/" className="r2menu__logo" onClick={handleClose} aria-label="World Within Productions — home">
            <span className="r2logo" role="img" aria-label="World Within Productions" />
          </Link>
          <button ref={closeRef} type="button" className="r2menu__close" onClick={handleClose}>
            CLOSE
          </button>
        </div>

        <nav className="r2menu__links" aria-label="Main">
          {MENU_ITEMS.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="r2menu__link"
              style={{ '--i': i }}
              onClick={handleClose}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="r2menu__foot">
          <a
            href={EXTERNAL_LINK.href}
            target="_blank"
            rel="noopener noreferrer"
            className="r2menu__external"
          >
            {EXTERNAL_LINK.label} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </>
  )
}
