// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { Configuration } from 'webpack-dev-server';

import { buildLoaders } from './config/build/buildLoader';
import { buildPlugins } from './config/build/buildPlugins';

const isProduction = process.env.NODE_ENV === 'production';

const config: webpack.Configuration & Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'main.tsx'),
  cache: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    hot: true,
  },
  plugins: buildPlugins(),
  module: {
    rules: buildLoaders({
      rootDir: __dirname,
      mode: isProduction ? 'production' : 'development',
    }),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      widgets: path.resolve(__dirname, './src/widgets'),
      shared: path.resolve(__dirname, './src/shared'),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
