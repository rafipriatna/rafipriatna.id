import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"

import Config from "../utils/config"

export default function Home({ data }) {
  const { posts } = data.content
  return (
    <div>
      <Helmet>
        <title>Beranda {Config.title}</title>
        <body className="bg-gray-800" />
      </Helmet>
      <Header />
      <div className="container mt-9 mx-auto mb-1 px-0 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Sidebar />
          <div className="col-span-1 order-first lg:order-none lg:col-span-3">
            <div className="bg-gray-900 text-white lg:rounded overflow-hidden shadow-md">
              <div className="m-4">
                {posts.map(post => {
                  const { frontmatter, fields, id } = post
                  const { title, date } = frontmatter

                  return (
                    <Link to={fields.slug} key={id}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    content: allMarkdownRemark {
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
