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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-sitemap`,

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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              showCaptions: true,
              quality: 100,
              backgroundColor: `transparent`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              footnoteBackRefInnerText: "^",
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              footnoteBackRefInnerTextStartPosition: "front",
              useFootnoteMarkerText: false,
              useCustomDivider: "<hr/><strong>Referensi:</strong>"
            }
          }
        ],
      },
    },
  ]
};