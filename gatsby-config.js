module.exports = {
    siteMetadata: {
        title: `Documentación`,
        author: `PaulAntezana`,
        description: `Documentación del sistema institucional.`,
        siteUrl: `https://paulantezana.com`,
        social: {
            facebook: `paul antezana`,
        },
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
                `gatsby-remark-autolink-headers`,
                {
                    resolve: `gatsby-remark-prismjs`,
                    options: {
                        classPrefix: "language-",
                        inlineCodeMarker: null,
                        aliases: {},
                        showLineNumbers: true,
                        noInlineHighlight: false,
                    },
                },
                `gatsby-remark-external-links`,
              ],
            },
        },
    ]
}