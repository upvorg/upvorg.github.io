module.exports = {
  entry: './src/sw.ts',
  target: 'webworker',
  mode: 'development',
  devtool: false,
  output: {
    filename: '../../../public/sw.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
}
