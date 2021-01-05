import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

const RegularHeader = () => {
    const getSiteData = graphql `
     {
            site {
                siteMetadata{
                title
                description
                author
                data{
                    name
                }
                }
            }
        }`

    return (
        <StaticQuery query={getSiteData} render={(data)=>{
            console.log(data)
            return <h1>kurzaadsasfdadsf</h1>
        }} />
            
        
    )
}

export default RegularHeader
