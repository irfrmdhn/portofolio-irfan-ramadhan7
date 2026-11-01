import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export default function SelectedWork() {
  const projects = portfolio.projects
  const [index, setIndex] = useState(0)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const pointer = useRef(null)
  const lastDragAt = useRef(0)
  const current = projects[index]
  const go = delta => setIndex(value => (value + delta + projects.length) % projects.length)
  const offsetOf = i => {
    let diff = i - index
    if (diff > projects.length / 2) diff -= projects.length
    if (diff < -projects.length / 2) diff += projects.length
    return diff
  }
  const finishDrag = (event, cancelled = false) => {
    if (!pointer.current) return
    const dx = cancelled ? 0 : event.clientX - pointer.current.start
    pointer.current = null
    setDragging(false)
    setDrag(0)
    if (Math.abs(dx) > 45) {
      lastDragAt.current = Date.now()
      go(dx < 0 ? 1 : -1)
    }
  }
  return <section className="page-section work-section" id="work">
    <div className="section-container">
      <span className="eyebrow reveal">KARYA PILIHAN</span>
      <div className="section-heading-row reveal">
        <div><h2>Galeri Karya<span className="heading-period">.</span></h2><p>Kumpulan ide kreatif, proyek digital, dan karya teknis yang telah saya buat.</p></div>
        <Link className="filled-small-button" to="/work">Lihat Proyek Lainnya <ArrowUpRight size={16}/></Link>
      </div>
    </div>
    <div className={`carousel-shell reveal ${dragging ? 'dragging' : ''}`} tabIndex={0} role="region" aria-label="Galeri Karya. Geser dengan tetikus, sentuhan, atau tombol panah." style={{'--drag-x':`${drag}px`}}
      onKeyDown={event => { if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1) }; if (event.key === 'ArrowRight') { event.preventDefault(); go(1) } }}
      onPointerDown={event => {
        if (event.pointerType === 'mouse' && event.button !== 0) return
        pointer.current = {start:event.clientX, captured:false}
      }}
      onPointerMove={event => {
        if (!pointer.current) return
        const distance = event.clientX - pointer.current.start
        if (Math.abs(distance) > 6) {
          if (!pointer.current.captured) {
            event.currentTarget.setPointerCapture?.(event.pointerId)
            pointer.current.captured = true
          }
          setDragging(true)
          setDrag(Math.max(-180, Math.min(180, distance)))
        }
      }}
      onPointerUp={event => finishDrag(event)}
      onPointerCancel={event => finishDrag(event, true)}>
      <div className="carousel-stage">
        {projects.map((project, i) => {
          const offset = offsetOf(i)
          return <button key={project.id} type="button" className={`carousel-slide ${offset === 0 ? 'selected' : ''}`} style={{'--shift':`${offset * 18}vw`,'--shift-tablet':`${offset * 47}vw`,'--shift-mobile':`${offset * 58}vw`,'--scale':Math.max(.55,1-Math.abs(offset)*.22),'--scale-mobile':Math.max(.55,1-Math.abs(offset)*.22),opacity:Math.max(.08,1-Math.abs(offset)*.30),zIndex:10-Math.abs(offset)}}
            onClick={() => { if (Date.now() - lastDragAt.current < 350) return; setIndex(i) }}
            aria-current={offset === 0 ? 'true' : undefined} aria-label={`Pilih karya ${project.title}`}>
            <img src={project.image} alt={`Visual proyek: ${project.title}`} draggable="false" loading="lazy"/>
          </button>
        })}
      </div>
      <div className="carousel-controls"><button type="button" onClick={() => go(-1)} aria-label="Karya sebelumnya"><ChevronLeft size={20}/></button><span>{String(index+1).padStart(2,'0')} <span className="muted">/ {String(projects.length).padStart(2,'0')}</span></span><button type="button" onClick={() => go(1)} aria-label="Karya berikutnya"><ChevronRight size={20}/></button></div>
    </div>
    <div className="carousel-caption" key={current.id} aria-live="polite">
      <h3>{current.title}</h3><p>{current.description}</p>
      {current.link ? <a href={current.link} target="_blank" rel="noopener noreferrer" className="text-link">Lihat Proyek <ArrowUpRight size={15}/></a> : <span className="text-link-disabled">Tautan detail proyek belum tersedia</span>}
    </div>
  </section>
}
