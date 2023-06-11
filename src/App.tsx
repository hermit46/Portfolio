import React, { useState, useEffect } from 'react'
import './App.css'
// import './styles.css'
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
      {/* <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '110vw',
          height: '110vh'
        }}
      > */}
      {/* <NavBar /> */}
      <HeroSection height={height} />
      <AboutSection height={height} {...infoDetails} />
      <ExperienceSection height={height} {...experienceDetails} />
      <ContactSection height={height} {...contactDetails} />
      <Footer />
      {/* <Container>
        <AboutMe />
          <WorkExperience />
          <SideProjects />
          <Hobbies />
          <Contact />
      </Container> */}
      {/* </Box> */}
    </>
  )
}

export default App
