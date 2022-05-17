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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              },
            },
          },
          'postcss-loader'],
      },
    ],
  },
};

const config = merge(commonConfig, PROD_CONFIG);

module.exports = config;
