const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')
const env = require('./../.env')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: env.devServer.port,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: 'index.html',
      env: {
        dev: true,
        base: 'http://localhost:' + env.devServer.port + '/'
      }
    }),
  ]
})