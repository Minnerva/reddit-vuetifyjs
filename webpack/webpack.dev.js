process.env.NODE_ENV = '"development"'

const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')

const common = require('./webpack.common')
const env = require('./../.env')

const distDir = path.resolve(__dirname, './../dist')
const publicPath = 'http://localhost:' + env.devServer.port + '/'

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: env.devServer.port,
    hot: true,
    contentBase: distDir,
    publicPath: '/',
    historyApiFallback: true
  },
  output: {
    filename: '[name].js',
    publicPath: publicPath
  },
  plugins: [
    new ExtractTextPlugin('style.css'),    
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: 'index.html',
      excludeAssets: [/style.css/],
      env: {
        dev: true,
        base: publicPath
      }
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new StyleExtHtmlWebpackPlugin({
      position: 'body-bottom'
    })
  ]
})