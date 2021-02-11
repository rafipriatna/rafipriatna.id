import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { title, description, tags, date } = frontmatter

  const dataPost = {
    path: pageContext.postPath,
    title: title,
    description: description,
  }

  return (
    <Layout>
      <SEO post={dataPost} />
      <article itemScope itemType="http://schema.org/Article" className="px-2">
        <header className="text-gray-300 mb-10 break-words">
          <h1 className="text-4xl mb-6">{title}</h1>
          <p className="my-2">
            Terbit pada tanggal {date}{" "}
          </p>

          <p>
            {tags.map(tag => {
              return (
                <Link to={"/tags/" + tag} className="font-bold pb-4 mr-2" key={tag}>
                  #{tag}
                </Link>
              )
            })}
          </p>
        </header>
        <div className="prose prose-dark max-w-full break-words">
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
