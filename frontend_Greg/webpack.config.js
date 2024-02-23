const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = ({ mode }) => {
  const isProduction = mode === 'production';

  return {
    mode: 'development',
    target: 'web',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      isProduction ? null : new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        { test: /\.(html)$/, use: ['html-loader'] },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: isProduction ? 'asset/resource' : 'asset',
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // добавляем расширения файлов для импорта
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@pages': path.resolve(__dirname, 'src/pages')
    }, 
      // указываем папку с исходными файлами и папку node_modules
    },
  };
};
