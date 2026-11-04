import React from 'react'
import { portfolio } from '../data/portfolio.js'

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
        <img className="hero-editorial-photo" src={identity.photo} alt={`Foto ${identity.name}`} draggable="false" />
      </div>
      <h1 className="sr-only">{identity.name} — {identity.role}</h1>
      <div className="hero-editorial-footer"><span>BERPIKIR JERNIH. BERKARYA PENUH MAKNA.</span><a href="#work">GULIR UNTUK MENJELAJAHI ↓</a></div>
    </div>
  </section>
}
