const Dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, args) => {
  const isProd = args.mode === 'production';
  const devMode = args ? !isProd : true;

  Dotenv.config({
    path: isProd ? './.env.production' : './.env',
  });

  return {
    entry: './src/index',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
    devServer: {
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
        {
          test: /.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        env: {
          MONITORING_URL: 'process.env.MONITORING_URL',
        },
      }),

      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],

    devtool: devMode ? 'inline-source-map' : 'source-map',
  };
};
