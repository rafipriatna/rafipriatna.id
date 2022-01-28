require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `RafiPriatna.ID`,
    siteUrl: `https://rafipriatna.id`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
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