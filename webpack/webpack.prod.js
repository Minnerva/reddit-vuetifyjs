process.env.NODE_ENV = '"production"'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

const common = require('./webpack.common')
const env = require('./../.env')
const distDir = path.resolve(__dirname, './../dist')

module.exports = merge(common, {
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: env.deployUrl
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new ExtractTextPlugin('style.[contenthash].css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }), 
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: 'index.html',
      excludeAssets: [/style.*.css/],
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
    new HtmlWebpackExcludeAssetsPlugin(),
    new StyleExtHtmlWebpackPlugin({
      position: 'body-bottom'
    }),
    new CopyWebpackPlugin([
      { from: require.resolve('workbox-sw'), to: 'workbox-sw.prod.js' }
    ]),
    new WorkboxPlugin({
      globDirectory: distDir,
      globPatterns: ['**/*.{html,js,css,woff,ttf,svg,eot}'],
      swSrc: path.resolve(__dirname, './../src/sw.js'),
      swDest: path.join(distDir, 'sw.js')
    })
  ]
})