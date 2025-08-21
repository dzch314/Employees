export const buildBabelLoader = (isDev = true) => ({
  test: /\.(js|ts|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      cacheCompression: false,
      presets: ['@babel/preset-env'],
      plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
    },
  },
});
