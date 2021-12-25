import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Toc from "../components/Toc"

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { title, description, tags, date } = frontmatter
  const { tableOfContents } = post

  const dataSeo = {
    path: pageContext.postPath,
    title: title,
    description: description,
  }

  return (
    <Layout>
      <Seo data={dataSeo} />
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline my-5">
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <article itemScope itemType="http://schema.org/Article">
              <header className="mb-10 break-words">
                <h1 className="text-4xl mb-6">{title}</h1>
                <div className="dark:text-gray-400">
                  <p className="my-2">Terbit pada tanggal {date} </p>
                  <div className="flex flex-row lg:flex-wrap overflow-y-auto ">
                    {tags.map(tag => {
                      return (
                        <Link
                          to={"/tags/" + tag}
                          className="mr-2 px-2 py-1 my-2 bg-gray-200 hover:text-blue-600 hover:bg-blue-100 dark:bg-indigo-800 dark:text-white dark:hover:bg-indigo-900 rounded-lg"
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
          </div>
        </div>
        <dl>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <Toc data={tableOfContents} />
          </dd>
        </dl>
      </div>
    </Layout >
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
      tableOfContents
    }
  }
`
