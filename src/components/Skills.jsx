import React from 'react'
import { Camera, Code2, DraftingCompass, Palette } from 'lucide-react'
import { portfolio } from '../data/portfolio.js'

const icons = {palette:Palette,camera:Camera,code:Code2,drafting:DraftingCompass}
const toolGroups = [
  { label: 'PEMROGRAMAN', folder: 'logocoding', files: ['CPP.jpg', 'CSS.jpg', 'Github.jpg', 'Google Colab.jpg', 'HTML.jpg', 'JavaScript.jpg', 'Laragon.jpg', 'Mysql.jpg', 'Phyton.jpg', 'React.jpg', 'TypeScript.jpg', 'Xampp.jpg'] },
  { label: 'NONPEMROGRAMAN', folder: 'logononcoding', files: ['AutoCAD.jpg', 'Canva.jpg', 'Capcut.jpg', 'CorelDraw.jpg', 'Excel.jpg', 'Figma.jpg', 'Google.jpg', 'Lightroom.jpg', 'PowerPoint.jpg', 'Word.jpg'] },
]
export default function Skills() {
  return <section className="page-section skills-section" id="skills">
    <div className="section-container skills-layout">
      <div className="skills-copy reveal">
        <span className="eyebrow">KEAHLIAN SAYA</span>
        <h2>Keahlian Saya<span className="heading-period">.</span></h2>
        <p>Saya memadukan pemikiran desain, kreativitas, dan pemahaman teknis untuk menciptakan pengalaman digital dan visual yang bermanfaat.</p>
        <div className="tool-groups">
          {toolGroups.map(group => <div className="tool-group" key={group.folder}>
            <div className="tool-logo-grid">
              {group.files.map(file => {
                const name = file.replace(/\.jpg$/i, '')
                return <button type="button" className="tool-logo" key={file} aria-label={name}>
                  <img src={`/images/${group.folder}/${encodeURIComponent(file)}`} alt="" loading="lazy"/>
                  <span className="tool-logo-name">{name}</span>
                </button>
              })}
            </div>
          </div>)}
        </div>
        <p className="skill-hint">APLIKASI / TEKNOLOGI YANG SAYA GUNAKAN</p>
      </div>
      <div className="skills-cards">
        {portfolio.skillCards.map((card,i) => {
          const Icon = icons[card.icon] || Palette
          return <article key={card.number} className="capability-card reveal" style={{transitionDelay:`${i*65}ms`}}>
            <div className="capability-top"><strong>{card.number}</strong><span>{card.label}</span></div>
            <div className="capability-icon"><Icon size={33} strokeWidth={1.35}/></div>
            <p>{card.text}</p><div className="tag-list">{card.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        })}
      </div>
    </div>
  </section>
}
