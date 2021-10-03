import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Config from "../utils/Config"

const dataSeo = {
  title: "Tags" + Config.title,
  description: Config.description,
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Seo data={dataSeo} />
    <div className="flex flex-col justify-start">
      <h1 className="text-4xl mb-4 text-center">Tags</h1>
    </div>
    <div className="flex flex-wrap overflow-hidden lg:-mx-2">
      {group.map(tag => (
        <div className="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/4 xl:w-1/4">
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
            <button className="mr-2 px-2 py-1 border-2 my-2 h-10 px-5
                    border-gray-400 bg-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-100
                    dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-blue-600 dark:hover:text-blue-300 dark:hover:bg-blue-900">
              <span className="mr-2">{tag.fieldValue}</span>
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-full">({tag.totalCount})</span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`