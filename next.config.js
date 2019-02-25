/* eslint-disable */
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const lessToJS = require('less-vars-to-js')
const images = require('remark-images')
const emoji = require('remark-emoji')
const fs = require('fs')
const path = require('path')

const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [images, emoji]
  }
})

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

// module.exports = withLess({
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//     modifyVars: themeVariables // make your antd custom effective
//   }
// })


module.exports = withCss(withLess(withMDX({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  webpack (config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })

    return config
  }
})));

// module.exports = withCss({
//   webpack (config) {
//     config.module.rules.push({
//       test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000,
//           publicPath: './',
//           outputPath: 'static/',
//           name: '[name].[ext]'
//         }
//       }
//     })

//     return config
//   }
// })

