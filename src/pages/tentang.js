import React from "react"
import { Link } from "gatsby"

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
        <div className="mb-4 text-justify prose dark:prose-dark max-w-full text-lg">
          <h3 className="mb-10">Hai, saya Rafi.</h3>
          <p>
            Terima kasih sudah mengunjungi portofolio web dev saya — Saya pikir
            saya mulai memahami semuanya.
          </p>
          <p className="mt-4">
            Menonton banyak vidio tutorial di Youtube, menumpuk banyak tab
            Firefox, membuka editor VSCode sampai saya dapat menganggap diri
            saya layak untuk ini, mungkin saya akan sesekali membuat Tweet atau
            Instagram story tentang ini.
          </p>
          <p className="mt-4">
            Saya hanyalah manusia generasi Z yang penasaran yang dengan senang
            hati mengingat hal lama dan dengan kejam merindukan hal baru.
          </p>
          <p className="mt-4">
            Yah, kita semua memang dipersilakan untuk belajar dan menerima
            hal-hal baru.
          </p>

          <h4 className="my-4 font-weight-700">Personal Project:</h4>
          <p>
            Alasan saya memulai pemrograman adalah karena saya ingin membuat
            sesuatu yang ingin saya buat. Biasanya sesuatu yang saya buat itu
            saya buka kodenya (open source) yang saya simpan di Github saya.
            Silakan kunjungi <Link to="/portofolio">portofolio</Link> saya untuk
            melihat projek-projek apa saja yang sudah saya buat.
          </p>
          <h4 className="my-4 font-weight-700">Saya Menggunakan:</h4>
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

          <h4 className="my-4 font-weight-700 mt-4">Kontak:</h4>
          <ul>
            <li>Email: me@rafipriatna.id</li>
            <li>Telegram: @rafipriatna</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
