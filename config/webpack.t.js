
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const config = {
  mode: 'production',
  entry: {
    index: path.resolve('./src/index.js'),
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve('libs'),
    filename: 'index.js', // js ouput到libs資料夾的位置
    chunkFilename: 'js/[name].shared.js', // js ouput到libs資料夾的位置
    library: '@indigoichigo/network',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      // 將js轉為es5語法
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};


module.exports = config;
