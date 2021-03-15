const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const prodConfig = {
  mode: 'development',
  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(common, prodConfig);
