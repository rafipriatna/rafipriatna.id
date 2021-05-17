import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import FotoProfil from "../images/me.jpg"

import Config from "../utils/Config"

export default function Home({ data, pageContext }) {
    const { posts } = data.content
    const { writeups } = data.writeup

    const dataSeo = {
        path: pageContext.postPath,
        title: "Beranda",
        description: Config.description,
    }

    return (
        <Layout>
            <Seo data={dataSeo} />
            <h1 className="text-4xl mb-10 px-2">{"/>"} Hello World! <span role="img" aria-label="laptop_icon">👋</span></h1>

            <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0 mb-10 lg:mb-20 px-2">
                <div className="text-xl max-w-lg text-justify lg:mr-8">
                    <p>
                        Terima kasih sudah mengunjungi portofolio web dev saya — Saya pikir saya mulai memahami semuanya.
                        </p>
                    <p className="mt-4">
                        Menonton banyak vidio tutorial di Youtube, menumpuk banyak tab Chrome, membuka editor VSCode sampai saya dapat menganggap diri saya layak untuk ini, mungkin saya akan sesekali membuat Tweet tentang ini atau membuat Instagram story.
                        </p>
                    <p className="mt-4">
                        Saya hanyalah manusia generasi Z yang penasaran yang dengan senang hati mengingat hal lama dan dengan kejam merindukan hal baru.
                        </p>
                    <p className="mt-4">
                        So... Let's build it.
                    </p>
                </div>
                <div className="hidden lg:block">
                    <img
                        src={FotoProfil}
                        alt="8bit me wkwkw"
                        className="object-cover object-center visible group-hover:hidden w-lg h-lg rounded-lg"
                    />
                </div>
            </div>

            <h1 className="text-4xl px-2 my-10">
                CTF Writeups
            </h1>

            <div className="mb-6">
                {writeups.map(post => {
                    const { frontmatter, fields, id } = post
                    const { title, date } = frontmatter

                    return (
                        <Link to={fields.slug} key={id}>
                            <div className="transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 lg:mt-4 mt-2">
                                <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0">
                                    <div className="text-lg flex flex-col lg:flex-row">
                                        {title}
                                    </div>
                                    <div className="text-md flex flex-col lg:flex-row lg:block hidden">
                                        <span>{date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className="text-right">
                <Link to="/tags/writeup">
                    <span className="bg-gray-700 text-white rounded-md px-2 py-2 hover:bg-gray-800">
                        Lihat writeup lainnya
                </span>
                </Link>
            </div>

            <h1 className="text-4xl px-2 my-10">
                Artikel terbaru
            </h1>

            <div className="mb-6">
                {posts.map(post => {
                    const { frontmatter, fields, id } = post
                    const { title, date } = frontmatter

                    return (
                        <Link to={fields.slug} key={id}>
                            <div className="transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 lg:mt-4 mt-2">
                                <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0">
                                    <div className="text-lg flex flex-col lg:flex-row">
                                        {title}
                                    </div>
                                    <div className="text-md flex flex-col lg:flex-row lg:block hidden">
                                        <span>{date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <div className="text-right">
                <Link to="/blog">
                    <span className="bg-gray-700 text-white rounded-md px-2 py-2 hover:bg-gray-800">
                        Lihat artikel lainnya
                </span>
                </Link>
            </div>

        </Layout>
    )
}

export const indexQuery = graphql`
  query LatestPostQuery {

    content: allMarkdownRemark(
        limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: nodes {
        id
        frontmatter {
          title
          date(
            formatString: "DD MMMM YYYY"
            locale: "id-ID"
          )
        }
        fields {
          slug
        }
      }
    }

    writeup: allMarkdownRemark(
        limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {fileAbsolutePath: {regex: "/writeup/"}}
    ) {
      writeups: nodes {
        id
        frontmatter {
          title
          date(
            formatString: "DD MMMM YYYY"
            locale: "id-ID"
          )
        }
        fields {
          slug
        }
      }
    }

  }
`
