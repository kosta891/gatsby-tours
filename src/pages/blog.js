import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import BlogList from '../components/Blog/BlogList'
import SEO from '../components/SEO'

const blog = ({data}) => {
    
    return (
        <Layout>
          <SEO title="Blog" description="Blogs awesome you want to read."/>
            <StyledHero img={data.blogBcg.childImageSharp.fluid } />
            <BlogList />
        </Layout>
    )
}

export const query = graphql `
  query {
    blogBcg: file(relativePath:{eq:"blogBcg.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default blog
