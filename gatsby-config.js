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
        path: `${__dirname}/content`,
      },
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
        propsToFrontmatter: false,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              withWebp: true,
              showCaptions: true,
              quality: 100,
              backgroundColor: `transparent`,
            },
          }
        ],
      },
    },
  ]
};