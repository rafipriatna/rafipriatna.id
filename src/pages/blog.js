import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Search from '../components/search'
import Seo from '../components/seo'

// Helper
import { notionPostFormat } from '../lib/notion-post-format'

const BlogPage = ({ data, ...props }) => {
  const { allNotion } = data

  const notionPost = useMemo(
    () => notionPostFormat(allNotion.edges),
    [allNotion.edges]
  )

  return (
    <Layout>
      <Seo title='Blog' />

      <h1 className='my-5 text-5xl leading-tight md:leading-normal '>Blog</h1>
      <p className='my-5'>Artikel, tutorial, dan tulisan lainnya ada di sini.</p>
      <div className='mb-6'>
        <Search posts={notionPost} {...props} />
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
query BlogQuery {
    allNotion(
      filter: {properties: {type: {value: {name: {eq: "Article"}}}, status: {value: {name: {eq: "Posted"}}}}}
      sort: {fields: properties___date___value___start, order: DESC}
    ) {
      edges {
        node {
          id
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
          title
        }
      }
    }
  }
`

export default BlogPage