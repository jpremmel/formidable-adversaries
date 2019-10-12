const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const productionConfig = merge([
  {
    output: {
      publicPath: '/formidable-adversaries/'
    },
  }
]);

module.exports = {
entry: './src/main.js',
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
devtool: 'eval-source-map',
devServer: {
    contentBase: './build'
  },
plugins: [
  new UglifyJsPlugin({ sourceMap: true }),
  new CleanWebpackPlugin(['build']),
  new CopyWebpackPlugin([
    {from:'src/img',to:'img'}
  ]),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/index.html',
    inject: 'body'
  })
],
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          }
        }]

      },
      {
        test: /\.mp3$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }
    ]
  }
};
