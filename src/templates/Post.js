import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

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
      <SEO data={dataSeo} />
      <article itemScope itemType="http://schema.org/Article" className="px-2">
        <header className="mb-10 break-words">
          <h1 className="text-4xl mb-6">{title}</h1>
          <div className="text-gray-400">
            <p className="my-2">
              Terbit pada tanggal {date}{" "}
            </p>

            <p>
              {tags.map(tag => {
                return (
                  <Link to={"/tags/" + tag} className="font-bold pb-4 mr-2 hover:text-white" key={tag}>
                    #{tag}
                  </Link>
                )
              })}
            </p>
          </div>
        </header>
        <div className="prose prose-dark max-w-full break-words text-lg">
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
