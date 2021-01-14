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

            <meta name ="twitter:card" content="summary_large_image" />
            <meta name ="twitter:creator" content={twitterUsername} />
            <meta name ="twitter:title" content={siteTitle} />
            <meta name ="twitter:description" content={description} />
            <meta name ="twitter:image" content={`${siteUrl}${image}`} />

        </Helmet>
    )
}

export default SEO
