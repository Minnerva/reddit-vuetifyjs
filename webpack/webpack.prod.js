process.env.NODE_ENV = '"production"'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

const common = require('./webpack.common')
const env = require('./../.env')
const distDir = path.resolve(__dirname, './../dist')

module.exports = merge(common, {
  output: {
    filename: '[name].[hash].js',
    publicPath: env.deployUrl
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: 'index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true
      },
      env: {
        prod: true,
        base: env.deployUrl,
        key: {
          analytics: env.googleAnalytic.key
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new WorkboxPlugin({
      globDirectory: distDir,
      globPatterns: ['**/*.{html,js,css}'],
      swDest: path.join(distDir, 'sw.js')
    })
  ]
})