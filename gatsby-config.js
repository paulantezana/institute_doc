module.exports = {
    siteMetadata: {
        title: `Title from titllll`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-less',
            options: {
                javascriptEnabled: true,
            },
        },
        {
            resolve: 'gatsby-plugin-antd',
            options: {
                style: true,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    classPrefix: "language-",
                    inlineCodeMarker: null,
                    aliases: {},
                    showLineNumbers: false,
                    noInlineHighlight: false,
                  },
                },
              ],
            },
        },
    ]
}