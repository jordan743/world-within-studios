import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './r2/pages/Home.jsx'
import FilmTV from './r2/pages/FilmTV.jsx'
import Podcast from './r2/pages/Podcast.jsx'
import Awards from './r2/pages/Awards.jsx'
import Contact from './r2/pages/Contact.jsx'
import CaseStudy from './r2/pages/CaseStudy.jsx'
import { BrandedEntertainment, MapPage } from './r2/pages/Parked.jsx'

import NotFound from './NotFound.jsx'
import { TermsOfUsePage, PrivacyPolicyPage, DisclaimerPage, CookiesPolicyPage } from './LegalPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/film-tv" element={<FilmTV />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />

        {/* Built but kept out of the menu for now — see siteData.js NAV_ITEMS */}
        <Route path="/branded-entertainment" element={<BrandedEntertainment />} />
        <Route path="/map" element={<MapPage />} />

        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/cookies-policy" element={<CookiesPolicyPage />} />

        {/* Catch-all project slugs last so the named routes win. */}
        <Route path="/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
