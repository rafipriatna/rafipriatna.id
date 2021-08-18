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
      <div className="px-2 mb-10">
        <h1 className="text-4xl mb-2">Portofolio</h1>
        <h2 className="text-2xl dark:text-gray-400">
          Projek-projek yang pernah saya kerjakan baik projek pribadi ataupun
          tim. Projek sumber terbuka saya lainnya dapat dilihat di{" "}
          <a
            href="https://github.com/rafipriatna"
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </h2>
      </div>
      <Project projects={projects} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectsQuery {
    content: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
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
