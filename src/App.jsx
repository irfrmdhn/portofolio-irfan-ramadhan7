import React, { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import WorkGallery from './pages/WorkGallery.jsx'

const getInitialTheme = () => {
  try { return localStorage.getItem('irfan-theme') === 'dark' ? 'dark' : 'light' }
  catch { return 'light' }
}

function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    let frame = 0
    if (hash) {
      frame = requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return null
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const themeTransitionRunning = useRef(false)
  const toggleTheme = async event => {
    if (themeTransitionRunning.current) return
    const changeTheme = () => setTheme(value => value === 'dark' ? 'light' : 'dark')
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      changeTheme()
      return
    }
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = bounds.left + bounds.width / 2
    const y = bounds.top + bounds.height / 2
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    themeTransitionRunning.current = true
    const transition = document.startViewTransition(() => {
      flushSync(changeTheme)
    })
    try {
      await transition.ready
      await document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' },
      ).finished
    } catch {
      // Tema tetap diterapkan jika animasi dilewati oleh peramban.
    } finally {
      transition.skipTransition()
      themeTransitionRunning.current = false
    }
  }
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try { localStorage.setItem('irfan-theme', theme) } catch { /* private session */ }
  }, [theme])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: .09, rootMargin: '0px 0px -28px 0px' })
    const observeAll = () => document.querySelectorAll('.reveal:not(.visible)').forEach(item => observer.observe(item))
    observeAll()
    const mutation = new MutationObserver(observeAll)
    mutation.observe(document.getElementById('root'), { childList: true, subtree: true })
    return () => { mutation.disconnect(); observer.disconnect() }
  }, [])

  return (
    <div className="app-shell">
      <div className="waves-bg" aria-hidden="true" />
      <ScrollManager />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkGallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
