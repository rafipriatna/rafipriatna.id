import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Project from "../components/Project"

import Config from "../utils/Config"

export default function Portofolio({ data, ...props }) {
  const projects = data.content.projects

  const dataSeo = {
    title: "Portofolio",
    description: Config.description,
  }

  return (
    <Layout>
      <Seo data={dataSeo} />
      <div className="px-2">
        <h1 className="text-4xl mb-10">Portofolio</h1>
      </div>
      <Project projects={projects} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectsQuery {
    content: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { fileAbsolutePath: { regex: "/content/portofolio/" } }
    ) {
      projects: nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY", locale: "id-ID")
          description
          type
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
        fields {
          slug
        }
      }
    }
  }
`
