const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      clean: true,
    }),
  ],
  entry: path.resolve(__dirname, '../src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name]-[contenthash].js',
    chunkFilename: '[id]_[contenthash].js',

  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  stats: 'errors-warnings',
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.join(__dirname, '../src/'),
      '@App': path.join(__dirname, '../src/app/'),
      '@Entities': path.join(__dirname, '../src/entities/'),
      '@Features': path.join(__dirname, '../src/features/'),
      '@Pages': path.join(__dirname, '../src/pages/'),
      '@Processes': path.join(__dirname, '../src/processes/'),
      '@Shared': path.join(__dirname, '../src/shared/'),
      '@Widgets': path.join(__dirname, '../src/widgets/'),
    },
  },
};
