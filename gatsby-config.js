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
                modifyVars: {
                    'primary-color': '#9A40D6',
                    'layout-header-height': '50px'
                }
            },
        },
        {
            resolve: 'gatsby-plugin-antd',
            options: {
                style: true,
            },
        },
        `gatsby-plugin-sass`,
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
                `gatsby-remark-external-links`,
              ],
            },
        },
    ]
}