module.exports = {
  siteMetadata: {
    title: 'RafiPriatna.ID',
    siteDescription: 'Kebun digital Rafi.',
    siteUrl: 'https://rafipriatna.id/',
    keywords: 'Rafi Priatna K, Blog, Indonesia, GNU',
    author: '@rafipriatna',
    image: 'src/images/me_transparent_big.png'
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
        icon: 'src/images/me_transparent_big.png',
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
              icon: `<svg aria-hidden="true" height="24" version="1.1" viewBox="0 0 24 24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path fill-rule="evenodd" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path></svg>`,
              className: `anchor`,
              maintainCase: true,
              removeAccents: true,
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