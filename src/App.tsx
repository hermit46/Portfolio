import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import {
  HeroSection,
  Footer,
  AboutSection,
  ExperienceSection,
  NavBar,
  ContactSection,
  Sidebar
} from './components'
import {
  infoDetails,
  experienceDetails,
  contactDetails
} from './components/Data'

function App() {
  const [height, setHeight] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <>
      <Analytics />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection height={height} />
      <AboutSection height={height} {...infoDetails} />
      <ExperienceSection height={height} {...experienceDetails} />
      <ContactSection height={height} {...contactDetails} />
      <Footer />
    </>
  )
}

export default App
