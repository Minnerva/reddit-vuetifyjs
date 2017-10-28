process.env.NODE_ENV = '"test"'

const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./webpack.common')
const env = require('./../.env')

const publicPath = 'http://localhost:' + env.devServer.port + '/'

module.exports = merge(common, {
  output: {
    filename: '[name].js',
    publicPath: publicPath
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: 'index.html',
      env: {
        dev: true,
        base: publicPath
      }
    })
  ]
})