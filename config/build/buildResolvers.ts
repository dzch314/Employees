import type { ResolveOptions } from 'webpack';

import type { BuildOptions } from './types/config';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => ({
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  preferAbsolute: true,
  modules: [paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: {
    '@/*': `${paths.src}/*`,
  },
});
