import path from 'path';
import WebpackBarPlugin from 'webpackbar';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';

export default function () {
  return {
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          include: [path.resolve(__dirname, '../src'), /node_modules\/utilibs/],
          loader: 'babel-loader',
        },
        {
          test: /\.(png|svg|jpeg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader?name=[name].[ext]'],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          include: path.resolve(__dirname, '../src'),
          use: ['postcss-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        symlinks: false,
      },
    },
    plugins: [
      new WebpackBarPlugin(),
      // remove/clean your build folder(s)
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
    ],
  };
}
