import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Config from "../utils/config"

export default function Blog({ data, pageContext }) {
  const { posts } = data.content
  const dataPost = {
    path: pageContext.postPath,
    title: "Blog",
    description: Config.description,
  }
  return (
    <Layout>
      <SEO post={dataPost} />
      <div className="px-2">
        <h1 className="text-4xl mb-10">Blog</h1>
      </div>
      {posts.map(post => {
        const { frontmatter, fields, id } = post
        const { title, date } = frontmatter

        return (
          <Link to={fields.slug} key={id}>
            <div className="transition duration-200 ease-in-out hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 lg:mt-4 mt-2">
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

export const pageQuery = graphql`
  query MyQuery {
    content: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        id
        frontmatter {
          title
          date(
            fromNow: true
            locale: "id-ID"
          )
        }
        fields {
          slug
        }
      }
    }
  }
`
