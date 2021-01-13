import React from "react"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import FeaturedTours from '../components/Home/FeaturedTours'
import SEO from '../components/SEO'


export default function Home({data}) {
  
  return ( 
   
      <Layout >
        <SEO title='Home' />

        <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
          <Banner title="continue exploring" info='neki dodatni text opis' >
            <AniLink fade to='/tours' className='btn-white' >explore tours</AniLink>
          </Banner>
        </StyledHero>
        <About />
        <Services />
        <FeaturedTours />
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