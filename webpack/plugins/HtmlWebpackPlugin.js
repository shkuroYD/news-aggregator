/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  title: 'React app',
  template: path.resolve(__dirname, '../../public/index.html'),
  filename: 'index.html',
  inject: true,
});
