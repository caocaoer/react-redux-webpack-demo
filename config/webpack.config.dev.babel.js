import { merge } from 'webpack-merge';
import getBaseConfig from './webpack.config.base';

const baseConfig = getBaseConfig();

export default merge(baseConfig, {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      // Output is saved to the file system for game builder projects to use the output in the editor UI.
      writeToDisk: true,
    },

    // Game builder projects cannot use the output locally if the HMR is enabled.
    hot: false,
    proxy: {
      '/api': {
        target: 'https://www.demo.io',
        changeOrigin: true,
        secure: false,
      },
    },
    historyApiFallback: true,
  },
});
