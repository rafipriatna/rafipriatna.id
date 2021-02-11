import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import { faTwitter, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

config.autoAddCss = false

export default function tentang({ pageContext }) {
    const dataPost = {
        path: pageContext.postPath,
        title: "Tentang",
        description: "Tentang Rafi Priatna K Blog",
    }
    return (
        <Layout>
            <SEO post={dataPost} />
            <div className="px-2">
                <h1 className="text-4xl mb-10">Tentang</h1>
                <p>
                    Saya Rafi, seorang mahasiswa jurusan Sistem Informasi. Saya biasanya membuat projek open-source yang saya simpan di <a href="https://github.com/rafipriatna" target="_blank" rel="noreferrer" >Github</a> saya.
            </p>

                <p className="mb-4">
                    Saya membuat blog ini dengan tujuan untuk mendokumentasikan hasil pembelajaran saya. Semoga isi blog ini berguna untuk para pembaca sekalian. :D
            </p>

                <h2 className="text-2xl mb-4 font-weight-700">Saya Menggunakan</h2>
                <ul className="ml-10">
                    <li><span role="img" aria-label="laptop_icon">💻</span> Laptop: Acer Swift 3 SF314-54G</li>
                    <li><span role="img" aria-label="globe_icon">🌐</span> Domain: <a href="https://www.domainesia.com/?aff=6794" target="_blank" rel="noreferrer" >Domainesia</a></li>
                    <li><span role="img" aria-label="pencil_icon">✏</span> Blog: Gatsby.js + Tailwind CSS</li>
                    <li><span role="img" aria-label="editor_icon">📝</span> Editor: Visual Studio Code</li>
                </ul>

                <h2 className="text-2xl mb-4 font-weight-700 mt-4">Hubungi Saya</h2>
                <ul className="ml-10">
                    <li><FontAwesomeIcon icon={faEnvelope} size="1x" /> Email: me@rafipriatna.id</li>
                    <li><FontAwesomeIcon icon={faTelegram} size="1x" /> Telegram: @rafipriatna</li>
                    <li><FontAwesomeIcon icon={faInstagram} size="1x" /> Instagram: @rafipriatna</li>
                    <li><FontAwesomeIcon icon={faTwitter} size="1x" /> Twitter: @rafipriatna</li>
                </ul>
            </div>
        </Layout>
    )
}
