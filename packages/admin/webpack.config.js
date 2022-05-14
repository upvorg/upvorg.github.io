// @ts-nocheck
const path = require('path')
const baseConfig = require('../../webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { default: merge } = require('webpack-merge')

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
      title: '创作中心 - UPV'
    })
  ]
})
