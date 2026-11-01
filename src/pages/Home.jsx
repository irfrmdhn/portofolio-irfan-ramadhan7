import React from 'react'
import Hero from '../components/Hero.jsx'
import SelectedWork from '../components/SelectedWork.jsx'
import Skills from '../components/Skills.jsx'
import About from '../components/About.jsx'
import Awards from '../components/Awards.jsx'
import Trainings from '../components/Trainings.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return <>
    <Hero />
    <SelectedWork />
    <Skills />
    <About />
    <Awards />
    <Trainings />
    <Contact />
  </>
}
