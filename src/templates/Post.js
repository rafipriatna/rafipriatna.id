import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Comment from "../components/Comment"

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { title, description, tags, date } = frontmatter

  const dataSeo = {
    path: pageContext.postPath,
    title: title,
    description: description,
  }

  const commentBox = React.createRef()

  useEffect(() => {
    const commentScript = document.createElement("script")
    commentScript.async = true
    commentScript.src = "https://utteranc.es/client.js"
    commentScript.setAttribute("repo", "rafipriatna/rafipriatna.id")
    commentScript.setAttribute("issue-term", "pathname")
    commentScript.setAttribute("id", "utterances")
    commentScript.setAttribute("theme", "github-dark")
    commentScript.setAttribute("crossorigin", "anonymous")
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [])

  return (
    <Layout>
      <Seo data={dataSeo} />
      <article itemScope itemType="http://schema.org/Article" className="px-2">
        <header className="mb-10 break-words">
          <h1 className="text-4xl mb-6">{title}</h1>
          <div className="text-gray-400">
            <p className="my-2">Terbit pada tanggal {date} </p>

            <p>
              {tags.map(tag => {
                return (
                  <Link
                    to={"/tags/" + tag}
                    className="font-bold pb-4 mr-2 hover:text-gray-100"
                    key={tag}
                  >
                    #{tag}
                  </Link>
                )
              })}
            </p>
          </div>
        </header>
        <div className="prose prose-dark max-w-full break-words text-lg text-justify">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
        <div className="text-center">
          <div id="comments">
            <h2 className="text-2xl mb-6">Komentar</h2>
            <Comment commentBox={commentBox} />
          </div>
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
