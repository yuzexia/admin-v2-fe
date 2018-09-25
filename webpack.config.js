/*
 * @Author: yuze.xia 
 * @Date: 2018-09-21 10:58:36 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2018-09-25 10:05:21
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};