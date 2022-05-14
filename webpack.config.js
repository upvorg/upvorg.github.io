const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ProgressPlugin } = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyPlugin = require('copy-webpack-plugin')
const {
  isEnvProduction,
  LOCAL_API_HOST,
  API_HOST,
  STORAGE_HOST,
  ADMIN_HOST,
  HOST
} = require('./config')

module.exports = {
  mode: isEnvProduction ? 'production' : 'development',
  target: ['browserslist'],
  devtool: !isEnvProduction ? 'cheap-module-source-map' : false,
  infrastructureLogging: {
    level: isEnvProduction ? 'error' : 'verbose'
  },
  output: {
    pathinfo: !isEnvProduction,
    filename: isEnvProduction
      ? 'static/js/[name].[contenthash:8].js'
      : 'static/js/bundle_[name].js',
    chunkFilename: isEnvProduction
      ? 'static/js/[name].[contenthash:8].chunk.js'
      : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
  },
  module: {
    rules: [
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
        test: /\.css$/,
        use: [
          isEnvProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../../' }
              }
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isEnvProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../../' }
              }
            : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/i],
        type: 'asset',
        parser: {
          dataUrlCondition: { maxSize: 10 * 1024 }
        }
      }
    ]
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015'
        // css: true
      }),
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
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        pnpm: {
          test: /[\\/]node_modules[\\/].pnpm[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name(module) {
            console.log(`Processing pnpm module: ${module.context}`)
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
        markdown: {
          name: 'markdown-editor',
          chunks: 'async',
          priority: 20,
          test: (module) => {
            return /unified|react-markdown-editor-lite|rehype-.+|remark-.+/.test(module.context)
          }
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin({
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
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(!isEnvProduction),
      __HOST__: JSON.stringify(HOST),
      __API_HOST__: JSON.stringify(API_HOST),
      __STORAGE_HOST__: JSON.stringify(STORAGE_HOST),
      __ADMIN_HOST__: JSON.stringify(ADMIN_HOST)
    }),
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
    static: '../../public',
    open: true,
    host: '127.0.0.1',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
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
