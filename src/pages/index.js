import React, { useMemo } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Project from "../components/Project"
import Posts from "../components/Posts"
import { getSimplifiedPosts } from "../utils/Helpers"

import FotoProfil from "../images/me.jpg"

import Config from "../utils/Config"

export default function Home({ data, pageContext }) {
  const { posts, writeups, projects } = data

  const dataSeo = {
    path: pageContext.postPath,
    title: "Beranda",
    description: Config.description,
  }

  const simplifiedPosts = useMemo(
    () => getSimplifiedPosts(posts.nodes),
    [posts.nodes]
  )
  const simplifiedWriteups = useMemo(
    () => getSimplifiedPosts(writeups.nodes),
    [writeups.nodes]
  )

  return (
    <Layout>
      <Seo data={dataSeo} />

      <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0 mb-10 lg:mb-20 px-2">
        <div className="w-1/6 hidden lg:block lg:mr-10">
          <img
            src={FotoProfil}
            alt="8bit me wkwkw"
            className="object-cover object-center w-full h-40 rounded-lg"
          />
        </div>
        <div className="text-xl lg:w-5/6 text-justify">
          <h1 className="text-4xl mb-8">
            {"/>"} Hello World!{" "}
            <span role="img" aria-label="laptop_icon">
              👋
            </span>
          </h1>
          <p>
            Hai, saya Rafi. Saya membuat blog ini untuk mendokumentasikan hasil
            pembelajaran saya dan juga sebagai media untuk mencurahkan hal-hal
            random saya. Selamat menikmati konten yang saya sajikan{" "}
            <span role="img" aria-label="globe_icon">
              😁
            </span>
          </p>
        </div>
      </div>

      <h1 className="text-4xl px-2 my-10">Artikel terbaru</h1>

      <div className="mb-6">
        <Posts data={simplifiedPosts} />
      </div>

      <div className="text-right">
        <Link to="/blog">
          <span className="transition rounded-md px-2 py-2 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-800">
            Lihat artikel lainnya
          </span>
        </Link>
      </div>

      <h1 className="text-4xl px-2 my-10">CTF Writeups</h1>

      <div className="mb-6">
        <Posts data={simplifiedWriteups} />
      </div>

      <div className="text-right">
        <Link to="/tags/writeup">
          <span className="transition rounded-md px-2 py-2 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-800">
            Lihat writeup lainnya
          </span>
        </Link>
      </div>

      <h1 className="text-4xl px-2 my-10">Portofolio</h1>
      <Project projects={projects.nodes} />
      <div className="text-right my-6">
        <Link to="/portofolio">
          <span className="transition rounded-md px-2 py-2 hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-800">
            Lihat portofolio lainnya
          </span>
        </Link>
      </div>
    </Layout>
  )
}

export const indexQuery = graphql`
  query LatestPostQuery {
    posts: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY", locale: "id-ID")
        }
        fields {
          slug
        }
      }
    }

    writeups: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/writeups/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY", locale: "id-ID")
        }
        fields {
          slug
        }
      }
    }

    projects: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/portofolio/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY", locale: "id-ID")
          description
          type
          cover {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          icon {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
