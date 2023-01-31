// @ts-nocheck
const path = require('path')
const baseConfig = require('../../webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { default: merge } = require('webpack-merge')
const { getHTMLPluginDefaultConfig } = require('../../webpack.util')

const isEnvProduction = baseConfig.isEnvProduction

const head = `${
  isEnvProduction
    ? `<script>
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7a313c71a898699ef66a38a6bb6da72d";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      </script>`
    : ''
}`

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
