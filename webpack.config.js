const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { argv } = require('process');

module.exports = (env, argv) => {
  console.log("env", env, argv, path.resolve(__dirname, 'src', 'environments', argv.mode))

  return {
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .ts and .tsx to the extensions
      alias: {
        environment: path.resolve(__dirname, 'src', 'environments', argv.mode),
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Handle .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.(ts|tsx)$/, // Handle .ts and .tsx files
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.scss$/, // Handle .scss files
          use: [
            'style-loader', // Injects styles into DOM
            'css-loader',   // Translates CSS into CommonJS
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  // Add this to suppress warnings
                  quietDeps: true,
                },
              },
            }   // Compiles Sass to CSS
          ]
        },
        {
          test: /\.css$/, // Handle .css files
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: { '@primary-color': '#1DA57A' },
                  javascriptEnabled: true
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        publicPath: '/',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new webpack.DefinePlugin({
        'PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL || '')
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
      historyApiFallback: true,
    }
  }
};
