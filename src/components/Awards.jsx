import React, { useRef, useState } from 'react'
import { Award, ArrowUpRight, ChevronLeft, ChevronRight, Trophy, X } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

export default function Awards() {
  const galleryRef = useRef(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const photos = portfolio.awardPhotos.filter(item => item.image === '/images/prestasi/PENGHARGAAN.jpeg')
  const galleryPhotos = portfolio.awardPhotos.filter(item => item.image)
  const currentPhoto = galleryPhotos[photoIndex]
  const movePhoto = direction => setPhotoIndex(index => (index + direction + galleryPhotos.length) % galleryPhotos.length)
  return <section className="page-section awards-section" id="awards">
    <div className="section-container">
      <span className="eyebrow reveal">PENGHARGAAN</span>
      <h2 className="reveal">Penghargaan dan Prestasi<span className="heading-period">.</span></h2>
      <p className="section-description reveal">Pencapaian yang menandai langkah berarti dalam perjalanan akademik dan kreatif saya.</p>
      <div className="awards-layout">
        <div className="awards-photos reveal">
        <div className="awards-collage awards-collage-single" aria-label="Sertifikat dan dokumentasi pencapaian">
          {photos.map((item,i) => <div key={item.image || item.label} className={`award-photo award-photo-${i+1}`}>
            {item.image ? <img src={item.image} loading="lazy" alt={item.label}/> : <><Award size={i===0?35:23} strokeWidth={1.2}/><span>{item.label}</span><small>GANTI DENGAN FOTO ASLI</small></>}
          </div>)}
        </div>
        <button type="button" className="filled-small-button awards-more-button" aria-haspopup="dialog" onClick={() => { setPhotoIndex(0); galleryRef.current.showModal() }}>Lihat lainnya <ArrowUpRight size={17}/></button>
        </div>
        <div className="award-list reveal">
          {portfolio.awards.map((award,i) => <article className="award-item award-item-detailed" key={award.id}>
            <div className="award-copy"><small className="award-prelabel"><Trophy size={23}/> PENCAPAIAN / {String(i+1).padStart(2,'0')}</small><b>{award.title}</b><small>{award.organization}</small><small>{award.year}</small><p>{award.description}</p>{award.link && <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-link">Lihat bukti <ArrowUpRight size={14}/></a>}</div>
          </article>)}
        </div>
      </div>
    </div>
    <dialog ref={galleryRef} className="documentation-dialog award-gallery-dialog" aria-labelledby="award-gallery-title" onClick={event => { if (event.target === event.currentTarget) galleryRef.current.close() }} onKeyDown={event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); movePhoto(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); movePhoto(1) }
    }}>
      <div className="documentation-header">
        <h3 id="award-gallery-title">Galeri Prestasi</h3>
        <button type="button" className="documentation-close" onClick={() => galleryRef.current.close()} aria-label="Tutup galeri"><X size={22}/></button>
      </div>
      <figure className="award-gallery-photo">
        <img src={currentPhoto.image} alt={currentPhoto.label}/>
        <figcaption aria-live="polite">{currentPhoto.label} · {photoIndex + 1} / {galleryPhotos.length}</figcaption>
      </figure>
      <div className="award-gallery-controls">
        <button type="button" className="documentation-close" onClick={() => movePhoto(-1)} aria-label="Foto sebelumnya"><ChevronLeft size={22}/></button>
        <div className="award-gallery-thumbnails">{galleryPhotos.map((photo, index) => <button type="button" key={photo.image} className={index === photoIndex ? 'active' : ''} aria-label={`Lihat ${photo.label}`} aria-pressed={index === photoIndex} onClick={() => setPhotoIndex(index)}><img src={photo.image} alt=""/></button>)}</div>
        <button type="button" className="documentation-close" onClick={() => movePhoto(1)} aria-label="Foto berikutnya"><ChevronRight size={22}/></button>
      </div>
    </dialog>
  </section>
}
