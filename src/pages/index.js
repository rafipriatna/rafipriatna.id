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
    <Layout circle>
      <Seo data={dataSeo} />

      <div className="grid items-center grid-cols-1 text-center place-items-center md:text-left md:grid-cols-6 my-10">
        <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
          Halo, saya{' '}
          <span className="animate-pulse text-royal">Rafi</span>.
          Seorang mahasiswa S1 Sistem Informasi yang biasa saja.
        </h1>
        <div className="order-1 md:order-2">
          <img
            src={FotoProfil}
            alt="8bit me wkwkw"
            className="object-cover object-center w-full h-40 w-40 rounded-full"
          />
        </div>
      </div>

      <h1 className="text-4xl my-10">Artikel terbaru</h1>

      <div className="mb-6">
        <Posts data={simplifiedPosts} />
      </div>

      <div className="text-right">
        <Link to="/blog">
          <span className="transition duration-200 ease-in-out hover:text-royal px-4 lg:py-2 block font-medium m-1">
            Lihat artikel lainnya
          </span>
        </Link>
      </div>

      <h1 className="text-4xl my-10">CTF Writeups</h1>

      <div className="mb-6">
        <Posts data={simplifiedWriteups} />
      </div>

      <div className="text-right">
        <Link to="/tags/writeup">
          <span className="transition duration-200 ease-in-out hover:text-royal px-4 lg:py-2 block font-medium m-1">
            Lihat writeup lainnya
          </span>
        </Link>
      </div>

      <h1 className="text-4xl px-2 my-10">Portofolio</h1>
      <Project projects={projects.nodes} />
      <div className="text-right my-6">
        <Link to="/portofolio">
          <span className="transition duration-200 ease-in-out hover:text-royal px-4 lg:py-2 block font-medium m-1">
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
          description
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
          description
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
