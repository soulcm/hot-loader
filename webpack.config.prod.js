var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

baseWebpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
}));

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'lib/bundle.[hash].js',
        publicPath: 'http://127.0.0.1:8080/'
    }
})
