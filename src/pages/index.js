import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import Home from '../components/home'
import Work from '../components/work'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './index.css'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        bgImage: file(relativePath: { eq: "white-building.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        front: allFile(sort: { order: ASC, fields: [id] }, filter: { relativePath: { regex: "icons/front.*.png/" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 48, height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        back: allFile(filter: { relativeDirectory: { eq: "icons/back" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 48, height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        tools: allFile(filter: { relativeDirectory: { eq: "icons/tools" } }) {
          edges {
            node {
              name
              relativePath
              childImageSharp {
                fixed(width: 48, height: 48) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Main>
        <Helmet title="Sean Parkin" />
        <Home bgImage={data.bgImage} />
        <Header />
        <About FEimages={data.front.edges} BEimages={data.back.edges} Toolimages={data.tools.edges} />
        <Work />
        <Contact />
        <Footer />
      </Main>
    )}
  />
)

export default IndexPage

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
`
