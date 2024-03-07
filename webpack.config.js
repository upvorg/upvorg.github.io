const webpack = require('webpack')
const { ProgressPlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { EsbuildPlugin } = require('esbuild-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { getStyleLoaders } = require('./webpack.util')
const { isEnvDevelopment, isEnvProduction, LOCAL_API_HOST, __ENV__ } = require('./config')

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

module.exports = {
  target: ['browserslist'],
  stats: 'errors-warnings',
  mode: isEnvProduction ? 'production' : 'development',
  devtool: isEnvDevelopment ? 'cheap-module-source-map' : false,
  output: {
    pathinfo: isEnvDevelopment,
    filename: (pathData, assetInfo) => {
      if (pathData.chunk.name == 'sw') return 'sw.js'
      if (isEnvProduction) return 'static/js/[name].[contenthash:8].js'
      return 'static/js/bundle_[name].js'
    },
    chunkFilename: isEnvProduction ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    publicPath: '/'
  },
  infrastructureLogging: { level: 'none' },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new EsbuildPlugin({ target: 'es2015' }),
      new TerserPlugin({
        terserOptions: {
          parse: {
            //@ts-ignore
            ecma: 8
          },
          compress: {
            ecma: 5,
            //@ts-ignore
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true
          },
          keep_classnames: false,
          keep_fnames: false,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        }
      }),
      new CssMinimizerPlugin()
    ],
    runtimeChunk: 'single',
    splitChunks: isEnvDevelopment
      ? undefined
      : {
          chunks: 'all',
          cacheGroups: {
            pnpm: {
              test: /[\\/]node_modules[\\/].pnpm[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
              name(module) {
                const packageName = module.context.match(/node_modules\/\.pnpm[\\/]+(.*?)(\/|$)/)
                return packageName && packageName[1] ? `pnpm.${packageName[1].split('@')[0]}` : false
              }
            },
            hls: {
              name: 'hls',
              chunks: 'async',
              priority: 20,
              test: (module) => {
                return /hls.+/.test(module.context)
              }
            },
            griffith: {
              name: 'video-player',
              chunks: 'async',
              priority: 20,
              test: (module) => {
                return /griffith.+/.test(module.context)
              }
            },
            oplayer: {
              name: 'oplayer',
              chunks: 'async',
              priority: 20,
              test: (module) => {
                return /@oplayer.+/.test(module.context)
              }
            },
            markdown: {
              name: 'markdown-editor',
              chunks: 'async',
              priority: 20,
              test: (module) => {
                return /unified|react-markdown-editor-lite|rehype-.+|remark-.+|.+markdown.+|micromark.+|mdast-.+/.test(
                  module.context
                )
              }
            }
          }
        }
  },
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015'
            }
          },
          {
            test: /\.tsx?$/,
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015'
            }
          },
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: isEnvDevelopment,
              modules: {
                mode: 'icss'
              }
            }),
            sideEffects: true
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 3,
                sourceMap: isEnvDevelopment,
                modules: {
                  mode: 'icss'
                }
              },
              'sass-loader'
            ),
            sideEffects: true
          },
          {
            test: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 3,
                sourceMap: isEnvDevelopment,
                modules: {
                  mode: 'local'
                  // getLocalIdent: getCSSModuleLocalIdent
                }
              },
              'sass-loader'
            )
          },
          {
            test: /\.svg$/i,
            type: 'asset',
            resourceQuery: /url/ // *.svg?url
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: require.resolve('@svgr/webpack'),
                options: {
                  prettier: false,
                  svgo: false,
                  svgoConfig: {
                    plugins: [{ removeViewBox: false }]
                  },
                  titleProp: true,
                  ref: true
                }
              },
              {
                loader: require.resolve('file-loader'),
                options: {
                  name: 'static/media/[name].[hash].[ext]'
                }
              }
            ],
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/]
            }
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.m3u8$/],
            type: 'asset',
            parser: {
              dataUrlCondition: { maxSize: 10 * 1024 }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      cleanOnceBeforeBuildPatterns: ['../../dist'],
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '../../public/',
          globOptions: {
            ignore: ['**/*.html']
          }
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
    }),
    new ProgressPlugin(),
    new webpack.DefinePlugin(__ENV__),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    isEnvProduction &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      })
  ].filter(Boolean),
  devServer: {
    hot: true,
    open: true,
    compress: true,
    host: 'localhost',
    static: '../../public',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    },
    proxy: {
      '/api': {
        target: LOCAL_API_HOST,
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true
      }
    }
  }
}
