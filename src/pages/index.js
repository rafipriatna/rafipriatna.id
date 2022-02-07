import React, { useMemo } from 'react'
import { graphql } from 'gatsby'

// Layout
import Layout from '../layouts/default'

// Components
import Hero from '../components/hero'
import Posts from '../components/post'
import Seo from '../components/seo'

// Helper
import { notionPostFormat } from '../lib/notion-post-format'

const IndexPage = ({ data, pageContext }) => {
  const { allNotion } = data

  const notionPost = useMemo(
    () => notionPostFormat(allNotion.nodes),
    [allNotion.nodes]
  )

  return (
    <Layout>
      <Seo title='Beranda' />
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
}
`

export default IndexPage
