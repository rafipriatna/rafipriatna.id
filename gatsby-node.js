const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostMarkdownTemplate = path.resolve(`src/templates/blog-post-markdown.js`)
  const cheatSheetsMarkdownTemplate = path.resolve(`src/templates/cheatsheet-markdown.js`)

  const contents = await graphql(`
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
  `).then(res => res.data)

  const articlesMarkdown = contents.allMarkdownRemark.nodes

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

  const cheatsheets = await graphql(`
    query LoadCheatSheetsQuery {
      allMarkdownRemark(
        sort: { frontmatter: { title: DESC } }
        filter: { fileAbsolutePath: { regex: "/content/cheatsheets/" } }
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
  `).then(res => res.data)

  const cheatsheetsMarkdown = cheatsheets.allMarkdownRemark.nodes

  if (cheatsheetsMarkdown.length > 0) {
    cheatsheetsMarkdown.forEach((post, index) => {
      createPage({
        path: "cheatsheets/" + post.fields.slug,
        component: cheatSheetsMarkdownTemplate,
        context: {
          id: post.id,
        },
      })
    })
  }
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
