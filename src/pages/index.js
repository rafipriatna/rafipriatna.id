import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Hero from '../components/hero'
import Posts from '../components/post'
import Seo from '../components/seo'

// Helper
import { postFormat } from '../lib/post-format'

const IndexPage = ({ data, pageContext }) => {
  const { MarkdownPosts, MarkdownWriteups } = data

  const articles = useMemo(
    () => postFormat(MarkdownPosts.nodes),
    [MarkdownPosts.nodes]
  )
  
  const writeups = useMemo(
    () => postFormat(MarkdownWriteups.nodes),
    [MarkdownWriteups.nodes]
  )

  return (
    <Layout>
      <Seo title='Beranda' />
      <Hero />

      <h1 className="text-3xl my-10 pt-10 font-semibold">Artikel terbaru</h1>
      <div className="mb-6">
        <Posts data={articles.slice(0,5)} />
      </div>
      
      <h1 className="text-3xl my-10 pt-10 font-semibold">Writeups</h1>
      <div className="mb-6">
        <Posts data={writeups.slice(0,5)} />
      </div>
    </Layout>
  )
}

export const indexQuery = graphql`
query IndexQuery {
  MarkdownPosts: allMarkdownRemark(
    limit: 5
    sort: { frontmatter: { date: DESC } }
    filter: { fileAbsolutePath: { regex: "/content/posts/" } }
  ) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "DD/MM/yyyy", locale: "id-ID")
        description
      }
      fields {
        slug
        icon
      }
    }
  }
  
  MarkdownWriteups: allMarkdownRemark(
    limit: 5
    sort: { frontmatter: { date: DESC } }
    filter: { fileAbsolutePath: { regex: "/content/writeups/" } }
  ) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "DD/MM/yyyy", locale: "id-ID")
        description
      }
      fields {
        slug
      }
    }
  }
}
`

export default IndexPage
