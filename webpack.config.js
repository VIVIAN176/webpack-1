var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js", //入口和出口配置
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "index.js", // string
        filename: '[name].[contenthash].js',
        // filename: 'xxxxxxxxxx.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'webpack.config.js配置里面的title',
        template: 'src/assets/index.html' //以这个文件为模板生成dist中的Html页面
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                //css-loader把css文件读到js里面
                //style-loader把读到的内容插入到style标签里面
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}

