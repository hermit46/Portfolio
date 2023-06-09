import React, { useState, useEffect } from 'react'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Button
} from '@mui/material'
import { IconContext } from 'react-icons/lib'
import NavLogo from './NavLogo'
import ResumeButton from './ResumeButton'
import {
  Nav,
  NavButton,
  NavButtonLink,
  NavItem,
  NavLinks,
  NavMenu,
  NavbarContainer
} from './NavBarItems'
import { animateScroll as scroll } from 'react-scroll'

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [scrollNav, setScrollNav] = useState(false)

  // Handle transparency of Navbar during scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle active tab
  const handleTabChange = i => {
    setActiveTab(i)
    // Scroll to the corresponding section on tab change
    const sections = document.getElementsByClassName('section')
    sections[i].scrollIntoView({ behavior: 'smooth' })
    console.log('Current active section is: ' + i)
  }

  return (
    <>
      {/* <Box sx={{ justifyContent: 'space-between' }}> */}
      {/* <IconContext.Provider value={{ color: '#ededed' }}> */}
      <Nav scrollnav={scrollNav.toString()}>
        <NavbarContainer>
          {/* <NavLogo /> */}
          <NavMenu>
            <NavItem
              active={activeTab === 0}
              onClick={() => handleTabChange(0)}
            >
              <NavLinks to="about" smooth={true} spy={true} offset={-80}>
                About
              </NavLinks>
            </NavItem>
            <NavItem
              active={activeTab === 1}
              onClick={() => handleTabChange(1)}
            >
              <NavLinks to="experience" smooth={true} spy={true} offset={-80}>
                Experience
              </NavLinks>
            </NavItem>
            <NavItem
              active={activeTab === 2}
              onClick={() => handleTabChange(2)}
            >
              <NavLinks to="projects" smooth={true} spy={true} offset={-80}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem
              active={activeTab === 3}
              onClick={() => handleTabChange(3)}
            >
              <NavLinks to="contact" smooth={true} spy={true} offset={-80}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink
              href="https://drive.google.com/file/d/18FUOAOJRmC7bj52miMJwQOvjbECSlDq0/view?usp=sharing"
              target="_blank"
            >
              Resume
            </NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
      {/* </Box> */}
      {/* </IconContext.Provider> */}
    </>

    // <AppBar
    //   position="fixed"
    //   sx={{
    //     backgroundColor: isTransparent ? 'transparent' : 'black',
    //     transition: 'background-color 0.3s ease-in-out',
    //     mt: 0.5
    //   }}
    //   elevation={0}
    // >
    //   <Toolbar>
    //     <NavLogo></NavLogo>
    //     <Typography variant="h6" component="div" sx={{ color: 'white' }} />
    //     <Tabs
    //       value={activeTab}
    //       onChange={handleTabChange}
    //       centered
    //       textColor="inherit"
    //       variant="fullWidth"
    //       sx={{
    //         flexGrow: 1
    //       }}
    //       TabIndicatorProps={{
    //         style: {
    //           backgroundColor: '#c8e6c9'
    //         }
    //       }}
    //     >
    //       <Tab label="About" sx={{ mb: 3 }} />
    //       <Tab label="Experience" sx={{ mb: 3 }} />
    //       <Tab label="Projects" sx={{ mb: 3 }} />
    //       <Tab label="Contact" sx={{ mb: 3 }} />
    //     </Tabs>
    //   </Toolbar>
    // </AppBar>
  )
}

export default NavBar
