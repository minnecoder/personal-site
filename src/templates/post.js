import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import media from '../components/media'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
`

const BlogPost = styled.div`
  flex: 1;
  width: 80%;
  margin: 0 auto;
  padding: 12vh 8vh;
  font-family: 'Poppins', sans-serif;
  color: #38384f;
  > h3 {
    padding: 10px 0;
    font-style: italic;
  }
  ${media.plusphone`
  width: 100%;
  
  `}
`

const BlogPostContent = styled.div``

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <PostContainer>
      <Header />
      <Helmet title={`Sean Parkin - ${post.frontmatter.title}`} />
      <BlogPost>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>

        <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPost>
      <Footer />
    </PostContainer>
  )
}

Template.propTypes = {
  data: PropTypes.object,
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
