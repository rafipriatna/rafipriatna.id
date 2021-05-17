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
    <div class="flex flex-wrap overflow-hidden lg:-mx-2">
      {group.map(tag => (
        <div class="w-full overflow-hidden lg:my-2 lg:px-2 lg:w-1/4 xl:w-1/4">
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
            <button class="h-10 px-5 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
              <span class="mr-2">{tag.fieldValue}</span>
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded-full">({tag.totalCount})</span>
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