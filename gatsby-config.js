require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'RafiPriatna.ID',
    siteDescription: 'Kebun digital Rafi.',
    siteUrl: 'https://rafipriatna.id/',
    keywords: 'Rafi Priatna K, Blog, Indonesia, GNU',
    author: '@rafipriatna',
    image: 'src/images/me.jpg'
  },
  plugins: [
    // ========================================================================
    // Meta
    // ========================================================================
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rafi Priatna K',
        short_name: 'Rafi Priatna K',
        description: 'Kebun digital Rafi.',
        start_url: '/',
        background_color: 'dark',
        theme_color: '#161e2e',
        display: 'minimal-ui',
        icon: 'src/images/me.jpg',
      },
    },

    // ========================================================================
    // Static
    // ========================================================================
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images/'
      },
      __key: 'images'
    },

    // ========================================================================
    // CSS
    // ========================================================================
    'gatsby-plugin-postcss',

    // ========================================================================
    // Image Processing
    // ========================================================================
    'gatsby-plugin-image',
    'gatsby-plugin-sharp', 'gatsby-transformer-sharp',

    // ========================================================================
    // Data Source
    // ========================================================================
    {
      resolve: 'gatsby-source-notion-api',
      options: {
        token: process.env.NOTION_SECRET,
        databaseId: process.env.DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },

    // ========================================================================
    // Search
    // ========================================================================
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
                {
                  allNotion(
                    filter: {properties: {type: {value: {name: {eq: "Article"}}}}}
                  ) {
                    edges {
                      node {
                        id
                        raw {
                          icon {
                            type
                            external {
                              url
                            }
                            emoji
                          }
                          properties {
                            Name {
                              id
                            }
                            date {
                              date {
                                start(locale: "id-ID", formatString: "DD MMMM YYYY")
                              }
                            }
                            slug {
                              rich_text
                            }
                            tags {
                              multi_select {
                                name
                              }
                            }
                            description {
                              rich_text
                            }
                          }
                        }
                        title
                      }
                    }
                  }
                }
              `,
        ref: 'id',
        index: ['title', 'tags'],
        store: ['id', 'icon', 'slug', 'title', 'tags', 'date', 'description'],
        normalizer: ({ data }) =>
          data.allNotion.edges.map(post => ({
            id: post.node.id,
            icon: post.node.raw.icon,
            title: post.node.title,
            date: post.node.raw.properties.date.date.start,
            slug: '/' + post.node.raw.properties.slug.rich_text,
            tags: post.node.raw.properties.tags.multi_select,
            description: post.node.raw.properties.description.rich_text,
          })),
      },
    },

  ]
};