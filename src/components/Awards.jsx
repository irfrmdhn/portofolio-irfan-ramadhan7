import React from 'react'
import { Award, ArrowUpRight, Trophy } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export default function Awards() {
  return <section className="page-section awards-section" id="awards">
    <div className="section-container">
      <span className="eyebrow reveal">PENGHARGAAN</span>
      <h2 className="reveal">Penghargaan dan Prestasi<span className="heading-period">.</span></h2>
      <p className="section-description reveal">Pencapaian yang menandai langkah berarti dalam perjalanan akademik dan kreatif saya.</p>
      <div className="awards-layout">
        <div className="awards-collage reveal" aria-label="Tempat untuk sertifikat dan dokumentasi pencapaian">
          {portfolio.awardPhotos.map((item,i) => <div key={`${item.label}-${i}`} className={`award-photo award-photo-${i+1}`}>
            {item.image ? <img src={item.image} loading="lazy" alt={item.label}/> : <><Award size={i===0?35:23} strokeWidth={1.2}/><span>{item.label}</span><small>GANTI DENGAN FOTO ASLI</small></>}
          </div>)}
        </div>
        <div className="award-list reveal">
          {portfolio.awards.map((award,i) => <article className="award-item award-item-detailed" key={award.id}>
            <span className="award-icon"><Trophy size={23}/></span>
            <div className="award-copy"><small className="award-prelabel">PENCAPAIAN / {String(i+1).padStart(2,'0')}</small><b>{award.title}</b><small>{award.organization}</small><small>{award.year}</small><p>{award.description}</p>{award.link && <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-link">Lihat bukti <ArrowUpRight size={14}/></a>}</div>
          </article>)}
        </div>
      </div>
    </div>
  </section>
}
