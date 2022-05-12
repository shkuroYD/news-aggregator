/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const DEV_CONFIG = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    compress: true,
    hot: true,
    port: 8080,
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};

const config = merge(commonConfig, DEV_CONFIG);

module.exports = config;
