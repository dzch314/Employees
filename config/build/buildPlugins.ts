import {
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin,
  type WebpackPluginInstance,
} from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import type { BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev, apiUrl }: BuildOptions): WebpackPluginInstance[] => ([
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __API__: JSON.stringify(apiUrl),
  }),
  isDev && new ReactRefreshWebpackPlugin(),
  isDev && new HotModuleReplacementPlugin(),
  isDev && new BundleAnalyzerPlugin({
    openAnalyzer: false,
  }),
].filter(Boolean) as WebpackPluginInstance[]);
