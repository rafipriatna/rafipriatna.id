import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function defaultLayout({ children }) {
    return (
        <main className='container mx-auto dark:text-white font-inter'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}