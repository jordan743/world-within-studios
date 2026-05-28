import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Studios from './Studios.jsx'
import CaseStudy from './CaseStudy.jsx'
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
        <Route path="/" element={<Studios />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
        <Route path="/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
