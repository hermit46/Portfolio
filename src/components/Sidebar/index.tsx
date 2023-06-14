import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu
} from './SidebarElements'

// const toggleLink = () => {

// }

const Sidebar = ({
  isOpen,
  toggle
}: //   toggleLink
{
  isOpen: boolean
  toggle: React.MouseEventHandler<HTMLElement>
  //   toggleLink: React.MouseEventHandler<HTMLButtonElement>
}) => {
  const toggleLink = () => {
    isOpen = !isOpen
    return
  }
  return (
    <SidebarContainer isOpen={isOpen.toString()} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleLink} offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="experience" onClick={toggleLink} offset={-80}>
            Experience
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggleLink} offset={-80}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            href="https://drive.google.com/file/d/18FUOAOJRmC7bj52miMJwQOvjbECSlDq0/view?usp=sharing"
            target="_blank"
          >
            View Resume
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
