// @ts-nocheck
const path = require('path')
const baseConfig = require('../../webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { default: merge } = require('webpack-merge')

const isEnvProduction = process.env.NODE_ENV === 'production'

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
      head:
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nanum Pen Script" />' +
        '<script src="https://kit.fontawesome.com/7788e81788.js" crossorigin="anonymous"></script>'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        griffith: {
          test: (module) => {
            return /griffith.+|hls.+/.test(module.context)
          },
          name: 'griffith',
          priority: 1
        }
      }
    }
  }
})
