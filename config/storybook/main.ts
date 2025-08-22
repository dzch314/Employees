// @ts-nocheck
import path from 'path';
import { DefinePlugin, type RuleSetRule } from 'webpack';
import type { StorybookConfig } from '@storybook/react-webpack5';

import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-webpack5-compiler-swc'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@/*': path.resolve(__dirname, '..', '..', 'src/*'),
      };
    }

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
    config.plugins.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
      }),
    );

    return config;
  },
};
export default config;
