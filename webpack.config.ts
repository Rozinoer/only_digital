// Generated using webpack-cli https://github.com/webpack/webpack-cli
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { Configuration } from 'webpack-dev-server';

import { buildDevServer } from './config/build/buildDevServer';
import { buildLoaders } from './config/build/buildLoader';
import { buildPlugins } from './config/build/buildPlugins';

const isProduction = process.env.NODE_ENV === 'production';

const buildConfig = (
  mode: webpack.WebpackOptionsNormalized['mode'],
): webpack.Configuration & Configuration => {
  const isDev = mode === 'development';

  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    cache: false,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devServer: buildDevServer(isDev),
    plugins: buildPlugins(__dirname),
    module: {
      rules: buildLoaders({
        rootDir: __dirname,
        isDev,
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
};

export default (
  env: Record<string, unknown>,
  args: webpack.WebpackOptionsNormalized,
): Configuration => {
  console.log('props', env, args);

  return buildConfig(args.mode);
};
