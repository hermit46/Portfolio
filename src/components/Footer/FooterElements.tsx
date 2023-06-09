import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #050d17;
`

export const FooterWrap = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  @media screen (max-width: 768px) {
    flex-direction: column;
    padding: 46px;
  }
`

export const SocialLogo = styled(Link)`
  color: #f0ecec;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export const WebsiteRights = styled.small`
  @media screen (max-width: 768px) {
    margin-top: 20px;
  }
  text-align: center;
  color: #f0ecec;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #f0ecec;
  font-size: 24px;
`
