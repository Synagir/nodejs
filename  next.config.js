const isProd = process.env.NODE_ENV === 'production';
const url = 'https://synagir.github.io/nodejs/';

module.exports = {
  assetPrefix: isProd ? url : undefined,
};
