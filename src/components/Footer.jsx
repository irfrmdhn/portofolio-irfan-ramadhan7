import React from 'react'
import { Link } from 'react-router-dom'
import { portfolio } from '../data/portfolio.js'

export default function Footer() {
  return <footer className="site-footer"><div className="section-container footer-inner"><Link to="/" className="footer-brand">{portfolio.identity.shortName}<span>✦</span></Link><p>© {new Date().getFullYear()} {portfolio.identity.name}. Dibuat dengan tujuan yang bermakna.</p><a href="#home" onClick={event => { if (!document.getElementById('home')) { event.preventDefault(); window.location.href='/#home' }}}>KEMBALI KE ATAS ↑</a></div></footer>
}
