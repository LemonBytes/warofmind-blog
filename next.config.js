const { i18n } = require('./next-i18next.config');
module.exports = {
  i18n,
  images: {
    domains: ['cdn.sanity.io']
  },
  optimizeFonts: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
