const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js", //入口和出口配置
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "index.js", // string
        filename: '[name].[contenthash].js',
        // filename: 'xxxxxxxxxx.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack.config.js配置里面的title',
            template: 'src/assets/index.html' //以这个文件为模板生成dist中的Html页面
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
        ],
    },
}

