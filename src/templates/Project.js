import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Project({ data, pageContext }) {
  const projek = data.markdownRemark
  const { frontmatter } = projek
  const { title, description, cover, icon, date } = frontmatter

  const coverImage = cover.childImageSharp.fluid.src
  const iconImage = icon.childImageSharp.fluid.src

  const dataSeo = {
    path: pageContext.postPath,
    title: title,
    description: description,
  }

  return (
    <Layout>
      <Seo data={dataSeo} />
      <article itemScope itemType="http://schema.org/Article" className="px-2">
        <header className="mb-10 break-words">
          <div class="flex flex-wrap overflow-hidden items-center">
            <div class="w-24 overflow-hidden lg:block hidden">
              <img
                src={iconImage}
                className="rounded-full h-20 w-20"
                alt="Icon"
              />
            </div>

            <div class="w-5/6 overflow-hidden">
              <h1 className="text-4xl mb-2">{title}</h1>
              <div className="text-gray-400">{date}</div>
            </div>
          </div>
        </header>
        <img
          src={coverImage}
          className="object-cover object-top w-full h-48 my-6"
          alt="Cover"
        />

        <div className="prose prose-dark max-w-full break-words text-lg text-justify">
          <section
            dangerouslySetInnerHTML={{ __html: projek.html }}
            itemProp="articleBody"
          />
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query singleProjectQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        type
        date(formatString: "DD MMMM YYYY", locale: "id-ID")
        cover {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        icon {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
