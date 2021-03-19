require('dotenv').config();

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {importantLog} = require('./utils');

console.log(`${importantLog('ℹ')}: Project is running at ${importantLog(`http://localhost:${process.env.ENV_DEV_PORT}/`)}`);

const devConfig = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'), // Prefer `dart-sass`
              sassOptions: {
                fiber: require('fibers'), // 使用fibers套件，可以在同步的文件中執行非同步的編譯，同步的編譯效能是非同步的兩倍
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/index.html',
      filename: 'index.html',
      chunks: ['common', 'runtime', 'vendor', 'action', 'index'],
      minify: {
        removeComments: true,
        collapseWhitespace: true, // 壓縮 HTML
        removeAttributeQuotes: true,
      },
    }),
  ],
  devServer: {
    contentBase: path.resolve('libs'), //本地服务器所加载的页面所在的目录
    port: process.env.ENV_DEV_PORT, // port
    hot: true, // 熱重載，僅更新不一樣的部分
    open: false, // 是否自動開啟網頁
  },
};

module.exports = merge(common, devConfig);
