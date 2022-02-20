const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostNotionTemplate = path.resolve(`src/templates/blog-post-notion.js`)
  const blogPostMarkdownTemplate = path.resolve(`src/templates/blog-post-markdown.js`)
  
  return graphql(`
    query LoadArticlesQuery {
        allNotion(
          filter: {properties: {type: {value: {name: {eq: "Article"}}}, status: {value: {name: {eq: "Posted"}}}}}
          limit: 1000
          sort: {fields: properties___date___value___start, order: DESC}
        ) {
          nodes {
            id
            properties {
              slug {
                value
              }
            }
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { fileAbsolutePath: { regex: "/content/posts/|/content/writeups/" } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `).then(result => {
    if (result.errors) throw result.errors

    const articlesNotion = result.data.allNotion.nodes
    const articlesMarkdown = result.data.allMarkdownRemark.nodes

    if (articlesNotion.length > 0) {
      articlesNotion.forEach(article => {
        createPage({
          path: article.properties.slug.value,
          component: blogPostNotionTemplate,
          context: {
            id: article.id
          }
        })
      })
    }

    if (articlesMarkdown.length > 0) {
      articlesMarkdown.forEach((post, index) => {
        createPage({
          path: post.fields.slug,
          component: blogPostMarkdownTemplate,
          context: {
            id: post.id,
          },
        })
      })
    }

  })
}

exports.onCreateNode = async ({ node, actions: { createNode, createNodeField }, createNodeId, getCache }) => {
  // Markdown
  if (node.internal.type === `MarkdownRemark`) {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        name: 'slug',
        node,
        value: node.frontmatter.slug,
      })
    }
  }

  // Notion
  if (node.internal.type === 'Notion') {

    // Generate static image for every posts
    const item = node.raw.children

    for (let i = 0; i < item.length; i++) {
      if (item[i].type === 'image') {
        if (item[i].image.type === 'file') {
          const img = item[i].image.file.url
          const fileNode = await createRemoteFileNode({
            url: img,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            getCache,
          })

          if (fileNode) {
            item[i].image.remoteImage___NODE = fileNode.id
          }
        }
      }
    }

    // Generate static image for icon
    if (node.raw.icon !== null) {

      if (node.raw.icon.type === 'file') {
        const img = node.raw.icon.file.url
        const fileNode = await createRemoteFileNode({
          url: img,
          parentNodeId: node.id,
          createNode,
          createNodeId,
          getCache,
        })

        if (fileNode) {
          node.raw.icon.remoteImage___NODE = fileNode.id
        }
      }
    }
  }
}
