import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/Seo"

export default function NotFound() {

    const data = {
        title: "Not Found :(",
        description: "404 Not Found.",
    }

    return (
        <Layout>
            <SEO post={data} />
            <div className="px-2 text-lg">
                <h1 className="text-4xl mb-10">404 :(</h1>
                <p>Halaman yang kamu cari nggak ketemu nih...</p>
            </div>
        </Layout>
    )
}
