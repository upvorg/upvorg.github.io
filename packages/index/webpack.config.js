// @ts-nocheck
const path = require('path')
const baseConfig = require('../../webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { default: merge } = require('webpack-merge')
const { getHTMLPluginDefaultConfig } = require('../../webpack.util')
const { isEnvProduction } = require('../../config')

const head = isEnvProduction
  ? `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-J69HPPY47C"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-J69HPPY47C');
    </script>`
  : ''

module.exports = merge(baseConfig, {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../../dist/html')
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../../public/index.html',
      title: 'UPV - free animes no ads',
      head,
      ...getHTMLPluginDefaultConfig()
    })
  ]
})
