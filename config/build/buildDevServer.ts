import type { Configuration } from 'webpack-dev-server';

import type { BuildOptions } from './types/config';

export const buildDevServer = ({ port }: BuildOptions): Configuration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
