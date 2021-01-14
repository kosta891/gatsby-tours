import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Tours from '../components/Tours/Tours'
import SEO from '../components/SEO'

const tours = ({data}) => {

    
    return (
        <Layout>
            <SEO title="Tours" description="Tours that will blow your mind."/>
    
            <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
            <Tours />
        </Layout>
    )
}

export const query = graphql `
  query {
    defaultBcg: file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp{
        fluid(quality:90 maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
