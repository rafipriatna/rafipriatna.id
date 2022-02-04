require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `RafiPriatna.ID`,
    siteUrl: `https://rafipriatna.id`
  },
  plugins: [
    // ========================================================================
    // Meta
    // ========================================================================
    "gatsby-plugin-react-helmet",

    // ========================================================================
    // Static
    // ========================================================================
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },

    // ========================================================================
    // CSS
    // ========================================================================
    "gatsby-plugin-postcss",

    // ========================================================================
    // Image Processing
    // ========================================================================
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", "gatsby-transformer-sharp",

    // ========================================================================
    // Data Source
    // ========================================================================
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_SECRET,
        databaseId: process.env.DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },]
};