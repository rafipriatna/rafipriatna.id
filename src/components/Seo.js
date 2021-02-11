import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import config from "../utils/Config"

const SEO = ({ post }) => {
  const data = useStaticQuery(graphql`
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

  const defaults = data.site.siteMetadata

  if (defaults.siteUrl === "" && typeof window !== "undefined") {
    defaults.siteUrl = window.location.origin
  }

  if (defaults.siteUrl === "") {
    console.error("Site URL not found!")
    return null
  }

  const title = post.title + config.title || defaults.siteTitle
  const description = post.description || defaults.siteDescription
  const url = new URL(post.path || "", defaults.siteUrl)
  const image = post.image ? new URL(post.image, defaults.siteUrl) : false

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
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
      <body className="bg-gray-900" />
    </Helmet>
  )
}

export default SEO
