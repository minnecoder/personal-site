import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from './media'

const PortfolioItem = ({ node, imgSrc }) => (
  <PortfolioContainer>
    <Image>
      <img src={imgSrc} alt="Project" style={{ maxWidth: '100%' }} />
    </Image>
    <Info>
      <h3>{node.name}</h3>
      <ProjectDesc>{node.description}</ProjectDesc>
      <ProjectTechStack>
        <strong>Technologies Used: </strong>
        {node.tech}
      </ProjectTechStack>

      <WorkBtns>
        <WorkBtn href={node.website}>Website</WorkBtn>
        <WorkBtn href={node.github}>GitHub</WorkBtn>
      </WorkBtns>
    </Info>
  </PortfolioContainer>
)
export default PortfolioItem

PortfolioItem.propTypes = {
  node: PropTypes.object,
  imgSrc: PropTypes.string,
}
const PortfolioContainer = styled.div`
  display: flex;
  width: 50%;
  border-style: solid;
  border-color: #d4d4d4;
  border-radius: 0.5rem;
  background: #fff;
  padding: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  ${media.tablet`
  width: 80%;
  flex-direction: column;
  `}
`

const Image = styled.div`
  flex-basis: 100%;
  border-radius: 0.5rem;
`

const Info = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 2.5rem;
  padding-right: 1rem;
  > h3 {
    text-align: center;
    padding: 0.8rem 0;
  }
`
const ProjectDesc = styled.p``
const ProjectTechStack = styled.p`
  // margin-top: 0.2rem;
`

const WorkBtns = styled.div`
  display: flex;
  order: 2;
  margin: 0 auto;
  padding-top: 1.5rem;
  ${media.tablet`
  // flex-direction: column;
    margin-top: 0.5rem;
  `}
  ${media.plusphone`
  flex-direction: column;
    margin-top: 0.5rem;
  `}
`

const WorkBtn = styled.a`
  margin: 0 20px;
  background: #18a4e0;
  border: solid 1px #08fdd860;
  border-radius: 4px;
  padding: 6px 25px;
  color: #fff;
  text-decoration: none;
  &:hover {
    background: #0253b3;
  }
  @media (max-width: 1024px) {
    margin-top: 0.5rem;
  }
`
