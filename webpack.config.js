// @flow

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              'babel-plugin-ramda',
              '@babel/plugin-transform-runtime'
            ],
            presets: ['@babel/preset-react', '@babel/preset-flow', '@babel/env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ico|docx)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: './'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
