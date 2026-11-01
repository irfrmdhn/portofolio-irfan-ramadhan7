import React, { useState } from 'react'
import { ArrowUpRight, Camera, Code2, Compass } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const icons = [Compass, Code2, Camera]
export default function About() {
  const { identity, current, traits } = portfolio
  const [traitIndex, setTraitIndex] = useState(0)
  return <section className="page-section about-section" id="about">
    <div className="section-container">
      <span className="eyebrow reveal">TENTANG SAYA / LATAR BELAKANG</span>
      <h2 className="about-headline reveal">{identity.heroTagline}</h2>
      <div className="about-details reveal">
        <div className="about-avatar"><img src={identity.profileAvatar} alt={`Foto profil ${identity.name}`}/></div>
        <div className="about-bio">
          <h3>{identity.name.toUpperCase()} <span className="verified" aria-hidden="true">✦</span></h3>
          <div className="about-role">{identity.role}</div><div className="about-facts">
            <span>PENDIDIKAN <b>Lulusan S1 Informatika</b></span>
            <span>MAGANG <b>PT Telkom Akses</b></span>
            <span>PENCAPAIAN <b>Juara 1 PKM 2025</b></span>
          </div>
          <p>{identity.description}</p>
          <p>{identity.experienceDescription}</p>
          <p>{identity.personalDescription}</p>
          <p className="resume-line">Ingin tahu lebih lanjut? {identity.resumeUrl ? <a href={identity.resumeUrl} download="CV-Irfan-Ramadhan.pdf">Unduh CV saya <ArrowUpRight size={14}/></a> : <span className="muted">CV dapat ditambahkan pada konfigurasi.</span>}</p>
        </div>
      </div>
      <div className="about-bottom">
        <div className="current-status reveal"><span className="eyebrow">SAAT INI</span><div className="status-items">{current.map((item,i) => { const Icon = icons[i%icons.length];return <div className="status-item" key={item.label}><div className="status-icon"><Icon size={15}/></div><div><b>{item.label}</b><span>{item.value}</span></div></div>})}</div></div>
        <div className="trait-stack reveal" aria-label="Karakter pribadi. Klik kartu untuk berganti.">
          <div className="trait-card trait-card-back" aria-hidden="true"/><div className="trait-card trait-card-mid" aria-hidden="true"/>
          <button type="button" className="trait-card trait-card-front" onClick={() => setTraitIndex(value => (value+1)%traits.length)}><span>KARAKTER / 0{traitIndex+1}</span><strong>{traits[traitIndex]}</strong><small>KLIK UNTUK MENGGANTI ↗</small></button>
        </div>
      </div>
    </div>
  </section>
}
