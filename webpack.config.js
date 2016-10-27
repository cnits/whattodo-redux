const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'whattodo.js'
    },

    devServer: {
        contentBase: './build',
        hot: true
        //I do not know, but when I add the following lines, it will be corresponding/equivalent with <hot: true>
        //inline: true
        //port: 8000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'web/index.html',
            inject: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            //loader: 'react-hot!babel'
            loader: 'react-hot-loader/webpack!babel'
        }]
    },
}