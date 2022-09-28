import { merge } from 'webpack-merge';
import getBaseConfig from './webpack.config.base';

const baseConfig = getBaseConfig();

export default merge(baseConfig, {
  mode: 'production',
  entry: './src/index.tsx',
});
