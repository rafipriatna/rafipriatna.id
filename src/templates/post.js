import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { faCalendar, faTags, faEdit } from "@fortawesome/free-solid-svg-icons"
import { faCreativeCommons, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { frontmatter } = post
  const { title, description, tags, date } = frontmatter
  const lastModified = post.parent.modifiedTime

  const dataPost = {
    path: pageContext.postPath,
    title: title,
    description: description,
  }

  return (
    <Layout>
      <SEO post={dataPost} />
      <article itemScope itemType="http://schema.org/Article">
        <header className="flex flex-col justify-start">
          <h1 className="text-4xl mb-4 text-center">{title}</h1>
        </header>
        <div className="prose prose-dark max-w-full">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <footer className="border-t border-b">
            <div className="text-sm mt-4">
              <p>
                <span className="mr-2">
                  <FontAwesomeIcon icon={faEdit} size="1x" />
                </span>
                          Sunting artikel ini di{" "}
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="1x"
                    target="_blank"
                  />{" "}
                            Github
                          </Link>
              </p>

              <p>
                <span className="mr-2.5">
                  <FontAwesomeIcon icon={faCalendar} size="1x" />
                </span>
                {date}{" "}
                {date < lastModified
                  ? "(Diperbarui: " + lastModified + ")"
                  : ""}
              </p>

              <span className="mr-1.5">
                <FontAwesomeIcon icon={faTags} size="1x" />
              </span>
              {tags.map(tag => {
                return (
                  <Link to={"/tags/" + tag} className="font-bold pb-4 mr-2" key={tag}>
                    #{tag}
                  </Link>
                )
              })}

              <p>
                <span className="mr-2">
                  <FontAwesomeIcon
                    icon={faCreativeCommons}
                    size="1x"
                  />
                </span>
                <a
                  href="https://creativecommons.org/licenses/by-nc/4.0/deed.id"
                  rel="license noreferrer"
                  target="_blank"
                >
                  Atribusi-NonKomersial 4.0 Internasional (CC BY-NC
                  4.0)
                          </a>
              </p>
            </div>
          </footer>
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
      parent {
        ... on File {
          modifiedTime(formatString: "DD MMMM YYYY", locale: "id-ID")
        }
      }
    }
  }
`
