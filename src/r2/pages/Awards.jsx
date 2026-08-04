import Nav from '../Nav.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import { AWARDS } from '../siteData.js'
import './Awards.css'

/** Awards / Press — Figma 2425:1635. */
export default function Awards() {
  return (
    <div className="r2-page r2awards">
      <Nav tone="green" />
      <main>
        <section className="r2-wrap r2awards__head">
          <h1 className="r2-display">Awards / Press</h1>
        </section>

        <section className="r2-wrap r2awards__body">
          <ul className="r2awards__grid">
            {AWARDS.map((a) => (
              <li key={a.id}>
                <img src={a.src} alt={a.alt} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </section>

        <Ticker />
      </main>
      <Footer />
    </div>
  )
}
