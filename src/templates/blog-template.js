import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/SEO'


const blogTemplate = ({data}) => {
    const {title, published, text:{raw, references}} = data.post
    
    const [urlLink] = references
    
    const options = {
        renderNode:  { 
         
            "embedded-entry-block": ()=>{
                
                
                return (
                    <div  >
                        <h3>image</h3>
                        {urlLink ? <img alt={title} width='400px' src={urlLink.file.url} /> : null }
                        
                        <p>image provided by john doe</p>
                       
                        
                        
                    </div>
                    )
            },
            /* "embedded-entry-block":() => {
                return (
                  <div>
                      <p>another post</p>
                      <h1></h1> 
                      {image.images.map((img, ind)=>{
                        return <img key={ind} src={img.file.url} />
                      }) }
            
                  </div>
                )
                    
            } */
    }
    }
    
    return (
        <Layout >
          <SEO title={title} description="Tours that will blow your mind."/>
          <section className={styles.blog} >
              <div className={styles.center} >
                  <h1> {title} </h1>
                  <h4>published at : {published}</h4>
                  <article className={styles.post} >
                      {documentToReactComponents(JSON.parse(raw), options)}
                      
                  </article>
                  <AniLink fade to='/blog' className='btn-primary' >all posts</AniLink>
              </div>
          </section>
        </Layout>
    )
}




export const query = graphql`
query getPosts($slug: String!) {
  post: contentfulPost(slug: {eq: $slug}) {
    title
    published(formatString: "D. MMMM YYYY")
    kobasica{
      kobasica
    }
    text {
      raw
      references{
         __typename
        ...on ContentfulAsset{
          contentful_id
          file {
          url
         
          
        }
        }
        ...on ContentfulTour{
        contentful_id
        name
        journey{
          day
          info
        }
        images{
          file{
            url
          }
        }
      }
      }
      
    }
  }
}
`

export default blogTemplate
