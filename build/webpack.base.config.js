const path = require('path');
const vueConfig = require('./vue-loader.config');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/client-entry.js',
    vendor: [
      'es6-promise',
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync',
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public')
    }
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
};
