/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

 module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'BackRoads', 
    description: 'Explore awesome worldwide tours and discover all',
    author:"koleri.dev",
    data:{
      name: 'kole',
      age: 32
    },
    twitterUsername: "@johndoe",
    image: './connectBcg.jpeg', 
    siteUrl: 'https://gatsby-ture.netlify.app'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
      {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://https://gatsby-ture.netlify.app',
        sitemap: 'https://https://gatsby-ture.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ]
}

