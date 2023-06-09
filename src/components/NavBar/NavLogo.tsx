import NavIcon from '../../assets/NavIcon.png'
import { animateScroll as scroll } from 'react-scroll'

const NavLogo = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <button>
      <img src={NavIcon} alt="" width="70" height="70" onClick={toggleHome} />
    </button>
  )
}

export default NavLogo
