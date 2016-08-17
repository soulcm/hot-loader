var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


baseWebpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
}), new ExtractTextPlugin('lib/[name].[hash].css', {allChunks: true}));

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'lib/bundle.[hash].js',
        publicPath: 'http://127.0.0.1:8080/'
    }
})
