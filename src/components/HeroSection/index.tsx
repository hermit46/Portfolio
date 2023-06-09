import React, { useState, useEffect } from 'react'
import BG from '../../assets/jr-korpa-MlyTYRutCuI-unsplash.jpg'
import { Button } from '../Misc/ButtonElement'
import {
  HeroContainer,
  HeroBg,
  Bg,
  HeroTopline,
  HeroHeadline,
  HeroContent,
  HeroP,
  HeroButtonWrapper,
  ArrowRight,
  ArrowRightClicked
} from './HeroElements'

const HeroSection = ({ height }: { height: number }) => {
  const [hover, setHover] = useState(false)
  const onHover = () => setHover(!hover)

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeroContainer id="home" height={height.toString() + 'px'}>
      {/* BG Waterfall effect */}
      <HeroBg style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
        <Bg src={BG} />
      </HeroBg>
      <HeroContent>
        <HeroTopline>Hi, I'm Yong Quan.</HeroTopline>
        <HeroHeadline>
          Recent Tufts graduate, Aspiring software engineer.
        </HeroHeadline>
        <HeroP>
          Welcome to my portfolio: a collection of my work, skills & passion for
          all things Computer Science! Use the button below to get started.
        </HeroP>
        <HeroButtonWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            spy={true}
            offset={-80}
          >
            About me {hover ? <ArrowRightClicked /> : <ArrowRight />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

// TODO FIX THE WIDTH & CLICKABILITY, CURRENTLY THE TOP HALF OF THE DIV IS CLICKABLE
