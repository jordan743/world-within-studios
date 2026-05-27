import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Studios from './Studios.jsx'
import CaseStudy from './CaseStudy.jsx'
import NotFound from './NotFound.jsx'

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
        <Route path="/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
