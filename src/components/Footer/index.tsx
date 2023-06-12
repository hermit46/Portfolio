import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  SocialLogo,
  WebsiteRights
  // SocialIconLink,
  // SocialIcons
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialLogo to="/" onClick={toggleHome}>
          Back to Top
        </SocialLogo>
        <WebsiteRights>
          © {new Date().getFullYear()} | Built and designed by Yong Quan Tan
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
