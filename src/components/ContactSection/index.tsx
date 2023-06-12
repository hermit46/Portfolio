import React from 'react'
import { SectionProps } from '../../types'

// For dark background
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

//For light background

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  //   BtnWrap,
  Column2,
  IconWrap1,
  Icon1,
  IconWrap2,
  Icon2,
  Icon3
} from '../Misc/InfoElements'
// import { Button } from '../Misc/ButtonElement'

const ContactSection: React.FC<SectionProps> = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  //   buttonLabel,
  //   primary,
  //   dark,
  height
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper height={(height - 40).toString() + 'px'}>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine darkText={darkText}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              {/* <BtnWrap>
                    <Button>
                </BtnWrap> */}
            </TextWrapper>
          </Column1>
          <Column2>
            <IconWrap1>
              <Icon1
                lightBg={lightBg}
                href="https://linkedin.com/in/yong-quan-tan"
                target="_blank"
              >
                <FaLinkedinIn />
              </Icon1>
            </IconWrap1>
            <IconWrap2>
              <Icon2
                lightBg={lightBg}
                href="mailto:yongquan26@gmail.com"
                target="_blank"
              >
                <MdEmail />
              </Icon2>
              <Icon3
                lightBg={lightBg}
                href="https://github.com/hermit46"
                target="_blank"
              >
                <FaGithub />
              </Icon3>
            </IconWrap2>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default ContactSection
