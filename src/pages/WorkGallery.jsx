import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Code2, Images } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export default function WorkGallery() {
  const technical = portfolio.projects.filter(project => project.category === 'technical')
  const digital = portfolio.projects.filter(project => project.category === 'digital')
  return <div className="gallery-page">
    <div className="section-container gallery-intro">
      <Link to="/#work" className="gallery-back"><ArrowLeft size={16}/> KEMBALI KE BERANDA</Link>
      <span className="eyebrow">KARYA SAYA / ARSIP</span>
      <h1>Galeri Karya<span className="heading-period">.</span></h1>
      <p>Jelajahi sistem teknis, desain kreatif, dan proyek visual dalam portofolio saya.</p>
    </div>
    <section className="section-container gallery-technical" aria-labelledby="technical-title">
      <div className="gallery-category-header"><div><span className="eyebrow">01 / PENGEMBANGAN</span><h2 id="technical-title">Teknis<span className="heading-period">.</span></h2></div><Code2 size={30} strokeWidth={1}/></div>
      <div className="technical-list">
        {technical.map((project,i) => <article className="technical-item reveal" key={project.id}><div className="technical-number">{String(i+1).padStart(2,'0')}</div><div className="technical-main">{project.image && <img className="technical-image" loading="lazy" src={project.image} alt={`Visual proyek ${project.title}`}/>}<h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Lihat ${project.title}`}><ArrowUpRight/></a> : <span className="technical-pending">TAUTAN BELUM ADA</span>}</article>)}
      </div>
    </section>
    <section className="section-container gallery-digital" aria-labelledby="digital-title">
      <div className="gallery-category-header"><div><span className="eyebrow">02 / PENGALAMAN VISUAL</span><h2 id="digital-title">Karya Kreatif<span className="heading-period">.</span></h2></div><Images size={30} strokeWidth={1}/></div>
      <p className="section-description">Graphic design, interface exploration, photography, and motion penceritaan.</p>
      <div className="digital-showcase">
        {digital.map((project,i) => <article className={`showcase-item reveal ${i%2 ? 'reverse' : ''}`} key={project.id}>
          <div className="showcase-image"><img loading="lazy" src={project.image} alt={`Visual kategori proyek ${project.title}`}/></div>
          <div className="showcase-copy"><span className="eyebrow">KARYA KREATIF / {String(i+1).padStart(2,'0')}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>{project.link ? <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">Jelajahi Proyek <ArrowUpRight size={15}/></a> : <small>Pratinjau / tautan proyek belum ditambahkan.</small>}</div>
        </article>)}
      </div>
    </section>
    <section className="section-container gallery-cta"><span className="eyebrow">LANGKAH BERIKUTNYA</span><div><h2>Mari ciptakan<br/>sesuatu yang bermanfaat.</h2><Link to="/#contact" className="filled-small-button">MARI BERBINCANG <ArrowUpRight size={15}/></Link></div></section>
  </div>
}
