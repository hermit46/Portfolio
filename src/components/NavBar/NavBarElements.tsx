import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

interface NavProps {
  scrollnav: string
}

export const Nav = styled.nav<NavProps>`
  background: ${({ scrollnav }) =>
    scrollnav === 'true' ? '#050d17' : 'transparent'};
  height: 75px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.4s all ease;
  @media screen and (max-width: 960px) {
    /* transition: 0.8s all ease; */
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: #f0ecec;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-weight: bold;
  text-decoration: none;
`
// TODO: Mobile responsiveness
export const MobileIcon = styled.div``

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
interface NavItemProps {
  active: string
}

export const NavItem = styled.li<NavItemProps>`
  height: 80px;
  padding-bottom: 3px;
  /* cursor: pointer;
  border-bottom: ${({ active }) =>
    active === 'true' ? `3px solid #45d0af` : 'none'}; */
`

export const NavLinks = styled(LinkS)`
  color: #f0ecec;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #45d0af;
  }
`

export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavButtonLink = styled.a`
  border-radius: 10px;
  background: #b4cded;
  white-space: nowrap;
  padding: 10px 22px;
  color: #0d1821;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  line-height: 22px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ededed;
    color: #0d1821;
  }
`
