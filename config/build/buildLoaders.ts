import type { RuleSetRule } from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';
import { buildTsLoader } from './loaders/buildTsLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import type { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => [
  buildFileLoader(),
  buildSvgLoader(),
  buildBabelLoader(isDev),
  buildTsLoader(),
  buildCssLoader(isDev),
];
