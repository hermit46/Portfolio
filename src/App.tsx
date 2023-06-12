import { useState, useEffect } from 'react'
import './App.css'
import {
  HeroSection,
  Footer,
  AboutSection,
  ExperienceSection,
  NavBar,
  ContactSection
} from './components'
import {
  infoDetails,
  experienceDetails,
  contactDetails
} from './components/Data'

function App() {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <>
      <NavBar />
      <HeroSection height={height} />
      <AboutSection height={height} {...infoDetails} />
      <ExperienceSection height={height} {...experienceDetails} />
      <ContactSection height={height} {...contactDetails} />
      <Footer />
    </>
  )
}

export default App
