import React, { useRef } from 'react'
import { ArrowUpRight, CalendarDays, Images, Network, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

function WorkDocumentation({ item }) {
  const dialogRef = useRef(null)
  const photos = item.gallery.filter(entry => entry.image)
  return <>
    <button className="documentation-button" type="button" onClick={() => dialogRef.current.showModal()} aria-haspopup="dialog">
      <Images size={20}/><span>Dokumentasi Pekerjaan</span><ArrowUpRight size={18}/>
    </button>
    <dialog className="documentation-dialog" ref={dialogRef} aria-labelledby={`documentation-${item.id}`} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close() }}>
      <div className="documentation-header"><div><h3 id={`documentation-${item.id}`}>Dokumentasi Pekerjaan</h3><p>{item.title}</p></div><button className="documentation-close" type="button" onClick={() => dialogRef.current.close()} aria-label="Tutup dokumentasi"><X size={22}/></button></div>
      {photos.length ? <div className="documentation-photos">{photos.map(entry => <figure key={entry.image}><img loading="lazy" src={entry.image} alt={entry.name}/><figcaption>{entry.name}</figcaption></figure>)}</div> : <p>Foto dokumentasi akan segera ditambahkan.</p>}
    </dialog>
  </>
}
export default function Trainings() {
  return <section className="page-section trainings-section" id="trainings">
    <div className="section-container">
      <span className="eyebrow reveal">PENGALAMAN & KEGIATAN</span>
      <h2 className="reveal">Pengalaman &amp; Kegiatan<span className="heading-period">.</span></h2>
      <p className="section-description reveal">Mengenal pengalaman praktik, pembelajaran, dan kontribusi saya di luar ruang kelas.</p>
      <div className="trainings-timeline">
        {portfolio.experience.map((item,i) => <article className={`training-entry reveal ${i%2?'reverse':''}`} key={item.id}>
          <div className="training-copy"><span className="eyebrow">0{i+1} / PENGALAMAN PROFESIONAL</span><h3>{item.title}</h3><p className="training-meta"><CalendarDays size={15}/>{item.position} · {item.date}</p><p>{item.description}</p><div className="experience-points"><span>AutoCAD</span><span>Serat Optik</span><span>Pemantauan Proyek</span></div></div>
          <div className="experience-visual">
            {item.image ? <img className="experience-main-image" loading="lazy" src={item.image} alt={`Dokumentasi ${item.title}`}/> : <div className="experience-main-placeholder"><div className="blueprint"><span>PERENCANAAN JARINGAN<br/>TELEKOMUNIKASI</span><Network size={49} strokeWidth={1}/><small>TEMPAT DOKUMENTASI</small></div></div>}
            <WorkDocumentation item={item}/>
          </div>
        </article>)}
      </div>
    </div>
  </section>
}
