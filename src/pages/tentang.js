import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import archievements from '../data/achievements'

export default function tentang({ pageContext }) {
    const dataSeo = {
        path: pageContext.postPath,
        title: "Tentang",
        description: "Tentang Rafi Priatna K Blog",
    }
    return (
        <Layout>
            <SEO data={dataSeo} />
            <div className="px-2 text-lg">
                <h1 className="text-4xl mb-10">Tentang</h1>
                <p className="mb-4">
                    Halo semua, nama saya Rafi Priatna K, biasa dipanggil Rafi. Saya membuat blog ini untuk mendokumentasikan hasil pembelajaran saya dan juga sebagai media untuk mencurahkan hal-hal random saya. Selamat menikmati konten yang saya sajikan :)
                </p>

                <h2 className="text-2xl mb-4 font-weight-700">Saya Menggunakan:</h2>
                <ul className="ml-10">
                    <li><span role="img" aria-label="laptop_icon">💻</span> Laptop: Acer Swift 3 SF314-54G</li>
                    <li><span role="img" aria-label="globe_icon">🌐</span> Domain: <a href="https://www.domainesia.com/?aff=6794" target="_blank" rel="noreferrer" >Domainesia</a></li>
                    <li><span role="img" aria-label="pencil_icon">✏</span> Blog: Gatsby.js + Tailwind CSS</li>
                    <li><span role="img" aria-label="editor_icon">📝</span> Editor: Visual Studio Code</li>
                </ul>

                <h2 className="text-2xl mb-4 font-weight-700 mt-4">Mungkin kamu butuh ini:</h2>
                <ul className="ml-10">
                    <li>Email: me@rafipriatna.id</li>
                    <li>Telegram: @rafipriatna</li>
                    <li>Instagram: @rafipriatna</li>
                    <li>Twitter: @rafipriatna</li>
                </ul>

                <h2 className="text-2xl mb-4 font-weight-700 mt-4">Achievement:</h2>
                <ul className="ml-10 list-disc">
                    {archievements.map(node => {
                        return (
                            <li>{node.tahun}. {node.judul}. ({node.tim})</li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}
