import React, { useMemo } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Search from "../components/Search"

import Config from "../utils/Config"
import { getSimplifiedPosts } from "../utils/Helpers"

export default function Blog({ data, ...props }) {
  const posts = data.content.posts
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])

  const dataSeo = {
    title: "Blog",
    description: Config.description,
  }

  return (
    <Layout>
      <Seo data={dataSeo} />
      <div className="px-2">
        <h1 className="text-4xl mb-10">Blog</h1>
        <p className="text-2xl my-4">
          Artikel, tutorial, apapun itu ada di sini.
        </p>
      </div>
      <Search posts={simplifiedPosts} {...props} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    content: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: nodes {
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
  }
`
