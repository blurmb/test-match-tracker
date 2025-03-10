const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = (_, argv) => {
  const isDev = argv.mode === "development";
  return {
    entry: "./src/index",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: /\.module\.(s(a|c)ss)$/,
                  localIdentName: isDev
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64:5]",
                  namedExport: false,
                  exportLocalsConvention: "camel-case-only",
                },
                esModule: false,
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.svg$/,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        },

        {
          test: /\.(png|jpe?g|gif|woff2|woff)$/i,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src/"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: isDev ? "[name].css" : "[name].[fullhash].css",
        chunkFilename: isDev ? "[id].css" : "[id].[fullhash].css",
      }),
    ],
    devtool: isDev && "inline-source-map",
    devServer: {
      static: "./dist",
    },
  };
};
