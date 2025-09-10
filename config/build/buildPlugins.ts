import { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

export const buildPlugins = (): WebpackPluginInstance[] => {
  // console.log(__dirname);
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(
        "/Users/evgenii/Desktop/only-digital",
        "public",
        "index.html"
      ),
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    new CleanWebpackPlugin(),
  ];
};
