import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const getMetaData = graphql `
query{
  site{
    siteMetadata{
      siteTitle: title
      siteDesc: description
      author
      siteUrl
      image
      twitterUsername
     
    }
  }
}
`
const SEO = ({title, description}) => {
    const {site} = useStaticQuery(getMetaData)
    const {siteDesc, siteTitle, siteUrl, image, twitterUsername } = site.siteMetadata
    
    return (
        <Helmet htmlAttributes={{lang:'en'}} title={`${title} | ${siteTitle}`}>
            <meta name='description' content={description || siteDesc} />
            <meta name='image' content={image || null} />
        </Helmet>
    )
}

export default SEO
