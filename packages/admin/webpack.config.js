// @ts-nocheck
const path = require('path')
const baseConfig = require('../../webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { default: merge } = require('webpack-merge')
const { getHTMLPluginDefaultConfig } = require('../../webpack.util')

module.exports = merge(baseConfig, {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../../dist/admin')
  },
  devServer: {
    port: 8888
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../../public/index.html',
      title: '创作中心 - UPV',
      head: '<link crossorigin="anonymous" integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5" href="https://lib.baomitu.com/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">',
      ...getHTMLPluginDefaultConfig()
    })
  ]
})
