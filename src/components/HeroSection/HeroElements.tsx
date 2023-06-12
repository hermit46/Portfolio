import styled from 'styled-components'
import { BsArrowRightShort, BsArrowRightCircle } from 'react-icons/bs'

interface HeroContainerProps {
  height: string
}

export const HeroContainer = styled.div<HeroContainerProps>`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: ${({ height }) => height};
  position: relative;
  z-index: 1;
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ),
    //   linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -400px;
  margin-right: 50%;
`

export const Bg = styled.img`
  width: 200%;
  min-width: 600px;
  height: 150%;
  -o-object-fit: fill;
  object-fit: fill;
  background: #232a34;
  opacity: 80%;
`

export const HeroTopline = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const HeroHeadline = styled.h2`
  margin-top: 24px;
  color: #ededed;
  font-size: 26px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #ededed;
  font-size: 20px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`

export const HeroButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowRight = styled(BsArrowRightShort)`
  margin-left: 7px;
  font-size: 1rem;
`

export const ArrowRightClicked = styled(BsArrowRightCircle)`
  margin-left: 7px;
  font-size: 1rem;
`
