var path = require('path');
var webpack = require('webpack');
var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'public', 'lib');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: path.join(entryPath, 'app.js'),
        app2: path.join(entryPath, 'app2.js'),
        // vendor: ['react']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        alias: {
            components: path.resolve(entryPath, 'components'),
            images: path.resolve(entryPath, 'images'),
            css: path.resolve(entryPath, 'css')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commons', 'lib/commons.js'),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'hot-load',
            template: 'index.html',
            inject: true,
            filename: 'app.html',
            chunks: ['commons', 'app']
        }),
        new HtmlWebpackPlugin({
            title: 'hot-load',
            template: 'index.html',
            inject: true,
            filename: 'app2.html',
            chunks: ['commons', 'app2']
        }),
    ]
}