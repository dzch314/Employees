// @ts-nocheck
import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: Configuration}) => {
  config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader());
  config.module.rules.push(buildCssLoader());
  config.plugins.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }));

  return config;
};
