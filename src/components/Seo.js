import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import config from "../utils/Config"

const SEO = ({ data }) => {
  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          author {
            name
            twitter
          }
        }
      }
    }
  `)

  const defaults = query.site.siteMetadata

  if (defaults.siteUrl === "" && typeof window !== "undefined") {
    defaults.siteUrl = window.location.origin
  }

  if (defaults.siteUrl === "") {
    console.error("Site URL not found!")
    return null
  }

  const title = data.title + config.title || defaults.siteTitle
  const description = data.description || defaults.siteDescription
  const url = new URL(data.path || "", defaults.siteUrl)
  const image = data.image ? new URL(data.image, defaults.siteUrl) : false

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={defaults.author.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <body className="transition dark:bg-gray-900" />
    </Helmet>
  )
}

export default SEO
