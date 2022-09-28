import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';

module.exports = {
  parser: 'postcss-scss',
  plugins: [autoprefixer, nested],
};
