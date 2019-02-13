const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        print: './src/print.js',
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ]),
        new HtmlWebpackPlugin({
            title: 'Output Management haha'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};