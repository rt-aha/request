require('dotenv').config();

const envType = process.env.ENV_TYPE;

const glob = require('glob');

const getEntry = () => {
  const entry = {};
  glob.sync('./src/js/*.js').forEach((name) => {
    const start = name.indexOf('/src/js/') + 8; //前面路徑共8個位元的字串，設定的資料夾路徑不同，也要記得更改位元數喔!
    const end = name.length - 3; //減去附檔名 .js 共三個位元的字串
    const eArr = [];
    const n = name.slice(start, end); //取得每個js的名稱
    eArr.push(name); //push至陣列中
    entry[n] = eArr; //就會產生多筆入口的陣列囉！
  });
  return entry;
};

const fileList = Object.keys(getEntry());
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'cheap-eval-source-map',
  entry: getEntry(),
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].[hash:8].js', // js ouput到dist資料夾的位置
    chunkFilename: 'js/[name].shared.js', // js ouput到dist資料夾的位置
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
  
  resolve: {
    alias: {
      '@': path.resolve('src/'),
    },
  },
};

fileList.forEach((name) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: `./src/template/${name}.${envType.toLowerCase()}`,
      filename: `${name}.html`,
      chunks: ['common', 'runtime', 'vendor', 'action', `${name}`],
      minify: {
        removeComments: true,
        collapseWhitespace: true, // 壓縮 HTML
        removeAttributeQuotes: true,
      },
    }),
  );
});

module.exports = config;
