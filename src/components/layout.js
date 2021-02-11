import React from 'react'
import Header from "./header"
import Footer from "./footer"

export default function layout({ children }) {

    return (
        <div>
            <Header />
            <div className="container mt-8 mx-auto mb-8 px-4 lg:px-0 lg:max-w-4xl text-white">
                {children}
                <Footer />
            </div>
        </div>
    )
}
