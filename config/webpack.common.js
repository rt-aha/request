require('dotenv').config();

const WebpackBar = require('webpackbar');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// console.log('path ?', path.resolve('./src/index.js'));

const config = {
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.resolve('libs'),
    filename: 'index.js', // js ouput到libs資料夾的位置
    chunkFilename: 'js/[name].shared.js', // js ouput到libs資料夾的位置
  },
  module: {
    rules: [
      // 在index.js中引入 .html，使hot reload生效
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: true,
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/,
        loader: 'url-loader',
        options: {
          // 用以限制須轉為 base64 的文件大小 (單位：byte)
          limit: 8192,
          // 超過大小及調用 file-loader
          fallback: require.resolve('file-loader'),
        },
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './assets/fonts/',
        },
      },
      // 將js轉為es5語法
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].css', // css ouput到libs資料夾的位置
      chunkFilename: '[id].css',
    }),
    new WebpackBar(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src/'),
    },
  },
  stats: {
    excludeModules: "mini-css-extract-plugin"
  },
};


module.exports = config;
