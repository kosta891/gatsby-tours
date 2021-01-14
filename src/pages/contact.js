import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Contact from '../components/Contact/Contact'
import SEO from '../components/SEO'

const contact = ({data}) => {
    return (
        <Layout>
          <SEO title="Contact" description="Contact us to share your opinion."/>

          <StyledHero img={data.conntactBcg.childImageSharp.fluid} />
          <Contact />
        </Layout>
    )
}

export const query = graphql `
  query {
    conntactBcg: file(relativePath:{eq:"connectBcg.jpeg"}){
      childImageSharp{
        fluid(quality:90 maxWidth:4160){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
