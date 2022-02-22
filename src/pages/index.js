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
  const { NotionPosts, MarkdownPosts, NotionWriteups, MarkdownWriteups } = data

  const articles = useMemo(
    () => postFormat(MarkdownPosts.nodes, NotionPosts.nodes),
    [MarkdownPosts.nodes, NotionPosts.nodes]
  )
  
  const writeups = useMemo(
    () => postFormat(MarkdownWriteups.nodes, NotionWriteups.nodes),
    [MarkdownWriteups.nodes, NotionWriteups.nodes]
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
  NotionPosts: allNotion(
    filter: {properties: {type: {value: {name: {eq: "Article"}}}, status: {value: {name: {eq: "Posted"}}}}}
    limit: 5
    sort: {fields: properties___date___value___start, order: DESC}
  ) {
    nodes {
      id
      title
      raw {
        icon {
          type
          remoteImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          external {
            url
          }
          emoji
        }
        properties {
          Name {
            id
          }
          date {
            date {
              start(locale: "id-ID", formatString: "DD MMMM YYYY")
            }
          }
          slug {
            rich_text
          }
          tags {
            multi_select {
              name
            }
          }
          description {
            rich_text
          }
        }
      }
    }
  }

  MarkdownPosts: allMarkdownRemark(
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

  NotionWriteups: allNotion(
    filter: {properties: {type: {value: {name: {eq: "Writeup"}}}, status: {value: {name: {eq: "Posted"}}}}}
    limit: 5
    sort: {fields: properties___date___value___start, order: DESC}
  ) {
    nodes {
      id
      title
      raw {
        icon {
          type
          remoteImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          external {
            url
          }
          emoji
        }
        properties {
          Name {
            id
          }
          date {
            date {
              start(locale: "id-ID", formatString: "DD MMMM YYYY")
            }
          }
          slug {
            rich_text
          }
          tags {
            multi_select {
              name
            }
          }
          description {
            rich_text
          }
        }
      }
    }
  }
  
  MarkdownWriteups: allMarkdownRemark(
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
}
`

export default IndexPage
