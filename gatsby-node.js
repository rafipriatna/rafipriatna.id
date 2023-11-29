const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostMarkdownTemplate = path.resolve(`src/templates/blog-post-markdown.js`)

  return graphql(`
    query LoadArticlesQuery {
        allMarkdownRemark(
          sort: { frontmatter: { date: ASC } }
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

    const articlesMarkdown = result.data.allMarkdownRemark.nodes

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
      createNodeField({
        name: 'icon',
        node,
        value: node.frontmatter.icon,
      })
    }
  }
}
