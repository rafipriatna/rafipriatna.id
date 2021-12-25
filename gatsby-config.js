/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: "RAFIPRIATNA.ID",
    siteDescription: "Kebun digital Rafi.",
    siteUrl: "https://rafipriatna.id/",
    keywords: "Rafi Priatna K, Blog, Indonesia, GNU",
    author: {
      name: "Rafi Priatna K",
      twitter: "rafipriatna",
    },
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rafi Priatna K",
        short_name: "Rafi Priatna K",
        description: "Kebun digital Rafi.",
        start_url: "/",
        background_color: "dark",
        theme_color: "#161e2e",
        display: "minimal-ui",
        icon: `static/me.jpg`,
      },
    },

    // ===================================================================================
    // Static
    // ===================================================================================
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

    // ===================================================================================
    // CSS
    // ===================================================================================
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false,
      },
    },

    // ===================================================================================
    // Markdown
    // ===================================================================================
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              withWebp: true,
              showCaptions: true,
              quality: 100,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: ">",
              noInlineHighlight: false,
              prompt: {
                user: "me",
                host: "rafipriatna",
                global: true,
              },
            },
          },
        ],
      },
    },

    // ===================================================================================
    // Search
    // ===================================================================================
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
                {
                  allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/content/posts/|/content/writeups/" } }
                  ) {
                    nodes {
                      id
                      frontmatter {
                        title
                        tags
                        slug
                        date(formatString: "DD MMMM YYYY")
                        description
                      }
                      rawMarkdownBody
                    }
                  }
                }
              `,
        ref: "id",
        index: ["title", "tags"],
        store: ["id", "slug", "title", "tags", "date", "description"],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            slug: `/${node.frontmatter.slug}`,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            tags: node.frontmatter.tags,
            date: node.frontmatter.date,
            description: node.frontmatter.description,
          })),
      },
    },
  ],
}
