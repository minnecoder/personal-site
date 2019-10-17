import React from 'react'
import styled from 'styled-components'
import SkillSection from './SkillsSection'
import media from './media'

const AboutPage = ({ FEimages, BEimages, Toolimages }) => (
  <About id="about">
    <AboutSection>
      <h1>About</h1>
      <p>
        Hi! My name is Sean Parkin I am a web developer that is based in Minnesota. I make websites and web applications
        using JavaScript. I am currently learning all of the things that React has to offer. React is my go-to for web
        applications and use Gatsby for websites.
      </p>
    </AboutSection>
    <SkillsSection>
      <h2>Skills</h2>
      <Skills>
        <SkillSection title="Front End Skills" imgData={FEimages} />
        <SkillSection title="Back End Skills" imgData={BEimages} />
        <SkillSection title="Tools" imgData={Toolimages} />
      </Skills>
    </SkillsSection>
  </About>
)

export default AboutPage
const About = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  font-family: 'Poppins', sans-serif;
  background: #fff;
`
const AboutSection = styled.div`
  width: 70%;
  margin: 0 auto;
  > p {
    padding: 20px;
    font-size: 1.4rem;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
`
const Skills = styled.div`
  display: flex;
  margin: 0 auto;
  ${media.tablet`
  flex-direction: column;
  `}
  ${media.plusphone`
  flex-wrap: wrap;
  `}
`
const SkillsSection = styled.div`
  margin: 0 auto;
  > h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`
