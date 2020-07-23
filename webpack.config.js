const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.join(srcPath, 'js', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(srcPath, 'html', 'index.html'),
      filename: './index.html',
    }),
  ],
};
