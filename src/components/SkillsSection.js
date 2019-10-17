import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from './media'

const SkillsSection = styled.div`
  padding: 0.5rem 0;
  margin: 0 2rem;
  > h3 {
    text-align: center;
  }
`
const SkillItems = styled.div`
  display: flex;

  padding: 0.5rem 0;
  ${media.tablet`
    
  justify-content: center;
  `}
  ${media.plusphone`
    margin-top: 0.5rem;
    flex-wrap: wrap;
  `}
`
const SkillItem = styled.div`
  padding: 0 0.7rem;

  ${media.plusphone`
    margin-top: 0.5rem;
  `}
`

const SkillSection = ({ title, imgData }) => (
  <SkillsSection>
    <h3>{title}</h3>
    <SkillItems>
      {imgData.map(({ node }) => (
        <SkillItem key={node.name}>
          <div>
            <Img fixed={node.childImageSharp.fixed} />
          </div>
          <div>
            <p>{node.name}</p>
          </div>
        </SkillItem>
      ))}
    </SkillItems>
  </SkillsSection>
)

export default SkillSection

SkillSection.propTypes = {
  imgData: PropTypes.array,
  title: PropTypes.string,
}
