import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Options } from "sass-loader";

const stylesHandler = MiniCssExtractPlugin.loader;

type TBuildLoaders = {
  mode?: "development" | "production";
  rootDir: string;
};

export const buildLoaders = ({ rootDir, mode }: TBuildLoaders): RuleSetRule[] => {
  const isDev = mode === "development";

  // Общие sassOptions для всех scss
  const sassLoaderOptions: Options = {
    sourceMap: isDev,
    sassOptions: {
      loadPaths: [
        path.resolve(rootDir, "src/app/styles/scss"),
        path.resolve(rootDir, "node_modules"),
      ],
    },
  };

  const tsLoader: RuleSetRule = {
    test: /\.(ts|tsx)$/i,
    loader: "ts-loader",
    exclude: ["/node_modules/"],
  };

  const cssLoader: RuleSetRule = {
    test: /\.css$/i,
    use: [stylesHandler, "css-loader"],
  };

  const cssModulesLoader: RuleSetRule = {
    test: /\.module\.scss$/,
    use: [
      isDev ? "style-loader" : stylesHandler,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev
              ? "[name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
          sourceMap: isDev,
        },
      },
      {
        loader: "sass-loader",
        options: sassLoaderOptions,
      },
    ],
  };

  const scssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.scss$/,
    use: [
      isDev ? "style-loader" : stylesHandler,
      {
        loader: "css-loader",
        options: {
          sourceMap: isDev,
        },
      },
      {
        loader: "sass-loader",
        options: sassLoaderOptions,
      },
    ],
  };

  const htmlLoader: RuleSetRule = {
    test: /\.html$/i,
    use: ["html-loader"],
  };

  return [tsLoader, cssLoader, cssModulesLoader, scssLoader, htmlLoader];
};
