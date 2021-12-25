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
      <h1 className="text-4xl mb-10">Blog</h1>
      <Search posts={simplifiedPosts} {...props} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    content: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/posts/|/content/writeups/" } }
    ) {
      posts: nodes {
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
  }
`
