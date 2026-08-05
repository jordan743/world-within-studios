import Nav from '../Nav.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import CtaBand from '../CtaBand.jsx'
import './Parked.css'

/**
 * Branded Entertainment and Where We Work are built but parked: App.jsx does
 * not route them, so both URLs 404 and search engines have nothing to index.
 * To switch them on, add the two routes back in App.jsx and their entries to
 * siteData.js › NAV_ITEMS. Nothing imports this file in the meantime.
 */
export default function Parked({ title, blurb }) {
  return (
    <div className="r2-page">
      <Nav tone="green" />
      <main>
        <section className="r2-wrap r2parked">
          <h1 className="r2-display">{title}</h1>
          <p className="r2-body-copy r2parked__blurb">{blurb}</p>
        </section>
        <CtaBand />
        <Ticker />
      </main>
      <Footer />
    </div>
  )
}

export const BrandedEntertainment = () => (
  <Parked
    title="Branded Entertainment"
    blurb="Work with World Within Studios on branded films and series that carry a point of view. This page is in production — get in touch in the meantime."
  />
)

export const MapPage = () => (
  <Parked
    title="Where We Work"
    blurb="A map of the places our stories come from. This page is in production — get in touch in the meantime."
  />
)
