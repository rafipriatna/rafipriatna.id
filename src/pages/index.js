import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Hero from '../components/hero'
import Posts from '../components/post'

// Helper
import { notionPostFormat } from '../lib/notion-post-format'

const IndexPage = ({ data, pageContext }) => {
  const { allNotion } = data

  const notionPost = useMemo(
    () => notionPostFormat(allNotion.edges),
    [allNotion.edges]
  )

  return (
    <Layout>
      <Hero />

      <h1 className="text-3xl my-10 pt-10 font-semibold">Artikel terbaru</h1>
      <div className="mb-6">
        <Posts data={notionPost} />
      </div>
    </Layout>
  )
}

export const indexQuery = graphql`
query IndexQuery {
  allNotion(
    filter: {properties: {type: {value: {name: {eq: "Article"}}}}}
    limit: 5
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

export default IndexPage
