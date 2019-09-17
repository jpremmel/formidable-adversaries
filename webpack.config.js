const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
entry: './src/main.js',
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
},
devtool: 'eval-source-map',
devServer: {
  contentBase: './dist'
},
plugins: [
  new Dotenv(),
  new UglifyJsPlugin({ sourceMap: true }),
  new CleanWebpackPlugin(['dist']),
  new CopyWebpackPlugin([
    {from: './src/index.html', to: './src/arena.html'},
    {from:'src/img',to:'img'}
  ]),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/index.html',
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/desert.html',
    filename: "desert.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/ocean.html',
    filename: "ocean.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/jungle.html',
    filename: "jungle.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/beach.html',
    filename: "beach.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/sky.html',
    filename: "sky.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/arctic.html',
    filename: "arctic.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/mountain.html',
    filename: "mountain.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/swamp.html',
    filename: "swamp.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/farm.html',
    filename: "farm.html",
    chunks: ["main"],
    inject: 'body'
  }),
  new HtmlWebpackPlugin({
    title: 'My Project',
    template: './src/moon.html',
    filename: "moon.html",
    chunks: ["main"],
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
