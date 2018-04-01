const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})

module.exports = {
    entry: './src/index.js',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        htmlPlugin
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/'),
        publicPath: '/'
    },
    mode: 'development',
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
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(woff|woff2|eot|tff|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(xml)$/,
                use: ['xml-loader']
            }
        ]
    }
};