/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RetryChunkLoadPlugin = require('./plugins/RetryChunkLoadPlugin');

const commonConfig = require('./webpack.common');

const PROD_CONFIG = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      insert: '#app',
    }),
    RetryChunkLoadPlugin,
  ],
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};

const config = merge(commonConfig, PROD_CONFIG);

module.exports = config;
