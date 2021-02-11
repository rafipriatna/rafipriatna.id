import React from "react"
import Typed from "react-typed"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import FotoProfil from "../images/me.jpg"

import Config from "../utils/Config"

export default function Home({ data, pageContext }) {
    const { posts } = data.content

    const dataPost = {
        path: pageContext.postPath,
        title: "Beranda",
        description: Config.description,
    }

    const teks = [
        'Halo Dunia! <span role="img" aria-label="laptop_icon">👋</span>',
        'You found me.',
        'I\'\m so glad.',
        'Rafi Priatna Blog'
    ]

    return (
        <Layout>
            <SEO post={dataPost} />
            <h1 className="text-4xl mb-10 px-2">{"/>"} {<Typed strings={teks} typeSpeed={60} />}</h1>

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
                        className="object-cover object-center visible group-hover:hidden w-full h-full rounded-lg"
                    />
                </div>
            </div>

            <h1 className="text-4xl px-2 mb-10">
                Artikel terbaru
            </h1>

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
            fromNow: true
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
