const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack.config.js配置里面的title',
            template: 'src/assets/index.html' //以这个文件为模板生成dist中的Html页面
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                //css-loader把css文件读到js里面
                //style-loader把读到的内容插入到style标签里面
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}

