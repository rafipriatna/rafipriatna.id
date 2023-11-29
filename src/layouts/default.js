import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function defaultLayout({ children }) {
    return (
        <main className='container mx-auto px-4 lg:px-0 lg:max-w-3xl dark:text-white'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}