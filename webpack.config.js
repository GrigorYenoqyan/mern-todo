const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const Dotenv = require("dotenv");
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_, args) => {
  const isProd = args.mode === "production";
  const devMode = args ? !isProd : true;

  Dotenv.config({
    path: isProd ? "./.env.production" : "./.env",
  });

  return {
    entry: "./src/index",
    output: {
      // publicPath: "auto",
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      // filename: devMode ? '[name].[fullhash].js' : '[name].[contenthash].js',
    },
    resolve: {
      // alias: { process: 'process/browser' },
      extensions: [".tsx", ".ts", ".js", ".jsx"],
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
    },
    devServer: {
      // contentBase: [
      //   path.join(__dirname, 'public'),
      //   path.join(__dirname, 'dist'),
      // ],
      port: 3000,
      // watchContentBase: true,
      // proxy,
      // historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
        {
          test: /.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        env: {
          MONITORING_URL: "process.env.MONITORING_URL",
        },
      }),
      
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),

    ],

    devtool: devMode ? "inline-source-map" : "source-map",
    // devtool: "inline-source-map",
  };
};
