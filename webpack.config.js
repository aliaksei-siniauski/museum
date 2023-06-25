const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  entry: {
    main: "./js/index.js",
  },
  output: {
    filename: `./js/${filename("js")}`,
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  devtool: isProd ? false : "source-map",
  module: {
    rules: [
      //{
      //test: /\.[tj]s$/,
      //use: "ts-loader",
      //exclude: /node_modules/,
      //},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
