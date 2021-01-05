import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './layout.css'

const Layout = ({children}) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
