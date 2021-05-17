import React from 'react'

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function NotFound() {

    const dataSeo = {
        title: "Not Found :(",
        description: "404 Not Found.",
    }

    return (
        <Layout>
            <Seo data={dataSeo} />
            <div className="px-2 text-lg">
                <h1 className="text-4xl mb-10">404 :(</h1>
                <p>Halaman yang kamu cari nggak ketemu nih...</p>
            </div>
        </Layout>
    )
}
