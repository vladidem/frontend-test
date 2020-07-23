const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
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
      template: path.resolve(srcPath, 'index.html'),
      filename: './index.html',
    }),
  ],
};
