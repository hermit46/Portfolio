import React, { useState } from 'react'
import { Button } from '../Misc/ButtonElement'

import { SectionProps } from '../../types'
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
  List,
  LiItem
} from '../Misc/InfoElements'
import {
  Bar,
  Experience,
  ExperienceBtnWrap1,
  ExperienceBtnWrap2,
  ExperienceContainer,
  ExperienceWrapper
} from './ExperienceElements'
import { BsChevronDoubleDown as ArrowDown } from 'react-icons/bs'

const ExperienceSection: React.FC<SectionProps> = ({
  destination,
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  buttonLabel,
  primary,
  dark,
  height
}) => {
  const [company, setCompany] = useState('Gro Intelligence')

  /* Current companies:
  Gro Intelligence, 
  University CS Department, 
  JumboCode, 
  Markit, 
  BRAVE, 
  YoRipe */

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper height={(height - 40).toString() + 'px'}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine darkText={darkText}>{topLine}</TopLine>
                <Heading lightText={lightText}>I've worked at</Heading>
                <ExperienceContainer>
                  <Experience
                    onClick={() => setCompany('Gro Intelligence')}
                    clicked={(company === 'Gro Intelligence').toString()}
                  >
                    <Bar
                      clicked={(company === 'Gro Intelligence').toString()}
                    />
                    Gro Intelligence
                  </Experience>
                  <Experience
                    onClick={() => setCompany('Tufts University')}
                    clicked={(company === 'Tufts University').toString()}
                  >
                    <Bar
                      clicked={(company === 'Tufts University').toString()}
                    />
                    Tufts University
                  </Experience>
                  <Experience
                    onClick={() => setCompany('JumboCode')}
                    clicked={(company === 'JumboCode').toString()}
                  >
                    <Bar clicked={(company === 'JumboCode').toString()} />
                    JumboCode
                  </Experience>
                  <Experience
                    onClick={() => setCompany('Markit')}
                    clicked={(company === 'Markit').toString()}
                  >
                    <Bar clicked={(company === 'Markit').toString()} />
                    Markit
                  </Experience>
                  <Experience
                    onClick={() => setCompany('BRAVE')}
                    clicked={(company === 'BRAVE').toString()}
                  >
                    <Bar clicked={(company === 'BRAVE').toString()} />
                    BRAVE
                  </Experience>
                  <Experience
                    onClick={() => setCompany('YoRipe')}
                    clicked={(company === 'YoRipe').toString()}
                  >
                    <Bar clicked={(company === 'YoRipe').toString()} />
                    YoRipe
                  </Experience>
                </ExperienceContainer>
                <ExperienceBtnWrap1>
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
                </ExperienceBtnWrap1>
              </TextWrapper>
            </Column1>
            <Column2>
              {(company === 'Gro Intelligence').toString() === 'true' ? (
                <GroIntelligence darkText={darkText} />
              ) : (company === 'Tufts University').toString() === 'true' ? (
                <TuftsUniversity darkText={darkText} />
              ) : (company === 'JumboCode').toString() === 'true' ? (
                <JumboCode darkText={darkText} />
              ) : (company === 'Markit').toString() === 'true' ? (
                <Markit darkText={darkText} />
              ) : (company === 'BRAVE').toString() === 'true' ? (
                <BRAVE darkText={darkText} />
              ) : (
                <YoRipe darkText={darkText} />
              )}
              <ExperienceBtnWrap2>
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
              </ExperienceBtnWrap2>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

const GroIntelligence = ({ darkText }: { darkText: string }) => {
  return (
    <ExperienceWrapper>
      <TopLine darkText={darkText}>
        SWE Intern
        <a
          style={{ color: '#45d0af', textDecoration: 'none' }}
          rel="noreferrer"
          href="https://gro-intelligence.com/"
          target="_blank"
        >
          @ Gro Intelligence
        </a>
      </TopLine>
      <Subtitle darkText={darkText}>Jun - Dec 2022</Subtitle>
      <List darkText={darkText}>
        <LiItem>
          Developed a Full-Stack Dashboard to model crop yield changes, by
          ingesting S3 data via Python & FastAPI, & visualizing data plots with
          React & Typescript
        </LiItem>
        <LiItem>
          Co-developed on a React & Typescript Crop Insights web-app for 100
          Data Scientists to provide a single-access data point for crop yield
          predictions, which &gt; 2x Gro’s lifetime revenue
        </LiItem>
        <LiItem>
          Built an end-to-end React Component Library for Dev, Design & Analyst
          teams, optimized Docker image size to reduce storage space by 95% &
          deployed to ECS via Terraform
        </LiItem>
        {/* <LiItem>
          Communicated with key stakeholders in Design & Analyst teams to
          discover and triage feature needs for web apps
        </LiItem> */}
        {/* <LiItem>
          Improved Webpack config to enable live UI changes with Hot Module
          Replacement, where manual reload was prior norm
        </LiItem> */}
      </List>
      <Subtitle darkText={darkText}>
        <span style={{ color: '#45d0af' }}>Skills: </span> Typescript, React,
        Python, Docker, Terraform
      </Subtitle>
    </ExperienceWrapper>
  )
}

const TuftsUniversity = ({ darkText }: { darkText: string }) => {
  return (
    <ExperienceWrapper>
      <TopLine darkText={darkText}>
        Teaching Assistant
        <a
          style={{ color: '#45d0af', textDecoration: 'none' }}
          rel="noreferrer"
          href="https://engineering.tufts.edu/cs/"
          target="_blank"
        >
          @ Tufts CS Department
        </a>
      </TopLine>
      <Subtitle darkText={darkText}>Jan - Jun 2022</Subtitle>
      <List darkText={darkText}>
        <LiItem>
          Hosted office hours for 40 students to go over concepts on web
          technologies (e.g. noSQL & Node)
        </LiItem>
        <LiItem>
          Organized workshops to review web deployment methods such as Heroku &
          AWS, to an audience of 30
        </LiItem>
      </List>
      <Subtitle darkText={darkText}>
        <span style={{ color: '#45d0af' }}>Skills: </span> noSQL, Node, AWS
        (EC2, S3), Heroku
      </Subtitle>
    </ExperienceWrapper>
  )
}

const JumboCode = ({ darkText }: { darkText: string }) => {
  return (
    <ExperienceWrapper>
      <TopLine darkText={darkText}>
        Software Developer
        <a
          style={{ color: '#45d0af', textDecoration: 'none' }}
          rel="noreferrer"
          href="https://jumbocode.org/"
          target="_blank"
        >
          @ JumboCode
        </a>
      </TopLine>
      <Subtitle darkText={darkText}>Sep 2021 - Jun 2022</Subtitle>
      <List darkText={darkText}>
        <LiItem>
          Collaborated with Developers & Designers to build a matching app
          between drivers & passengers
        </LiItem>
        <LiItem>
          Developed an interactive React calendar that queries MongoDB for
          available passengers on a given date
        </LiItem>
        <LiItem>
          Built a Next.JS file uploading interface that parses Excel sheets and
          uploads relevant user data onto MongoDB
        </LiItem>
      </List>
      <Subtitle darkText={darkText}>
        <span style={{ color: '#45d0af' }}>Skills: </span> React, Javascript,
        MongoDB
      </Subtitle>
    </ExperienceWrapper>
  )
}

const Markit = ({ darkText }: { darkText: string }) => {
  return (
    <ExperienceWrapper>
      <TopLine darkText={darkText}>
        Software Developer Intern
        <a
          style={{ color: '#45d0af', textDecoration: 'none' }}
          rel="noreferrer"
          href="https://www.markitsocial.net/"
          target="_blank"
        >
          @ Markit Social
        </a>
      </TopLine>
      <Subtitle darkText={darkText}>Aug - Dec 2021</Subtitle>
      <List darkText={darkText}>
        <LiItem>
          Built React search bar to filter through list & search for friends
          attending events with 10% rise in participation
        </LiItem>
        <LiItem>
          Increased code coverage by refactoring legacy code in Typescript &
          creating JEST unit test suites
        </LiItem>
      </List>
      <Subtitle darkText={darkText}>
        <span style={{ color: '#45d0af' }}>Skills: </span> React, Typescript
      </Subtitle>
    </ExperienceWrapper>
  )
}

const BRAVE = ({ darkText }: { darkText: string }) => {
  return (
    <ExperienceWrapper>
      <TopLine darkText={darkText}>
        Podcast Fellow
        <a
          style={{ color: '#45d0af', textDecoration: 'none' }}
          rel="noreferrer"
          href="https://www.bravesea.com/"
          target="_blank"
        >
          @ BRAVE SE Asia Podcast
        </a>
      </TopLine>
      <Subtitle darkText={darkText}>May 2020 - Dec 2021</Subtitle>
      <List darkText={darkText}>
        <LiItem>
          Scaled coffee chats with 120 weekly podcasts with Head of Strategic
          Projects @ Monk’s Hill Ventures
        </LiItem>
        <LiItem>
          Achieved #2 podcast in Singapore & 12,000 unique downloads through
          distribution on media platforms
        </LiItem>
        <LiItem>
          Automated process with AirTable, Zapier, & no-code tools with 40
          manhours saved monthly
        </LiItem>
      </List>
      <Subtitle darkText={darkText}>
        <span style={{ color: '#45d0af' }}>Skills: </span> Zapier, AirTable,
        WordPress
      </Subtitle>
    </ExperienceWrapper>
  )
}

const YoRipe = ({ darkText }: { darkText: string }) => {
  return (
    <ExperienceWrapper>
      <TopLine darkText={darkText}>
        Product Management Intern
        <a
          style={{ color: '#45d0af', textDecoration: 'none' }}
          rel="noreferrer"
          href="https://yoripe.com/"
          target="_blank"
        >
          @ YoRipe
        </a>
      </TopLine>
      <Subtitle darkText={darkText}>May - Aug 2021</Subtitle>
      <List darkText={darkText}>
        <LiItem>
          Led team of four engineers with Founder, implementing biweekly
          sprints, product strategy methodologies
        </LiItem>
        <LiItem>
          Achieved 27% year-on-year growth in Monthly Active Users through A/B
          Testing of mobile-app screens
        </LiItem>
        <LiItem>
          Developed a new data-driven approach with Uninstall Rates which led to
          focus expansion on 2 regional markets
        </LiItem>
      </List>
      <Subtitle darkText={darkText}>
        <span style={{ color: '#45d0af' }}>Skills: </span> Firebase
      </Subtitle>
    </ExperienceWrapper>
  )
}

export default ExperienceSection
