const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { isEnvDevelopment, isEnvProduction } = require('./config')

const appSrc = path.resolve(fs.realpathSync(process.cwd()), 'src')

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    isEnvDevelopment && require.resolve('style-loader'),
    isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '../../' }
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          config: false,
          plugins: [
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009'
                },
                stage: 3
              }
            ]
          ]
        },
        sourceMap: isEnvDevelopment
      }
    }
  ].filter(Boolean)
  if (preProcessor) {
    loaders.push(
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: isEnvDevelopment,
          root: appSrc
        }
      },
      {
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: true
        }
      }
    )
  }
  return loaders
}

const getHTMLPluginDefaultConfig = () =>
  Object.assign(
    {},
    {
      inject: true
    },
    isEnvProduction
      ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        }
      : undefined
  )

module.exports = {
  appSrc,
  getStyleLoaders,
  getHTMLPluginDefaultConfig
}
