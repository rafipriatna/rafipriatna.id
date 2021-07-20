const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/Post.js`)
  const tagTemplate = path.resolve(`./src/templates/Tags.js`)
  const projectTemplate = path.resolve(`./src/templates/Project.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
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
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        projects: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { fileAbsolutePath: { regex: "/content/portofolio/" } }
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
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
        },
      })
    })
  }

  const tags = result.data.tagsGroup.group

  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag.fieldValue}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  }

  const projects = result.data.projects.nodes

  if (projects.length > 0) {
    projects.forEach(project => {
      createPage({
        path: `/portofolio/${project.fields.slug}`,
        component: projectTemplate,
        context: {
          id: project.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    if (typeof node.frontmatter.slug !== "undefined") {
      createNodeField({
        name: "slug",
        node,
        value: node.frontmatter.slug,
      })
    } else {
      const value = createFilePath({ node, getNode })

      createNodeField({
        name: "slug",
        node,
        value,
      })
    }
  }
}
