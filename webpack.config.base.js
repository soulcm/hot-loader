var path = require('path');
var webpack = require('webpack');
var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'public', 'lib');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(entryPath, 'app.js')
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            components: path.resolve(entryPath, 'components')
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'hot-load',
            template: 'index.html',
            inject: true
        })
    ]
}