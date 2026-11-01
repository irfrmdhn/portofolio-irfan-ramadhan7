import React, { useState } from 'react'
import { ArrowUpRight, Download, Mail, Github, Linkedin, Instagram } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const contactEntries = [
  { label:'EMAIL', key:'email', icon:Mail },
  { label:'INSTAGRAM', key:'instagram', icon:Instagram },
  { label:'LINKEDIN', key:'linkedin', icon:Linkedin },
  { label:'GITHUB', key:'github', icon:Github },
]
export default function Contact() {
  const { contact, identity } = portfolio
  const [showSetup, setShowSetup] = useState(false)
  const sendMessage = () => {
    if (!contact.email) { setShowSetup(true); return }
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Halo Irfan — Peluang Kolaborasi')}`
  }
  return <section className="page-section contact-section" id="contact">
    <div className="section-container contact-grid">
      <div className="contact-copy reveal"><span className="eyebrow">HUBUNGI SAYA</span><h2>MARI<br/>BEKERJA<br/>SAMA<span className="heading-period">.</span></h2><h3>Siap menghadapi tantangan berikutnya.</h3><p>Saya terbuka untuk peluang baru, kolaborasi kreatif, dan proyek yang membutuhkan kemampuan saya di bidang desain, teknologi, dan kreativitas digital.</p>
      {identity.resumeUrl ? <a className="solid-pill" href={identity.resumeUrl} download="CV-Irfan-Ramadhan.pdf">UNDUH CV <Download size={15}/></a> : <span className="resume-unavailable"><Download size={14}/> UNDUH CV — BELUM TERSEDIA</span>}</div>
      <div className="contact-info reveal">
        {contactEntries.map((entry,i) => {
          const value = contact[entry.key]
          const Icon = entry.icon
          const href = entry.key==='email' ? `mailto:${value}` : value
          const display = value ? (entry.key==='linkedin' && contact.linkedinLabel ? contact.linkedinLabel : entry.key==='email' ? value : value.replace(/^https?:\/\//,'').replace(/\/$/,'')) : 'Tambahkan di portfolio.js'
          const body = <><span className="contact-num">0{i+1}</span><span className="contact-entry-icon"><Icon size={19}/></span><span className="contact-entry-content"><small>{entry.label}</small><b>{display}</b></span>{value && <ArrowUpRight size={16} className="contact-arr"/>}</>
          return value ? <a key={entry.key} className="contact-item" href={href} target={entry.key==='email'?undefined:'_blank'} rel={entry.key==='email'?undefined:'noopener noreferrer'}>{body}</a> : <div key={entry.key} className="contact-item contact-unconfigured">{body}</div>
        })}
        <button type="button" className="message-button" onClick={sendMessage}>KIRIM PESAN KEPADA SAYA <ArrowUpRight size={17}/></button>
        {showSetup && <p className="contact-notice" role="status">Tombol email belum dapat digunakan. Isi <code>contact.email</code> di <code>src/data/portfolio.js</code> dengan alamat email asli agar aktif.</p>}
      </div>
    </div>
  </section>
}
