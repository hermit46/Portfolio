import React from 'react'
import personalProfile from '../../assets/profile.jpg'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from '../Misc/InfoElements.tsx'
import { Button } from '../Misc/ButtonElement'
import { SectionProps } from '../../types'
import { BsChevronDoubleDown as ArrowDown } from 'react-icons/bs'

const AboutSection: React.FC<SectionProps> = ({
  destination,
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark,
  height
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper height={(height - 40).toString() + 'px'}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine darkText={darkText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>
                  Driven and passionate, I'd love to create products that make a
                  difference in the lives of others.
                </Subtitle>
                <Subtitle darkText={darkText}>
                  For hobbies, I love cooking new and delicious foods, or
                  bouldering at a climbing gym.
                </Subtitle>
                <BtnWrap>
                  <Button
                    to={destination}
                    smooth={true}
                    spy={true}
                    offset={-80}
                    primary={primary}
                    dark={dark}
                  >
                    {buttonLabel} <ArrowDown style={{ marginLeft: 10 }} />
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={personalProfile} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default AboutSection
