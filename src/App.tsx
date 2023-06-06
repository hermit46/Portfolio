import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import bgImage from './assets/jr-korpa-MlyTYRutCuI-unsplash.jpg'
import './App.css'
import './styles.css'
import { Container, Box } from '@mui/material'
import {
  AboutMe,
  WorkExperience,
  SideProjects,
  Hobbies,
  Contact
} from './pages'

function App() {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
        }}
      >
        <Header />
        <Container>
          <AboutMe />
          <WorkExperience />
          <SideProjects />
          <Hobbies />
          <Contact />
        </Container>
      </Box>
    </>
  )
}

export default App
