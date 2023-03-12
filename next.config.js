const debug = process.env.NODE_ENV !== 'production';
const repository = 'https://synagir.github.io/nodejs';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
