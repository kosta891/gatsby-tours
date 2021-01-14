import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Banner from '../components/Banner'
import SEO from '../components/SEO'

const Page404 = () => {
    return (
        <Layout>
            <SEO title="Error" description="Page not found 404."/>
            <header className={styles.error}>
                <Banner title="oops it's a dead end">
                    <AniLink fade to='/' className='btn-white'>
                        back to home page
                    </AniLink>
                </Banner>
            </header>
           
        </Layout>
    )
}

export default Page404
