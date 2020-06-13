const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

let plugins = [];
plugins.push(new extractTextPlugin('styles.css'));

plugins.push(new webpack.ProvidePlugin({
  $: 'jquery/dist/jquery.js',
  jQuery: 'jquery/dist/jquery.js'
}));

plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js'
  }
));

let SERVICE_URL = JSON.stringify('http://localhost:3000');

if (process.env.NODE_ENV === 'production') {
  SERVICE_URL = JSON.stringify('http://endereco-api.com');
  
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  plugins.push(new babiliPlugin());
  plugins.push(new optimizeCSSAssetsPlugin({
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: {
        removeAll: true
      }
    },
    canPrint: true
  }));
}

plugins.push(new webpack.DefinePlugin({ SERVICE_URL }));

module.exports = {
  entry: {
    app: './app-src/app.js',
    vendor: ['jquery', 'bootstrap', 'reflect-metadata']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=applicat ion/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=applicat ion/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/sv g+xml'
      }
    ]
  },
  plugins,
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}