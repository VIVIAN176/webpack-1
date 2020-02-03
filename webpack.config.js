var path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js", //入口和出口配置
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "index.js", // string
        filename: '[name].[contenthash].js',
    }
}