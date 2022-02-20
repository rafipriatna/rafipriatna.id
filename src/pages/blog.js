import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Search from '../components/search'
import Seo from '../components/seo'

// Helper
import { postFormat } from '../lib/post-format'

const BlogPage = ({ data, ...props }) => {
  const { NotionPosts, MarkdownPosts } = data

  const articles = useMemo(
    () => postFormat(MarkdownPosts.nodes, NotionPosts.nodes),
    [MarkdownPosts.nodes, NotionPosts.nodes]
  )

  return (
    <Layout>
      <Seo title='Blog' />

      <h1 className='my-5 text-5xl leading-tight md:leading-normal '>Blog</h1>
      <p className='my-5'>Artikel, tutorial, dan tulisan lainnya ada di sini.</p>
      <div className='mb-6'>
        <Search posts={articles} {...props} />
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
query BlogQuery {
    NotionPosts: allNotion(
      filter: {properties: {type: {value: {name: {eq: "Article"}}}, status: {value: {name: {eq: "Posted"}}}}}
      sort: {fields: properties___date___value___start, order: DESC}
    ) {
      nodes {
        id
        title
        raw {
          icon {
            type
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/posts/|/content/writeups/" } }
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

export default BlogPage