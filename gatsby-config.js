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
        'gatsby-plugin-netlify',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Rafi Priatna K',
                short_name: 'Rafi Priatna K',
                description:
                    'Kebun digital Rafi.',
                start_url: '/',
                background_color: 'dark',
                theme_color: '#161e2e',
                display: 'minimal-ui',
                icon: `static/me.jpg`,
            },
        },

        // ===================================================================================
        // Static
        // ===================================================================================
        `gatsby-plugin-sharp`,
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
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
                printRejected: false,
                develop: false,
            },
        },
        {
            resolve: "gatsby-plugin-postcss",
            options: {
                postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
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
                        },
                    },
                    'gatsby-remark-static-images',
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: '>',
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
    ],
}