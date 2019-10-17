import React from 'react'
import styled from 'styled-components'

const FooterSect = styled.div`
  height: 8vh;
  background-color: #ddd;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: 'Poppins', Helvetica, sans-serif;
  > p {
    text-align: center;
    color: #38384f;
    font-weight: bold;
    padding-top: 20px;
  }
`

const Footer = () => (
  <FooterSect>
    <p>© 2019 Sean Parkin</p>
  </FooterSect>
)

export default Footer
