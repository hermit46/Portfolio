import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import bgImage from './assets/jr-korpa-MlyTYRutCuI-unsplash.jpg'
import './App.css'
import './styles.css'
import { Container, Box } from '@mui/material'
// import { About, Experiences, Projects, Contact } from './components'
import { Footer } from './components'

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
