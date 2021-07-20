import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Tentang({ pageContext }) {
  const dataSeo = {
    path: pageContext.postPath,
    title: "Tentang",
    description: "Tentang Rafi Priatna K",
  }
  return (
    <Layout>
      <Seo data={dataSeo} />
      <div className="px-2 text-lg">
        <h1 className="text-4xl mb-10">Hai, saya Rafi.</h1>
        <div className="mb-4 text-justify prose prose-dark max-w-full lg:mr-48">
          <p>
            Terima kasih sudah mengunjungi portofolio web dev saya — Saya pikir
            saya mulai memahami semuanya.
          </p>
          <p className="mt-4">
            Saya banyak menonton banyak vidio tutorial di Youtube, menumpuk
            banyak tab browser, membuka editor VSCode sampai saya dapat
            menganggap diri saya layak untuk ini, mungkin saya akan sesekali
            membuat Tweet tentang ini atau membuat Instagram story.
          </p>
          <p className="mt-4">
            Saya hanyalah manusia generasi Z yang penasaran yang dengan senang
            hati mengingat hal lama dan dengan kejam merindukan hal baru.
          </p>
          <p className="mt-4">
            Yah, kita semua memang dipersilahkan untuk belajar dan menerima
            hal-hal baru.
          </p>

          <h2 className="text-2xl my-4 font-weight-700">Personal Project:</h2>
          <p>
            Alasan saya memulai pemrograman adalah karena saya ingin membuat
            sesuatu yang ingin saya buat. Biasanya sesuatu yang saya buat itu
            saya buka kodenya (open source) yang saya simpan di Github saya.
            Silakan kunjungi{" "}
            <a className="text-blue-500" href="/portofolio">
              portofolio
            </a>{" "}
            saya untuk melihat projek-projek apa saja yang sudah saya buat.
          </p>
          <h2 className="text-2xl my-4 font-weight-700">Saya Menggunakan:</h2>
          <ul>
            <li>
              <span role="img" aria-label="laptop_icon">
                💻
              </span>{" "}
              Laptop: Acer Swift 3 SF314-54G
            </li>
            <li>
              <span role="img" aria-label="globe_icon">
                🌐
              </span>{" "}
              Domain:{" "}
              <a
                href="https://www.domainesia.com/?aff=6794"
                target="_blank"
                rel="noreferrer"
              >
                Domainesia
              </a>
            </li>
            <li>
              <span role="img" aria-label="pencil_icon">
                ✏
              </span>{" "}
              Blog: Gatsby.js + Tailwind CSS
            </li>
            <li>
              <span role="img" aria-label="editor_icon">
                📝
              </span>{" "}
              Editor: Visual Studio Code
            </li>
          </ul>

          <h2 className="text-2xl my-4 font-weight-700 mt-4">
            Kontak:
          </h2>
            <ul>
              <li>Email: me@rafipriatna.id</li>
              <li>Telegram: @rafipriatna</li>
              <li>Instagram: @rafipriatna</li>
              <li>Twitter: @rafipriatna</li>
            </ul>
        </div>
      </div>
    </Layout>
  )
}
