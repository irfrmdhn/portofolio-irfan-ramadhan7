import React from 'react'
import { portfolio } from '../data/portfolio.js'

// Koordinat mengikuti kanvas foto asli, termasuk saat object-fit mengecil di mobile.
const aiLogos = [
  { name: 'GPT', phase: 0 },
  { name: 'Gemini', phase: 20 },
  { name: 'Claude', phase: 40 },
  { name: 'DeepSeek', phase: 60 },
  { name: 'Grok', phase: 80 },
]
const orbitDuration = 36

function HeroAiLogos({ depth }) {
  return <svg className={`hero-ai-logos hero-ai-logos--${depth}`} style={{ '--ai-duration': `${orbitDuration}s` }} viewBox="0 0 1323 2056" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
    {/* Dua lapisan memakai waktu dan lintasan identik; hanya setengah orbit terlihat per lapisan. */}
    {aiLogos.map(logo =>
      <g key={logo.name} className="hero-ai-orbit" style={{ '--ai-delay': `${-orbitDuration * logo.phase / 100}s`, offsetDistance: `${logo.phase}%` }}>
        <g className="hero-ai-logo">
          <rect x="-100" y="-100" width="200" height="200" rx="30" fill="#fff" stroke="#d6d8de" strokeWidth="2" />
          <image href={`/images/ai/${logo.name}.jpg`} x="-80" y="-80" width="160" height="160" />
        </g>
      </g>
    )}
  </svg>
}

/** Nama menggunakan font Manrope ExtraBold ber-stroke; dua salinan digeser kontinu. */
export default function Hero() {
  const { identity } = portfolio
  return <section className="hero hero-editorial" id="home" aria-label="Profil Irfan Ramadhan">
    <div className="hero-frame">
      <div className="hero-editorial-outline" aria-hidden="true">
        <div className="hero-editorial-marquee">
          <span className="hero-editorial-word">{identity.outlineName}</span>
          <span className="hero-editorial-word">{identity.outlineName}</span>
        </div>
      </div>
      <div className="hero-editorial-photo-crop">
        <HeroAiLogos depth="back" />
        <img className="hero-editorial-photo" src={identity.photo} alt={`Foto ${identity.name}`} draggable="false" />
        <HeroAiLogos depth="front" />
      </div>
      <h1 className="sr-only">{identity.name} — {identity.role}</h1>
      <div className="hero-editorial-footer"><span>BERPIKIR JERNIH. BERKARYA PENUH MAKNA.</span><a href="#work">GULIR UNTUK MENJELAJAHI ↓</a></div>
    </div>
  </section>
}
