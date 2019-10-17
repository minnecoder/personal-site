import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import PortfolioItem from './PortfolioItem'
// import media from './media'

const Work = () => (
  <StaticQuery
    query={graphql`
      {
        allFile(filter: { relativePath: { regex: "/projects/.*.(png|gif|jpeg|jpg)/" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
        allProjectsJson {
          edges {
            node {
              name
              description
              img
              tech
              github
              website
            }
          }
        }
      }
    `}
    render={data => {
      const portfolioData = data.allProjectsJson.edges
      const portfolioImages = data.allFile.edges
      return (
        <PortfolioSection id="work">
          <Portfolio>
            <h1>Recent Work</h1>

            <PortfolioList>
              {portfolioData.map(({ node }) => {
                const image = portfolioImages.find(n => n.node.relativePath === `projects/${node.img}`)
                const imgSrc = image.node.childImageSharp.fluid.src
                return <PortfolioItem node={node} imgSrc={imgSrc} key={node.name} />
              })}
            </PortfolioList>
          </Portfolio>
        </PortfolioSection>
      )
    }}
  />
)

export default Work

const PortfolioSection = styled.div`
  padding-bottom: 60px;
  padding-top: 60px;
  background: #eee;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
`
const Portfolio = styled.div`
  margin: 0 auto;
  justify-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  > h1 {
    font-size: 30px;
    text-align: center;
    color: #38384f;
    padding: 20px 0;
  }
`

const PortfolioList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
