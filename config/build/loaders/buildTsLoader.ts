export const buildTsLoader = () => ({
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
});
