const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, getCache, createNodeId }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

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
            raw {
              children {
                image {
                  file {
                    url
                  }
                  type
                }
              }
            }
          }
        }
      }
    `).then(result => {
    if (result.errors) throw result.errors

    const articles = result.data.allNotion.nodes

    if (articles.length > 0) {
      articles.forEach(article => {
        createPage({
          path: article.properties.slug.value,
          component: blogPostTemplate,
          context: {
            id: article.id
          }
        })
      })
    }
  })
}

exports.onCreateNode = async ({ node, actions: { createNode, createNodeField }, createNodeId, getCache }) => {
  if (node.internal.type === 'Notion' && node.properties.status.value.name === 'Posted') {
    const item = node.raw.children

    for (let i = 0; i < item.length; i++) {
      if (item[i].type === 'image') {
        let img

        if (item[i].image.type === 'file') {
          img = item[i].image.file.url
        } else if (item[i].image.type === 'external') {
          img = item[i].image.external.url
        }

        if (img) {
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
  }
}
