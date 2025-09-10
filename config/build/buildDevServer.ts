export const buildDevServer = (isDev: boolean) => {
  if (!isDev) {
    return {};
  }

  return {
    open: true,
    host: 'localhost',
    port: 8080,
    hot: true,
  };
};
