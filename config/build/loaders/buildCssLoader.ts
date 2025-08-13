import { loader } from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev = true) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: /\.module.s[ca]ss$/,
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]',
        },
      },
    },
    'sass-loader',
  ],
});
