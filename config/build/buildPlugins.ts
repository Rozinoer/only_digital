import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { WebpackPluginInstance } from 'webpack';

export const buildPlugins = (dirName: string): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(dirName, 'public', 'index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    new CleanWebpackPlugin(),
  ];
};
