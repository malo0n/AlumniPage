const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = ({ mode }) => {
  const isProduction = mode === "production";

  return {
    mode: "development",
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    target: "web",
    entry: {
      index: "./src/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].[contenthash].js" : "[name].bundle.js",
      assetModuleFilename: "assets/[hash][ext][query]",
      clean: true,
      publicPath: "/",
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction ? "[name].[contenthash].css" : "[name].css",
      }),

      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      isProduction ? null : new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        { test: /\.(html)$/, use: ["html-loader"] },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "postcss-loader",
            "resolve-url-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/img/[hash][ext][query]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@helpers": path.resolve(__dirname, "src/helpers"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@style": path.resolve(__dirname, "src/scss"),
      },
    },
  };
};
