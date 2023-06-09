import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs, Button } from '@mui/material'
import NavLogo from './NavLogo'
import ResumeButton from './ResumeButton'

const Header = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isTransparent, setIsTransparent] = useState(true)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
    // Scroll to the corresponding section on tab change
    const sections = document.getElementsByClassName('section')
    sections[newValue].scrollIntoView({ behavior: 'smooth' })
    console.log('Current active section is: ' + newValue)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset
      if (currentPosition >= 80) setIsTransparent(false)
      else setIsTransparent(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isTransparent ? 'transparent' : 'black',
        transition: 'background-color 0.3s ease-in-out',
        mt: 0.5
      }}
      elevation={0}
    >
      <Toolbar>
        <NavLogo></NavLogo>
        <Typography variant="h6" component="div" sx={{ color: 'white' }} />
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          textColor="inherit"
          variant="fullWidth"
          sx={{
            flexGrow: 1
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#c8e6c9'
            }
          }}
        >
          <Tab label="About" sx={{ mb: 3 }} />
          <Tab label="Experience" sx={{ mb: 3 }} />
          <Tab label="Projects" sx={{ mb: 3 }} />
          <Tab label="Contact" sx={{ mb: 3 }} />
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default Header
