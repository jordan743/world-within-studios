import { Fragment } from 'react'
import Nav from '../Nav.jsx'
import Hero from '../Hero.jsx'
import Ticker from '../Ticker.jsx'
import ProjectBlock from '../ProjectBlock.jsx'
import Footer from '../Footer.jsx'
import Loading from './Loading.jsx'
import { HOME_BLOCKS } from '../siteData.js'

/** Home — Figma 2330:1328: hero, then the project stack split by tickers. */
export default function Home() {
  return (
    <div className="r2-page">
      <Loading />
      <Nav tone="green" flush />
      <main>
        <Hero />
        <Ticker />
        {HOME_BLOCKS.map((project, i) => (
          <Fragment key={project.slug}>
            <ProjectBlock project={project} eager={i === 0} />
            <Ticker />
          </Fragment>
        ))}
      </main>
      <Footer />
    </div>
  )
}
