import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const menus = [
  { label: 'KARYA', id: 'work' },
  { label: 'KEAHLIAN', id: 'skills' },
  { label: 'TENTANG', id: 'about' },
  { label: 'PRESTASI', id: 'awards' },
  { label: 'PENGALAMAN', id: 'trainings' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const location = useLocation()
  const [active, setActive] = useState('')
  const [isOpen, setOpen] = useState(false)

  useEffect(() => setOpen(false), [location.pathname, location.hash])
  useEffect(() => {
    if (location.pathname === '/work') { setActive('work'); return }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-23% 0px -62% 0px' })
    const sections = ['work','skills','about','awards','trainings','contact']
    sections.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [location.pathname])

  const goTo = id => {
    setOpen(false)
    if (location.pathname === '/') {
      const section = document.getElementById(id)
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return <>
    <div className="navbar-backdrop" aria-hidden="true" />
    <header className="site-header">
    <div className="navbar">
      <Link to="/" className="brand" aria-label="Ke halaman awal Irfan Ramadhan">
        <img className="brand-mark" src="/images/propil.jpg.jpeg" alt="Foto Irfan Ramadhan"/><span className="brand-name">{portfolio.identity.shortName}</span>
      </Link>
      <nav className="desktop-menu" aria-label="Navigasi utama">
        {menus.map(item => <Link key={item.id} to={`/#${item.id}`} onClick={() => goTo(item.id)} className={`nav-link ${active === item.id ? 'active' : ''}`}>{item.label}</Link>)}
      </nav>
      <div className="nav-actions">
        <button className="theme-button" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'} title="Ganti tema">
          {theme === 'dark' ? <Moon size={17}/> : <Sun size={17}/>}
        </button>
        <Link className="hire-button" to="/#contact" onClick={() => goTo('contact')}>Hubungi Saya <ArrowUpRight size={14}/></Link>
        <button className="mobile-menu-button" type="button" onClick={() => setOpen(value => !value)} aria-expanded={isOpen} aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}>{isOpen ? <X size={21}/> : <Menu size={21}/>}</button>
      </div>
    </div>
    {isOpen && <nav className="mobile-menu" aria-label="Navigasi ponsel">
      {menus.map(item => <Link key={item.id} onClick={() => goTo(item.id)} to={`/#${item.id}`}>{item.label}</Link>)}
      <Link to="/#contact" onClick={() => goTo('contact')}>HUBUNGI SAYA</Link>
    </nav>}
  </header>
  </>
}
