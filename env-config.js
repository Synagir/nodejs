const isProduction = process.env.NODE_ENV === 'production';
const repository = 'nodejs'; //  git 저장소 이름

module.exports = {
  'process.env.BACKEND_URL': isProduction ? `/${repository}/` : '',
};
