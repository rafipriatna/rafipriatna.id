import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { title, description, tags, date } = frontmatter

  const dataSeo = {
    path: pageContext.postPath,
    title: title,
    description: description,
  }

  return (
    <Layout>
      <Seo data={dataSeo} />
      <article itemScope itemType="http://schema.org/Article">
        <header className="mb-10 break-words">
          <h1 className="text-4xl mb-6">{title}</h1>
          <div className="dark:text-gray-400">
            <p className="my-2 pb-4">Terbit pada tanggal {date} </p>

            <div className="flex flex-row lg:flex-wrap overflow-y-auto ">
              {tags.map(tag => {
                return (
                  <Link
                    to={"/tags/" + tag}
                    className="mr-2 px-2 py-1 border-2 my-2
                    border-gray-400 bg-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-100
                    dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-blue-600 dark:hover:text-blue-300 dark:hover:bg-blue-900"
                    key={tag}
                  >
                    {tag}
                  </Link>
                )
              })}
            </div>
          </div>
        </header>
        <div className="prose dark:prose-dark max-w-full break-words text-lg text-justify">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query singlePostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "id-ID")
        description
        tags
      }
    }
  }
`
