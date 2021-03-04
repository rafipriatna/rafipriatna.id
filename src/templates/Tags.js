import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Config from "../utils/Config"

const dataPost = {
  title: "Tags" + Config.title,
  description: Config.description,
}

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Terdapat ${totalCount} artikel dengan tag "${tag}"`
  return (
    <Layout>
      <SEO post={dataPost} />
      <div className="flex flex-col justify-start px-2">
        <h1 className="text-4xl mb-10">{tagHeader}</h1>
      </div>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const { title, date } = node.frontmatter
        return (
          <Link to={slug} key={node.id}>
            <div className="transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 lg:mt-4 mt-2">
              <div className="lg:flex flex-col lg:flex-row justify-between w-full lg:py-0">
                <div className="text-lg flex flex-col lg:flex-row">
                  {title}
                </div>
                <div className="text-md flex flex-col lg:flex-row lg:block hidden">
                  <span>{date}</span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "id-ID")
          }
          id
        }
      }
    }
  }
`
