import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavItem,
  NavLinks,
  NavMenu,
  NavbarContainer,
  MobileIcon,
  NavButton,
  NavButtonLink
} from './NavBarElements'
import { FaBars } from 'react-icons/fa'

const NavBar = ({
  toggle
}: {
  toggle: React.MouseEventHandler<HTMLElement>
}) => {
  const [activeTab] = useState(0)

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

  return (
    <>
      <Nav scrollnav={scrollNav.toString()}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem active={(activeTab === 0).toString()}>
              <NavLinks to="about" smooth={true} spy={true} offset={-80}>
                About
              </NavLinks>
            </NavItem>
            <NavItem active={(activeTab === 1).toString()}>
              <NavLinks to="experience" smooth={true} spy={true} offset={-80}>
                Experience
              </NavLinks>
            </NavItem>
            {/* <NavItem active={(activeTab === 2).toString()}>
                <NavLinks to="projects" smooth={true} spy={true} offset={-80}>
                  Projects
                </NavLinks>
              </NavItem> */}
            <NavItem active={(activeTab === 3).toString()}>
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
    </>
  )
}

export default NavBar
