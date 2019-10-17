import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { node } from 'prop-types'
import mountains from '../images/white-building.jpg'

const Home = ({ bgImage }) => (
  <HomeSect id="home">
    <Img fluid={bgImage.childImageSharp.fluid} />
    <HomeText>
      <h2>Sean Parkin</h2>
      <p>
        Web Developer
        <br />
        Passion for Learning
      </p>
    </HomeText>
  </HomeSect>
)

export default Home

const HomeSect = styled.div`
  height: 100%;
  position: relative;
`

const HomeText = styled.div`
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  // z-index: 4;
  > h2 {
    color: #383834f;
    font-size: 2em;
  }
  p {
    text-align: center;
    color: #111;
    font-size: 1em;
  }
`
