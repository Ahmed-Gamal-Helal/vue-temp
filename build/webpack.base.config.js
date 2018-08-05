const path = require('path')

const config = {
  entry : {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      { // Linting check
        enforce: 'pre',
        test: /(\.js$)|(\.vue$)/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options : {
          fix : true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: 'css-loader',
          'scss' : 'css-loader | sass-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
        // exclude: 'node-modules'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
}

module.exports = config
