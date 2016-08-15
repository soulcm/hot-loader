var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['webpack/hot/dev-server','webpack-hot-middleware/client'].concat(baseWebpackConfig.entry[name])
})

baseWebpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('development')
    }
}));

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js',
        publicPath: '/'
    }
})
