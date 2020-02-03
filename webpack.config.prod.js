const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')


module.exports = {
    ...base,
    mode: "production",
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                //css-loader把css文件读到js里面
                //style-loader把读到的内容插入到style标签里面
                // use: ['style-loader', 'css-loader'],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
}

